/**
 * CRIME - Solved Cases LocalStorage Manager
 */

const SOLVED_CASES_KEY = 'CRIME_SOLVED_CASES_LIST';

export const getSolvedCaseIds = (): string[] => {
  try {
    const data = localStorage.getItem(SOLVED_CASES_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to read solved cases', e);
  }
  return [];
};

export const markCaseAsSolved = (caseId: string): void => {
  try {
    const existing = getSolvedCaseIds();
    if (!existing.includes(caseId)) {
      const updated = [...existing, caseId];
      localStorage.setItem(SOLVED_CASES_KEY, JSON.stringify(updated));
    }
  } catch (e) {
    console.error('Failed to mark case as solved', e);
  }
};

export const isCaseSolved = (caseId: string): boolean => {
  return getSolvedCaseIds().includes(caseId);
};
