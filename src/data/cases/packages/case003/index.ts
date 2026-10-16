/**
 * CASE 003 - "آخر رحلة"
 * Dynamic Multi-Killer Case Package Entry Point
 */

import { createDynamicCasePackage } from '../../caseEngine';
import { CASE_003_METADATA } from './metadata';
import { CASE_003_CHARACTERS } from './characters';
import { CASE_003_SCENARIOS } from './scenarios';

export const case003Package = createDynamicCasePackage({
  metadata: CASE_003_METADATA,
  allCharacters: CASE_003_CHARACTERS,
  scenarios: CASE_003_SCENARIOS,
  seasonCategory: 'murder',
  defaultScenarioKey: 'char_shereef',
});

export default case003Package;
