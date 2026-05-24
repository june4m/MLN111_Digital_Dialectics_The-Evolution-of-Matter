import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Atom, Info } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import Container from './ui/Container';
import RevealOnScroll from './ui/RevealOnScroll';

const QUOTE = 'Cái tiêu tan không phải là vật chất, mà là giới hạn hiểu biết cũ về vật chất.';

const statusMessages = [
  { max: 0,   text: 'Nguyên tử ổn định — quỹ đạo electron rõ ràng',         color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { max: 40,  text: 'Electron tăng tốc — quỹ đạo bắt đầu mờ dần',           color: 'text-blue-700 bg-blue-50 border-blue-200' },
  { max: 70,  text: 'Tốc độ cao — ranh giới vật chất cổ điển tan vỡ',        color: 'text-orange-700 bg-orange-50 border-orange-200' },
  { max: 100, text: 'Khủng hoảng vật lý học! Nhưng vật chất vẫn tồn tại...', color: 'text-rose-700 bg-rose-50 border-rose-200' },
];

function getStatus(speed: number) {
  if (speed === 0) return statusMessages[0];
  if (speed <= 40) return statusMessages[1];
  if (speed <= 70) return statusMessages[2];
  return statusMessages[3];
}

export default function MatterDissolvesSimulation() {
  const [speed, setSpeed] = useState(0);
  const orbitOpacity = 1 - speed / 100;
  const shakeIntensity = speed / 10;
  const animationDuration = 4 - (speed / 100) * 3;
  const shakeX = useShakeX(shakeIntensity);
  const status = getStatus(speed);

  return (
    <section id="simulation" className="py-24 bg-slate-50">
      <Container size="md">
        <SectionHeader
          eyebrow="Mô phỏng tương tác"
          title='Vật chất có thực sự "tiêu tan"?'
          subtitle="Kéo thanh trượt để tăng tốc độ electron và quan sát điều xảy ra với nguyên tử"
        />

        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12">
          {/* Atom visual */}
          <div className="flex justify-center mb-10">
            <motion.div animate={{ x: shakeX }} transition={{ duration: 0.08, ease: 'easeInOut' }}
              className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-full"
                style={{ background: `radial-gradient(circle, rgba(30,58,138,${speed / 400}) 0%, transparent 70%)` }} />

              {/* Ring 1 */}
              <div className="spin-cw absolute rounded-full border-2 border-blue-400"
                style={{ width: 180, height: 180, opacity: orbitOpacity, ['--orbit-duration' as string]: `${animationDuration}s` }}>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-md shadow-blue-400/50"
                  style={{ opacity: orbitOpacity }} />
              </div>

              {/* Ring 2 */}
              <div className="spin-ccw absolute rounded-full border-2 border-amber-400"
                style={{ width: 130, height: 130, opacity: orbitOpacity, transform: 'rotate(60deg)', ['--orbit-duration' as string]: `${animationDuration * 0.75}s` }}>
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 shadow-md shadow-amber-400/50"
                  style={{ opacity: orbitOpacity }} />
              </div>

              {/* Nucleus */}
              <div className="relative z-10 flex items-center justify-center rounded-full bg-blue-900 border-4 border-blue-700 shadow-xl shadow-blue-900/40"
                style={{ width: 60, height: 60, filter: `brightness(${1 + speed / 150})` }}>
                <Atom className="w-6 h-6 text-blue-200" />
              </div>
            </motion.div>
          </div>

          {/* Status badge */}
          <div className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium mb-8 ${status.color}`}>
            <Info className="w-4 h-4 shrink-0" />
            {status.text}
          </div>

          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-3">
              <label htmlFor="electron-speed" className="text-sm font-semibold text-slate-700">
                Tốc độ Electron
              </label>
              <span className="text-lg font-bold text-blue-900">{speed}%</span>
            </div>
            <input id="electron-speed" type="range" min={0} max={100} value={speed}
              onChange={e => setSpeed(Number(e.target.value))}
              className="w-full h-2 accent-blue-900 cursor-pointer rounded-full" />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
              <span>Chậm (ổn định)</span>
              <span>Nhanh (khủng hoảng)</span>
            </div>
          </div>

          {/* Lenin quote */}
          <RevealOnScroll delay={0.1} blur>
            <div className="bg-blue-950 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-lg">"</span>
                </div>
                <div>
                  <p className="text-blue-100 italic text-lg leading-relaxed mb-3">"{QUOTE}"</p>
                  <p className="text-amber-400 font-semibold text-sm">— V.I. Lênin, 1908</p>
                  <p className="text-blue-400 text-xs mt-1">Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}

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
    return () => { running = false; clearTimeout(rafRef.current); };
  }, [intensity]);

  return x;
}
