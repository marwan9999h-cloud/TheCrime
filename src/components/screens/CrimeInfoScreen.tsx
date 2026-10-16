/**
 * CRIME - Digital Investigation Dossier
 * Crime Info Screen - About The Case System
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { DossierHeader } from '../dossier/DossierComponents';

export const CrimeInfoScreen: React.FC = () => {
  const { setScreen } = useGame();

  const handleBack = () => {
    soundEngine.playClick();
    setScreen('home');
  };

  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full py-6 px-4 space-y-6 text-right font-sans select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-[11px] text-zinc-400">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          <span>RETURN TO ARCHIVE</span>
        </button>

        <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-[10px] font-bold tracking-widest uppercase">
          SYSTEM // SPEC-01
        </span>
      </div>

      {/* Main Container */}
      <div className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-5 sm:p-7 space-y-6">
        <DossierHeader
          caseFileNumber="SYS 001 // SPECIFICATION"
          classification="OFFICIAL SPECIFICATION RECORD"
          category="SYSTEM & ARCHITECTURE DATA"
          subjectNumber="CRIME SYSTEM VER 1.0.0"
          isRestricted={false}
        />

        {/* Title */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
            OFFICIAL CASE SYSTEM SPECIFICATION
          </span>
          <h2 className="font-heading font-black text-2xl text-zinc-100">
            نظام التحقيق الجنائي الرقمي — CRIME
          </h2>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            لعبة تحقيق واستنتاج جنائي اجتماعية تعتمد على التفاعل البشري المباشر ونمط Pass & Play.
          </p>
        </div>

        {/* Core System Specifications */}
        <div className="space-y-3">
          {/* Concept */}
          <div className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 font-mono text-[10px]">
              <span className="text-zinc-400 font-bold uppercase tracking-wider">
                01 // SYSTEM CONCEPT & GAMEPLAY
              </span>
              <span className="text-zinc-600">OVERVIEW</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              جريمة غامضة وقعت، والمشتبه بهم يتواجدون بمسرح الجريمة. أحدهم هو القاتل الحقيقي المترصد، والباقون يحملون أسراراً خطيرة يرغبون في إخفائها. تعتمد اللعبة على جمع الأدلة الرقمية والشرعية، وإتاحة فرص المناقشة والتصويت بين اللاعبين لكشف الجاني ومنعه من الهروب.
            </p>
          </div>

          {/* Architecture / Hardware Setup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans">
            <div className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-1.5">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                02 // HARDWARE INTERACTION
              </div>
              <div className="font-heading font-bold text-sm text-zinc-100">
                نمط اللعب: Pass & Play
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                تُلعب اللعبة بالكامل على جهاز محمول أو لوحي واحد في الجلسة، مع نظام حماية وتشفير لمنع كشف أسرار المشتبه بهم.
              </p>
            </div>

            <div className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-1.5">
              <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                03 // ROSTER CAPACITY
              </div>
              <div className="font-heading font-bold text-sm text-zinc-100">
                السعة: ٤ مشتبه بهم
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                مخصصة لجلسات ٤ لاعبين، يحصل كل لاعب على ملف شخصي كامل، دافع، حجة غياب، وسر خاص.
              </p>
            </div>
          </div>

          {/* Seasons & Content */}
          <div className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-2">
            <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 font-mono text-[10px]">
              <span className="text-zinc-400 font-bold uppercase tracking-wider">
                04 // CASE ARCHIVES & SEASONS
              </span>
              <span className="text-zinc-600">SEASONS</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-sans">
              تضم اللعبة مواسم تحقيقات متجددة. الموسم الأول يركز على <strong>جرائم القتل (Murder Mysteries)</strong> الجنائية مع سيناريوهات واقعية وأدلة متنوعة كالتسجيلات الصوتية، تقارير الطب الشرعي، وسجلات الاتصالات.
            </p>
          </div>
        </div>

        {/* System Ledger & Credits */}
        <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-sm space-y-2 text-center font-mono">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
            OFFICIAL SYSTEM METRICS & CREDITS
          </div>
          <div className="text-xs text-zinc-200 font-bold">
            DESIGNED & DEVELOPED BY MARWAN M. HAMMAD
          </div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
            VERSION 1.0.0 // PRODUCTION RELEASE // DIGITAL DOSSIER ENGINE
          </div>
        </div>

        {/* Back Action */}
        <div className="pt-2 border-t border-zinc-800/80">
          <button
            type="button"
            onClick={handleBack}
            className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-mono text-xs font-bold tracking-widest uppercase rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            <span>RETURN TO MAIN ARCHIVE // العودة للرئيسية</span>
            <ArrowLeft className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
