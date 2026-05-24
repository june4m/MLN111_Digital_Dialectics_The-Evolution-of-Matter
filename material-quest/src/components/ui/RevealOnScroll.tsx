import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** 'up' (default) | 'left' | 'right' | 'none' */
  direction?: 'up' | 'left' | 'right' | 'none';
  blur?: boolean;
}

function getInitial(direction: RevealOnScrollProps['direction'], blur: boolean) {
  const base = { opacity: 0, filter: blur ? 'blur(6px)' : 'blur(0px)' };
  if (direction === 'up')    return { ...base, y: 28 };
  if (direction === 'left')  return { ...base, x: -28 };
  if (direction === 'right') return { ...base, x: 28 };
  return base;
}

function getAnimate(direction: RevealOnScrollProps['direction']) {
  if (direction === 'up')    return { opacity: 1, y: 0, filter: 'blur(0px)' };
  if (direction === 'left')  return { opacity: 1, x: 0, filter: 'blur(0px)' };
  if (direction === 'right') return { opacity: 1, x: 0, filter: 'blur(0px)' };
  return { opacity: 1, filter: 'blur(0px)' };
}

export default function RevealOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  blur = false,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={getInitial(direction, blur)}
      whileInView={getAnimate(direction)}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
