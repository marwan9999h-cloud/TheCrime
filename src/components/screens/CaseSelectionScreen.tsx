/**
 * CRIME - Digital Investigation Dossier
 * Case Selection Screen (تحقيق جديد — اختيار القضية)
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { Season1Cases } from '../Season1Cases';
import { ArrowRight } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';

export const CaseSelectionScreen: React.FC = () => {
  const { setScreen, selectCaseAndGoToPlayerSetup } = useGame();

  const handleBack = () => {
    soundEngine.playClick();
    setScreen('home');
  };

  return (
    <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full py-6 px-4 space-y-6 text-right font-sans select-none">
      {/* Top Security Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer"
        >
          <ArrowRight className="w-4 h-4" />
          <span>MAIN MENU</span>
        </button>

        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-[10px] uppercase font-bold tracking-widest">
            STEP 01 // 03
          </span>
          <span className="text-zinc-500 hidden sm:inline">SELECT CASE</span>
        </div>
      </div>

      {/* Screen Title & Archive Classification */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            CRIME // CASE ARCHIVE
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 bg-red-950/40 border border-red-900/60 px-2 py-0.5">
            ACTIVE INVESTIGATIONS
          </span>
        </div>

        <h1 className="font-heading font-black text-2xl sm:text-3xl text-zinc-100">
          CASE DOSSIERS // اختيار القضية
        </h1>
        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
          اختر ملف القضية لبدء تشكيل فريق التحقيق والاطلاع على مسرح الجريمة.
        </p>
      </div>

      {/* Dynamic Seasons Component for Game Selection */}
      <Season1Cases
        isArchive={false}
        onSelectCaseForGame={(caseModel) => selectCaseAndGoToPlayerSetup(caseModel)}
      />
    </div>
  );
};
