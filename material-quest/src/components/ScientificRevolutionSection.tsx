import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, X, FlaskConical, Atom, BookOpen } from 'lucide-react';
import { scientificDiscoveries } from '../data/materialQuestData';
import type { ScientificDiscovery } from '../types';

const scientistIcons: Record<string, React.ReactNode> = {
  'Wilhelm Röntgen': <Zap className="w-5 h-5" />,
  'Henri Becquerel': <FlaskConical className="w-5 h-5" />,
  'J.J. Thomson': <Atom className="w-5 h-5" />,
  'Albert Einstein': <BookOpen className="w-5 h-5" />,
};

function getIcon(scientist: string) {
  return scientistIcons[scientist] ?? <Zap className="w-5 h-5" />;
}

export default function ScientificRevolutionSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected: ScientificDiscovery | undefined = scientificDiscoveries.find(
    (d) => d.id === selectedId
  );

  function handleSelect(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  return (
    <section className="py-20 px-4 bg-indigo-950">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Zap className="w-7 h-7 text-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
              Cuộc cách mạng khoa học
            </h2>
          </div>
          <p className="text-slate-400 text-lg">
            Những phát minh làm rung chuyển vật lý học cổ điển (1895–1916)
          </p>
        </motion.div>

        {/* Discovery cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {scientificDiscoveries.map((discovery, index) => {
            const isSelected = selectedId === discovery.id;
            return (
              <motion.button
                key={discovery.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => handleSelect(discovery.id)}
                aria-pressed={isSelected}
                className={`
                  text-left rounded-xl border p-4 transition-all duration-200 cursor-pointer
                  ${isSelected
                    ? 'bg-amber-400/10 border-amber-400 shadow-lg shadow-amber-400/10'
                    : 'bg-slate-900 border-indigo-800 hover:border-amber-400/60 hover:bg-slate-800'
                  }
                `}
              >
                <div className={`flex items-center justify-center w-9 h-9 rounded-full mb-3 ${isSelected ? 'bg-amber-400 text-slate-900' : 'bg-indigo-900 text-indigo-400'}`}>
                  {getIcon(discovery.scientist)}
                </div>
                <p className={`text-2xl font-bold mb-1 ${isSelected ? 'text-amber-400' : 'text-slate-100'}`}>
                  {discovery.year}
                </p>
                <p className={`text-xs font-medium leading-tight ${isSelected ? 'text-amber-300' : 'text-slate-400'}`}>
                  {discovery.scientist}
                </p>
                <p className={`text-xs mt-1 leading-tight ${isSelected ? 'text-slate-200' : 'text-slate-500'}`}>
                  {discovery.discovery}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-indigo-800 rounded-2xl p-6 relative"
            >
              <button
                onClick={() => setSelectedId(null)}
                aria-label="Đóng"
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/10 text-amber-400">
                  {getIcon(selected.scientist)}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {selected.discovery}
                  </h3>
                  <p className="text-sm text-amber-400">
                    {selected.scientist} · {selected.year}
                  </p>
                </div>
              </div>

              <div className="border-t border-indigo-800 pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2">
                  Tác động triết học
                </p>
                <p className="text-slate-300 leading-relaxed">
                  {selected.philosophicalImpact}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
