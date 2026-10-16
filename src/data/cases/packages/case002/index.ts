/**
 * CASE 002 - "ليلة فيلا الزمالك"
 * Dynamic Multi-Killer Case Package Entry Point
 */

import { createDynamicCasePackage } from '../../caseEngine';
import { CASE_002_METADATA } from './metadata';
import { CASE_002_CHARACTERS } from './characters';
import { CASE_002_SCENARIOS } from './scenarios';

export const case002Package = createDynamicCasePackage({
  metadata: CASE_002_METADATA,
  allCharacters: CASE_002_CHARACTERS,
  scenarios: CASE_002_SCENARIOS,
  seasonCategory: 'murder',
  defaultScenarioKey: 'char_adam',
});

export default case002Package;
