import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, X, FlaskConical, Atom, BookOpen, ArrowRight } from 'lucide-react';
import { scientificDiscoveries } from '../data/materialQuestData';
import type { ScientificDiscovery } from '../types';
import SectionHeader from './ui/SectionHeader';
import Container from './ui/Container';
import StaggerContainer from './ui/StaggerContainer';
import StaggerItem from './ui/StaggerItem';

const scientistIcons: Record<string, React.ReactNode> = {
  'Wilhelm Röntgen': <Zap className="w-5 h-5" />,
  'Henri Becquerel': <FlaskConical className="w-5 h-5" />,
  'J.J. Thomson':    <Atom className="w-5 h-5" />,
  'Albert Einstein': <BookOpen className="w-5 h-5" />,
};

const cardAccents = [
  'border-l-violet-500 bg-violet-50',
  'border-l-blue-500 bg-blue-50',
  'border-l-cyan-500 bg-cyan-50',
  'border-l-amber-500 bg-amber-50',
  'border-l-blue-900 bg-blue-50',
];

function getIcon(scientist: string) {
  return scientistIcons[scientist] ?? <Zap className="w-5 h-5" />;
}

export default function ScientificRevolutionSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected: ScientificDiscovery | undefined = scientificDiscoveries.find(d => d.id === selectedId);

  return (
    <section id="science" className="py-24">
      <Container size="xl">
        <SectionHeader
          eyebrow="Cuộc cách mạng khoa học"
          title="Những phát minh làm rung chuyển Vật lý học"
          subtitle="Giai đoạn 1895–1916 chứng kiến loạt khám phá đột phá buộc triết học phải xem xét lại toàn bộ khái niệm vật chất"
        />

        {/* Discovery grid */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {scientificDiscoveries.map((d, i) => {
            const isSelected = selectedId === d.id;
            return (
              <StaggerItem key={d.id}>
                <motion.button
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedId(isSelected ? null : d.id)}
                  aria-pressed={isSelected}
                  className={`w-full text-left rounded-2xl border-2 border-l-4 p-5 transition-all duration-300 cursor-pointer
                    ${isSelected
                      ? `${cardAccents[i]} border-opacity-100 shadow-lg`
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 border-l-slate-300 dark:border-l-slate-600 hover:shadow-md hover:border-slate-300'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors
                    ${isSelected ? 'bg-blue-900 text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                    {getIcon(d.scientist)}
                  </div>
                  <p className={`text-3xl font-bold mb-1 ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>{d.year}</p>
                  <p className={`text-xs font-semibold mb-2 ${isSelected ? 'text-blue-700' : 'text-slate-500'}`}>{d.scientist}</p>
                  <p className={`text-sm font-medium leading-snug ${isSelected ? 'text-slate-800' : 'text-slate-600'}`}>{d.discovery}</p>
                  <div className={`mt-3 flex items-center gap-1 text-xs font-medium ${isSelected ? 'text-blue-600' : 'text-slate-400'}`}>
                    Xem chi tiết <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div key={selected.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-blue-950 rounded-3xl p-6 md:p-8 relative text-white">
              <button onClick={() => setSelectedId(null)} aria-label="Đóng"
                className="absolute top-4 right-4 p-2 rounded-xl text-blue-300 hover:bg-white/10 transition-colors">
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white shrink-0">
                  {getIcon(selected.scientist)}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-3xl font-bold text-amber-400">{selected.year}</span>
                    <span className="text-blue-300 text-sm font-medium">{selected.scientist}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{selected.discovery}</h3>
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Tác động triết học</p>
                <p className="text-blue-100 leading-relaxed text-base">{selected.philosophicalImpact}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Context note */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <p className="font-semibold text-amber-900 mb-1">Khủng hoảng vật lý học</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Những phát minh này đã làm lung lay nền tảng của chủ nghĩa duy vật cơ học. Chủ nghĩa duy tâm lợi dụng sự "tan rã" của nguyên tử để tuyên bố "vật chất tiêu tan" — và đây chính là bối cảnh Lênin viết tác phẩm năm 1908.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
