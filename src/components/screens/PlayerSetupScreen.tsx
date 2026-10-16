/**
 * CRIME - Digital Investigation Dossier
 * Player Setup Screen (فريق التحقيق والمشتبه بهم)
 */

import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { case001Package } from '../../data/cases/packages/case001';
import { ArrowRight, Check } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import { motion } from 'motion/react';

export const PlayerSetupScreen: React.FC = () => {
  const {
    setScreen,
    selectedCaseForGame,
    playerNames: initialNames,
    setPlayerNamesAndChooseCase,
  } = useGame();

  const caseModel = selectedCaseForGame || case001Package;
  const totalPlayers = 4;
  const defaultPlayerNames = ['لاعب 1', 'لاعب 2', 'لاعب 3', 'لاعب 4'];

  const [names, setNames] = useState<string[]>(
    initialNames.length === totalPlayers && !initialNames.some((n) => n.includes('Detective'))
      ? initialNames
      : defaultPlayerNames
  );

  const handleNameChange = (index: number, val: string) => {
    const updated = [...names];
    updated[index] = val;
    setNames(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (names.some((n) => !n.trim())) return;
    soundEngine.playClick();
    setPlayerNamesAndChooseCase(names.map((n) => n.trim()));
    setScreen('case_briefing');
  };

  const fileNumber = caseModel.fileNumber || 'FILE 001';

  return (
    <div className="flex-1 flex flex-col max-w-xl mx-auto w-full py-4 sm:py-6 px-3 sm:px-4 space-y-5 text-right font-sans select-none">
      {/* Top Security Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setScreen('case_selection');
          }}
          className="flex items-center gap-1.5 text-xs font-sans font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 text-rose-400" />
          <span>تغيير القضية</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="px-2.5 py-0.5 rounded-md border border-white/[0.08] bg-zinc-900/80 font-mono text-[11px] text-zinc-300">
            خطوة 2 من 3
          </span>
          <span className="text-zinc-400 hidden sm:inline">إعداد الفريق</span>
        </div>
      </div>

      {/* Case Identification Document Header */}
      <div className="border border-white/[0.08] bg-zinc-900/80 rounded-xl p-4 sm:p-5 space-y-2 shadow-xs">
        <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/[0.06] pb-2">
          <span className="font-mono text-rose-300 font-bold">{fileNumber}</span>
          <span className="text-zinc-400">ملف القضية المختارة</span>
        </div>

        <div className="flex items-baseline justify-between">
          <h2 className="font-heading font-black text-xl sm:text-2xl text-white">
            {caseModel.title.ar}
          </h2>
          <span className="text-xs text-zinc-400 font-sans">٤ مشتبه بهم</span>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
          {caseModel.tagline.ar}
        </p>
      </div>

      {/* Investigation Team Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border border-white/[0.08] bg-zinc-900/80 rounded-xl p-4 sm:p-5 space-y-4 shadow-xs">
          <div className="border-b border-white/[0.06] pb-2.5">
            <h3 className="font-heading font-black text-lg text-white">
              فريق التحقيق // أسماء اللاعبين
            </h3>
            <p className="text-xs text-zinc-300 font-sans mt-0.5">
              أدخل أسماء اللاعبين الأربعة. سيتم توزيع الأدوار والملفات السرية عليهم تباعاً.
            </p>
          </div>

          <div className="space-y-3">
            {names.map((name, idx) => {
              const playerNum = `اللاعب 0${idx + 1}`;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-[#18191e] border border-white/[0.08] rounded-lg px-3.5 py-3 focus-within:border-rose-500/80 focus-within:ring-1 focus-within:ring-rose-500/30 transition-all"
                >
                  <span className="font-sans text-xs font-bold text-rose-400 shrink-0 w-16">
                    {playerNum}
                  </span>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleNameChange(idx, e.target.value)}
                    placeholder={`اسم ${playerNum}...`}
                    className="flex-1 bg-transparent text-white text-sm font-sans focus:outline-none text-right placeholder:text-zinc-500"
                    required
                  />
                </div>
              );
            })}
          </div>

          <div className="text-xs text-zinc-400 font-sans text-center pt-1">
            يتم تمرير الجهاز سراً بين اللاعبين الأربعة
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
          >
            <span>المتابعة إلى تقرير القضية</span>
            <Check className="w-4 h-4 text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};
