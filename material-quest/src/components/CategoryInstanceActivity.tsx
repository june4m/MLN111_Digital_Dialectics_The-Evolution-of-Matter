import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Layers, ChevronRight, RotateCcw, Trophy } from 'lucide-react';
import { classifyItems } from '../data/materialQuestData';
import SectionHeader from './ui/SectionHeader';
import Container from './ui/Container';

type AnswerResult = { selected: 'philosophical' | 'concrete'; correct: boolean };

export default function CategoryInstanceActivity() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, AnswerResult>>({});
  const [showFeedback, setShowFeedback] = useState(false);

  const isComplete = Object.keys(answers).length === classifyItems.length;
  const currentItem = classifyItems[currentIndex];
  const currentAnswer = answers[currentIndex];
  const score = Object.values(answers).filter(a => a.correct).length;
  const progressPercent = (Object.keys(answers).length / classifyItems.length) * 100;

  function handleAnswer(selected: 'philosophical' | 'concrete') {
    if (answers[currentIndex]) return;
    setAnswers(prev => ({ ...prev, [currentIndex]: { selected, correct: selected === currentItem.correctCategory } }));
    setShowFeedback(true);
  }

  function handleNext() { setShowFeedback(false); setCurrentIndex(p => p + 1); }
  function handleReset() { setCurrentIndex(0); setAnswers({}); setShowFeedback(false); }

  return (
    <section id="classify" className="py-24 bg-slate-50">
      <Container size="sm">
        <SectionHeader
          eyebrow="Hoạt động phân loại"
          title="Phạm trù hay Hình thức cụ thể?"
          subtitle="Phân biệt phạm trù triết học 'vật chất' với các hình thức vật chất cụ thể trong thực tế"
        />

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-slate-600 mb-3">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-900" />
              {Object.keys(answers).length}/{classifyItems.length} câu
            </span>
            <span className="text-emerald-600">{score} đúng</span>
          </div>
          <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-blue-900 to-amber-500 rounded-full"
              animate={{ width: `${progressPercent}%` }} transition={{ duration: 0.4, ease: 'easeOut' }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div key="summary"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-amber-500" />
              </div>
              <div className="text-5xl font-bold text-blue-900 mb-2">{score}/{classifyItems.length}</div>
              <p className="text-slate-600 text-lg mb-6">
                {score === classifyItems.length ? 'Xuất sắc! Bạn đã phân biệt chính xác tất cả.'
                  : score >= classifyItems.length / 2 ? 'Khá tốt! Hãy xem lại những mục chưa đúng.'
                  : 'Cần ôn lại! Đọc kỹ phần giải thích và thử lại.'}
              </p>

              <div className="space-y-2 mb-8 text-left">
                {classifyItems.map((item, idx) => {
                  const ans = answers[idx];
                  return (
                    <div key={item.id} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${ans?.correct ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                      {ans?.correct
                        ? <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        : <XCircle className="w-4 h-4 text-rose-500 shrink-0" />}
                      <span className="text-slate-700 text-sm font-medium">{item.name}</span>
                      <span className="text-slate-400 text-xs ml-auto">
                        {item.correctCategory === 'philosophical' ? 'Phạm trù triết học' : 'Hình thức cụ thể'}
                      </span>
                    </div>
                  );
                })}
              </div>

              <button onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-md">
                <RotateCcw className="w-4 h-4" />Làm lại
              </button>
            </motion.div>
          ) : (
            <motion.div key={currentIndex}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
              <div className="bg-white border border-slate-200 rounded-3xl p-8 mb-4 shadow-sm">
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                  Mục {currentIndex + 1} / {classifyItems.length}
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-blue-900 text-center py-8">{currentItem.name}</h3>

                <div className="grid grid-cols-2 gap-4">
                  {(['philosophical', 'concrete'] as const).map(cat => {
                    const label = cat === 'philosophical' ? 'Phạm trù triết học' : 'Hình thức vật chất cụ thể';
                    const isSelected = currentAnswer?.selected === cat;
                    const isCorrect = currentItem.correctCategory === cat;

                    let cls = 'w-full py-5 px-4 rounded-2xl font-semibold text-sm transition-all border-2 ';
                    if (!currentAnswer) {
                      cls += 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-900';
                    } else if (isCorrect) {
                      cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
                    } else if (isSelected && !isCorrect) {
                      cls += 'border-rose-400 bg-rose-50 text-rose-800';
                    } else {
                      cls += 'border-slate-200 bg-white text-slate-400';
                    }

                    return (
                      <button key={cat} onClick={() => handleAnswer(cat)} disabled={!!currentAnswer} className={cls}>
                        {isCorrect && currentAnswer && <CheckCircle className="w-4 h-4 inline mr-2 text-emerald-500" />}
                        {isSelected && !isCorrect && currentAnswer && <XCircle className="w-4 h-4 inline mr-2 text-rose-500" />}
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence>
                {showFeedback && currentAnswer && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`rounded-2xl p-5 mb-4 border-2 ${currentAnswer.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {currentAnswer.correct
                        ? <CheckCircle className="w-5 h-5 text-emerald-500" />
                        : <XCircle className="w-5 h-5 text-rose-500" />}
                      <span className={`font-bold ${currentAnswer.correct ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {currentAnswer.correct ? 'Chính xác!' : 'Chưa đúng!'}
                      </span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{currentItem.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {currentAnswer && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
                  <button onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-md">
                    Tiếp theo <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
