/**
 * CRIME - Social Deduction Mystery Game
 * Global Constants & Configurations
 */

import { GameSettings } from '../types/game';

export const APP_NAME = 'CRIME';
export const APP_VERSION = '1.0.0';

export const MIN_PLAYERS = 4;
export const MAX_PLAYERS = 6;
export const TOTAL_ROUNDS_DEFAULT = 3;

export const DEFAULT_GAME_SETTINGS: GameSettings = {
  language: 'en',
  soundEnabled: true,
  musicEnabled: true,
  masterVolume: 0.8,
  discussionTimeLimitMinutes: 3,
  enable15SecJailRule: true,
};

export const UI_COLORS = {
  bgDark: '#09090b',
  cardDark: 'rgba(18, 18, 22, 0.85)',
  accentRed: '#ef4444',
  accentGold: '#eab308',
  borderDark: 'rgba(255, 255, 255, 0.08)',
  textPrimary: '#f4f4f5',
  textSecondary: '#a1a1aa',
};

export const DIFFICULTY_PRESETS = {
  beginner: {
    label: { en: 'Novice Detective', ar: 'محقق مبتدئ' },
    description: {
      en: 'Clear clues with obvious connections. Ideal for first-time players.',
      ar: 'أدلة واضحة بروابط مباشرة. مثالي للعب لأول مرة.',
    },
    discussionMinutes: 4,
    badgeColor: 'bg-emerald-950/80 text-emerald-400 border-emerald-800',
  },
  detective: {
    label: { en: 'Senior Investigator', ar: 'محقق خبير' },
    description: {
      en: 'Balanced evidence with red herrings and overlapping secrets.',
      ar: 'أدلة متوازنة مع تضليل وأسرار متداخلة بين المشتبه بهم.',
    },
    discussionMinutes: 3,
    badgeColor: 'bg-amber-950/80 text-amber-400 border-amber-800',
  },
  mastermind: {
    label: { en: 'Mastermind', ar: 'عقل مدبر' },
    description: {
      en: 'Complex forensic trails and deep cover stories. Tight time limits.',
      ar: 'أدلة جنائية معقدة وروايات تمويهية عميقة. وقت نقاش محدد.',
    },
    discussionMinutes: 2,
    badgeColor: 'bg-red-950/80 text-red-400 border-red-800',
  },
};
