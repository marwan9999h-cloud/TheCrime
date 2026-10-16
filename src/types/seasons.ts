/**
 * CRIME - Social Deduction Mystery Game
 * Seasons & Expansion Package System Types
 */

import { Language } from './game';

export interface SeasonModel {
  id: string; // e.g. 'season_1'
  number: number; // 1 to 6
  title: Record<Language, string>;
  categoryKey: string; // 'murder' | 'theft' | 'missing' | 'fraud' | 'corporate' | 'special'
  icon: string;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  isUnlocked: boolean;
  releaseStatus: Record<Language, string>;
  caseIds: string[];
}
