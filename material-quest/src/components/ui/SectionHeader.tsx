import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0 } },
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`mb-12 flex flex-col ${alignClass}`}
    >
      {eyebrow && (
        <motion.span
          variants={item}
          className="inline-block mb-3 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 px-3 py-1 rounded-full"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={item}
        className="text-3xl md:text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-900 to-indigo-700 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={item}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
