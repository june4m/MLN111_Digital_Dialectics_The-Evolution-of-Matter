import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle, RotateCcw, ChevronRight, Trophy, Star } from 'lucide-react';
import { quizQuestions } from '../data/materialQuestData';
import SectionHeader from './ui/SectionHeader';
import Container from './ui/Container';

type AnswerRecord = { selected: number; correct: boolean };

function getLevel(pct: number) {
  if (pct <= 40) return { label: 'Cần ôn lại',       color: 'text-rose-600',    bg: 'bg-rose-50',    border: 'border-rose-200' };
  if (pct <= 70) return { label: 'Hiểu cơ bản',       color: 'text-amber-600',   bg: 'bg-amber-50',   border: 'border-amber-200' };
  return              { label: 'Nắm vững nội dung',   color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' };
}

export default function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});

  const isComplete = Object.keys(answers).length === quizQuestions.length;
  const q = quizQuestions[current];
  const currentAnswer = answers[current];
  const score = Object.values(answers).filter(a => a.correct).length;
  const pct = Math.round((score / quizQuestions.length) * 100);
  const level = getLevel(pct);

  function handleSelect(idx: number) {
    if (currentAnswer) return;
    setSelected(idx);
    setAnswers(prev => ({ ...prev, [current]: { selected: idx, correct: idx === q.correctIndex } }));
  }

  function handleNext() { setSelected(null); setCurrent(p => p + 1); }
  function handleReset() { setCurrent(0); setSelected(null); setAnswers({}); }

  return (
    <section id="quiz" className="py-24 bg-white">
      <Container size="sm">
        <SectionHeader
          eyebrow="Kiểm tra kiến thức"
          title="Quiz — Phạm trù Vật chất"
          subtitle="10 câu hỏi trắc nghiệm về lịch sử phát triển phạm trù vật chất trong triết học"
        />

        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div key="results"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              {/* Score hero */}
              <div className={`rounded-2xl border-2 p-8 text-center mb-8 ${level.bg} ${level.border}`}>
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Trophy className={`w-8 h-8 ${level.color}`} />
                </div>
                <div className={`text-6xl font-bold mb-2 ${level.color}`}>{pct}%</div>
                <p className="text-slate-600 text-lg mb-1">{score}/{quizQuestions.length} câu đúng</p>
                <p className={`text-xl font-bold ${level.color}`}>{level.label}</p>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8">
                {[1, 2, 3].map(s => (
                  <Star key={s} className={`w-8 h-8 ${pct >= s * 33 ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`} />
                ))}
              </div>

              {/* Review */}
              <div className="space-y-2 mb-8">
                {quizQuestions.map((q, idx) => {
                  const ans = answers[idx];
                  return (
                    <div key={q.id} className={`flex items-start gap-3 px-4 py-3 rounded-xl ${ans?.correct ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                      {ans?.correct
                        ? <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        : <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />}
                      <span className="text-slate-700 text-sm">{q.question}</span>
                    </div>
                  );
                })}
              </div>

              <button onClick={handleReset}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-900 text-white font-semibold rounded-2xl hover:bg-blue-800 transition-colors shadow-md text-base">
                <RotateCcw className="w-5 h-5" />Làm lại từ đầu
              </button>
            </motion.div>
          ) : (
            <motion.div key={current}
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.3, ease: 'easeOut' }}>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm font-medium text-slate-600 mb-3">
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-900" />
                    Câu {current + 1} / {quizQuestions.length}
                  </span>
                  <span className="text-emerald-600">{score} đúng</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-gradient-to-r from-blue-900 to-amber-500 rounded-full"
                    animate={{ width: `${(current / quizQuestions.length) * 100}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }} />
                </div>
              </div>

              {/* Question */}
              <div className="bg-blue-950 rounded-3xl p-6 md:p-8 mb-5">
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">{q.question}</p>
              </div>

              {/* Options */}
              <div className="space-y-3 mb-5">
                {q.options.map((opt, idx) => {
                  let cls = 'w-full text-left px-5 py-4 rounded-2xl border-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ';

                  if (!currentAnswer) {
                    cls += selected === idx
                      ? 'border-blue-900 bg-blue-50 text-blue-900'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50';
                  } else if (idx === q.correctIndex) {
                    cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
                  } else if (idx === currentAnswer.selected && !currentAnswer.correct) {
                    cls += 'border-rose-400 bg-rose-50 text-rose-800';
                  } else {
                    cls += 'border-slate-200 bg-white text-slate-400';
                  }

                  return (
                    <button key={idx} onClick={() => handleSelect(idx)} disabled={!!currentAnswer} className={cls}>
                      <span className="inline-flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0
                          ${!currentAnswer ? 'bg-slate-100 text-slate-500' : idx === q.correctIndex ? 'bg-emerald-500 text-white' : idx === currentAnswer.selected ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {currentAnswer && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`rounded-2xl p-5 mb-5 border-2 ${currentAnswer.correct ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {currentAnswer.correct
                        ? <CheckCircle className="w-5 h-5 text-emerald-500" />
                        : <XCircle className="w-5 h-5 text-rose-500" />}
                      <span className={`font-bold ${currentAnswer.correct ? 'text-emerald-800' : 'text-rose-800'}`}>
                        {currentAnswer.correct ? 'Chính xác!' : 'Chưa đúng!'}
                      </span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{q.explanation}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {currentAnswer && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
                  <button onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-900 text-white font-semibold rounded-2xl hover:bg-blue-800 transition-colors shadow-md">
                    {current < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                    <ChevronRight className="w-4 h-4" />
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
