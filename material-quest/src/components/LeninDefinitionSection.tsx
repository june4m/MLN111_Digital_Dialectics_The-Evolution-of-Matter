import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X, Lightbulb } from 'lucide-react';
import { leninPhrases } from '../data/materialQuestData';
import type { LeninPhrase } from '../types';
import SectionHeader from './ui/SectionHeader';
import Container from './ui/Container';

const definitionParts: { text: string; phraseId?: string }[] = [
  { text: 'Vật chất là một ' },
  { text: 'phạm trù triết học', phraseId: 'pham-tru-triet-hoc' },
  { text: ' dùng để chỉ ' },
  { text: 'thực tại khách quan', phraseId: 'thuc-tai-khach-quan' },
  { text: ' ' },
  { text: 'được đem lại trong cảm giác', phraseId: 'duoc-dem-lai-trong-cam-giac' },
  { text: ', được cảm giác của chúng ta ' },
  { text: 'chép lại, chụp lại, phản ánh', phraseId: 'chep-lai-chup-lai-phan-anh' },
  { text: ' và ' },
  { text: 'tồn tại không lệ thuộc vào cảm giác', phraseId: 'ton-tai-khong-le-thuoc-cam-giac' },
  { text: '.' },
];

export default function LeninDefinitionSection() {
  const [selected, setSelected] = useState<LeninPhrase | null>(null);

  function handleClick(phraseId: string) {
    const phrase = leninPhrases.find(p => p.id === phraseId) ?? null;
    setSelected(prev => prev?.id === phraseId ? null : phrase);
  }

  return (
    <section id="lenin" className="py-24 bg-white">
      <Container size="md">
        <SectionHeader
          eyebrow="Định nghĩa kinh điển"
          title="Định nghĩa Vật chất của V.I. Lênin"
          subtitle="Tác phẩm 'Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán' (1908) — đỉnh cao nhận thức triết học về vật chất"
        />

        {/* Source */}
        <div className="flex items-center gap-3 mb-6 justify-center">
          <BookOpen className="w-5 h-5 text-blue-900" />
          <p className="text-slate-500 text-sm italic">
            V.I. Lênin · <span className="not-italic font-medium text-slate-700">Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán</span> · 1908
          </p>
        </div>

        {/* Definition block */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-blue-950 rounded-3xl p-8 md:p-10 mb-4">
          <p className="text-xl md:text-2xl leading-relaxed text-blue-100 font-medium">
            {definitionParts.map((part, i) =>
              part.phraseId ? (
                <button key={i} onClick={() => handleClick(part.phraseId!)}
                  className={`relative inline font-bold underline decoration-2 underline-offset-4 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded
                    ${selected?.id === part.phraseId
                      ? 'text-amber-300 decoration-amber-300'
                      : 'text-amber-400 decoration-amber-400/60 hover:text-amber-300 hover:decoration-amber-300'}`}
                  aria-pressed={selected?.id === part.phraseId}>
                  {part.text}
                </button>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </p>
        </motion.div>

        <p className="text-center text-sm text-slate-400 mb-8 flex items-center justify-center gap-2">
          <Lightbulb className="w-4 h-4 text-amber-500" />
          Nhấn vào các cụm từ màu vàng để xem giải thích chi tiết
        </p>

        {/* Phrase cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {leninPhrases.map((phrase, i) => (
            <motion.button key={phrase.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}
              onClick={() => setSelected(prev => prev?.id === phrase.id ? null : phrase)}
              aria-pressed={selected?.id === phrase.id}
              className={`text-left p-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${selected?.id === phrase.id
                  ? 'bg-blue-900 border-blue-900 text-white shadow-lg shadow-blue-900/20'
                  : 'bg-slate-50 border-slate-200 hover:border-blue-300 hover:bg-blue-50'}`}>
              <p className={`font-semibold text-sm leading-snug ${selected?.id === phrase.id ? 'text-amber-300' : 'text-blue-900'}`}>
                "{phrase.phrase}"
              </p>
            </motion.button>
          ))}
        </div>

        {/* Explanation panel */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div key={selected.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.35, ease: 'easeOut' }}
              className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 md:p-8 relative">
              <button onClick={() => setSelected(null)} aria-label="Đóng"
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:bg-white/60 transition-colors">
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-amber-800 font-bold text-xl mb-4 pr-8">"{selected.phrase}"</h3>
              <p className="text-slate-700 leading-relaxed mb-5 text-base">{selected.explanation}</p>

              <div className="bg-white border border-amber-100 rounded-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">Ví dụ minh họa</p>
                <p className="text-slate-600 text-sm leading-relaxed">{selected.example}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
