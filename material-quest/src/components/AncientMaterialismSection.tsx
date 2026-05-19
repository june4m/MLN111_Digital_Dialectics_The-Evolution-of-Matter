import { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { X } from 'lucide-react';
import { fiveElements, philosopherCards } from '../data/materialQuestData';

// ─── 5.1 Five Elements Sub-section ───────────────────────────────────────────

function FiveElementsSubSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = fiveElements.find((e) => e.id === selectedId);

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-100 mb-2">Ngũ Hành</h3>
      <p className="text-slate-400 text-sm mb-6">
        Triết học Trung Hoa cổ đại — Kim, Mộc, Thủy, Hỏa, Thổ
      </p>

      {/* Element cards */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {fiveElements.map((el) => {
          const isSelected = selectedId === el.id;
          return (
            <motion.button
              key={el.id}
              onClick={() => setSelectedId(isSelected ? null : el.id)}
              aria-pressed={isSelected}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              animate={isSelected ? { scale: 1.08 } : { scale: 1 }}
              className={`
                flex flex-col items-center gap-2 w-24 py-4 rounded-2xl border-2 transition-colors duration-200 cursor-pointer
                ${isSelected
                  ? 'border-amber-400 bg-amber-400/10 ring-2 ring-amber-400/40'
                  : 'border-indigo-700 bg-slate-900 hover:border-indigo-500'
                }
              `}
            >
              <span className={`text-3xl font-bold ${el.color}`}>{el.character}</span>
              <span className="text-sm font-semibold text-slate-200">{el.name}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Explanation panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className="relative bg-indigo-950 border border-indigo-800 rounded-2xl p-5"
          >
            <button
              onClick={() => setSelectedId(null)}
              aria-label="Đóng"
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <span className={`text-4xl font-bold ${selected.color}`}>{selected.character}</span>
              <span className="text-lg font-bold text-slate-100">{selected.name}</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{selected.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── 5.2 Water & Fire Sub-section ────────────────────────────────────────────

function WaterFireSubSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const waterControls = useAnimation();
  const fireControls = useAnimation();

  const selected = philosopherCards.find((p) => p.id === selectedId);

  async function handleWaterClick() {
    const next = selectedId === 'thales' ? null : 'thales';
    setSelectedId(next);
    if (next === 'thales') {
      // Wave oscillation: repeated y movement
      await waterControls.start({
        y: [0, -14, 0, -10, 0, -6, 0],
        transition: { duration: 1.2, ease: 'easeInOut' },
      });
      waterControls.start({ y: 0 });
    }
  }

  async function handleFireClick() {
    const next = selectedId === 'heraclitus' ? null : 'heraclitus';
    setSelectedId(next);
    if (next === 'heraclitus') {
      // Flame flicker: scale + opacity
      await fireControls.start({
        scale: [1, 1.15, 0.95, 1.12, 0.97, 1.08, 1],
        opacity: [1, 0.7, 1, 0.6, 1, 0.8, 1],
        transition: { duration: 1.0, ease: 'easeInOut' },
      });
      fireControls.start({ scale: 1, opacity: 1 });
    }
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-100 mb-2">Nước & Lửa</h3>
      <p className="text-slate-400 text-sm mb-6">
        Thalès và Heraclite — hai nhà triết học Hy Lạp cổ đại
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Water card — Thales */}
        <motion.button
          onClick={handleWaterClick}
          aria-pressed={selectedId === 'thales'}
          animate={waterControls}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`
            relative overflow-hidden rounded-2xl border-2 p-6 text-left cursor-pointer transition-colors duration-200
            ${selectedId === 'thales'
              ? 'border-blue-400 bg-blue-900/30 ring-2 ring-blue-400/30'
              : 'border-indigo-700 bg-slate-900 hover:border-blue-500'
            }
          `}
        >
          <div className="text-5xl mb-3">💧</div>
          <p className="text-lg font-bold text-blue-300">Nước</p>
          <p className="text-sm text-slate-400 mt-1">Thalès</p>
        </motion.button>

        {/* Fire card — Heraclitus */}
        <motion.button
          onClick={handleFireClick}
          aria-pressed={selectedId === 'heraclitus'}
          animate={fireControls}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`
            relative overflow-hidden rounded-2xl border-2 p-6 text-left cursor-pointer transition-colors duration-200
            ${selectedId === 'heraclitus'
              ? 'border-red-400 bg-red-900/30 ring-2 ring-red-400/30'
              : 'border-indigo-700 bg-slate-900 hover:border-red-500'
            }
          `}
        >
          <div className="text-5xl mb-3">🔥</div>
          <p className="text-lg font-bold text-red-300">Lửa</p>
          <p className="text-sm text-slate-400 mt-1">Heraclite</p>
        </motion.button>
      </div>

      {/* Explanation panel */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className="relative bg-indigo-950 border border-indigo-800 rounded-2xl p-5"
          >
            <button
              onClick={() => setSelectedId(null)}
              aria-label="Đóng"
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-base font-bold text-amber-400 mb-2">{selected.name}</p>
            <p className="text-slate-300 text-sm leading-relaxed">{selected.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── 5.3 Atom Simulation Sub-section (Democritus) ────────────────────────────

const DEMOCRITUS_EXPLANATION =
  'Démocrite (khoảng 460–370 TCN) đề xuất thuyết Nguyên tử (Atomos — không thể phân chia): vũ trụ được cấu thành từ những hạt vật chất cực nhỏ, vĩnh cửu, không thể phân chia, vận động trong khoảng không. Các nguyên tử có hình dạng khác nhau (tròn, vuông, tam giác...) và sự kết hợp của chúng tạo ra mọi vật thể. Đây là tư tưởng nguyên tử luận đầu tiên trong lịch sử triết học phương Tây, đặt nền móng cho vật lý học hiện đại hơn 2000 năm sau.';

function AtomSimulationSubSection() {
  const [showDemocritus, setShowDemocritus] = useState(false);
  // Track which particle was last clicked for aria feedback
  const [activeParticle, setActiveParticle] = useState<string | null>(null);

  function handleParticleClick(shape: string) {
    setActiveParticle(shape);
    setShowDemocritus(true);
  }

  return (
    <div>
      <h3 className="text-xl font-bold text-slate-100 mb-2">Thuyết Nguyên Tử</h3>
      <p className="text-slate-400 text-sm mb-8">
        Démocrite — nhấp vào một hạt để khám phá
      </p>

      {/* Atom visual */}
      <div className="flex justify-center mb-8">
        <div className="relative flex items-center justify-center w-40 h-40">
          {/* Nucleus */}
          <div className="absolute z-10 w-10 h-10 rounded-full bg-indigo-500 border-2 border-indigo-300 shadow-lg shadow-indigo-500/50" />

          {/* Orbit ring (decorative) */}
          <div className="absolute w-36 h-36 rounded-full border border-indigo-700/50" />

          {/* Particle 1 — Circle (orbit-slow) */}
          <div className="absolute w-36 h-36 flex items-center justify-center orbit-slow">
            <motion.button
              onClick={() => handleParticleClick('circle')}
              aria-label="Hạt tròn — nhấp để xem giải thích"
              aria-pressed={activeParticle === 'circle' && showDemocritus}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}
              className="w-6 h-6 rounded-full bg-amber-400 border-2 border-amber-300 shadow-md shadow-amber-400/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            />
          </div>

          {/* Particle 2 — Square (orbit-medium) */}
          <div className="absolute w-36 h-36 flex items-center justify-center orbit-medium">
            <motion.button
              onClick={() => handleParticleClick('square')}
              aria-label="Hạt vuông — nhấp để xem giải thích"
              aria-pressed={activeParticle === 'square' && showDemocritus}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}
              className="w-5 h-5 rounded-sm bg-emerald-400 border-2 border-emerald-300 shadow-md shadow-emerald-400/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            />
          </div>

          {/* Particle 3 — Triangle (orbit-fast) */}
          <div className="absolute w-36 h-36 flex items-center justify-center orbit-fast">
            <motion.button
              onClick={() => handleParticleClick('triangle')}
              aria-label="Hạt tam giác — nhấp để xem giải thích"
              aria-pressed={activeParticle === 'triangle' && showDemocritus}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              style={{ position: 'absolute', top: '-4px', left: '50%', transform: 'translateX(-50%)', background: 'transparent', padding: 0, cursor: 'pointer' }}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            >
              {/* CSS triangle via border trick */}
              <span style={{
                display: 'block',
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderBottom: '18px solid #f472b6',
              }} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Explanation card */}
      <AnimatePresence>
        {showDemocritus && (
          <motion.div
            key="democritus-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className="relative bg-indigo-950 border border-indigo-800 rounded-2xl p-5"
          >
            <button
              onClick={() => { setShowDemocritus(false); setActiveParticle(null); }}
              aria-label="Đóng"
              className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="text-base font-bold text-amber-400 mb-2">Démocrite</p>
            <p className="text-slate-300 text-sm leading-relaxed">{DEMOCRITUS_EXPLANATION}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function AncientMaterialismSection() {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Chủ nghĩa duy vật cổ đại
          </h2>
          <p className="text-slate-400 text-lg">
            Những nỗ lực đầu tiên giải thích thế giới từ chính thế giới vật chất
          </p>
        </motion.div>

        {/* Sub-sections stacked */}
        <div className="flex flex-col gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-slate-900/60 border border-indigo-900 rounded-3xl p-6 md:p-8"
          >
            <FiveElementsSubSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-900/60 border border-indigo-900 rounded-3xl p-6 md:p-8"
          >
            <WaterFireSubSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-slate-900/60 border border-indigo-900 rounded-3xl p-6 md:p-8"
          >
            <AtomSimulationSubSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
