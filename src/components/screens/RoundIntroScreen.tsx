/**
 * CRIME - Digital Investigation Dossier
 * Round Intro Screen (Cinematic Investigation Transition)
 */

import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { CinematicLoadingScreen } from '../common/CinematicLoadingScreen';
import { Play, ShieldAlert, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../../utils/soundEngine';

export const RoundIntroScreen: React.FC = () => {
  const { state, startRoundDiscussion } = useGame();
  const [isLoading, setIsLoading] = useState(false);
  const currentRound = state.roundState.currentRound;
  const caseData = state.caseData;

  const roundEvidence = caseData?.evidenceByRound[currentRound] || [];

  const roundTitles: Record<number, { en: string; ar: string; desc: string }> = {
    1: {
      en: 'ROUND ONE',
      ar: 'الجولة الأولى: مسرح الجريمة والحجج البداية',
      desc: 'الكشف عن أدلة مسرح الجريمة الأولية وفحص أقوال المشتبه بهم المبدئية.',
    },
    2: {
      en: 'ROUND TWO',
      ar: 'الجولة الثانية: التسريبات الصوتية والوثائق السرية',
      desc: 'تسريبات الاتصالات والوثائق المالية التي تكشف الدوافع الحقيقية وراء الجريمة.',
    },
    3: {
      en: 'ROUND THREE',
      ar: 'الجولة الثالثة: التحول الأكبر والبصمات القاتلة',
      desc: 'الأدلة الجنائية الحاسمة والنتائج المعملية النهائية التي تدين الجاني.',
    },
  };

  const currentInfo = roundTitles[currentRound] || {
    en: `ROUND 0${currentRound}`,
    ar: `الجولة #${currentRound}`,
    desc: 'مرحلة جديدة من التحقيق والأدلة المكشوفة.',
  };

  const handleEnter = () => {
    soundEngine.playEvidenceSting();
    setIsLoading(true);
  };

  if (isLoading) {
    return (
      <CinematicLoadingScreen
        message={`جاري تجهيز أدلة الجولة 0${currentRound}...`}
        durationSeconds={1.5}
        onComplete={startRoundDiscussion}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto w-full py-8 px-4 text-center select-none font-sans">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full border border-zinc-800 bg-zinc-950/90 rounded-sm p-6 sm:p-8 space-y-6 text-right"
      >
        {/* Top Micro Classification */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          <span>INVESTIGATION // ROUND 0{currentRound}</span>
          <span className="text-red-400 font-bold border border-red-900/60 bg-red-950/30 px-2 py-0.5">
            PHASE 0{currentRound} OF 03
          </span>
        </div>

        {/* Big Cinematic Typography */}
        <div className="space-y-1 text-center py-2">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 block font-bold">
            {currentInfo.en}
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-zinc-100">
            {currentInfo.ar}
          </h2>
          <p className="text-xs text-zinc-400 font-sans max-w-md mx-auto leading-relaxed pt-1">
            {currentInfo.desc}
          </p>
        </div>

        {/* Evidence Released Notice */}
        <div className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-sm space-y-2.5">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5 font-mono text-[10px]">
            <span className="uppercase tracking-widest text-zinc-400 font-semibold">
              EVIDENCE RELEASED // الأدلة المتاحة
            </span>
            <span className="text-red-400 font-bold">{roundEvidence.length} NEW ITEMS</span>
          </div>

          <div className="space-y-2">
            {roundEvidence.map((ev) => (
              <div
                key={ev.id}
                className="flex items-center justify-between p-2.5 bg-zinc-950 border border-zinc-800/80 rounded-sm text-xs font-mono"
              >
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-bold">#{ev.roundNumber}</span>
                  <span className="text-zinc-200 font-sans font-medium">{ev.title.ar}</span>
                </div>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider">{ev.type}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Action */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleEnter}
            className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-mono text-xs font-bold tracking-widest uppercase rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-red-500 fill-current" />
            <span>ENTER INVESTIGATION</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
