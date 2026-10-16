/**
 * CRIME - Social Deduction Mystery Game
 * Global State Context & Controller
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  GameState,
  GameScreen,
  CaseModel,
  PlayerSession,
  Language,
  GameSettings,
  PlayerRole,
  VoteRecord,
} from '../types/game';
import { DEFAULT_GAME_SETTINGS } from '../config/constants';
import { soundEngine } from '../utils/soundEngine';

import { case001Package } from '../data/cases/packages/case001';
import { generateSessionForCase } from '../data/cases/caseEngine';

interface GameContextType {
  state: GameState;
  settings: GameSettings;
  playerNames: string[];
  selectedCaseForGame: CaseModel | null;
  setSelectedCaseForGame: (caseModel: CaseModel | null) => void;
  selectCaseAndGoToPlayerSetup: (caseModel: CaseModel) => void;
  setScreen: (screen: GameScreen) => void;
  setLanguage: (lang: Language) => void;
  updateSettings: (newSettings: Partial<GameSettings>) => void;
  setPlayerNamesAndChooseCase: (names: string[]) => void;
  startInvestigation: (caseModel: CaseModel) => void;
  nextPassPlayer: () => void;
  startRoundDiscussion: () => void;
  submitVote: (voterPlayerId: string, suspectPlayerId: string) => void;
  processRoundVotingResults: () => { jailedPlayer: PlayerSession | null; tie: boolean };
  advanceToNextRound: () => void;
  revealFinalVerdict: () => void;
  resetGame: () => void;
  activePlayer: PlayerSession | null;
}

const initialGameState: GameState = {
  caseData: null,
  difficulty: 'detective',
  players: [],
  currentScreen: 'home',
  activePassPlayerIndex: 0,
  roundState: {
    currentRound: 1,
    totalRounds: 3,
    discussionTimeRemainingSeconds: 180,
    discussionActive: false,
    unlockedEvidenceIds: [],
    votesInCurrentRound: [],
    jailedPlayerThisRoundId: null,
  },
  gameWinner: null,
  gameHistory: {
    eliminatedPlayerIds: [],
    roundSummaries: [],
  },
};

const GameContext = createContext<GameContextType | undefined>(undefined);

const STORAGE_KEY = 'CRIME_ACTIVE_INVESTIGATION_STATE';

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<GameState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.caseData && parsed.players && parsed.players.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to restore saved game session', e);
    }
    return initialGameState;
  });

  const [settings, setSettings] = useState<GameSettings>(DEFAULT_GAME_SETTINGS);
  const [selectedCaseForGame, setSelectedCaseForGame] = useState<CaseModel | null>(null);
  const [playerNames, setPlayerNames] = useState<string[]>(() => {
    if (state.players && state.players.length > 0) {
      return state.players.map((p) => p.displayName);
    }
    return ['لاعب 1', 'لاعب 2', 'لاعب 3', 'لاعب 4'];
  });

  const selectCaseAndGoToPlayerSetup = (caseModel: CaseModel) => {
    soundEngine.playClick();
    setSelectedCaseForGame(caseModel);
    setState((prev) => ({ ...prev, currentScreen: 'player_setup' }));
  };

  useEffect(() => {
    soundEngine.setMuted(!settings.soundEnabled);
    soundEngine.setVolume(settings.masterVolume);
  }, [settings]);

  // Persist current active investigation state to LocalStorage
  useEffect(() => {
    try {
      if (state.caseData && state.currentScreen !== 'home') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } else if (state.currentScreen === 'home') {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.error('Failed to save active session', e);
    }
  }, [state]);

  const setScreen = (screen: GameScreen) => {
    soundEngine.playClick();
    setState((prev) => ({ ...prev, currentScreen: screen }));
  };

  const setLanguage = (lang: Language) => {
    soundEngine.playClick();
    setSettings((prev) => ({ ...prev, language: lang }));
  };

  const updateSettings = (newSettings: Partial<GameSettings>) => {
    soundEngine.playClick();
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const setPlayerNamesAndChooseCase = (names: string[]) => {
    soundEngine.playClick();
    setPlayerNames(names);
    setState((prev) => ({
      ...prev,
      currentScreen: 'case_selection',
    }));
  };

  const startInvestigation = (caseModel: CaseModel) => {
    soundEngine.playEvidenceSting();

    const namesToUse = playerNames.length >= 4 
      ? playerNames 
      : ['لاعب 1', 'لاعب 2', 'لاعب 3', 'لاعب 4'];

    const { caseModel: dynamicCaseModel, assignedPlayers } = generateSessionForCase(caseModel, namesToUse);

    // Initial evidence unlocked for round 1
    const round1Evidence = dynamicCaseModel.evidenceByRound[1] || [];
    const round1EvidenceIds = round1Evidence.map((e) => e.id);

    setState((prev) => ({
      ...prev,
      caseData: dynamicCaseModel,
      difficulty: caseModel.difficulty,
      players: assignedPlayers,
      activePassPlayerIndex: 0,
      currentScreen: 'pass_device',
      roundState: {
        ...prev.roundState,
        currentRound: 1,
        totalRounds: Object.keys(dynamicCaseModel.evidenceByRound).length || 3,
        unlockedEvidenceIds: round1EvidenceIds,
        discussionTimeRemainingSeconds: settings.discussionTimeLimitMinutes * 60,
        votesInCurrentRound: [],
      },
    }));
  };

  const nextPassPlayer = () => {
    soundEngine.playClick();
    setState((prev) => {
      const nextIndex = prev.activePassPlayerIndex + 1;
      if (nextIndex >= prev.players.length) {
        // All players reviewed secret dossiers! Proceed to Round 1 Intro & Evidence
        return {
          ...prev,
          activePassPlayerIndex: 0,
          currentScreen: 'round_intro',
        };
      }
      return {
        ...prev,
        activePassPlayerIndex: nextIndex,
        currentScreen: 'pass_device',
      };
    });
  };

  const startRoundDiscussion = () => {
    soundEngine.playGavelStrike();
    setState((prev) => ({
      ...prev,
      currentScreen: 'evidence_board',
      roundState: {
        ...prev.roundState,
        discussionActive: true,
      },
    }));
  };

  const submitVote = (voterPlayerId: string, suspectPlayerId: string) => {
    soundEngine.playGavelStrike();
    setState((prev) => {
      const currentVotes = prev.roundState.votesInCurrentRound;
      const updatedVotes = [
        ...currentVotes.filter((v) => v.voterPlayerId !== voterPlayerId),
        {
          voterPlayerId,
          suspectPlayerId,
          roundNumber: prev.roundState.currentRound,
        },
      ];

      return {
        ...prev,
        roundState: {
          ...prev.roundState,
          votesInCurrentRound: updatedVotes,
        },
      };
    });
  };

  const processRoundVotingResults = (): { jailedPlayer: PlayerSession | null; tie: boolean } => {
    soundEngine.playJailSlam();
    const votes = state.roundState.votesInCurrentRound;
    const voteCounts: Record<string, number> = {};

    votes.forEach((v) => {
      voteCounts[v.suspectPlayerId] = (voteCounts[v.suspectPlayerId] || 0) + 1;
    });

    let maxVotes = 0;
    let jailedId: string | null = null;
    let tie = false;

    Object.entries(voteCounts).forEach(([suspectId, count]) => {
      if (count > maxVotes) {
        maxVotes = count;
        jailedId = suspectId;
        tie = false;
      } else if (count === maxVotes && count > 0) {
        tie = true;
      }
    });

    let jailedPlayer: PlayerSession | null = null;

    if (jailedId && !tie) {
      jailedPlayer = state.players.find((p) => p.id === jailedId) || null;
    }

    setState((prev) => {
      const updatedPlayers = prev.players.map((p) =>
        p.id === jailedId && !tie ? { ...p, isJailed: true } : p
      );

      let winner: 'innocents' | 'killer' | null = prev.gameWinner;

      // Win Condition Check
      if (jailedPlayer && jailedPlayer.role === 'killer') {
        winner = 'innocents';
      } else if (prev.roundState.currentRound >= prev.roundState.totalRounds) {
        winner = 'killer';
      }

      return {
        ...prev,
        players: updatedPlayers,
        gameWinner: winner,
        roundState: {
          ...prev.roundState,
          jailedPlayerThisRoundId: jailedId,
        },
      };
    });

    return { jailedPlayer, tie };
  };

  const advanceToNextRound = () => {
    soundEngine.playGavelStrike();
    setState((prev) => {
      if (!prev.caseData) return prev;
      const nextRound = prev.roundState.currentRound + 1;

      // If game has already ended or reached beyond total rounds
      if (prev.gameWinner || nextRound > prev.roundState.totalRounds) {
        return {
          ...prev,
          currentScreen: 'ending_reveal',
        };
      }

      // Unlock new evidence for the upcoming round
      const newRoundEvidence = prev.caseData.evidenceByRound[nextRound] || [];
      const newEvidenceIds = newRoundEvidence.map((e) => e.id);
      const combinedEvidenceIds = Array.from(
        new Set([...prev.roundState.unlockedEvidenceIds, ...newEvidenceIds])
      );

      return {
        ...prev,
        currentScreen: 'round_intro',
        roundState: {
          ...prev.roundState,
          currentRound: nextRound,
          unlockedEvidenceIds: combinedEvidenceIds,
          discussionTimeRemainingSeconds: settings.discussionTimeLimitMinutes * 60,
          discussionActive: false,
          votesInCurrentRound: [],
          jailedPlayerThisRoundId: null,
        },
      };
    });
  };

  const revealFinalVerdict = () => {
    soundEngine.playJailSlam();
    setState((prev) => ({
      ...prev,
      currentScreen: 'ending_reveal',
    }));
  };

  const resetGame = () => {
    soundEngine.playClick();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to clear stored session', e);
    }
    setState(initialGameState);
  };

  const activePlayer =
    state.players.length > 0 && state.activePassPlayerIndex < state.players.length
      ? state.players[state.activePassPlayerIndex]
      : null;

  return (
    <GameContext.Provider
      value={{
        state,
        settings,
        playerNames,
        selectedCaseForGame,
        setSelectedCaseForGame,
        selectCaseAndGoToPlayerSetup,
        setScreen,
        setLanguage,
        updateSettings,
        setPlayerNamesAndChooseCase,
        startInvestigation,
        nextPassPlayer,
        startRoundDiscussion,
        submitVote,
        processRoundVotingResults,
        advanceToNextRound,
        revealFinalVerdict,
        resetGame,
        activePlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
