/**
 * CRIME - Social Deduction Mystery Game
 * Global Type Definitions
 */

export type Language = 'en' | 'ar';

export type DifficultyLevel =
  | 'easy'
  | 'medium'
  | 'hard'
  | 'monster'
  | 'beginner'
  | 'detective'
  | 'mastermind';

export type EvidenceType =
  | 'audio'
  | 'cctv'
  | 'photo'
  | 'document'
  | 'forensic'
  | 'witness'
  | 'message';

export type PlayerRole = 'innocent' | 'killer';

export type GameScreen =
  | 'home'
  | 'case_selection'
  | 'case_archive'
  | 'player_setup'
  | 'case_briefing'
  | 'crime_info'
  | 'pass_device'
  | 'secret_briefing'
  | 'round_intro'
  | 'evidence_board'
  | 'discussion'
  | 'voting'
  | 'vote_results'
  | 'jail_statement'
  | 'ending_reveal'
  | 'how_to_play'
  | 'settings';

export interface SecretObjective {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  suspicionRisk: Record<Language, string>;
}

export interface CharacterCard {
  id: string;
  name: Record<Language, string>; // Role name (e.g. "الابن الأكبر", "المدير المالي")
  title: Record<Language, string>; // Job or family title / Role descriptor
  role?: Record<Language, string>; // Character Role in the case
  avatar: string;
  bio: Record<Language, string>;
  relationshipToVictim: Record<Language, string>;
  publicAlibi: Record<Language, string>;
  motive: Record<Language, string>;
  secrets: {
    innocentSecret?: Record<Language, string>;
    killerSecret?: Record<Language, string>;
  };
  killerTruth?: {
    characterId: string;
    trueMotive: Record<Language, string>;
    howItWasDone: Record<Language, string>;
    flawInAlibi: Record<Language, string>;
  };
  secretObjective: SecretObjective;
}

export interface EvidenceItem {
  id: string;
  roundNumber: number;
  type: EvidenceType;
  title: Record<Language, string>;
  description: Record<Language, string>;
  detailedContent: Record<Language, string>;
  mediaUrl?: string; // Image path or audio sound preset identifier
  audioDurationSeconds?: number;
  transcription?: Record<Language, string>;
  implicatedCharacterIds: string[];
  isRedHerring: boolean;
  detectiveAnalysis: Record<Language, string>;
}

export interface CaseVictim {
  name: Record<Language, string>;
  title: Record<Language, string>;
  avatar: string;
  causeOfDeath: Record<Language, string>;
  timeOfDeath: string;
  location: Record<Language, string>;
  background: Record<Language, string>;
}

export interface CaseTimelineItem {
  time: string;
  location: Record<Language, string>;
  event: Record<Language, string>;
  significance: Record<Language, string>;
}

export interface CaseVariant {
  versionId: 'A' | 'B' | 'C' | string;
  versionTitle?: Record<Language, string>;
  killerTruth: {
    characterId: string;
    trueMotive: Record<Language, string>;
    howItWasDone: Record<Language, string>;
    flawInAlibi: Record<Language, string>;
  };
  evidenceByRound?: Record<number, EvidenceItem[]>;
  winningStory?: Record<Language, string>;
  losingStory?: Record<Language, string>;
}

export interface CaseModel {
  id: string;
  fileNumber: string; // e.g. "FILE 001"
  seasonCategory?: string; // e.g. "murder", "theft"
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  difficulty: DifficultyLevel;
  minPlayers: number;
  maxPlayers: number;
  estimatedMinutes: number;
  coverImage: string;
  synopsis: Record<Language, string>;
  victim: CaseVictim;
  allCharacters: CharacterCard[];
  evidenceByRound: Record<number, EvidenceItem[]>;
  timeline?: CaseTimelineItem[];
  killerTruth: {
    characterId: string;
    trueMotive: Record<Language, string>;
    howItWasDone: Record<Language, string>;
    flawInAlibi: Record<Language, string>;
  };
  winningStory: Record<Language, string>;
  losingStory: Record<Language, string>;
  // Replay System Architecture (Multiple Hidden Solutions: Version A, B, C)
  activeVariantId?: string;
  availableVariants?: CaseVariant[];
  isLocked?: boolean;
}

export interface PlayerSession {
  id: string;
  seatNumber: number;
  displayName: string;
  characterId: string;
  role: PlayerRole;
  isJailed: boolean;
  secretObjectiveCompleted?: boolean;
}

export interface VoteRecord {
  voterPlayerId: string;
  suspectPlayerId: string;
  roundNumber: number;
}

export interface RoundState {
  currentRound: number;
  totalRounds: number;
  discussionTimeRemainingSeconds: number;
  discussionActive: boolean;
  unlockedEvidenceIds: string[];
  votesInCurrentRound: VoteRecord[];
  jailedPlayerThisRoundId?: string | null;
  jail15SecSpeakerActive?: boolean;
}

export interface GameSettings {
  language: Language;
  soundEnabled: boolean;
  musicEnabled: boolean;
  masterVolume: number;
  discussionTimeLimitMinutes: number;
  enable15SecJailRule: boolean;
}

export interface GameState {
  caseData: CaseModel | null;
  difficulty: DifficultyLevel;
  players: PlayerSession[];
  currentScreen: GameScreen;
  activePassPlayerIndex: number;
  roundState: RoundState;
  gameWinner: 'innocents' | 'killer' | null;
  gameHistory: {
    eliminatedPlayerIds: string[];
    roundSummaries: Array<{
      round: number;
      jailedPlayerId?: string;
      evidenceRevealedIds: string[];
    }>;
  };
}
