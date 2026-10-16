/**
 * CRIME - Social Deduction Mystery Game
 * Central Case Package Registry
 *
 * All case packages are registered here.
 */

import { CaseModel } from '../../types/game';
import { case001Package } from './packages/case001';
import { case002Package } from './packages/case002';
import { case003Package } from './packages/case003';
import { case004Package } from './packages/case004';
import { case005Package } from './packages/case005';
import { caseS02_001Package } from './packages/caseS02_001';

// Case Packages Registry (Active built cases)
export const CASE_PACKAGES: Record<string, CaseModel> = {
  [case001Package.id]: case001Package,
  [case002Package.id]: case002Package,
  [case003Package.id]: case003Package,
  [case004Package.id]: case004Package,
  [case005Package.id]: case005Package,
  [caseS02_001Package.id]: caseS02_001Package,
};

// All Cases List
export const ALL_CASES: CaseModel[] = Object.values(CASE_PACKAGES);

// Retrieve Case by ID
export const getCaseById = (id: string): CaseModel | undefined => {
  return CASE_PACKAGES[id];
};

// Retrieve Cases belonging to a specific Season
export const getCasesBySeason = (seasonCategoryKey: string): CaseModel[] => {
  return ALL_CASES.filter((c) => (c.seasonCategory || 'murder') === seasonCategoryKey && !c.isLocked);
};
