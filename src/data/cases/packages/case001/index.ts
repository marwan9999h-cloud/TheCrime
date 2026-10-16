/**
 * CASE 001 - "الوريث الأخير"
 * Dynamic Multi-Killer Case Package Entry Point
 */

import { createDynamicCasePackage } from '../../caseEngine';
import { CASE_001_METADATA } from './metadata';
import { CASE_001_CHARACTERS } from './characters';
import { CASE_001_SCENARIOS } from './scenarios';

export const case001Package = createDynamicCasePackage({
  metadata: CASE_001_METADATA,
  allCharacters: CASE_001_CHARACTERS,
  scenarios: CASE_001_SCENARIOS,
  seasonCategory: 'murder',
  defaultScenarioKey: 'char_tariq',
});

export default case001Package;
