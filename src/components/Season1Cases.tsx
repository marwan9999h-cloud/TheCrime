/**
 * CRIME - Digital Investigation Dossier
 * Dynamic Seasons & Investigation Case Archive Component
 */

import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CaseModel } from '../types/game';
import { SeasonModel } from '../types/seasons';
import { getCasesBySeason } from '../data/cases';
import { OFFICIAL_SEASONS } from '../data/seasons';
import { isCaseSolved } from '../utils/completedCases';
import { soundEngine } from '../utils/soundEngine';
import {
  Users,
  Clock,
  CheckCircle2,
  FileText,
  X,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Lock,
  FolderLock,
  Shield,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Difficulty Badge Helper
export const getDifficultyBadge = (difficulty: string) => {
  switch (difficulty) {
    case 'easy':
    case 'beginner':
      return {
        label: 'سهل',
        badgeClass: 'text-emerald-300 border-emerald-500/30 bg-emerald-950/30',
      };
    case 'medium':
    case 'detective':
      return {
        label: 'متوسط',
        badgeClass: 'text-amber-300 border-amber-500/30 bg-amber-950/30',
      };
    case 'hard':
      return {
        label: 'صعب',
        badgeClass: 'text-orange-300 border-orange-500/30 bg-orange-950/30',
      };
    case 'monster':
    case 'mastermind':
    default:
      return {
        label: 'خبير',
        badgeClass: 'text-rose-300 border-rose-500/30 bg-rose-950/30',
      };
  }
};

export interface Season1CasesProps {
  onSelectCaseForGame?: (caseModel: CaseModel) => void;
  isArchive?: boolean;
}

export const Season1Cases: React.FC<Season1CasesProps> = ({ onSelectCaseForGame, isArchive = false }) => {
  const { setScreen } = useGame();
  const [expandedSeasonId, setExpandedSeasonId] = useState<string>('season_1');
  const [selectedSeasonTab, setSelectedSeasonTab] = useState<'murder' | 'theft'>('murder');
  const [selectedCaseModal, setSelectedCaseModal] = useState<CaseModel | null>(null);
  const [lockedSeasonModal, setLockedSeasonModal] = useState<SeasonModel | null>(null);

  const season1Cases = getCasesBySeason('murder');
  const season2Cases = getCasesBySeason('theft');

  const toggleSeason = (seasonId: string) => {
    soundEngine.playClick();
    setExpandedSeasonId((prev) => (prev === seasonId ? '' : seasonId));
  };

  const handleLaunchCase = (caseModel: CaseModel) => {
    if (caseModel.isLocked) return;
    soundEngine.playTypewriterKey();
    setSelectedCaseModal(null);
    if (onSelectCaseForGame) {
      onSelectCaseForGame(caseModel);
    } else {
      setScreen('player_setup');
    }
  };

  const handleCardClick = (caseModel: CaseModel) => {
    if (isArchive) {
      soundEngine.playClick();
      setSelectedCaseModal(caseModel);
    } else {
      handleLaunchCase(caseModel);
    }
  };

  // Reusable Case File Record List
  const renderCaseList = (cases: CaseModel[]) => (
    <div className="flex flex-col gap-3 w-full">
      {cases.map((caseModel, index) => {
        const diffInfo = getDifficultyBadge(caseModel.difficulty);
        const isSolved = isCaseSolved(caseModel.id);
        const fileNumber = caseModel.fileNumber || `FILE 00${index + 1}`;

        return (
          <motion.div
            key={caseModel.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.04 }}
            onClick={() => handleCardClick(caseModel)}
            className={`cursor-pointer group relative border rounded-xl p-4 sm:p-5 transition-all text-right select-none shadow-xs ${
              isSolved
                ? 'bg-zinc-900/60 border-white/[0.08] hover:border-zinc-500'
                : 'bg-zinc-900/80 border-white/[0.08] hover:border-rose-500/60 hover:bg-zinc-800/80'
            }`}
          >
            {/* Top Micro Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 mb-3">
              <div className="flex items-center gap-2 font-mono text-[11px]">
                <span className="px-2 py-0.5 rounded-md border border-rose-500/30 bg-rose-950/30 font-bold text-rose-300">
                  {fileNumber}
                </span>
                <span className="text-zinc-400 text-xs font-sans">
                  ملف قضية
                </span>
              </div>

              <div className="flex items-center gap-2">
                {isSolved ? (
                  <span className="flex items-center gap-1.5 text-xs font-sans font-medium text-emerald-400 bg-emerald-950/40 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>تم حل القضية</span>
                  </span>
                ) : (
                  <span className="text-xs font-sans font-medium text-rose-300 bg-rose-950/40 px-2.5 py-0.5 rounded-md border border-rose-500/30">
                    قيد التحقيق
                  </span>
                )}
              </div>
            </div>

            {/* Case Title & Tagline */}
            <div className="space-y-1">
              <h3 className="font-heading font-black text-xl text-white group-hover:text-rose-300 transition-colors">
                {caseModel.title.ar}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed line-clamp-1">
                {caseModel.tagline.ar}
              </p>
            </div>

            {/* Metadata Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-white/[0.06] text-xs font-sans text-zinc-300">
              <div className="flex items-center gap-3">
                <span className={`px-2 py-0.5 rounded-md border text-xs font-medium ${diffInfo.badgeClass}`}>
                  صعوبة: {diffInfo.label}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300">
                  <Clock className="w-4 h-4 text-rose-400/80" />
                  <span>~{caseModel.estimatedMinutes} دقيقة</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-300 hidden sm:flex">
                  <Users className="w-4 h-4 text-zinc-400" />
                  <span>٤ لاعبين</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-100 group-hover:text-rose-300 transition-colors">
                <span>{isArchive ? 'فحص السجل' : 'فتح القضية'}</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full space-y-4 text-right select-none">
      {!isArchive ? (
        /* Direct Case Selection with Season Tabs */
        <div className="space-y-4">
          {/* Season Filter Bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setSelectedSeasonTab('murder');
              }}
              className={`px-3.5 py-2 font-sans text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-2 ${
                selectedSeasonTab === 'murder'
                  ? 'bg-rose-950/40 border-rose-500/50 text-white shadow-xs'
                  : 'bg-zinc-900/60 border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600'
              }`}
            >
              <span>🔪 الموسم 01: جرائم القتل</span>
              <span className="px-2 py-0.5 bg-zinc-800 text-[11px] text-zinc-300 rounded-md font-mono">
                {season1Cases.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setSelectedSeasonTab('theft');
              }}
              className={`px-3.5 py-2 font-sans text-xs sm:text-sm font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-2 ${
                selectedSeasonTab === 'theft'
                  ? 'bg-rose-950/40 border-rose-500/50 text-white shadow-xs'
                  : 'bg-zinc-900/60 border-white/[0.08] text-zinc-400 hover:text-white hover:border-zinc-600'
              }`}
            >
              <span>💎 الموسم 02: جرائم السرقة</span>
              <span className="px-2 py-0.5 bg-zinc-800 text-[11px] text-zinc-300 rounded-md font-mono">
                {season2Cases.length}
              </span>
            </button>
          </div>

          {/* Active Season Cases List */}
          {selectedSeasonTab === 'murder'
            ? renderCaseList(season1Cases)
            : renderCaseList(season2Cases)}
        </div>
      ) : (
        /* Archive View Accordion */
        <div className="space-y-3">
          {OFFICIAL_SEASONS.map((season) => {
            const isUnlockedSeason = season.isUnlocked;
            const isExpanded = expandedSeasonId === season.id;
            const seasonCases =
              season.id === 'season_1'
                ? season1Cases
                : season.id === 'season_2'
                ? season2Cases
                : [];

            return (
              <div
                key={season.id}
                className="border border-zinc-800 bg-zinc-950/90 rounded-sm overflow-hidden"
              >
                {/* Accordion Season Header */}
                <button
                  type="button"
                  onClick={() => {
                    if (isUnlockedSeason) {
                      toggleSeason(season.id);
                    } else {
                      soundEngine.playClick();
                      setLockedSeasonModal(season);
                    }
                  }}
                  className={`w-full p-4 flex items-center justify-between text-right transition-colors cursor-pointer ${
                    isUnlockedSeason
                      ? 'bg-zinc-900/50 hover:bg-zinc-900/80'
                      : 'bg-zinc-950/40 hover:bg-zinc-900/40 opacity-70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-sm border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0 font-mono text-sm font-bold">
                      {isUnlockedSeason ? `S0${season.number}` : 'LOCK'}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-heading font-black text-base sm:text-lg text-zinc-100">
                          {season.title.ar}
                        </h3>

                        {!isUnlockedSeason && (
                          <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-amber-950/60 text-amber-400 border border-amber-800">
                            SEALED ARCHIVE
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-zinc-400 font-sans mt-0.5">
                        {season.description.ar}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 mr-2">
                    {isUnlockedSeason ? (
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-zinc-400 border border-zinc-800 bg-zinc-900">
                          {seasonCases.length} ACTIVE FILES
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-zinc-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-zinc-400" />
                        )}
                      </div>
                    ) : (
                      <Lock className="w-4 h-4 text-zinc-600" />
                    )}
                  </div>
                </button>

                {/* Unlocked Season Cases List */}
                <AnimatePresence>
                  {isUnlockedSeason && isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 sm:p-4 border-t border-zinc-800/80 bg-zinc-900/20"
                    >
                      {renderCaseList(seasonCases)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}

      {/* Case Details Modal (Archive Mode Preview) */}
      <AnimatePresence>
        {selectedCaseModal && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 text-right overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 6 }}
              className="max-w-2xl w-full bg-zinc-950 border border-zinc-700 rounded-sm p-4 sm:p-6 relative space-y-4 my-auto shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-zinc-900 text-zinc-300 font-mono text-[10px] font-bold border border-zinc-700">
                      {selectedCaseModal.fileNumber || 'FILE 001'}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      CASE PREVIEW // ARCHIVE
                    </span>
                  </div>
                  <h3 className="font-heading font-black text-xl text-zinc-100">
                    {selectedCaseModal.title.ar}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedCaseModal(null);
                  }}
                  className="p-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 rounded-sm transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tagline */}
              <p className="text-xs font-sans italic text-zinc-300 border-r-2 border-zinc-700 pr-3 leading-relaxed">
                "{selectedCaseModal.tagline.ar}"
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-sm space-y-1">
                  <span className="text-[9px] text-zinc-500 uppercase block">الصعوبة</span>
                  <span className="text-zinc-200 font-bold block">
                    {getDifficultyBadge(selectedCaseModal.difficulty).label}
                  </span>
                </div>

                <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-sm space-y-1">
                  <span className="text-[9px] text-zinc-500 uppercase block">المدة</span>
                  <span className="text-zinc-200 font-bold block">
                    ~{selectedCaseModal.estimatedMinutes} دقيقة
                  </span>
                </div>

                <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-sm space-y-1">
                  <span className="text-[9px] text-zinc-500 uppercase block">الفريق</span>
                  <span className="text-zinc-200 font-bold block">٤ لاعبين</span>
                </div>

                <div className="p-2.5 bg-zinc-900/60 border border-zinc-800 rounded-sm space-y-1">
                  <span className="text-[9px] text-zinc-500 uppercase block">الحالة</span>
                  <span className={`font-bold block ${isCaseSolved(selectedCaseModal.id) ? 'text-emerald-400' : 'text-zinc-300'}`}>
                    {isCaseSolved(selectedCaseModal.id) ? 'CASE CLOSED' : 'OPEN CASE'}
                  </span>
                </div>
              </div>

              {/* Synopsis Box */}
              <div className="bg-zinc-900/40 p-3.5 rounded-sm border border-zinc-800/80 space-y-1.5">
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                  INCIDENT SYNOPSIS // ملخص الحادث
                </span>
                <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                  {selectedCaseModal.synopsis.ar}
                </p>
              </div>

              {/* Victim Profile */}
              <div className="p-3.5 bg-zinc-900/40 border border-zinc-800/80 rounded-sm text-xs space-y-1">
                <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  VICTIM PROFILE // المجني عليه
                </div>
                <div className="text-zinc-100 font-bold">
                  {selectedCaseModal.victim.name.ar} — {selectedCaseModal.victim.title.ar}
                </div>
                <div className="text-zinc-400 text-xs font-sans leading-relaxed pt-0.5">
                  {selectedCaseModal.victim.background.ar}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedCaseModal(null);
                  }}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs tracking-wider uppercase border border-zinc-700 rounded-sm cursor-pointer transition-colors"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Locked Future Season Modal */}
      <AnimatePresence>
        {lockedSeasonModal && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 text-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="max-w-md w-full bg-zinc-950 border border-zinc-700 rounded-sm p-6 relative space-y-4 text-center shadow-2xl"
            >
              <div className="w-12 h-12 mx-auto rounded-sm bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-400">
                <FolderLock className="w-6 h-6 stroke-[1.5]" />
              </div>

              <div className="space-y-1">
                <span className="px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-700 text-[10px] font-mono font-bold tracking-widest uppercase">
                  CLASSIFIED // UPCOMING ARCHIVE
                </span>

                <h3 className="font-heading font-black text-xl text-zinc-100 pt-1">
                  {lockedSeasonModal.title.ar}
                </h3>
              </div>

              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {lockedSeasonModal.description.ar}
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    setLockedSeasonModal(null);
                  }}
                  className="w-full py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs tracking-wider uppercase border border-zinc-700 rounded-sm cursor-pointer transition-colors"
                >
                  DISMISS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
