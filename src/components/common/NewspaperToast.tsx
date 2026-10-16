/**
 * CRIME - Egyptian Social Deduction Mystery Game
 * Vintage Newspaper Toast Notification Component
 */

import React from 'react';
import { Newspaper, X, Sparkles, FileText, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ToastMessage {
  id: string;
  title: string;
  subtitle?: string;
  type?: 'evidence' | 'jail' | 'verdict' | 'alert';
  timestamp?: string;
}

interface NewspaperToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const NewspaperToast: React.FC<NewspaperToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed top-20 left-4 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: -50, rotate: -3, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, rotate: -1, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="pointer-events-auto relative bg-[#f2e8d5] text-zinc-950 p-4 rounded-sm border-2 border-zinc-900 shadow-2xl font-serif text-right overflow-hidden transform hover:rotate-0 transition-transform"
          >
            {/* Vintage Aged Paper Texture Background Lines */}
            <div className="absolute inset-0 bg-repeat opacity-15 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]" />

            {/* Sticky Masking Tape Effect */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-amber-200/60 border border-amber-300/80 rotate-1 shadow-sm" />

            {/* Newspaper Header Strip */}
            <div className="border-b-2 border-zinc-900 pb-1.5 mb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-red-900 font-bold font-mono text-[10px] tracking-wider uppercase">
                <Newspaper className="w-3.5 h-3.5 text-red-800" />
                <span>جريدة الأخبار الجنائية — عاجل</span>
              </div>

              <span className="font-mono text-[9px] text-zinc-700 bg-amber-200/80 px-1.5 py-0.5 border border-zinc-800">
                {toast.timestamp || 'طبعة عاجلة'}
              </span>
            </div>

            {/* Red Classified Stamp */}
            <div className="absolute -bottom-2 -right-2 opacity-20 pointer-events-none select-none rotate-[-12deg]">
              <span className="px-3 py-1 border-4 border-red-800 text-red-800 font-black font-mono text-2xl uppercase tracking-widest">
                دليل جديد
              </span>
            </div>

            {/* Content Body */}
            <div className="relative z-10 space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-heading font-black text-base text-zinc-950 leading-snug">
                  {toast.title}
                </h4>
                <button
                  onClick={() => onDismiss(toast.id)}
                  className="text-zinc-600 hover:text-zinc-950 p-0.5 rounded cursor-pointer"
                  title="إغلاق التنبيه"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {toast.subtitle && (
                <p className="text-xs text-zinc-800 font-sans leading-relaxed pt-0.5">
                  {toast.subtitle}
                </p>
              )}
            </div>

            {/* Footer Newspaper Rule */}
            <div className="mt-2.5 pt-1.5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-700">
              <span className="flex items-center gap-1 text-red-950 font-bold">
                <Sparkles className="w-3 h-3 text-red-700" />
                <span>تم تحديث ملابسات القضية</span>
              </span>
              <span>عدد رقم #١٠٤</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
