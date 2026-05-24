import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerContainer } from './animationVariants';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child (seconds). Default 0.08 */
  staggerDelay?: number;
  /** Initial delay before first child (seconds). Default 0 */
  delayStart?: number;
}

export default function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.08,
  delayStart = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={staggerContainer(staggerDelay, delayStart)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
