import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, FlaskConical, Cog, Zap, BookOpen, Globe, ArrowRight, X } from 'lucide-react';
import { timelineMilestones } from '../data/materialQuestData';
import type { TimelineMilestone } from '../types';
import SectionHeader from './ui/SectionHeader';
import Container from './ui/Container';

const iconMap: Record<string, React.ReactNode> = {
  'Yin-Yang':    <Globe className="w-5 h-5" />,
  Atom:          <Atom className="w-5 h-5" />,
  FlaskConical:  <FlaskConical className="w-5 h-5" />,
  Cog:           <Cog className="w-5 h-5" />,
  Zap:           <Zap className="w-5 h-5" />,
  BookOpen:      <BookOpen className="w-5 h-5" />,
};

const stageColors = [
  { bg: 'bg-emerald-100', border: 'border-emerald-300', icon: 'bg-emerald-600', text: 'text-emerald-700', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { bg: 'bg-sky-100',     border: 'border-sky-300',     icon: 'bg-sky-600',     text: 'text-sky-700',     badge: 'bg-sky-50 text-sky-700 border-sky-200' },
  { bg: 'bg-violet-100',  border: 'border-violet-300',  icon: 'bg-violet-600',  text: 'text-violet-700',  badge: 'bg-violet-50 text-violet-700 border-violet-200' },
  { bg: 'bg-orange-100',  border: 'border-orange-300',  icon: 'bg-orange-600',  text: 'text-orange-700',  badge: 'bg-orange-50 text-orange-700 border-orange-200' },
  { bg: 'bg-rose-100',    border: 'border-rose-300',    icon: 'bg-rose-600',    text: 'text-rose-700',    badge: 'bg-rose-50 text-rose-700 border-rose-200' },
  { bg: 'bg-blue-100',    border: 'border-blue-300',    icon: 'bg-blue-900',    text: 'text-blue-900',    badge: 'bg-blue-50 text-blue-900 border-blue-200' },
];

function MilestoneIcon({ name }: { name: string }) {
  return <>{iconMap[name] ?? <Globe className="w-5 h-5" />}</>;
}

export default function TimelineSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected: TimelineMilestone | undefined = timelineMilestones.find(m => m.id === selectedId);

  return (
    <section id="timeline" className="py-24">
      <Container size="xl">
        <SectionHeader
          eyebrow="Lịch sử phát triển"
          title="Hành trình nhận thức về Vật chất"
          subtitle="Từ triết học cổ đại đến định nghĩa khoa học hiện đại — 6 giai đoạn quan trọng trong lịch sử tư tưởng nhân loại"
        />

        {/* Desktop horizontal timeline */}
        <div className="hidden md:block relative mb-8">
          {/* Connector line */}
          <div className="absolute top-10 left-8 right-8 h-0.5 bg-gradient-to-r from-blue-900 via-amber-400 to-blue-900 opacity-30" />

          <div className="grid grid-cols-6 gap-3">
            {timelineMilestones.map((m, i) => {
              const c = stageColors[i];
              const isSelected = selectedId === m.id;
              return (
                <motion.button key={m.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
                  onClick={() => setSelectedId(isSelected ? null : m.id)}
                  aria-pressed={isSelected}
                  className={`relative flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer group
                    ${isSelected ? `${c.bg} ${c.border} shadow-lg scale-105` : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 hover:shadow-md hover:-translate-y-1'}`}>
                  {/* Node dot on line */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 text-white transition-all ${isSelected ? c.icon : 'bg-slate-400 group-hover:bg-slate-600'}`}>
                    <MilestoneIcon name={m.icon} />
                  </div>
                  <p className={`text-xs font-bold mb-1 ${isSelected ? c.text : 'text-slate-700'}`}>{m.title}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${isSelected ? c.badge : 'bg-white text-slate-500 border-slate-200'}`}>
                    {m.period}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden space-y-4 mb-8">
          {timelineMilestones.map((m, i) => {
            const c = stageColors[i];
            const isSelected = selectedId === m.id;
            return (
              <motion.button key={m.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                onClick={() => setSelectedId(isSelected ? null : m.id)}
                aria-pressed={isSelected}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-300
                  ${isSelected ? `${c.bg} ${c.border}` : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 ${isSelected ? c.icon : 'bg-slate-400'}`}>
                  <MilestoneIcon name={m.icon} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-sm ${isSelected ? c.text : 'text-slate-800'}`}>{m.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{m.period}</p>
                </div>
                <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'rotate-90 ' + c.text : 'text-slate-400'}`} />
              </motion.button>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {selected && (() => {
            const idx = timelineMilestones.findIndex(m => m.id === selected.id);
            const c = stageColors[idx];
            return (
              <motion.div key={selected.id}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`rounded-3xl border-2 p-6 md:p-8 relative ${c.bg} ${c.border}`}>
                <button onClick={() => setSelectedId(null)} aria-label="Đóng"
                  className="absolute top-4 right-4 p-2 rounded-xl text-slate-500 hover:bg-white/60 transition-colors">
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 ${c.icon}`}>
                    <MilestoneIcon name={selected.icon} />
                  </div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${c.text}`}>{selected.period}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mt-1">{selected.title}</h3>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-base md:text-lg">{selected.explanation}</p>

                <button onClick={() => document.getElementById('ancient')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all ${c.icon} hover:opacity-90`}>
                  Khám phá chi tiết <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </Container>
    </section>
  );
}
