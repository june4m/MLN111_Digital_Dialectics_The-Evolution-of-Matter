import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
}

export default function RevealOnScroll({ children, className = '', delay = 0, blur = false }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: blur ? 'blur(4px)' : 'none' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
