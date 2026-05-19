import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Atom } from 'lucide-react';

const QUOTE =
  'Cái tiêu tan không phải là vật chất, mà là giới hạn hiểu biết cũ về vật chất.';

export default function MatterDissolvesSimulation() {
  const [speed, setSpeed] = useState(0);

  // Derived values from speed (0–100)
  const orbitOpacity = 1 - speed / 100;
  const shakeIntensity = speed / 10; // 0–10 px
  const animationDuration = 4 - (speed / 100) * 3; // 4s → 1s

  // Random shake offset, updated on each render when speed > 0
  const shakeX = useShakeX(shakeIntensity);

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Atom className="w-7 h-7 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Vật chất "tiêu tan"?
            </h2>
          </div>
          <p className="text-slate-400 text-lg">
            Kéo thanh trượt để tăng tốc độ electron và quan sát điều xảy ra
          </p>
        </motion.div>

        {/* Atom visual */}
        <div className="flex flex-col items-center gap-10">
          <motion.div
            animate={{ x: shakeX }}
            transition={{ duration: 0.08, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
            style={{ width: 200, height: 200 }}
          >
            {/* Orbit ring 1 — clockwise */}
            <div
              className="spin-cw absolute rounded-full border border-indigo-400"
              style={{
                width: 160,
                height: 160,
                opacity: orbitOpacity,
                // CSS variable drives animation duration
                ['--orbit-duration' as string]: `${animationDuration}s`,
              }}
            >
              {/* Electron dot on ring 1 */}
              <span
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400"
                style={{ opacity: orbitOpacity }}
              />
            </div>

            {/* Orbit ring 2 — counter-clockwise, tilted */}
            <div
              className="spin-ccw absolute rounded-full border border-cyan-400"
              style={{
                width: 120,
                height: 120,
                opacity: orbitOpacity,
                transform: `rotate(60deg)`,
                ['--orbit-duration' as string]: `${animationDuration * 0.75}s`,
              }}
            >
              {/* Electron dot on ring 2 */}
              <span
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400"
                style={{ opacity: orbitOpacity }}
              />
            </div>

            {/* Nucleus */}
            <div
              className="relative z-10 flex items-center justify-center rounded-full bg-indigo-600 border-2 border-indigo-400 shadow-lg shadow-indigo-500/40"
              style={{
                width: 52,
                height: 52,
                filter: `brightness(${1 + speed / 200})`,
              }}
            >
              <span className="text-xs font-bold text-white select-none">+</span>
            </div>
          </motion.div>

          {/* Speed slider */}
          <div className="w-full max-w-sm">
            <label
              htmlFor="electron-speed"
              className="block text-center text-sm font-medium text-slate-300 mb-3"
            >
              Electron Speed:{' '}
              <span className="text-amber-400 font-bold">{speed}%</span>
            </label>
            <input
              id="electron-speed"
              type="range"
              min={0}
              max={100}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full accent-amber-400 cursor-pointer"
              aria-label="Electron speed"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>Chậm</span>
              <span>Nhanh</span>
            </div>
          </div>

          {/* Status label */}
          <p className="text-sm text-slate-400 text-center">
            {speed === 0 && 'Nguyên tử ổn định — quỹ đạo rõ ràng'}
            {speed > 0 && speed <= 40 && 'Electron tăng tốc — quỹ đạo bắt đầu mờ dần'}
            {speed > 40 && speed <= 70 && 'Tốc độ cao — ranh giới vật chất cổ điển tan vỡ'}
            {speed > 70 && 'Khủng hoảng vật lý học! Nhưng vật chất vẫn tồn tại...'}
          </p>

          {/* Quote — always visible */}
          <motion.blockquote
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-l-4 border-amber-400 pl-5 py-2 max-w-xl text-center"
          >
            <p className="text-slate-200 italic text-lg leading-relaxed">
              "{QUOTE}"
            </p>
            <footer className="mt-2 text-sm text-amber-400 font-medium">
              — V.I. Lênin, 1908
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}

/**
 * Returns a continuously updating random x offset scaled by intensity.
 * Resets to 0 when intensity is 0.
 */
function useShakeX(intensity: number): number {
  const [x, setX] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (intensity === 0) {
      rafRef.current = window.setTimeout(() => setX(0), 0);
      return () => clearTimeout(rafRef.current);
    }

    let running = true;

    function tick() {
      if (!running) return;
      setX((Math.random() * 2 - 1) * intensity);
      rafRef.current = window.setTimeout(tick, 80);
    }

    tick();

    return () => {
      running = false;
      clearTimeout(rafRef.current);
    };
  }, [intensity]);

  return x;
}
