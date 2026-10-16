/**
 * CRIME - Digital Investigation Dossier
 * Character Dossier Screen (Identity & Classified Hold-to-Reveal)
 */

import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import {
  DossierHeader,
  DossierSection,
  HoldToRevealButton,
} from '../dossier/DossierComponents';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  FileText,
  User,
  AlertTriangle,
  Lock,
  Target,
  CheckCircle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { soundEngine } from '../../utils/soundEngine';

export const SecretBriefingScreen: React.FC = () => {
  const { state, activePlayer, nextPassPlayer } = useGame();
  const caseData = state.caseData;

  // Local Presentation State
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [isClassifiedRevealed, setIsClassifiedRevealed] = useState(false);

  // Safety cleanup on active player change or unmount
  useEffect(() => {
    setCurrentPage(1);
    setIsClassifiedRevealed(false);
  }, [activePlayer?.id]);

  if (!activePlayer || !caseData) return null;

  const character =
    caseData.allCharacters.find((c) => c.id === activePlayer.characterId) ||
    caseData.allCharacters[0];

  const isKiller = activePlayer.role === 'killer';
  const seatFormatted = String(activePlayer.seatNumber || 1).padStart(2, '0');
  const fileNum = caseData.fileNumber || 'CASE FILE 001';

  const handleNextPage = () => {
    soundEngine.playTypewriterKey();
    setCurrentPage(2);
  };

  const handlePrevPage = () => {
    soundEngine.playTypewriterKey();
    setCurrentPage(1);
  };

  const handleHoldComplete = () => {
    setIsClassifiedRevealed(true);
  };

  const handleCloseAndPassDevice = () => {
    soundEngine.playTypewriterKey();
    // 1. Immediately wipe local presentation state
    setIsClassifiedRevealed(false);
    setCurrentPage(1);
    // 2. Advance to next player
    nextPassPlayer();
  };

  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full px-3 sm:px-4 py-4 sm:py-6 text-right select-none">
      <AnimatePresence mode="wait">
        {currentPage === 1 ? (
          /* ========================================================================= */
          /* PAGE 01 — IDENTITY (PUBLIC FILE)                                          */
          /* ========================================================================= */
          <motion.div
            key="dossier-page-1"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-4"
          >
            {/* Dossier Document Shell */}
            <div className="border border-white/[0.08] bg-zinc-900/90 p-5 sm:p-7 rounded-2xl shadow-xl space-y-4">
              <DossierHeader
                caseFileNumber={fileNum}
                classification="PUBLIC // PRELIMINARY RECORD"
                category="CHARACTER DOSSIER"
                subjectNumber={`SUBJECT ${seatFormatted}`}
              />

              {/* Subject Identification Box */}
              <div className="border border-white/[0.06] bg-[#17181d] p-4 sm:p-5 rounded-xl space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                  <div>
                    <span className="text-xs text-rose-400 font-sans font-medium block">
                      الدور المُسند إليك &bull; {activePlayer.displayName}
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-white mt-0.5">
                      {character.name.ar}
                    </h2>
                  </div>

                  <div className="self-start sm:self-auto px-3 py-1 rounded-md border border-white/[0.08] bg-zinc-800 text-xs font-sans font-semibold text-zinc-200">
                    {character.title.ar}
                  </div>
                </div>

                {/* Bio Summary */}
                <div className="text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed pt-1">
                  <span className="text-xs text-zinc-400 font-medium block mb-1">
                    النبذة التعريفية عن شخصيتك:
                  </span>
                  {character.bio.ar}
                </div>
              </div>

              {/* Connection To Case */}
              <DossierSection label="علاقة شخصيتك بالحادث / الضحية">
                {character.relationshipToVictim?.ar || 'شخصية حاضرة في محيط مسرح الجريمة وقت وقوع الحادث.'}
              </DossierSection>

              {/* Public Alibi Statement */}
              <DossierSection label="حجة غيابك المعلنة أمام الجميع">
                <p className="italic text-zinc-200 font-sans text-xs sm:text-sm">
                  &ldquo;{character.publicAlibi.ar}&rdquo;
                </p>
              </DossierSection>

              {/* Recorded Motive */}
              <DossierSection label="الدافع والشبهات المرصودة ضدك" variant="accent">
                <p className="text-zinc-200 text-xs sm:text-sm font-sans">
                  {character.motive.ar}
                </p>
              </DossierSection>
            </div>

            {/* Page 1 Navigation Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] px-1">
              <span className="text-xs text-zinc-400 font-sans">
                صفحة 1 من 2 &bull; المعلومات العامة
              </span>

              <button
                type="button"
                onClick={handleNextPage}
                className="py-3 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans font-bold text-sm tracking-wide transition-all duration-150 flex items-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
              >
                <span>المتابعة للملف السري</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* ========================================================================= */
          /* PAGE 02 — CLASSIFIED FILE (RESTRICTED ACCESS)                             */
          /* ========================================================================= */
          <motion.div
            key="dossier-page-2"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-4"
          >
            {/* Classified Document Shell */}
            <div className="border border-white/[0.08] bg-zinc-900/90 p-5 sm:p-7 rounded-2xl shadow-xl space-y-4">
              <DossierHeader
                caseFileNumber={fileNum}
                classification="RESTRICTED // EYES ONLY"
                category="CLASSIFIED ADDENDUM"
                subjectNumber={`SUBJECT ${seatFormatted}`}
                isRestricted={true}
              />

              {!isClassifiedRevealed ? (
                /* ----------------------------------------------------------------- */
                /* HOLD TO REVEAL GATE                                               */
                /* ----------------------------------------------------------------- */
                <div className="py-6 space-y-6 text-center">
                  <div className="space-y-2 max-w-md mx-auto">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-center text-rose-300 shadow-sm">
                      <Lock className="w-6 h-6 text-rose-400 stroke-[1.75]" />
                    </div>

                    <h3 className="font-heading font-black text-2xl text-white tracking-wide">
                      معلومات سرية مشفرة
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      المعلومات التالية تخصك وحدك وبشكل قطعي. تأكد تماماً من عدم وجود أي شخص بجانبك قبل المتابعة.
                    </p>
                  </div>

                  <div className="pt-2">
                    <HoldToRevealButton
                      onHoldComplete={handleHoldComplete}
                      holdDurationMs={1200}
                      label="HOLD TO REVEAL"
                      instruction="اضغط باستمرار لفتح الملف السري"
                    />
                  </div>
                </div>
              ) : (
                /* ----------------------------------------------------------------- */
                /* REVEALED CLASSIFIED CONTENT                                       */
                /* ----------------------------------------------------------------- */
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  {/* Secret Identity Role / Verdict Block */}
                  <div
                    className={`border p-5 rounded-xl space-y-2.5 ${
                      isKiller
                        ? 'border-rose-500/40 bg-rose-950/25 text-rose-100 shadow-sm'
                        : 'border-white/[0.08] bg-[#17181d] text-zinc-100'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                      <span className="text-xs font-semibold text-rose-400">
                        {isKiller ? 'ملف شديد السرية — دور الجاني' : 'ملف سري — سرّك الخاص'}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        {isKiller ? 'STATUS: CULPRIT' : 'STATUS: INNOCENT'}
                      </span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <h4 className="font-heading font-black text-xl text-white">
                        {isKiller
                          ? 'ملفك السري: أنت منفّذ الجريمة 🔪'
                          : 'ملفك السري: سرّك الخفي ليلة الحادث 🔒'}
                      </h4>

                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-sans">
                        {isKiller
                          ? character.secrets?.killerSecret?.ar || ''
                          : character.secrets?.innocentSecret?.ar || ''}
                      </p>

                      {isKiller && (
                        <div className="mt-3 p-3.5 bg-rose-950/40 border border-rose-500/30 rounded-lg text-xs text-rose-200 space-y-1">
                          <span className="block font-bold text-rose-300">
                            توجيهات للجاني:
                          </span>
                          <p className="leading-relaxed">
                            مهمتك تشتيت الشبهات عنك واستغلال الأدلة والشهادات لتوجيه أصابع الاتهام نحو مشتبه به آخر. لا تعترف تحت أي ظرف!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Secret Objective */}
                  {character.secretObjective && (
                    <div className="border border-white/[0.08] bg-[#17181d] p-4 sm:p-5 rounded-xl space-y-2">
                      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                        <span className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                          <Target className="w-4 h-4 text-amber-400" />
                          <span>المهمة السرية المطلوبة منك</span>
                        </span>
                        <span className="text-[11px] font-mono text-zinc-500">OBJECTIVE</span>
                      </div>

                      <div className="pt-1 space-y-1">
                        <h5 className="font-heading font-bold text-sm text-white">
                          {character.secretObjective.title.ar}
                        </h5>
                        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                          {character.secretObjective.description.ar}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Close and Pass Action */}
                  <div className="pt-3 border-t border-white/[0.06] space-y-3">
                    <div className="text-center text-xs text-zinc-400 font-sans">
                      احفظ سرك جيداً ثم اضغط لإغلاق الملف وتسليم الجهاز
                    </div>

                    <button
                      type="button"
                      onClick={handleCloseAndPassDevice}
                      className="w-full py-4 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans font-bold text-sm tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
                    >
                      <span>إغلاق الملف وتمرير الجهاز</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Page 2 Back Navigation (Only before reveal) */}
            {!isClassifiedRevealed && (
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] px-1">
                <button
                  type="button"
                  onClick={handlePrevPage}
                  className="py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-sans text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 border border-white/[0.08] cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>العودة للصفحة السابقة</span>
                </button>

                <span className="text-xs text-zinc-400 font-sans">
                  صفحة 2 من 2 &bull; ملف سري
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
