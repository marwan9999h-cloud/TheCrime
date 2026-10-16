/**
 * CRIME - Digital Investigation Dossier
 * Confidential Investigation Voting Screen & Privacy Shield
 */

import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { CinematicLoadingScreen } from '../common/CinematicLoadingScreen';
import { soundEngine } from '../../utils/soundEngine';
import {
  ShieldAlert,
  CheckCircle2,
  Lock,
  ArrowLeft,
  UserCheck,
  Check,
  EyeOff,
  AlertTriangle,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DossierHeader } from '../dossier/DossierComponents';

export const VotingScreen: React.FC = () => {
  const { state, setScreen, submitVote, processRoundVotingResults } = useGame();
  const caseData = state.caseData;
  const currentRound = state.roundState.currentRound;

  // Eligible voters: players who are NOT jailed
  const eligibleVoters = state.players.filter((p) => !p.isJailed);
  const [currentVoterIndex, setCurrentVoterIndex] = useState(0);
  const [selectedSuspectId, setSelectedSuspectId] = useState<string | null>(null);
  const [showingPrivacyShield, setShowingPrivacyShield] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!caseData || eligibleVoters.length === 0) return null;

  const activeVoter = eligibleVoters[currentVoterIndex];
  if (!activeVoter) return null;

  const fileNumber = caseData.fileNumber || 'FILE 001';

  // Suspect options: non-jailed players except activeVoter
  const suspectOptions = state.players.filter(
    (p) => p.id !== activeVoter.id && !p.isJailed
  );

  const activeSeatNumber = state.players.findIndex((p) => p.id === activeVoter.id) + 1;

  const handleConfirmVote = () => {
    if (!selectedSuspectId) return;
    soundEngine.playGavelStrike();
    submitVote(activeVoter.id, selectedSuspectId);

    // Immediately clear local selected suspect to prevent any leakage
    const suspectChoice = selectedSuspectId;
    setSelectedSuspectId(null);

    if (currentVoterIndex + 1 < eligibleVoters.length) {
      // Show Privacy Shield before next player receives device
      setShowingPrivacyShield(true);
    } else {
      // All eligible voters have voted!
      setIsProcessing(true);
      setTimeout(() => {
        processRoundVotingResults();
        setScreen('vote_results');
      }, 1600);
    }
  };

  const handleNextVoterReady = () => {
    soundEngine.playClick();
    setSelectedSuspectId(null);
    setCurrentVoterIndex((prev) => prev + 1);
    setShowingPrivacyShield(false);
  };

  // Final Tally Processing State
  if (isProcessing) {
    return (
      <CinematicLoadingScreen
        message="جاري فرز أصوات المداولة السرية وتحديد القرار الجنائي..."
        durationSeconds={1.6}
        onComplete={() => {}}
      />
    );
  }

  // Intermediate Pass & Play Privacy Shield (between voters)
  if (showingPrivacyShield) {
    const nextVoter = eligibleVoters[currentVoterIndex + 1];
    const nextSeatNumber = state.players.findIndex((p) => p.id === nextVoter?.id) + 1;

    return (
      <div className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto w-full py-6 px-4 text-center select-none font-sans">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="w-full border border-white/[0.08] bg-zinc-900/90 rounded-2xl p-6 sm:p-8 space-y-6 text-right shadow-xl"
        >
          {/* Top Classification */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 text-xs text-zinc-400 font-sans">
            <span className="font-mono text-rose-300 font-bold">{fileNumber} // تصويت سري</span>
            <span className="border border-white/[0.08] bg-zinc-800 px-2.5 py-0.5 rounded-md text-xs">
              تسليم الجهاز
            </span>
          </div>

          {/* Secure Icon & Title */}
          <div className="space-y-2 text-center py-2">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-center justify-center text-rose-300 shadow-sm">
              <EyeOff className="w-7 h-7 stroke-[1.75]" />
            </div>

            <h2 className="font-heading font-black text-2xl text-white">
              تم تسجيل تصويتك بنجاح
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans max-w-sm mx-auto leading-relaxed pt-1">
              تم حجب اختيارك بسرية تامة. يُرجى تمرير الجهاز إلى المحقق التالي للإدلاء بصوته.
            </p>
          </div>

          {/* Next Voter Roster Notice */}
          {nextVoter && (
            <div className="border border-white/[0.08] bg-[#17181d] p-4 rounded-xl space-y-1.5 text-center">
              <span className="text-xs text-rose-400 font-medium block">
                المصوت التالي المطلوب تسليمه الجهاز:
              </span>
              <div className="text-xl font-heading font-black text-white">
                {nextVoter.displayName}
              </div>
              <span className="text-xs text-zinc-400 block font-mono">
                المقعد 0{nextSeatNumber}
              </span>
            </div>
          )}

          {/* Proceed Action Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={handleNextVoterReady}
              className="w-full py-4 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-rose-500 cursor-pointer shadow-lg shadow-rose-950/40 active:scale-[0.99]"
            >
              <span>أنا {nextVoter?.displayName || 'المصوت التالي'} — جاهز للتصويت</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  // Active Voter Selection View
  return (
    <div className="flex-1 flex flex-col max-w-xl mx-auto w-full py-4 sm:py-6 px-3 sm:px-4 space-y-5 text-right font-sans select-none">
      {/* Top Security Header Navigation */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-2 text-xs text-zinc-300">
          <span className="px-2 py-0.5 rounded-md border border-rose-500/30 bg-rose-950/30 text-rose-300 font-mono font-bold">
            {fileNumber}
          </span>
          <span className="text-zinc-400">
            الجولة 0{currentRound} // المداولة السرية
          </span>
        </div>

        <span className="px-2.5 py-0.5 rounded-md border border-white/[0.08] bg-zinc-900/80 text-rose-300 font-sans text-xs font-semibold">
          صوت {currentVoterIndex + 1} من {eligibleVoters.length}
        </span>
      </div>

      {/* Main Deliberation Document */}
      <div className="border border-white/[0.08] bg-zinc-900/90 rounded-2xl p-5 sm:p-6 space-y-5 shadow-sm">
        {/* Active Voter Callout */}
        <div className="border-b border-white/[0.06] pb-4 space-y-1">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-sans">
            <span className="text-rose-400 font-medium">المصوّت الحالي:</span>
            <span className="font-mono text-zinc-500">SEAT 0{activeSeatNumber}</span>
          </div>

          <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
            {activeVoter.displayName}
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
            وجّه تهمتك الرسمية للمشتبه به الأكثر احتمالية لارتكاب الجريمة بناءً على الأدلة والتناقضات.
          </p>
        </div>

        {/* Suspect Roster Entries */}
        <div className="space-y-2.5">
          <span className="text-xs font-semibold text-zinc-300 block">
            اختر المشتبه به لتوجيه الاتهام إليه:
          </span>

          {suspectOptions.map((suspect) => {
            const character = caseData.allCharacters.find((c) => c.id === suspect.characterId);
            const isSelected = selectedSuspectId === suspect.id;

            return (
              <div
                key={suspect.id}
                onClick={() => {
                  soundEngine.playTypewriterKey();
                  setSelectedSuspectId(suspect.id);
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 text-right select-none ${
                  isSelected
                    ? 'bg-rose-950/30 border-rose-500/80 text-white shadow-md shadow-rose-950/30'
                    : 'bg-[#17181d] border-white/[0.08] hover:border-zinc-500 text-zinc-300 hover:text-white'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-black text-base text-white">
                      {character?.name.ar || suspect.displayName}
                    </span>
                    <span className="text-xs text-zinc-400 font-sans">
                      ({suspect.displayName})
                    </span>
                  </div>

                  <div className="text-xs text-zinc-400 font-sans">
                    {character?.title.ar || 'مشتبه به في القضية'}
                  </div>
                </div>

                <div
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-colors shrink-0 ${
                    isSelected
                      ? 'bg-rose-600 border-rose-500 text-white shadow-xs'
                      : 'bg-zinc-800 border-white/[0.08] text-zinc-400'
                  }`}
                >
                  {isSelected ? 'مُختار للتصويت ✓' : 'اختيار'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Confirmation & Submit Action */}
        <div className="pt-2 space-y-3 border-t border-white/[0.06]">
          {selectedSuspectId ? (
            <div className="bg-[#17181d] border border-rose-500/30 p-3.5 rounded-xl space-y-1 text-center text-xs">
              <span className="text-zinc-400 font-sans block">
                تأكيد الاتهام:
              </span>
              <div className="text-white font-bold text-sm">
                المشتبه به المختار:{' '}
                <span className="text-rose-400">
                  {caseData.allCharacters.find(
                    (c) =>
                      c.id ===
                      state.players.find((p) => p.id === selectedSuspectId)?.characterId
                  )?.name.ar || 'المشتبه به'}
                </span>
              </div>
            </div>
          ) : (
            <div className="text-center text-xs text-zinc-400 py-1">
              اختر أحد المشتبه بهم أعلاه لتأكيد تصويتك
            </div>
          )}

          <button
            type="button"
            disabled={!selectedSuspectId}
            onClick={handleConfirmVote}
            className={`w-full py-4 px-6 rounded-xl font-sans text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border ${
              selectedSuspectId
                ? 'bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white border-rose-500 shadow-lg shadow-rose-950/40 cursor-pointer active:scale-[0.99]'
                : 'bg-zinc-800/60 border-white/[0.06] text-zinc-500 cursor-not-allowed'
            }`}
          >
            <span>تأكيد الصوت السري</span>
            <Check className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
