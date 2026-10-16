/**
 * CRIME - Digital Investigation Dossier
 * Official Vote Report & Judicial Status Screen
 */

import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import {
  Gavel,
  Lock,
  ArrowLeft,
  MessageSquare,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DossierHeader } from '../dossier/DossierComponents';

export const VoteResultsScreen: React.FC = () => {
  const { state, setScreen, advanceToNextRound, revealFinalVerdict, settings } = useGame();
  const roundState = state.roundState;
  const caseData = state.caseData;
  const currentRound = roundState.currentRound;
  const fileNumber = caseData?.fileNumber || 'FILE 001';

  // Multi-stage reveal state (1: Vote Record, 2: Majority Accusation, 3: Judicial Status)
  const [revealStage, setRevealStage] = useState<1 | 2 | 3>(1);

  const votes = roundState.votesInCurrentRound;

  // Calculate vote tallies using existing logic
  const voteCounts: Record<string, number> = {};
  votes.forEach((v) => {
    voteCounts[v.suspectPlayerId] = (voteCounts[v.suspectPlayerId] || 0) + 1;
  });

  const jailedId = roundState.jailedPlayerThisRoundId;
  const jailedPlayer = state.players.find((p) => p.id === jailedId);
  const jailedCharacter = jailedPlayer
    ? caseData?.allCharacters.find((c) => c.id === jailedPlayer.characterId)
    : null;

  const isKillerJailed = jailedPlayer && jailedPlayer.role === 'killer';
  const isFinalRound = currentRound >= roundState.totalRounds;

  const totalVotesCount = votes.length || 1;

  const handleAdvanceStage = () => {
    soundEngine.playGavelStrike();
    if (revealStage === 1) {
      setRevealStage(2);
    } else if (revealStage === 2) {
      setRevealStage(3);
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-xl mx-auto w-full py-6 px-4 space-y-5 text-right font-sans select-none">
      {/* Top Security Header Navigation */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-[10px] uppercase font-bold tracking-widest">
            {fileNumber}
          </span>
          <span className="text-zinc-500 uppercase">
            ROUND 0{currentRound} // OFFICIAL VOTE REPORT
          </span>
        </div>

        <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-zinc-400 font-mono text-[10px] font-bold tracking-widest uppercase">
          STAGE 0{revealStage} OF 03
        </span>
      </div>

      {/* Main Official Investigation Report Document */}
      <div className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-5 space-y-5">
        <DossierHeader
          caseFileNumber={fileNumber}
          classification="OFFICIAL DELIBERATION RECORD"
          category="JUDICIAL TALLY REPORT"
          subjectNumber={`ROUND 0${currentRound}`}
          isRestricted={false}
        />

        {/* Title */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
            INVESTIGATION DELIBERATION
          </span>
          <h2 className="font-heading font-black text-2xl text-zinc-100">
            تقرير فرز الأصوات والمداولة
          </h2>
        </div>

        {/* STAGE 01: VOTE DISTRIBUTION RECORD */}
        <div className="border border-zinc-800/90 bg-zinc-900/40 p-4 rounded-sm space-y-3">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 font-mono text-[10px]">
            <span className="uppercase tracking-widest text-zinc-400 font-semibold">
              VOTE RECORD // توزيع الأصوات ونسب الشبهة
            </span>
            <span className="text-zinc-500">{votes.length} VOTES CAST</span>
          </div>

          <div className="space-y-2">
            {state.players.map((player) => {
              const character = caseData?.allCharacters.find((c) => c.id === player.characterId);
              const count = voteCounts[player.id] || 0;
              const percentage = Math.round((count / totalVotesCount) * 100);
              const isJailed = player.id === jailedId;

              return (
                <div
                  key={player.id}
                  className={`p-3 rounded-sm border flex items-center justify-between gap-3 text-xs font-mono transition-all ${
                    isJailed && revealStage >= 2
                      ? 'bg-zinc-900 border-red-700/80 text-zinc-100'
                      : 'bg-zinc-950/80 border-zinc-800/80 text-zinc-300'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-sm text-zinc-100">
                        {character?.name.ar || player.displayName}
                      </span>
                      <span className="text-[10px] text-zinc-500 font-normal">
                        ({player.displayName})
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500 block">
                      {character?.title.ar || 'مشتبه به'}
                    </span>
                  </div>

                  <div className="text-left flex items-center gap-3">
                    <div className="w-16 h-1.5 rounded-xs bg-zinc-800 overflow-hidden hidden sm:block">
                      <div
                        className={`h-full ${isJailed && revealStage >= 2 ? 'bg-red-500' : 'bg-zinc-500'}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>

                    <div className="font-bold text-zinc-200 min-w-16 text-left">
                      <span>{percentage}%</span>{' '}
                      <span className="text-[10px] text-zinc-500 font-normal">
                        ({count} {count === 1 ? 'صوت' : 'أصوات'})
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STAGE 02: MAJORITY ACCUSATION */}
        {revealStage >= 2 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-sm space-y-2.5 font-sans"
          >
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5 font-mono text-[10px]">
              <span className="uppercase tracking-widest text-zinc-400 font-semibold">
                MAJORITY ACCUSATION // قرار الأغلبية
              </span>
              <span className="text-red-400 font-bold">DETENTION ORDER</span>
            </div>

            {jailedPlayer ? (
              <div className="space-y-1">
                <div className="text-base sm:text-lg font-bold text-zinc-100">
                  أمر بحبس المشتبه به:{' '}
                  <span className="text-red-400 font-black">
                    {jailedCharacter?.name.ar || jailedPlayer.displayName} ({jailedPlayer.displayName})
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  حصل المشتبه به على أعلى نسبة من أصوات المحققين وتقرر إيداعه الحبس الاحتياطي.
                </p>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="text-base font-bold text-zinc-200">
                  تعادل في الأصوات — لم يُحبس أي مشتبه به
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  انقسمت آراء المحققين بالتساوي، ولم يحصل أي مشتبه به على الأغلبية اللازمة للحبس.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* STAGE 03: JUDICIAL STATUS & VERDICT */}
        {revealStage >= 3 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-zinc-800 bg-zinc-950 p-4 rounded-sm space-y-3 font-sans"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 font-mono text-[10px]">
              <span className="uppercase tracking-widest text-zinc-400 font-semibold">
                JUDICIAL STATUS // الوضع الجنائي
              </span>
              <span className="text-zinc-500">VERIFICATION LOG</span>
            </div>

            {jailedPlayer ? (
              isKillerJailed ? (
                <div className="space-y-2">
                  <div className="inline-block px-2 py-0.5 border border-red-800 bg-red-950 text-red-300 font-mono text-xs font-bold uppercase tracking-widest">
                    KILLER IDENTIFIED // إدانة القاتل الحقيقي
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-100">
                    تم القبض على القاتل الحقيقي ({jailedCharacter?.name.ar || jailedPlayer.displayName})!
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    نجح المحققون في تطويق الجاني الحقيقي وحبسه بناءً على الأدلة الجنائية.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="inline-block px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-xs font-bold uppercase tracking-widest">
                    WRONGFUL ARREST // الموقوف بريء
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-zinc-100">
                    المشتبه به بريء ({jailedCharacter?.name.ar || jailedPlayer.displayName}). المجرم الحقيقي ما زال حراً!
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    يدخل هذا اللاعب الحبس الاحتياطي (يُحجب تصويته في الجولات القادمة ويظل قادراً على المناقشة فقط).
                  </p>
                </div>
              )
            ) : (
              <div className="space-y-1">
                <div className="inline-block px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-zinc-400 font-mono text-xs font-bold uppercase tracking-widest">
                  NO MAJORITY // تعادل الأصوات
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  تستمر التحقيقات في الجولة التالية لكشف المزيد من الأدلة.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* Action Controls & Navigation */}
        <div className="pt-2 space-y-2.5">
          {revealStage < 3 ? (
            <button
              type="button"
              onClick={handleAdvanceStage}
              className="w-full py-4 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
            >
              <Gavel className="w-4 h-4 text-white" />
              <span>
                {revealStage === 1 ? 'كشف قرار الأغلبية الرسمي' : 'كشف النتيجة الجنائية للمشتبه به'}
              </span>
            </button>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2.5">
              {jailedPlayer && settings.enable15SecJailRule && (
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setScreen('jail_statement');
                  }}
                  className="flex-1 py-3.5 px-5 bg-zinc-800 hover:bg-zinc-700 border border-white/[0.08] text-white font-sans text-xs sm:text-sm font-semibold rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-rose-400" />
                  <span>بيان دفاع المحبوس (١٥ ثانية)</span>
                </button>
              )}

              {isKillerJailed || isFinalRound ? (
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playGavelStrike();
                    revealFinalVerdict();
                  }}
                  className="flex-1 py-4 px-6 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 border border-rose-500 text-white font-sans text-sm font-bold tracking-wide rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40 active:scale-[0.99]"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>كشف الحكم الختامي وهوية الجاني</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playGavelStrike();
                    advanceToNextRound();
                  }}
                  className="flex-1 py-4 px-6 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 border border-rose-500 text-white font-sans text-sm font-bold tracking-wide rounded-xl cursor-pointer transition-all flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40 active:scale-[0.99]"
                >
                  <span>الانتقال للجولة 0{currentRound + 1} والأدلة الجديدة</span>
                  <ArrowLeft className="w-4 h-4 text-white" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
