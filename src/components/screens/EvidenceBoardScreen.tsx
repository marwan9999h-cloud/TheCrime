/**
 * CRIME - Digital Investigation Dossier
 * Evidence Board & Investigation Discussion Screen
 */

import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { EvidenceBubbleCard, EvidenceDetailModal } from '../evidence/EvidenceCard';
import { RedThreadsBoard } from '../evidence/RedThreadsBoard';
import { EvidenceItem } from '../../types/game';
import { soundEngine } from '../../utils/soundEngine';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Lock,
  PenTool,
  Vote,
  FolderLock,
  ArrowLeft,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const EvidenceBoardScreen: React.FC = () => {
  const { state, setScreen, settings } = useGame();
  const caseData = state.caseData;
  const roundState = state.roundState;

  // Filter & Navigation State
  const [selectedRoundFilter, setSelectedRoundFilter] = useState<number>(roundState.currentRound);
  const [activeTab, setActiveTab] = useState<'evidence' | 'red_board' | 'timeline' | 'suspects'>('evidence');
  const [selectedEvidenceForModal, setSelectedEvidenceForModal] = useState<EvidenceItem | null>(null);

  // Discussion Timer State
  const [timeLeft, setTimeLeft] = useState<number>(settings.discussionTimeLimitMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Detective Notepad Drawer
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);
  const [notes, setNotes] = useState('');

  // Keep selected round filter updated if current round updates
  useEffect(() => {
    setSelectedRoundFilter(roundState.currentRound);
  }, [roundState.currentRound]);

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 && isTimerRunning) {
      soundEngine.playGavelStrike();
      setIsTimerRunning(false);
      setScreen('voting');
    }
  }, [timeLeft, isTimerRunning, setScreen]);

  if (!caseData) return null;

  // Gather unlocked evidence
  const unlockedIds = roundState?.unlockedEvidenceIds || [];
  const allUnlockedEvidence = (
    Object.values(caseData.evidenceByRound || {}).flat() as EvidenceItem[]
  ).filter((ev) => ev && unlockedIds.includes(ev.id));

  // Filter evidence by selected round
  const roundFilteredEvidence = allUnlockedEvidence.filter((ev) => {
    if (selectedRoundFilter === 0) return true;
    return ev.roundNumber === selectedRoundFilter;
  });

  const availableRoundsInUnlocked = Array.from(
    new Set(allUnlockedEvidence.map((e) => e.roundNumber))
  ).sort((a, b) => a - b);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleGoToVoting = () => {
    soundEngine.playGavelStrike();
    setScreen('voting');
  };

  return (
    <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full py-3 sm:py-5 px-3 sm:px-4 space-y-4 text-right select-none font-sans">
      {/* 1. TOP INVESTIGATION COMMAND HEADER */}
      <div className="border border-white/[0.08] bg-zinc-900/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
        {/* Current Round & Case Tag */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="px-3 py-1.5 bg-rose-950/40 border border-rose-500/40 rounded-lg font-mono text-xs font-bold text-rose-300">
            الجولة 0{roundState.currentRound} من 03
          </div>
          <div>
            <h2 className="font-heading font-black text-xl text-white">
              لوحة الأدلة والتحقيق
            </h2>
            <p className="text-xs text-zinc-400 font-sans">
              {caseData.title.ar} • {allUnlockedEvidence.length} أدلة مكشوفة
            </p>
          </div>
        </div>

        {/* Discussion Timer & Actions */}
        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-t-0 border-white/[0.06] pt-3 sm:pt-0">
          {/* Discussion Timer */}
          <div className="flex items-center gap-2.5 bg-[#17181d] border border-white/[0.08] px-3.5 py-1.5 rounded-xl shadow-xs">
            <Clock className={`w-4 h-4 ${timeLeft <= 30 ? 'text-rose-400 animate-pulse' : 'text-zinc-400'}`} />
            <span
              className={`font-mono text-base sm:text-lg font-bold tracking-wider ${
                timeLeft <= 30 ? 'text-rose-400' : 'text-white'
              }`}
            >
              {formatTimer(timeLeft)}
            </span>

            <div className="flex items-center gap-1 border-r border-white/[0.08] pr-2">
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setIsTimerRunning(!isTimerRunning);
                }}
                className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title={isTimerRunning ? 'إيقاف مؤقت' : 'استئناف'}
              >
                {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setTimeLeft(settings.discussionTimeLimitMinutes * 60);
                }}
                className="p-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="إعادة ضبط المؤقت"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setIsNotepadOpen(!isNotepadOpen);
              }}
              className="p-2.5 bg-zinc-800 hover:bg-zinc-700 border border-white/[0.08] rounded-xl text-zinc-300 hover:text-white transition-colors cursor-pointer"
              title="دفتر الملاحظات"
            >
              <PenTool className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleGoToVoting}
              className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-sans text-xs sm:text-sm font-bold tracking-wide rounded-xl cursor-pointer transition-all flex items-center gap-2 border border-rose-500 shadow-md shadow-rose-950/40 active:scale-[0.99]"
            >
              <Vote className="w-4 h-4" />
              <span>بدء التصويت</span>
            </button>
          </div>
        </div>
      </div>

      {/* Jailed Player Notification (if any) */}
      {state.players.some((p) => p.isJailed) && (
        <div className="p-3 bg-rose-950/30 border border-rose-500/30 rounded-xl flex items-center justify-between text-xs text-rose-200 font-sans">
          <div className="flex items-center gap-2 font-medium">
            <Lock className="w-4 h-4 text-rose-400" />
            <span>
              محبوس في الحجز الاحتياطي: {state.players.filter((p) => p.isJailed).map((p) => p.displayName).join(', ')}
            </span>
          </div>
          <span className="text-xs text-rose-400 font-semibold">
            حجب حق التصويت
          </span>
        </div>
      )}

      {/* 2. NAVIGATION TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-sans">
        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setActiveTab('evidence');
          }}
          className={`px-4 py-2 rounded-xl border font-semibold transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'evidence'
              ? 'bg-rose-950/40 border-rose-500/50 text-white shadow-xs'
              : 'bg-zinc-900/60 border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600'
          }`}
        >
          الأدلة الجنائية ({allUnlockedEvidence.length})
        </button>

        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setActiveTab('red_board');
          }}
          className={`px-4 py-2 rounded-xl border font-semibold transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'red_board'
              ? 'bg-rose-950/40 border-rose-500/50 text-white shadow-xs'
              : 'bg-zinc-900/60 border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600'
          }`}
        >
          خيوط الربط والاشتباه
        </button>

        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setActiveTab('timeline');
          }}
          className={`px-4 py-2 rounded-xl border font-semibold transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'timeline'
              ? 'bg-rose-950/40 border-rose-500/50 text-white shadow-xs'
              : 'bg-zinc-900/60 border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600'
          }`}
        >
          الخط الزمني للواقعة
        </button>

        <button
          type="button"
          onClick={() => {
            soundEngine.playClick();
            setActiveTab('suspects');
          }}
          className={`px-4 py-2 rounded-xl border font-semibold transition-colors cursor-pointer whitespace-nowrap ${
            activeTab === 'suspects'
              ? 'bg-rose-950/40 border-rose-500/50 text-white shadow-xs'
              : 'bg-zinc-900/60 border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600'
          }`}
        >
          المشتبه بهم والحجج
        </button>
      </div>

      {/* 3. MAIN CONTENT AREA */}
      {activeTab === 'red_board' ? (
        <RedThreadsBoard
          unlockedEvidence={allUnlockedEvidence}
          characters={caseData.allCharacters}
        />
      ) : activeTab === 'timeline' ? (
        <div className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-4 sm:p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
              INCIDENT TIMELINE // التسلسل الزمني لأحداث ليلة الجريمة
            </span>
            <span className="text-[10px] font-mono text-zinc-500">10:30 PM — 11:30 PM</span>
          </div>

          <div className="space-y-3 relative border-r border-zinc-800 mr-2 pr-4 pt-1">
            {(caseData.timeline || []).map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -right-[21px] top-1.5 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-red-500 transition-colors" />
                <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-sm p-3 space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="font-bold text-zinc-300">
                      {item.time}
                    </span>
                    <span className="text-zinc-500 text-[10px]">
                      {item.location.ar}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-zinc-100">
                    {item.event.ar}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans italic pt-0.5">
                    {item.significance.ar}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : activeTab === 'suspects' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {state.players.map((player, idx) => {
            const character = caseData.allCharacters.find((c) => c.id === player.characterId);
            if (!character) return null;

            return (
              <div
                key={player.id}
                className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-4 space-y-3"
              >
                <div className="flex items-start justify-between border-b border-zinc-800/80 pb-2">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      SEAT 0{idx + 1} // {player.displayName}
                    </span>
                    <h4 className="font-heading font-bold text-base text-zinc-100">
                      {character.name.ar}
                    </h4>
                    <span className="text-xs font-mono text-zinc-400 block">
                      {character.title.ar}
                    </span>
                  </div>

                  {player.isJailed && (
                    <span className="px-2 py-0.5 border border-red-900 bg-red-950 text-red-300 text-[9px] font-mono font-bold">
                      JAILED
                    </span>
                  )}
                </div>

                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {character.bio.ar}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1">
                  <div className="bg-zinc-900/60 p-2 rounded-sm border border-zinc-800/80 space-y-0.5">
                    <span className="text-[9px] text-zinc-500 block uppercase">الحجة المعلنة:</span>
                    <span className="text-zinc-300 line-clamp-2">{character.publicAlibi.ar}</span>
                  </div>

                  <div className="bg-zinc-900/60 p-2 rounded-sm border border-zinc-800/80 space-y-0.5">
                    <span className="text-[9px] text-zinc-500 block uppercase">الدافع المرصود:</span>
                    <span className="text-zinc-300 line-clamp-2">{character.motive.ar}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* EVIDENCE TAB */
        <div className="space-y-3">
          {/* Round Filter Sub-bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
            <span className="text-zinc-500 text-[10px] uppercase tracking-wider pl-1">
              FILTER:
            </span>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setSelectedRoundFilter(roundState.currentRound);
              }}
              className={`px-3 py-1.5 rounded-sm border transition-colors cursor-pointer whitespace-nowrap ${
                selectedRoundFilter === roundState.currentRound
                  ? 'bg-zinc-900 border-zinc-500 text-zinc-100 font-bold'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              CURRENT ROUND (#{roundState.currentRound})
            </button>

            {availableRoundsInUnlocked.map((rNum) => (
              <button
                key={rNum}
                type="button"
                onClick={() => {
                  soundEngine.playClick();
                  setSelectedRoundFilter(rNum);
                }}
                className={`px-3 py-1.5 rounded-sm border transition-colors cursor-pointer whitespace-nowrap ${
                  selectedRoundFilter === rNum
                    ? 'bg-zinc-900 border-zinc-500 text-zinc-100 font-bold'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                ROUND #{rNum}
              </button>
            ))}

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setSelectedRoundFilter(0);
              }}
              className={`px-3 py-1.5 rounded-sm border transition-colors cursor-pointer whitespace-nowrap ${
                selectedRoundFilter === 0
                  ? 'bg-zinc-900 border-zinc-500 text-zinc-100 font-bold'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              ALL UNLOCKED ({allUnlockedEvidence.length})
            </button>
          </div>

          {/* Evidence Grid or Sealed Notice */}
          {roundFilteredEvidence.length === 0 ? (
            <div className="p-8 text-center border border-zinc-800 bg-zinc-950/80 rounded-sm space-y-2">
              <FolderLock className="w-8 h-8 text-zinc-600 mx-auto stroke-[1.2]" />
              <div className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                EVIDENCE SEALED
              </div>
              <p className="text-xs text-zinc-500 font-sans">
                لا توجد أدلة مكشوفة لهذه الجولة حالياً.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {roundFilteredEvidence.map((ev) => (
                <EvidenceBubbleCard
                  key={ev.id}
                  evidence={ev}
                  onClick={() => setSelectedEvidenceForModal(ev)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Selected Evidence Detail Modal */}
      <AnimatePresence>
        {selectedEvidenceForModal && (
          <EvidenceDetailModal
            evidence={selectedEvidenceForModal}
            onClose={() => setSelectedEvidenceForModal(null)}
          />
        )}
      </AnimatePresence>

      {/* Slide-out Detective Notepad Drawer */}
      {isNotepadOpen && (
        <div className="fixed bottom-4 left-4 z-40 max-w-sm w-full bg-zinc-950 border border-zinc-700 rounded-sm p-4 shadow-2xl space-y-3 text-right font-sans">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-1.5">
              <PenTool className="w-3.5 h-3.5 text-zinc-400" />
              <span>INVESTIGATOR NOTEPAD // الملاحظات</span>
            </span>
            <button
              onClick={() => setIsNotepadOpen(false)}
              className="p-1 text-zinc-400 hover:text-zinc-100 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="دون شكوكك وتناقضات المشتبه بهم هنا..."
            className="w-full h-32 bg-zinc-900/60 border border-zinc-800 rounded-sm p-2.5 text-xs text-zinc-100 font-mono focus:border-zinc-500 focus:outline-none resize-none text-right"
          />
        </div>
      )}
    </div>
  );
};
