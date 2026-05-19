import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, X } from 'lucide-react';
import { leninPhrases } from '../data/materialQuestData';
import type { LeninPhrase } from '../types';

export default function LeninDefinitionSection() {
  const [selectedPhrase, setSelectedPhrase] = useState<LeninPhrase | null>(null);

  // The full definition split into segments — plain text and clickable phrases
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

  const handlePhraseClick = (phraseId: string) => {
    const phrase = leninPhrases.find((p) => p.id === phraseId) ?? null;
    setSelectedPhrase((prev) => (prev?.id === phraseId ? null : phrase));
  };

  return (
    <section className="py-20 px-4 bg-indigo-950/40">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <BookOpen className="text-amber-400 w-7 h-7 shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
            Định nghĩa Vật chất của V.I. Lênin
          </h2>
        </motion.div>

        {/* Source attribution */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-sm mb-6 italic"
        >
          — V.I. Lênin, <span className="not-italic font-medium text-slate-300">Chủ nghĩa duy vật và chủ nghĩa kinh nghiệm phê phán</span>, 1908
        </motion.p>

        {/* Definition paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-900 border border-indigo-800 rounded-2xl p-6 md:p-8 mb-4"
        >
          <p className="text-lg md:text-xl leading-relaxed text-slate-200">
            {definitionParts.map((part, i) =>
              part.phraseId ? (
                <button
                  key={i}
                  onClick={() => handlePhraseClick(part.phraseId!)}
                  className={`
                    underline decoration-dotted underline-offset-4 decoration-amber-400
                    font-semibold transition-colors duration-200 cursor-pointer
                    ${selectedPhrase?.id === part.phraseId
                      ? 'text-amber-300 decoration-solid'
                      : 'text-amber-400 hover:text-amber-300'}
                  `}
                  aria-pressed={selectedPhrase?.id === part.phraseId}
                >
                  {part.text}
                </button>
              ) : (
                <span key={i}>{part.text}</span>
              )
            )}
          </p>
        </motion.div>

        {/* Hint */}
        <p className="text-slate-500 text-sm mb-8 text-center">
          Nhấn vào các cụm từ được gạch chân để xem giải thích chi tiết
        </p>

        {/* Explanation card */}
        <AnimatePresence mode="wait">
          {selectedPhrase && (
            <motion.div
              key={selectedPhrase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 md:p-8 relative"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPhrase(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Đóng"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Phrase title */}
              <h3 className="text-amber-400 font-bold text-lg md:text-xl mb-4 pr-8">
                "{selectedPhrase.phrase}"
              </h3>

              {/* Explanation */}
              <p className="text-slate-200 leading-relaxed mb-5">
                {selectedPhrase.explanation}
              </p>

              {/* Example */}
              <div className="bg-indigo-950/60 border border-indigo-700/50 rounded-xl p-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {selectedPhrase.example}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
