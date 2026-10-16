/**
 * CRIME - Digital Investigation Dossier
 * Case Archive Screen (أرشيف القضايا الجنائية)
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { Season1Cases } from '../Season1Cases';
import { ArrowRight } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export const CaseArchiveScreen: React.FC = () => {
  const { setScreen } = useGame();

  const handleBack = () => {
    soundEngine.playClick();
    setScreen('home');
  };

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full py-6 px-4 space-y-6 text-right font-sans select-none">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>MAIN MENU</span>
        </button>

        <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-zinc-400 font-mono text-[10px] font-bold tracking-widest uppercase">
          SECURE ARCHIVE REPOSITORY
        </span>
      </div>

      {/* Screen Title */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            CRIME // SYSTEM RECORDS
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 bg-zinc-900 border border-zinc-700 px-2 py-0.5">
            SEASON 01
          </span>
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-3xl text-zinc-100">
          CASE ARCHIVE // سجل القضايا
        </h1>
        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
          استعراض ملفات القضايا الجنائية المسجلة داخل النظام ومتابعة سجلات التحقيق السابقة.
        </p>
      </div>

      {/* Dynamic Seasons Component (Archive Mode) */}
      <Season1Cases isArchive={true} />
    </div>
  );
};
