/**
 * CRIME - Digital Investigation Dossier
 * Resolves the case to show on setup/briefing screens: the case the user
 * picked, or the default first case. Case packages are code-split, so the
 * default is lazy-loaded on demand.
 */

import { useEffect, useState } from 'react';
import { CaseModel } from '../../types/game';
import { useGame } from '../../context/GameContext';
import { loadCaseById } from '../../data/cases';

const DEFAULT_CASE_ID = 'file_001_last_heir';

export function useResolvedCase(): CaseModel | null {
  const { selectedCaseForGame } = useGame();
  const [defaultCase, setDefaultCase] = useState<CaseModel | null>(null);

  useEffect(() => {
    if (selectedCaseForGame) return;
    let live = true;
    loadCaseById(DEFAULT_CASE_ID).then((loaded) => {
      if (live && loaded) setDefaultCase(loaded);
    });
    return () => {
      live = false;
    };
  }, [selectedCaseForGame]);

  return selectedCaseForGame || defaultCase;
}
