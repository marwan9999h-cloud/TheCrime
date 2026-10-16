/**
 * CASE S02_001 - "مليون في 15 دقيقة"
 * Season 2: Theft & Heist Crimes - File #001
 * Dynamic Multi-Killer Case Package Entry Point
 */

import { createDynamicCasePackage } from '../../caseEngine';
import { CASE_S02_001_METADATA } from './metadata';
import { CASE_S02_001_CHARACTERS } from './characters';
import { CASE_S02_001_SCENARIOS } from './scenarios';

export const caseS02_001Package = createDynamicCasePackage({
  metadata: CASE_S02_001_METADATA,
  allCharacters: CASE_S02_001_CHARACTERS,
  scenarios: CASE_S02_001_SCENARIOS,
  seasonCategory: 'theft',
  defaultScenarioKey: 'char_manager',
});

export default caseS02_001Package;
