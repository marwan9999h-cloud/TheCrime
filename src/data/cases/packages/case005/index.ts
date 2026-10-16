/**
 * CASE 005 - "المكالمة الأخيرة"
 * Dynamic Multi-Killer Case Package Entry Point
 */

import { createDynamicCasePackage } from '../../caseEngine';
import { CASE_005_METADATA } from './metadata';
import { CASE_005_CHARACTERS } from './characters';
import { CASE_005_SCENARIOS } from './scenarios';

export const case005Package = createDynamicCasePackage({
  metadata: CASE_005_METADATA,
  allCharacters: CASE_005_CHARACTERS,
  scenarios: CASE_005_SCENARIOS,
  seasonCategory: 'murder',
  defaultScenarioKey: 'char_layla',
});

export default case005Package;
