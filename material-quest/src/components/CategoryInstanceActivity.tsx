import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Layers, ChevronRight, RotateCcw } from 'lucide-react';
import { classifyItems } from '../data/materialQuestData';

type AnswerResult = {
  selected: 'philosophical' | 'concrete';
  correct: boolean;
};

export default function CategoryInstanceActivity() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerResult>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const isComplete = Object.keys(answers).length === classifyItems.length;
  const currentItem = classifyItems[currentIndex];
  const currentAnswer = answers[currentIndex];

  function handleAnswer(selected: 'philosophical' | 'concrete') {
    if (answers[currentIndex]) return; // already answered
    const correct = selected === currentItem.correctCategory;
    setAnswers(prev => ({ ...prev, [currentIndex]: { selected, correct } }));
    setShowFeedback(true);
  }

  function handleNext() {
    setShowFeedback(false);
    setCurrentIndex(prev => prev + 1);
  }

  function handleReset() {
    setCurrentIndex(0);
    setAnswers({});
    setShowFeedback(false);
  }

  const score = Object.values(answers).filter(a => a.correct).length;
  const progressPercent = (Object.keys(answers).length / classifyItems.length) * 100;

  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <Layers className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-3">
            Phân loại: Phạm trù hay Hình thức cụ thể?
          </h2>
          <p className="text-slate-400">
            Phân biệt phạm trù triết học "vật chất" với các hình thức vật chất cụ thể.
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-slate-400 mb-2">
            <span>{Object.keys(answers).length}/{classifyItems.length} câu</span>
            <span>{score} đúng</span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-amber-400 rounded-full"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isComplete ? (
            /* Final summary */
            <motion.div
              key="summary"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-indigo-800 rounded-2xl p-8 text-center"
            >
              <div className="text-6xl font-bold text-amber-400 mb-2">
                {score}/{classifyItems.length}
              </div>
              <p className="text-slate-300 text-lg mb-6">
                {score === classifyItems.length
                  ? 'Xuất sắc! Bạn đã phân biệt chính xác tất cả các mục.'
                  : score >= classifyItems.length / 2
                  ? 'Khá tốt! Hãy xem lại những mục bạn chưa đúng.'
                  : 'Cần ôn lại! Hãy đọc kỹ phần giải thích và thử lại.'}
              </p>

              {/* Per-item review */}
              <div className="space-y-2 mb-8 text-left">
                {classifyItems.map((item, idx) => {
                  const ans = answers[idx];
                  return (
                    <div
                      key={item.id}
                      className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                        ans?.correct ? 'bg-emerald-900/30' : 'bg-rose-900/30'
                      }`}
                    >
                      {ans?.correct ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                      <span className="text-slate-200 text-sm">{item.name}</span>
                      <span className="text-slate-500 text-xs ml-auto">
                        {item.correctCategory === 'philosophical'
                          ? 'Phạm trù triết học'
                          : 'Hình thức vật chất cụ thể'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-slate-950 font-semibold rounded-xl hover:bg-amber-300 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Làm lại
              </button>
            </motion.div>
          ) : (
            /* Activity card */
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Item card */}
              <div className="bg-slate-900 border border-indigo-800 rounded-2xl p-8 mb-4">
                <p className="text-slate-400 text-sm mb-3 uppercase tracking-widest">
                  Mục {currentIndex + 1} / {classifyItems.length}
                </p>
                <h3 className="text-4xl font-bold text-slate-100 text-center py-6">
                  {currentItem.name}
                </h3>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {(['philosophical', 'concrete'] as const).map(cat => {
                    const label =
                      cat === 'philosophical'
                        ? 'Phạm trù triết học'
                        : 'Hình thức vật chất cụ thể';
                    const isSelected = currentAnswer?.selected === cat;
                    const isCorrectChoice = currentItem.correctCategory === cat;

                    let btnClass =
                      'w-full py-4 px-3 rounded-xl font-semibold text-sm transition-all border-2 ';

                    if (!currentAnswer) {
                      btnClass +=
                        'border-indigo-700 bg-indigo-900/40 text-slate-200 hover:border-amber-400 hover:bg-indigo-800/60';
                    } else if (isCorrectChoice) {
                      btnClass += 'border-emerald-400 bg-emerald-900/40 text-emerald-300';
                    } else if (isSelected && !isCorrectChoice) {
                      btnClass += 'border-rose-400 bg-rose-900/40 text-rose-300';
                    } else {
                      btnClass += 'border-slate-700 bg-slate-800/40 text-slate-500';
                    }

                    return (
                      <button
                        key={cat}
                        onClick={() => handleAnswer(cat)}
                        disabled={!!currentAnswer}
                        className={btnClass}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback panel */}
              <AnimatePresence>
                {showFeedback && currentAnswer && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`rounded-xl p-5 mb-4 border ${
                      currentAnswer.correct
                        ? 'bg-emerald-900/30 border-emerald-700'
                        : 'bg-rose-900/30 border-rose-700'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {currentAnswer.correct ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-rose-400" />
                      )}
                      <span
                        className={`font-semibold ${
                          currentAnswer.correct ? 'text-emerald-300' : 'text-rose-300'
                        }`}
                      >
                        {currentAnswer.correct ? 'Chính xác!' : 'Chưa đúng!'}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {currentItem.explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Next button */}
              {currentAnswer && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-end"
                >
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-amber-400 text-slate-950 font-semibold rounded-xl hover:bg-amber-300 transition-colors"
                  >
                    Tiếp theo
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
