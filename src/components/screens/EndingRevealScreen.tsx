/**
 * CRIME - Digital Investigation Dossier
 * Ending Reveal Screen - Final Cinematic Payoff
 * CASE CLOSED Official Judicial Record & Investigation Performance Report
 */

import React, { useEffect, useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { markCaseAsSolved } from '../../utils/completedCases';
import {
  FileText,
  RotateCcw,
  Home,
  CheckCircle2,
  ArrowLeft,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DossierHeader } from '../dossier/DossierComponents';

export const EndingRevealScreen: React.FC = () => {
  const { state, resetGame, setScreen } = useGame();
  const caseData = state.caseData;

  // Track the progressive reveal stages (1 to 6)
  // Stage 1: Case Status
  // Stage 2: The Truth (Motive, Execution, Flaw)
  // Stage 3: The Killer Final Identification
  // Stage 4: Case Reconstruction Timeline
  // Stage 5: Suspect Classified Records / Secrets
  // Stage 6: Performance Report & Archive Actions
  const [currentStage, setCurrentStage] = useState<number>(1);

  if (!caseData) return null;

  const fileNumber = caseData.fileNumber || 'FILE 001';

  const killerPlayer = state.players.find((p) => p.role === 'killer');
  const killerCharacter =
    caseData.allCharacters.find((c) => c.id === killerPlayer?.characterId) ||
    caseData.allCharacters[0];

  const innocentsWon =
    state.gameWinner === 'innocents' ||
    state.players.some((p) => p.isJailed && p.role === 'killer');

  useEffect(() => {
    if (innocentsWon && caseData?.id) {
      markCaseAsSolved(caseData.id);
    }
  }, [innocentsWon, caseData?.id]);

  const advanceStage = () => {
    soundEngine.playGavelStrike();
    setCurrentStage((prev) => Math.min(prev + 1, 6));
  };

  // Performance Rating Logic
  const innocentJailedCount = state.players.filter(
    (p) => p.isJailed && p.role !== 'killer'
  ).length;

  const teamRating = innocentsWon
    ? innocentJailedCount === 0
      ? 'ممتاز جداً (١٠٠%)'
      : 'جيد جداً (٨٥%)'
    : 'ضعيف (فشل التحقيق)';

  const detectiveRank = innocentsWon
    ? innocentJailedCount === 0
      ? 'محقق أسطوري // RANK S'
      : 'محقق خبير // RANK A'
    : 'مساعد محقق // RANK D';

  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full py-6 px-4 space-y-6 text-right font-sans select-none">
      {/* Top Dossier Case Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-[11px] text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-[10px] uppercase font-bold tracking-widest">
            {fileNumber}
          </span>
          <span className="text-zinc-500 uppercase">
            JUDICIAL CLOSURE RECORD // محضر إغلاق القضية
          </span>
        </div>

        <span
          className={`px-2 py-0.5 border text-[10px] font-mono font-bold tracking-widest uppercase ${
            innocentsWon
              ? 'border-emerald-800/80 bg-emerald-950/30 text-emerald-400'
              : 'border-red-800/80 bg-red-950/30 text-red-400'
          }`}
        >
          {innocentsWon ? 'JUSTICE SERVED' : 'KILLER EVADED'}
        </span>
      </div>

      {/* Main Investigation Dossier Container */}
      <div className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-5 sm:p-7 space-y-6">
        <DossierHeader
          caseFileNumber={fileNumber}
          classification="FINAL JUDICIAL DECREE // CLASSIFIED RECORD"
          category="CASE CLOSURE & CRIMINAL VERDICT"
          subjectNumber="CASE CLOSED"
          isRestricted={!innocentsWon}
        />

        {/* ========================================================================= */}
        {/* STAGE 01 — CASE STATUS */}
        {/* ========================================================================= */}
        <section className="border border-zinc-800/90 bg-zinc-900/40 p-5 rounded-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            <span>STAGE 01 // CASE STATUS</span>
            <span className="text-zinc-400 font-bold">{fileNumber}</span>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500 block font-bold">
              CASE CLOSED // إغلاق ملف التحقيق
            </span>

            <h2 className="font-heading font-black text-2xl sm:text-3xl text-zinc-100 leading-snug">
              {innocentsWon
                ? 'انتصار العدالة! تم كشف الجاني وإيداعه السجن'
                : 'هرب الجاني الحقيقي! وأُدين مشتبه به بريء'}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans pt-1">
              {innocentsWon
                ? 'توصلت هيئة التحقيق إلى هوية القاتل الحقيقي بناءً على الأدلة الجنائية والشهادات المسجلة وتم إغلاق ملف القضية بنجاح.'
                : 'تمكن الجاني الحقيقي من تضليل التحقيق وتوجيه الشبهات نحو الأبرياء، مما أدى إلى إفلاته من العقاب وإغلاق الملف كجريمة غامضة.'}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STAGE 02 — THE TRUTH (Motive, How It Was Done, Flaw) */}
        {/* ========================================================================= */}
        {currentStage >= 2 && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-zinc-800/90 bg-zinc-900/30 p-5 rounded-sm space-y-4 font-sans"
          >
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              <span>STAGE 02 // THE TRUTH</span>
              <span className="text-zinc-400 font-bold">CONFIDENTIAL VERDICT</span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
                FACTUAL RECONSTRUCTION
              </span>
              <h3 className="font-heading font-bold text-xl text-zinc-100">
                حقيقة ما جرى في مسرح الجريمة
              </h3>
            </div>

            <div className="space-y-3 pt-1">
              {/* 01 — THE MOTIVE */}
              <div className="border border-zinc-800/80 bg-zinc-950 p-4 rounded-sm space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-red-400 font-bold uppercase tracking-wider">
                    01 — THE MOTIVE // الدافع الحقيقي للجريمة
                  </span>
                  <span className="text-zinc-600">CONFIDENTIAL</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                  {caseData.killerTruth?.trueMotive?.ar || caseData.winningStory?.ar}
                </p>
              </div>

              {/* 02 — HOW IT WAS DONE */}
              <div className="border border-zinc-800/80 bg-zinc-950 p-4 rounded-sm space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-amber-400/90 font-bold uppercase tracking-wider">
                    02 — HOW IT WAS DONE // أسلوب التنفيذ
                  </span>
                  <span className="text-zinc-600">CONFIDENTIAL</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                  {caseData.killerTruth?.howItWasDone?.ar || caseData.winningStory?.ar}
                </p>
              </div>

              {/* 03 — THE FLAW */}
              <div className="border border-zinc-800/80 bg-zinc-950 p-4 rounded-sm space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[10px]">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider">
                    03 — THE FLAW // الثغرة والأدلة الكاشفة
                  </span>
                  <span className="text-zinc-600">CONFIDENTIAL</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                  {caseData.killerTruth?.flawInAlibi?.ar ||
                    'التناقض بين التسجيلات وأقوال الحاضرين أوقع بالقاتل.'}
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* ========================================================================= */}
        {/* STAGE 03 — THE KILLER (Final Identification) */}
        {/* ========================================================================= */}
        {currentStage >= 3 && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-red-900/60 bg-red-950/20 p-5 rounded-sm space-y-3 font-sans"
          >
            <div className="flex items-center justify-between border-b border-red-900/50 pb-2 font-mono text-[10px] text-red-400 uppercase tracking-widest">
              <span>STAGE 03 // FINAL IDENTIFICATION</span>
              <span className="font-bold">THE KILLER</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">
                  PERPETRATOR IDENTIFIED // هوية الجاني
                </span>
                <h3 className="font-heading font-black text-2xl text-zinc-100">
                  {killerCharacter.name.ar}
                </h3>
                <div className="font-mono text-xs text-red-400">
                  المشتبه به الحاضر: {killerPlayer?.displayName || 'اللاعب المحدد'} —{' '}
                  {killerCharacter.title.ar}
                </div>
              </div>

              <div className="px-3 py-1.5 border border-red-800 bg-red-950/60 text-red-300 font-mono text-xs font-bold uppercase tracking-widest shrink-0">
                CRIMINAL CONVICTION
              </div>
            </div>
          </motion.section>
        )}

        {/* ========================================================================= */}
        {/* STAGE 04 — CASE RECONSTRUCTION TIMELINE */}
        {/* ========================================================================= */}
        {currentStage >= 4 && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-zinc-800/90 bg-zinc-900/30 p-5 rounded-sm space-y-4 font-sans"
          >
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              <span>STAGE 04 // CASE RECONSTRUCTION</span>
              <span className="text-zinc-400 font-bold">TIMELINE REPORT</span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
                CHRONOLOGICAL NARRATIVE
              </span>
              <h3 className="font-heading font-bold text-xl text-zinc-100">
                التسلسل الزمني لوقوع الجريمة
              </h3>
            </div>

            <div className="space-y-3 pt-1">
              <div className="border border-zinc-800/80 bg-zinc-950 p-4 rounded-sm space-y-1">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  01 // التخطيط والدافع
                </div>
                <div className="font-heading font-bold text-sm text-zinc-100">
                  دوافع الجريمة وتهيئة مسرح الأحداث
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                  {caseData.killerTruth?.trueMotive?.ar || caseData.winningStory?.ar}
                </p>
              </div>

              <div className="border border-zinc-800/80 bg-zinc-950 p-4 rounded-sm space-y-1">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  02 // تنفيذ الاغتيال
                </div>
                <div className="font-heading font-bold text-sm text-zinc-100">
                  لحظة وقوع الجريمة وإخفاء الأدلة
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                  {caseData.killerTruth?.howItWasDone?.ar || caseData.winningStory?.ar}
                </p>
              </div>

              <div className="border border-zinc-800/80 bg-zinc-950 p-4 rounded-sm space-y-1">
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  03 // الثغرة الجنائية
                </div>
                <div className="font-heading font-bold text-sm text-zinc-100">
                  الأدلة الحاسمة وكشف تناقضات حجة الغياب
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                  {caseData.killerTruth?.flawInAlibi?.ar ||
                    'التناقض بين التسجيلات وأقوال الحاضرين أوقع بالقاتل.'}
                </p>
              </div>
            </div>
          </motion.section>
        )}

        {/* ========================================================================= */}
        {/* STAGE 05 — SUSPECT CLASSIFIED RECORDS (Secrets) */}
        {/* ========================================================================= */}
        {currentStage >= 5 && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-zinc-800/90 bg-zinc-900/30 p-5 rounded-sm space-y-4 font-sans"
          >
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              <span>STAGE 05 // CLASSIFIED RECORDS</span>
              <span className="text-zinc-400 font-bold">SUSPECT DOSSIERS</span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
                INDIVIDUAL SECRETS & MOTIVES
              </span>
              <h3 className="font-heading font-bold text-xl text-zinc-100">
                سجلات وأسرار المشتبه بهم
              </h3>
            </div>

            <div className="space-y-2.5 pt-1">
              {(state.players || []).map((p, index) => {
                const char = caseData.allCharacters.find((c) => c.id === p.characterId);
                const isK = p.role === 'killer';
                const secretText = isK
                  ? char?.secrets?.killerSecret?.ar
                  : char?.secrets?.innocentSecret?.ar;

                return (
                  <div
                    key={p.id}
                    className="border border-zinc-800/80 bg-zinc-950 p-3.5 sm:p-4 rounded-sm space-y-2"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 font-mono text-[10px]">
                      <span className="text-zinc-500 uppercase tracking-wider">
                        SUBJECT 0{index + 1} // {char?.name?.ar || p.displayName}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 border font-bold uppercase tracking-wider ${
                          isK
                            ? 'border-red-900/80 bg-red-950/40 text-red-400'
                            : 'border-zinc-700 bg-zinc-900 text-zinc-400'
                        }`}
                      >
                        {isK ? 'THE KILLER' : 'INNOCENT'}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between gap-2">
                      <div className="font-heading font-bold text-sm text-zinc-100">
                        {p.displayName}{' '}
                        <span className="text-xs font-mono text-zinc-500 font-normal">
                          ({char?.title?.ar || 'مشتبه به'})
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                      {secretText || 'لا توجد ملاحظات إضافية مسجلة.'}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* ========================================================================= */}
        {/* STAGE 06 — INVESTIGATION PERFORMANCE */}
        {/* ========================================================================= */}
        {currentStage >= 6 && (
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="border border-zinc-800/90 bg-zinc-900/30 p-5 rounded-sm space-y-4 font-sans"
          >
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
              <span>STAGE 06 // INVESTIGATION PERFORMANCE</span>
              <span className="text-zinc-400 font-bold">FINAL METRICS</span>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
                AUDIT & EVALUATION
              </span>
              <h3 className="font-heading font-bold text-xl text-zinc-100">
                تقييم الأداء الجنائي للتحقيق
              </h3>
            </div>

            {/* Performance Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono pt-1">
              <div className="border border-zinc-800 bg-zinc-950 p-3 rounded-sm space-y-1 text-center">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                  DURATION // المدة
                </span>
                <span className="font-bold text-xs text-zinc-200 block">
                  ~{caseData.estimatedMinutes} MIN
                </span>
              </div>

              <div className="border border-zinc-800 bg-zinc-950 p-3 rounded-sm space-y-1 text-center">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                  ROUNDS // الجولات
                </span>
                <span className="font-bold text-xs text-zinc-200 block">
                  {state.roundState.currentRound} / {state.roundState.totalRounds}
                </span>
              </div>

              <div className="border border-zinc-800 bg-zinc-950 p-3 rounded-sm space-y-1 text-center">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                  INNOCENTS JAILED
                </span>
                <span className="font-bold text-xs text-red-400 block">
                  {innocentJailedCount} PERSONS
                </span>
              </div>

              <div className="border border-zinc-800 bg-zinc-950 p-3 rounded-sm space-y-1 text-center">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                  ACCUSED STATUS
                </span>
                <span
                  className={`font-bold text-xs block ${
                    innocentsWon ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {innocentsWon ? 'CONVICTED' : 'EVADED'}
                </span>
              </div>

              <div className="border border-zinc-800 bg-zinc-950 p-3 rounded-sm space-y-1 text-center">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                  TEAM SCORE
                </span>
                <span className="font-bold text-xs text-zinc-200 block">
                  {teamRating}
                </span>
              </div>

              <div className="border border-zinc-800 bg-zinc-950 p-3 rounded-sm space-y-1 text-center">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">
                  DETECTIVE RANK
                </span>
                <span className="font-bold text-xs text-emerald-400 block">
                  {detectiveRank}
                </span>
              </div>
            </div>

            {/* Detention Registry Record */}
            <div className="border border-zinc-800 bg-zinc-950 p-3 rounded-sm font-mono text-xs flex flex-wrap items-center justify-between gap-2">
              <span className="text-zinc-500 uppercase tracking-wider text-[10px]">
                DETENTION LOG:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {state.players.filter((p) => p.isJailed).length > 0 ? (
                  state.players
                    .filter((p) => p.isJailed)
                    .map((p) => (
                      <span
                        key={p.id}
                        className="px-2 py-0.5 border border-zinc-800 bg-zinc-900 text-zinc-300 text-[11px]"
                      >
                        {p.displayName} [
                        {p.role === 'killer' ? 'PERPETRATOR' : 'INNOCENT'}]
                      </span>
                    ))
                ) : (
                  <span className="text-zinc-500 italic text-[11px]">
                    NO SUBJECTS DETAINED
                  </span>
                )}
              </div>
            </div>
          </motion.section>
        )}

        {/* ========================================================================= */}
        {/* PROGRESSION ACTION OR FINAL ARCHIVE ACTIONS */}
        {/* ========================================================================= */}
        <div className="pt-2 border-t border-white/[0.08] space-y-3">
          {currentStage < 6 ? (
            <button
              type="button"
              onClick={advanceStage}
              className="w-full py-4 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
            >
              <span>
                {currentStage === 1 && 'المتابعة: كشف حقيقة الجريمة'}
                {currentStage === 2 && 'المتابعة: الكشف النهائي عن الجاني'}
                {currentStage === 3 && 'المتابعة: إعادة بناء الأحداث والخط الزمني'}
                {currentStage === 4 && 'المتابعة: كشف أسرار جميع المشتبه بهم'}
                {currentStage === 5 && 'المتابعة: تقييم أداء فريق التحقيق'}
              </span>
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
          ) : (
            <div className="space-y-3">
              <div className="text-center text-xs text-zinc-400 font-sans py-1">
                تم توثيق القضية وأرشفة التقرير الجنائي بنجاح
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    resetGame();
                    setScreen('home');
                  }}
                  className="flex-1 py-3.5 px-5 bg-zinc-800 hover:bg-zinc-700 border border-white/[0.08] text-zinc-200 hover:text-white font-sans text-xs sm:text-sm font-semibold rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4 text-zinc-400" />
                  <span>القائمة الرئيسية</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playGavelStrike();
                    resetGame();
                    setScreen('case_selection');
                  }}
                  className="flex-1 py-4 px-6 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 border border-rose-500 text-white font-sans text-sm font-bold tracking-wide rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40 active:scale-[0.99]"
                >
                  <RotateCcw className="w-4 h-4 text-white" />
                  <span>بدء تحقيق جديد</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
