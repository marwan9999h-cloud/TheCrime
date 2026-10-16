/**
 * CASE 004 - "الطابق السابع"
 * Dynamic Multi-Killer Case Package Entry Point
 */

import { createDynamicCasePackage } from '../../caseEngine';
import { CASE_004_METADATA } from './metadata';
import { CASE_004_CHARACTERS } from './characters';
import { CASE_004_SCENARIOS } from './scenarios';

export const case004Package = createDynamicCasePackage({
  metadata: CASE_004_METADATA,
  allCharacters: CASE_004_CHARACTERS,
  scenarios: CASE_004_SCENARIOS,
  seasonCategory: 'murder',
  defaultScenarioKey: 'karim',
});

export default case004Package;
