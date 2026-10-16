/**
 * CRIME - Social Deduction Mystery Game
 * Secure Transfer / Pass Device Screen (Security Gate)
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { Shield, ArrowLeft, Lock, Fingerprint } from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../../utils/soundEngine';

export const PassDeviceScreen: React.FC = () => {
  const { setScreen, activePlayer, state } = useGame();
  const caseData = state.caseData;

  if (!activePlayer) return null;

  const handleOpenSecureFile = () => {
    soundEngine.playTypewriterKey();
    setScreen('secret_briefing');
  };

  const seatFormatted = String(activePlayer.seatNumber || 1).padStart(2, '0');
  const fileNum = caseData?.fileNumber || 'CASE FILE 001';

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-lg mx-auto w-full px-4 py-8 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full space-y-6"
      >
        {/* Security Classification Header */}
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-zinc-900/90 border border-white/[0.08] rounded-full">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-sans text-xs uppercase tracking-wide text-zinc-300 font-semibold">
              إجراء أمني // تسليم الجهاز
            </span>
          </div>
          <p className="text-xs text-zinc-400 pt-0.5">
            {fileNum} &bull; بروتوكول السرية التامة
          </p>
        </div>

        {/* Security Gate Document Container */}
        <div className="border border-white/[0.08] bg-zinc-900/90 p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="space-y-6">
            {/* Center Gate Emblem */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-center text-rose-300 shadow-sm">
              <Fingerprint className="w-8 h-8 text-rose-400 stroke-[1.75]" />
            </div>

            {/* Target Player Clearance Block */}
            <div className="space-y-2 border-y border-white/[0.06] py-4 bg-[#17181d] rounded-xl px-4">
              <span className="text-xs text-rose-400 font-sans font-medium block">
                اللاعب المُرخص له بالاطلاع &bull; المقعد {seatFormatted}
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-wide">
                {activePlayer.displayName}
              </h2>
            </div>

            {/* Instruction Warning */}
            <div className="space-y-1.5 px-2">
              <div className="flex items-center justify-center gap-1.5 text-rose-400 font-sans text-xs font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>إجراء أمني للمحافظة على السرية</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-xs mx-auto">
                سلّم الجهاز لـ <strong className="text-white font-bold">{activePlayer.displayName}</strong> قبل الضغط على الزر. لا تسمح لأي لاعب آخر بالنظر إلى الشاشة.
              </p>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleOpenSecureFile}
                className="w-full py-4 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans font-bold text-sm tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
              >
                <span>أنا {activePlayer.displayName} — فتح ملفي السري</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Security Metadata */}
        <div className="text-xs text-zinc-500 font-sans">
          الملف يحتوي على تفاصيل دورك وسرك الخاص
        </div>
      </motion.div>
    </div>
  );
};
