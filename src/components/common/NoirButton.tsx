/**
 * CRIME - Social Deduction Mystery Game
 * NoirButton Primitive Component
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { soundEngine } from '../../utils/soundEngine';

export interface NoirButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'danger' | 'gold' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const NoirButton: React.FC<NoirButtonProps> = ({
  variant = 'danger',
  size = 'md',
  icon,
  children,
  onClick,
  disabled,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled) {
      soundEngine.playClick();
      if (onClick) onClick(e);
    }
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-semibold uppercase tracking-wider',
    md: 'px-5 py-2.5 text-sm font-bold uppercase tracking-wider',
    lg: 'px-7 py-3.5 text-base font-extrabold uppercase tracking-widest',
  };

  const variantStyles = {
    danger:
      'bg-red-700 hover:bg-red-600 active:bg-red-800 text-white shadow-lg shadow-red-950/60 border border-red-500/40',
    gold:
      'bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-zinc-950 font-black shadow-lg shadow-amber-950/60 border border-amber-400/50',
    secondary:
      'bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-zinc-100 border border-zinc-700/60 shadow-md',
    outline:
      'bg-transparent hover:bg-zinc-900 active:bg-zinc-800 text-zinc-200 border border-zinc-600',
    ghost:
      'bg-transparent hover:bg-zinc-800/60 active:bg-zinc-800 text-zinc-300 border border-transparent',
  };

  return (
    <motion.button
      whileHover={disabled ? {} : { scale: 1.02, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.98, y: 1 }}
      onClick={handleClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-xl text-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-500/50 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
