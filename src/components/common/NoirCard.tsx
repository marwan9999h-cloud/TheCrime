/**
 * CRIME - Social Deduction Mystery Game
 * NoirCard Primitive Container Component
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export interface NoirCardProps extends HTMLMotionProps<'div'> {
  accent?: 'none' | 'red' | 'gold' | 'emerald';
  classifiedStamp?: string;
  children: React.ReactNode;
  className?: string;
}

export const NoirCard: React.FC<NoirCardProps> = ({
  accent = 'none',
  classifiedStamp,
  children,
  className = '',
  ...props
}) => {
  const accentStyles = {
    none: 'noir-card',
    red: 'noir-card-red',
    gold: 'noir-card-gold',
    emerald:
      'bg-emerald-950/20 backdrop-blur-md border border-emerald-500/30 shadow-lg shadow-emerald-950/40',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-xl p-5 md:p-6 overflow-hidden ${accentStyles[accent]} ${className}`}
      {...props}
    >
      {classifiedStamp && (
        <div className="absolute top-3 right-3 pointer-events-none z-10">
          <span className="classified-stamp text-xs text-red-500 border-red-600/70 bg-red-950/40 backdrop-blur-xs">
            {classifiedStamp}
          </span>
        </div>
      )}
      {children}
    </motion.div>
  );
};
