import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

function fadeInUp(delay: number) {
  return {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  };
}

export default function HeroSection() {
  const handleCTA = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center bg-slate-950">
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.18)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-3xl">
        <motion.div {...fadeInUp(0)} className="mb-4 flex justify-center">
          <BookOpen className="h-12 w-12 text-amber-400" aria-hidden="true" />
        </motion.div>

        <motion.h1
          {...fadeInUp(0.15)}
          className="mb-4 text-5xl font-bold tracking-tight text-slate-100 sm:text-6xl"
        >
          Material Quest
        </motion.h1>

        <motion.p
          {...fadeInUp(0.3)}
          className="mb-3 text-xl font-medium text-indigo-300 sm:text-2xl"
        >
          Khám phá lịch sử phát triển của phạm trù vật chất
        </motion.p>

        <motion.p
          {...fadeInUp(0.45)}
          className="mb-10 text-base text-slate-400 sm:text-lg"
        >
          Hành trình từ triết học cổ đại đến định nghĩa vật chất của V.I. Lênin —
          qua các khám phá khoa học, tư tưởng triết học và hoạt động tương tác.
        </motion.p>

        <motion.div {...fadeInUp(0.6)}>
          <button
            type="button"
            onClick={handleCTA}
            className="rounded-full bg-amber-400 px-8 py-3 text-base font-semibold text-slate-950 transition-colors hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Bắt đầu khám phá
          </button>
        </motion.div>
      </div>
    </section>
  );
}
