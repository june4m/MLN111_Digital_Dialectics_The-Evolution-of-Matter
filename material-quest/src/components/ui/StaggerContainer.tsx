import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props { children: ReactNode; className?: string; }

export default function StaggerContainer({ children, className = '' }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
