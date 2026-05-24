import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { staggerItem } from './animationVariants';

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerItem({ children, className = '' }: StaggerItemProps) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
