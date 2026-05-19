import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, HelpCircle, RotateCcw, ChevronRight } from 'lucide-react';
import { quizQuestions } from '../data/materialQuestData';

type AnswerRecord = {
  selected: number;
  correct: boolean;
};

function getResultLevel(percent: number): string {
  if (percent <= 40) return 'Cần ôn lại';
  if (percent <= 70) return 'Hiểu cơ bản';
  return 'Nắm vững nội dung'; // 80–100%
}

function getResultColor(percent: number): string {
  if (percent <= 40) return 'text-rose-400';
  if (percent <= 70) return 'text-amber-400';
  return 'text-emerald-400';
}

export default function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});

  const isComplete = Object.keys(answers).length === quizQuestions.length;
  const question = quizQuestions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  function handleSelect(optionIndex: number) {
    if (currentAnswer) return;
    const correct = optionIndex === question.correctIndex;
    setSelectedAnswer(optionIndex);
    setAnswers(prev => ({ ...prev, [currentQuestion]: { selected: optionIndex, correct } }));
  }

  function handleNext() {
    setSelectedAnswer(null);
    setCurrentQuestion(prev => prev + 1);
  }

  function handleReset() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
  }

  const score = Object.values(answers).filter(a => a.correct).length;
  const scorePercent = Math.round((score / quizQuestions.length) * 100);

  return (
    <section className="py-20 px-4 bg-indigo-950/30">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-4">
            <HelpCircle className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-100 mb-3">Kiểm tra kiến thức</h2>
          <p className="text-slate-400">10 câu hỏi trắc nghiệm về lịch sử phát triển phạm trù vật chất.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isComplete ? (
            /* Results screen */
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-indigo-800 rounded-2xl p-8 text-center"
            >
              <p className="text-slate-400 uppercase tracking-widest text-sm mb-4">Kết quả</p>
              <div className={`text-7xl font-bold mb-2 ${getResultColor(scorePercent)}`}>
                {scorePercent}%
              </div>
              <p className="text-slate-300 text-lg mb-1">
                {score}/{quizQuestions.length} câu đúng
              </p>
              <p className={`text-xl font-semibold mb-8 ${getResultColor(scorePercent)}`}>
                {getResultLevel(scorePercent)}
              </p>

              {/* Per-question review */}
              <div className="space-y-2 mb-8 text-left">
                {quizQuestions.map((q, idx) => {
                  const ans = answers[idx];
                  return (
                    <div
                      key={q.id}
                      className={`flex items-start gap-3 px-4 py-3 rounded-lg ${
                        ans?.correct ? 'bg-emerald-900/30' : 'bg-rose-900/30'
                      }`}
                    >
                      {ans?.correct ? (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      )}
                      <span className="text-slate-300 text-sm">{q.question}</span>
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
            /* Question card */
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Câu {currentQuestion + 1} / {quizQuestions.length}</span>
                  <span>{score} đúng</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-400 rounded-full"
                    animate={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="bg-slate-900 border border-indigo-800 rounded-2xl p-8 mb-4">
                <p className="text-slate-100 text-lg font-medium leading-relaxed mb-6">
                  {question.question}
                </p>

                {/* Options */}
                <div className="space-y-3">
                  {question.options.map((option, idx) => {
                    let btnClass =
                      'w-full text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ';

                    if (!currentAnswer) {
                      btnClass +=
                        selectedAnswer === idx
                          ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                          : 'border-indigo-700 bg-indigo-900/40 text-slate-200 hover:border-amber-400/60 hover:bg-indigo-800/60';
                    } else if (idx === question.correctIndex) {
                      btnClass += 'border-emerald-400 bg-emerald-900/40 text-emerald-300';
                    } else if (idx === currentAnswer.selected && !currentAnswer.correct) {
                      btnClass += 'border-rose-400 bg-rose-900/40 text-rose-300';
                    } else {
                      btnClass += 'border-slate-700 bg-slate-800/40 text-slate-500';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={!!currentAnswer}
                        className={btnClass}
                      >
                        <span className="inline-block w-6 text-slate-500 font-bold mr-2">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback */}
              <AnimatePresence>
                {currentAnswer && (
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
                      {question.explanation}
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
                    {currentQuestion < quizQuestions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
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
