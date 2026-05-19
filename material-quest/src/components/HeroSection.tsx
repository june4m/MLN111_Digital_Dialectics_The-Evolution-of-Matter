import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Brain, Zap } from 'lucide-react';

const features = [
  { icon: Clock,   label: 'Timeline tương tác',       desc: '6 giai đoạn lịch sử' },
  { icon: Brain,   label: 'Khái niệm chuyên sâu',     desc: 'Giải thích chi tiết' },
  { icon: Zap,     label: 'Mô phỏng trực quan',       desc: 'Học qua trải nghiệm' },
  { icon: BookOpen,label: 'Quiz củng cố kiến thức',   desc: '10 câu hỏi có giải thích' },
];

const conceptCards = [
  { period: '700–200 TCN', title: 'Chủ nghĩa duy vật cổ đại',       color: 'bg-emerald-50 border-emerald-200 text-emerald-800' },
  { period: 'XVII–XVIII',  title: 'Cơ học cổ điển',                  color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { period: '1895–1916',   title: 'Khủng hoảng khoa học',            color: 'bg-orange-50 border-orange-200 text-orange-800' },
  { period: '1908',        title: 'Định nghĩa của V.I. Lênin',       color: 'bg-purple-50 border-purple-200 text-purple-800' },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: 'easeOut' as const },
  };
}

export default function HeroSection() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 overflow-hidden pt-16">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 pulse-slow" />
              Triết học Mác-Lênin · Phạm trù Vật chất
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hành trình khám phá{' '}
              <span className="text-amber-400">Vật chất</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="text-lg text-blue-200 leading-relaxed mb-8 max-w-lg">
              Từ triết học cổ đại đến định nghĩa kinh điển của V.I. Lênin — khám phá lịch sử phát triển của phạm trù vật chất qua các khám phá khoa học và tư tưởng triết học.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-12">
              <button onClick={() => scrollTo('timeline')}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-400 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                Bắt đầu khám phá
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => scrollTo('quiz')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-white/30 text-white hover:bg-white/10 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Làm quiz ngay
              </button>
            </motion.div>

            {/* Feature pills */}
            <motion.div {...fadeUp(0.4)} className="grid grid-cols-2 gap-3">
              {features.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium leading-tight">{label}</p>
                    <p className="text-blue-300 text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — preview card */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Lộ trình học tập</p>
                  <p className="text-blue-300 text-sm">4 giai đoạn chính</p>
                </div>
              </div>

              <div className="space-y-3">
                {conceptCards.map((card, i) => (
                  <motion.div key={card.title}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
                    <div className={`text-xs font-bold px-2.5 py-1 rounded-lg border ${card.color} shrink-0`}>
                      {card.period}
                    </div>
                    <p className="text-slate-800 font-medium text-sm">{card.title}</p>
                    <ArrowRight className="w-4 h-4 text-slate-400 ml-auto shrink-0" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/20 flex items-center justify-between">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">6</p>
                  <p className="text-blue-300 text-xs">Giai đoạn</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">10</p>
                  <p className="text-blue-300 text-xs">Câu quiz</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-amber-400">∞</p>
                  <p className="text-blue-300 text-xs">Kiến thức</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <p className="text-blue-300 text-xs">Cuộn xuống để khám phá</p>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
