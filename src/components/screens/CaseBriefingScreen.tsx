/**
 * CRIME - Digital Investigation Dossier
 * Case Briefing Screen (Opening Investigation Report)
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { case001Package } from '../../data/cases/packages/case001';
import { getDifficultyBadge } from '../Season1Cases';
import { soundEngine } from '../../utils/soundEngine';
import { ArrowRight, Play, ShieldAlert, Users, Clock } from 'lucide-react';
import { DossierHeader } from '../dossier/DossierComponents';

export const CaseBriefingScreen: React.FC = () => {
  const {
    setScreen,
    selectedCaseForGame,
    playerNames,
    startInvestigation,
  } = useGame();

  const caseModel = selectedCaseForGame || case001Package;
  const diffInfo = getDifficultyBadge(caseModel.difficulty);
  const fileNumber = caseModel.fileNumber || 'FILE 001';

  const handleStart = () => {
    soundEngine.playEvidenceSting();
    startInvestigation(caseModel);
  };

  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full py-4 sm:py-6 px-3 sm:px-4 space-y-5 text-right font-sans select-none">
      {/* Top Security Header Navigation */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setScreen('player_setup');
          }}
          className="flex items-center gap-1.5 text-xs font-sans font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowRight className="w-4 h-4 text-rose-400" />
          <span>تعديل الفريق</span>
        </button>

        <span className="px-2.5 py-0.5 rounded-md border border-white/[0.08] bg-zinc-900/80 text-zinc-300 font-sans text-xs">
          تقرير بداية التحقيق
        </span>
      </div>

      {/* Main Investigation Report Document */}
      <div className="border border-white/[0.08] bg-zinc-900/80 rounded-2xl p-5 sm:p-6 space-y-5 shadow-xs">
        {/* Dossier Header */}
        <DossierHeader
          caseFileNumber={fileNumber}
          classification="CONFIDENTIAL // BRIEFING"
          category="INCIDENT BRIEFING REPORT"
          subjectNumber="SEASON 01"
          isRestricted={false}
        />

        {/* Case Title & Tagline */}
        <div className="space-y-1.5">
          <span className="text-xs text-rose-400 font-sans font-medium block">
            ملخص الجريمة
          </span>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-white">
            {caseModel.title.ar}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 font-sans italic border-r-2 border-rose-500/60 pr-3 leading-relaxed pt-1">
            "{caseModel.tagline.ar}"
          </p>
        </div>

        {/* Key Metrics / Investigation Parameters */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs border-y border-white/[0.06] py-3 font-sans">
          <div className="space-y-0.5">
            <span className="text-[11px] text-zinc-400 block">الصعوبة</span>
            <span className="text-white font-bold block">{diffInfo.label}</span>
          </div>

          <div className="space-y-0.5 border-r border-white/[0.06]">
            <span className="text-[11px] text-zinc-400 block">الوقت التقديري</span>
            <span className="text-white font-bold block">~{caseModel.estimatedMinutes} دقيقة</span>
          </div>

          <div className="space-y-0.5 border-r border-white/[0.06]">
            <span className="text-[11px] text-zinc-400 block">عدد اللاعبين</span>
            <span className="text-white font-bold block">{playerNames.length} مشتبه بهم</span>
          </div>
        </div>

        {/* Case Summary / Synopsis */}
        <div className="border border-white/[0.06] bg-[#17181d] p-4 sm:p-5 rounded-xl space-y-2">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
            <span className="text-xs font-semibold text-rose-300">
              تفاصيل الحادث // ملخص الواقعة
            </span>
            <span className="text-[11px] font-mono text-zinc-500">INCIDENT-LOG</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
            {caseModel.synopsis.ar}
          </p>
        </div>

        {/* Victim Profile */}
        <div className="border border-white/[0.06] bg-[#17181d] p-4 rounded-xl space-y-2">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
            <span className="text-xs font-semibold text-rose-300">
              ملف الضحية
            </span>
            <span className="text-[11px] font-mono text-zinc-500">VICTIM</span>
          </div>
          <div className="text-sm font-bold text-white">
            {caseModel.victim.name.ar} — <span className="text-zinc-400 font-normal text-xs">{caseModel.victim.title.ar}</span>
          </div>
          <p className="text-xs text-zinc-300 font-sans leading-relaxed pt-1">
            {caseModel.victim.background.ar}
          </p>
        </div>

        {/* Assigned Players Summary */}
        <div className="border border-white/[0.06] bg-[#17181d] p-4 rounded-xl space-y-2.5">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-1.5">
            <span className="text-xs font-semibold text-zinc-300">
              المشتبه بهم الحاضرون
            </span>
            <span className="text-xs text-emerald-400 font-medium">جاهزون</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-sans">
            {playerNames.map((name, idx) => (
              <div key={idx} className="bg-zinc-900/90 border border-white/[0.08] p-2.5 rounded-lg space-y-0.5">
                <span className="text-[11px] text-rose-400 font-mono block">اللاعب 0{idx + 1}</span>
                <span className="font-bold text-white truncate block">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Launch Investigation Action Section */}
        <div className="pt-2 space-y-2">
          <button
            type="button"
            onClick={handleStart}
            className="w-full py-4 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>بدء التحقيق وتوزيع الملفات السرية</span>
          </button>
        </div>
      </div>
    </div>
  );
};
