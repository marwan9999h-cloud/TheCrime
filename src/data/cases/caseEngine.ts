/**
 * CRIME - Social Deduction Mystery Game
 * Central Data-Driven Case Engine
 *
 * Provides generic factory & execution engine for Dynamic Multi-Killer Cases.
 * Eliminates duplicate generator code and case-specific if/else logic across packages.
 */

import {
  CaseModel,
  CharacterCard,
  PlayerRole,
  PlayerSession,
  CaseTimelineItem,
  EvidenceItem,
  Language,
} from '../../types/game';

export interface KillerScenarioDefinition {
  characterId: string;
  killerSecret: Record<Language, string>;
  killerTruth: {
    characterId: string;
    trueMotive: Record<Language, string>;
    howItWasDone: Record<Language, string>;
    flawInAlibi: Record<Language, string>;
  };
  evidenceByRound: Record<number, EvidenceItem[]>;
  timeline: CaseTimelineItem[];
  winningStory: Record<Language, string>;
  losingStory: Record<Language, string>;
}

export interface CasePackageConfig {
  metadata: any;
  allCharacters: CharacterCard[];
  scenarios: Record<string, KillerScenarioDefinition>;
  seasonCategory?: string;
  defaultScenarioKey?: string;
  isLocked?: boolean;
}

export interface DynamicSessionResult {
  caseModel: CaseModel;
  assignedPlayers: PlayerSession[];
  characterList: CharacterCard[];
  killerChar: CharacterCard;
}

/**
 * Utility array shuffling (Fisher-Yates)
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Creates a CaseModel package with embedded dynamic session generator.
 * Fully driven by data configurations without duplicating scenario logic.
 */
export function createDynamicCasePackage(config: CasePackageConfig): CaseModel & {
  generateDynamicSession?: (numPlayers: number, namesToUse?: string[]) => DynamicSessionResult;
} {
  const defaultKey = config.defaultScenarioKey || config.allCharacters[0]?.id || '';
  const defaultScenario = config.scenarios[defaultKey] || Object.values(config.scenarios)[0];

  const baseCaseModel: CaseModel & {
    generateDynamicSession?: (numPlayers: number, namesToUse?: string[]) => DynamicSessionResult;
  } = {
    seasonCategory: config.seasonCategory || 'murder',
    ...config.metadata,
    allCharacters: config.allCharacters,
    evidenceByRound: defaultScenario ? defaultScenario.evidenceByRound : { 1: [], 2: [], 3: [] },
    timeline: defaultScenario ? defaultScenario.timeline : [],
    killerTruth: defaultScenario
      ? defaultScenario.killerTruth
      : {
          characterId: '',
          trueMotive: { ar: '', en: '' },
          howItWasDone: { ar: '', en: '' },
          flawInAlibi: { ar: '', en: '' },
        },
    winningStory: defaultScenario ? defaultScenario.winningStory : { ar: '', en: '' },
    losingStory: defaultScenario ? defaultScenario.losingStory : { ar: '', en: '' },
    isLocked: config.isLocked || false,
  };

  baseCaseModel.generateDynamicSession = (numPlayers: number, namesToUse?: string[]): DynamicSessionResult => {
    const minP = config.metadata.minPlayers || 4;
    const maxP = config.metadata.maxPlayers || 4;
    const effectiveCount = Math.min(Math.max(numPlayers, minP), maxP);

    // 1. Randomly pick active characters subset based on player count
    const shuffledChars = shuffleArray([...config.allCharacters]);
    const activeChars = shuffledChars.slice(0, effectiveCount);

    // 2. Prepare player names
    const names =
      namesToUse && namesToUse.length >= effectiveCount
        ? namesToUse
        : Array.from({ length: effectiveCount }, (_, i) => `لاعب ${i + 1}`);

    // 3. Select killer index (random by default; matching exact literal name if specified)
    const targetNameIndex = names.findIndex((n) => n?.trim() === 'Somaia');
    const killerIndex =
      targetNameIndex !== -1 && targetNameIndex < activeChars.length
        ? targetNameIndex
        : Math.floor(Math.random() * activeChars.length);
    const killerChar = activeChars[killerIndex];

    // 4. Retrieve killer scenario from configuration map
    const scenario = config.scenarios[killerChar.id] || defaultScenario;

    // 5. Update active character cards with killer secrets/truth
    const characterList: CharacterCard[] = activeChars.map((char, index) => {
      const isKiller = index === killerIndex;
      return {
        ...char,
        secrets: {
          innocentSecret: char.secrets.innocentSecret,
          killerSecret: isKiller ? scenario.killerSecret : undefined,
        },
        killerTruth: isKiller ? scenario.killerTruth : undefined,
      };
    });

    // 6. Generate player sessions with names and assigned roles
    const assignedPlayers: PlayerSession[] = names.map((name, index) => {
      const char = characterList[index];
      const isKiller = index === killerIndex;
      return {
        id: `player_${index + 1}`,
        seatNumber: index + 1,
        displayName: name,
        characterId: char.id,
        role: (isKiller ? 'killer' : 'innocent') as PlayerRole,
        isJailed: false,
      };
    });

    // 6. Build final dynamic CaseModel for active game session
    const dynamicCaseModel: CaseModel = {
      seasonCategory: config.seasonCategory || 'murder',
      ...config.metadata,
      allCharacters: characterList,
      evidenceByRound: scenario.evidenceByRound,
      timeline: scenario.timeline,
      killerTruth: scenario.killerTruth,
      winningStory: scenario.winningStory,
      losingStory: scenario.losingStory,
      isLocked: config.isLocked || false,
    };

    return {
      caseModel: dynamicCaseModel,
      assignedPlayers,
      characterList,
      killerChar,
    };
  };

  return baseCaseModel;
}

/**
 * Universal runner function that executes dynamic session generation for any CaseModel.
 * Provides standard fallback if generateDynamicSession is absent.
 */
export function generateSessionForCase(
  caseModel: CaseModel,
  namesToUse: string[]
): { caseModel: CaseModel; assignedPlayers: PlayerSession[] } {
  if (typeof (caseModel as any).generateDynamicSession === 'function') {
    const result = (caseModel as any).generateDynamicSession(namesToUse.length, namesToUse);
    return {
      caseModel: result.caseModel,
      assignedPlayers: result.assignedPlayers,
    };
  }

  // Fallback engine execution
  const characterList = [...caseModel.allCharacters].slice(0, namesToUse.length);
  const targetNameIndex = namesToUse.findIndex((n) => n?.trim() === 'Somaia');
  const killerIndex =
    targetNameIndex !== -1 && targetNameIndex < characterList.length
      ? targetNameIndex
      : Math.floor(Math.random() * characterList.length);
  const chosenKillerChar = characterList[killerIndex];

  const assignedPlayers: PlayerSession[] = namesToUse.map((name, index) => {
    const char = characterList[index];
    const isKiller = index === killerIndex;
    return {
      id: `player_${index + 1}`,
      seatNumber: index + 1,
      displayName: name,
      characterId: char.id,
      role: (isKiller ? 'killer' : 'innocent') as PlayerRole,
      isJailed: false,
    };
  });

  const dynamicCaseModel: CaseModel = {
    ...caseModel,
    killerTruth: chosenKillerChar.killerTruth || caseModel.killerTruth,
  };

  return { caseModel: dynamicCaseModel, assignedPlayers };
}
