/**
 * CRIME - Egyptian Social Deduction Mystery Game
 * Cinematic Noir Loading Screen Component
 */

import React, { useEffect, useState } from 'react';
import { ShieldAlert, Film, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../../utils/soundEngine';

interface CinematicLoadingScreenProps {
  onComplete?: () => void;
  message?: string;
  durationSeconds?: number;
}

export const CinematicLoadingScreen: React.FC<CinematicLoadingScreenProps> = ({
  onComplete,
  message = 'جاري تجهيز ملف القضية...',
  durationSeconds = 2.5,
}) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    soundEngine.playClick();
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, durationSeconds * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [durationSeconds, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
      {/* Background Film Flicker Effect */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-red-950/20 blur-3xl animate-pulse pointer-events-none" />

      {/* Main Animated Noir Icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
        className="relative mb-6"
      >
        <div className="w-24 h-24 rounded-2xl bg-zinc-900/90 border-2 border-red-700/80 flex items-center justify-center text-red-500 shadow-2xl shadow-red-950/90">
          <ShieldAlert className="w-12 h-12 text-red-500 animate-pulse" />
        </div>
        <div className="absolute -bottom-2 -right-2 p-2 bg-amber-950 border border-amber-600 rounded-lg text-amber-400">
          <Search className="w-4 h-4 animate-spin" />
        </div>
      </motion.div>

      {/* Primary Cinematic Text */}
      <motion.div
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-3 max-w-md"
      >
        <span className="px-3 py-1 rounded-full bg-red-950/80 text-red-400 border border-red-800 text-[11px] font-mono font-bold tracking-widest uppercase inline-flex items-center gap-1.5">
          <Film className="w-3.5 h-3.5" />
          <span>ملف جنائي مغلق #٠٠١</span>
        </span>

        <h2 className="font-heading font-black text-2xl sm:text-3xl text-zinc-100 tracking-wide">
          {message}
          <span className="text-amber-400 font-mono">{dots}</span>
        </h2>

        <p className="text-xs text-zinc-400 font-serif italic max-w-xs mx-auto leading-relaxed">
          "في مسرح الجريمة، كل قطرة حبر وكل شهادة زور تُخفي سر وريث مقبل..."
        </p>
      </motion.div>

      {/* Progress Bar Line */}
      <div className="w-64 h-1.5 bg-zinc-900 border border-zinc-800 rounded-full mt-8 overflow-hidden relative">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: durationSeconds, ease: 'easeInOut' }}
          className="h-full bg-gradient-to-r from-red-900 via-red-600 to-amber-500 rounded-full shadow-lg shadow-red-500/50"
        />
      </div>
    </div>
  );
};
