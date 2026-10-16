/**
 * CRIME - Digital Investigation Dossier Components
 * Official Document & Confidential Investigation Presentation Elements
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

interface DossierHeaderProps {
  caseFileNumber: string;
  classification?: string;
  category?: string;
  subjectNumber?: string;
  isRestricted?: boolean;
}

export const DossierHeader: React.FC<DossierHeaderProps> = ({
  caseFileNumber,
  classification = 'CONFIDENTIAL // EYES ONLY',
  category = 'SUBJECT INVESTIGATION FILE',
  subjectNumber,
  isRestricted = false,
}) => {
  return (
    <div className="border-b border-white/[0.08] pb-3 mb-4 space-y-2 select-none">
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span className="flex items-center gap-2 font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="font-semibold text-rose-300">{caseFileNumber}</span>
        </span>
        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-sans font-medium ${
            isRestricted
              ? 'border border-rose-500/40 bg-rose-950/40 text-rose-300'
              : 'border border-white/[0.08] bg-zinc-900/80 text-zinc-300'
          }`}
        >
          {classification}
        </span>
      </div>

      <div className="flex items-baseline justify-between pt-1">
        <div>
          <span className="text-xs text-zinc-400 font-sans block">
            {category}
          </span>
        </div>
        {subjectNumber && (
          <span className="font-mono text-xs text-rose-300/90 font-bold tracking-wide">
            {subjectNumber}
          </span>
        )}
      </div>
    </div>
  );
};

interface DossierSectionProps {
  label: string;
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'danger';
  className?: string;
}

export const DossierSection: React.FC<DossierSectionProps> = ({
  label,
  children,
  variant = 'default',
  className = '',
}) => {
  const borderClass =
    variant === 'danger'
      ? 'border-rose-500/30 bg-rose-950/20'
      : variant === 'accent'
      ? 'border-amber-500/30 bg-amber-950/20'
      : 'border-white/[0.08] bg-zinc-900/60';

  const labelClass =
    variant === 'danger'
      ? 'text-rose-400'
      : variant === 'accent'
      ? 'text-amber-300'
      : 'text-zinc-300';

  return (
    <div className={`border ${borderClass} p-4 rounded-xl space-y-2 ${className}`}>
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5 mb-2">
        <span className={`text-xs font-semibold ${labelClass}`}>
          {label}
        </span>
        <span className="text-[11px] font-mono text-zinc-500">DOSSIER</span>
      </div>
      <div className="text-zinc-200 text-xs sm:text-sm leading-relaxed">{children}</div>
    </div>
  );
};

interface HoldToRevealButtonProps {
  onHoldComplete: () => void;
  holdDurationMs?: number;
  label?: string;
  instruction?: string;
}

export const HoldToRevealButton: React.FC<HoldToRevealButtonProps> = ({
  onHoldComplete,
  holdDurationMs = 1300,
  label = 'HOLD TO REVEAL',
  instruction = 'اضغط باستمرار لفتح الملف السري',
}) => {
  const [progress, setProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const requestRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const handleComplete = useCallback(() => {
    setIsComplete(true);
    setIsHolding(false);
    setProgress(1);
    soundEngine.playEvidenceSting();
    setTimeout(() => {
      onHoldComplete();
    }, 250);
  }, [onHoldComplete]);

  const step = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const currentProgress = Math.min(elapsed / holdDurationMs, 1);
      setProgress(currentProgress);

      if (currentProgress >= 1) {
        handleComplete();
      } else {
        requestRef.current = requestAnimationFrame(step);
      }
    },
    [holdDurationMs, handleComplete]
  );

  const startHold = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (isComplete) return;
      setIsHolding(true);
      soundEngine.playTypewriterKey();
      startTimeRef.current = null;
      requestRef.current = requestAnimationFrame(step);
    },
    [isComplete, step]
  );

  const cancelHold = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (isComplete) return;
      setIsHolding(false);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
        requestRef.current = null;
      }
      startTimeRef.current = null;
      setProgress(0);
    },
    [isComplete]
  );

  useEffect(() => {
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const percentage = Math.round(progress * 100);

  return (
    <div className="flex flex-col items-center space-y-3 w-full select-none py-2">
      <div
        onPointerDown={startHold}
        onPointerUp={cancelHold}
        onPointerLeave={cancelHold}
        onPointerCancel={cancelHold}
        role="button"
        tabIndex={0}
        aria-label={label}
        className={`relative w-full max-w-sm h-16 sm:h-18 rounded-xl border cursor-pointer overflow-hidden transition-all duration-200 flex items-center justify-center touch-none select-none shadow-sm ${
          isHolding
            ? 'border-rose-500 bg-rose-950/20 scale-[0.99] shadow-lg shadow-rose-950/30'
            : isComplete
            ? 'border-emerald-500 bg-emerald-950/20'
            : 'border-white/[0.12] bg-zinc-900/90 hover:border-zinc-500 active:border-rose-500'
        }`}
      >
        {/* Progress Fill Layer */}
        <div
          className={`absolute inset-y-0 right-0 transition-all duration-75 ease-linear pointer-events-none ${
            isComplete
              ? 'bg-emerald-950/60 border-l border-emerald-400 w-full'
              : isHolding
              ? 'bg-rose-950/50 border-l border-rose-400'
              : 'bg-transparent w-0'
          }`}
          style={{ width: `${percentage}%` }}
        />

        {/* Top/Bottom Micro Lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-600/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-3 px-4 text-center">
          <div className="shrink-0">
            {isComplete ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-pulse" />
            ) : isHolding ? (
              <ShieldAlert className="w-5 h-5 text-rose-400 animate-pulse" />
            ) : (
              <Lock className="w-5 h-5 text-rose-400" />
            )}
          </div>

          <div className="text-right">
            <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white uppercase flex items-center gap-2">
              <span>{isComplete ? 'ACCESS GRANTED' : isHolding ? 'VERIFYING ACCESS...' : label}</span>
              {isHolding && !isComplete && (
                <span className="text-xs text-rose-300 font-mono">[{percentage}%]</span>
              )}
            </div>
            <p className="text-xs text-zinc-300 font-sans tracking-normal">
              {isComplete ? 'تم التحقق من الصلاحية' : instruction}
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Security Footnote */}
      <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-center">
        BIOMETRIC / TOUCH AUTH REQUIRED // RELEASE TO ABORT
      </span>
    </div>
  );
};
