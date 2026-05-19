import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Atom,
  FlaskConical,
  Cog,
  Zap,
  BookOpen,
  Globe,
  X,
} from 'lucide-react';
import { timelineMilestones } from '../data/materialQuestData';
import type { TimelineMilestone } from '../types';

// Map icon string names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  'Yin-Yang': <Globe className="w-6 h-6" />,
  Atom: <Atom className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  Cog: <Cog className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
};

function MilestoneIcon({ name }: { name: string }) {
  return <>{iconMap[name] ?? <Globe className="w-6 h-6" />}</>;
}

export default function TimelineSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedMilestone: TimelineMilestone | undefined =
    timelineMilestones.find((m) => m.id === selectedId);

  function handleSelect(id: string) {
    setSelectedId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="timeline" className="py-20 px-4 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
            Lịch sử phát triển
          </h2>
          <p className="text-slate-400 text-lg">
            Hành trình nhận thức về phạm trù vật chất qua các thời đại
          </p>
        </motion.div>

        {/* Timeline nodes */}
        <div className="relative">
          {/* Vertical connector line (mobile) */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-indigo-800 md:hidden" />

          {/* Horizontal connector line (desktop) */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-indigo-800" />

          <ol className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-2">
            {timelineMilestones.map((milestone, index) => {
              const isSelected = selectedId === milestone.id;
              return (
                <motion.li
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative flex md:flex-col md:items-center md:flex-1"
                >
                  {/* Node button */}
                  <button
                    onClick={() => handleSelect(milestone.id)}
                    aria-pressed={isSelected}
                    aria-label={milestone.title}
                    className={`
                      relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 shrink-0
                      ${isSelected
                        ? 'bg-amber-400 border-amber-400 text-slate-900 scale-110 shadow-lg shadow-amber-400/30'
                        : 'bg-slate-900 border-indigo-600 text-indigo-400 hover:border-amber-400 hover:text-amber-400'
                      }
                    `}
                  >
                    <MilestoneIcon name={milestone.icon} />
                  </button>

                  {/* Label */}
                  <div className="ml-4 md:ml-0 md:mt-3 md:text-center md:px-1">
                    <p className={`text-sm font-semibold leading-tight ${isSelected ? 'text-amber-400' : 'text-slate-300'}`}>
                      {milestone.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{milestone.period}</p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Detail card */}
        <AnimatePresence>
          {selectedMilestone && (
            <motion.div
              key={selectedMilestone.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3 }}
              className="mt-10 bg-indigo-950 border border-indigo-800 rounded-2xl p-6 relative"
            >
              <button
                onClick={() => setSelectedId(null)}
                aria-label="Đóng"
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-400/10 text-amber-400">
                  <MilestoneIcon name={selectedMilestone.icon} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {selectedMilestone.title}
                  </h3>
                  <p className="text-sm text-amber-400">{selectedMilestone.period}</p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed">
                {selectedMilestone.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
