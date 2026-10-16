/**
 * CASE 006 - "العشاء الأخير"
 * Season 1 - Homicide File #006 (Locked Placeholder)
 */

import { CaseModel } from '../../../../types/game';

export const case006Package: CaseModel = {
  id: 'file_006_last_supper',
  fileNumber: 'FILE 006',
  title: {
    ar: '🍽️ العشاء الأخير',
    en: '🍽️ العشاء الأخير',
  },
  tagline: {
    ar: 'حالة تسميم جماعي مفاجئة في مأدبة عشاء دبلوماسية... (قيد الإعداد والكتابة)',
    en: 'Locked case under development',
  },
  difficulty: 'monster',
  minPlayers: 4,
  maxPlayers: 4,
  estimatedMinutes: 40,
  coverImage: '/assets/cases/supper.jpg',
  isLocked: true,
  synopsis: {
    ar: 'ملف مغلق قيد كتابة السيناريو والحوارات من قبل الكاتب... قريباً.',
    en: 'Case file locked pending story integration.',
  },
  victim: {
    name: { ar: 'السفير حازم', en: 'Ambassador Hazem' },
    title: { ar: 'دبلوماسي سابق', en: 'Former Diplomat' },
    avatar: '🍽️',
    causeOfDeath: { ar: 'تسميم حاد', en: 'Acute Poisoning' },
    timeOfDeath: '٠٩:٣٠ مساءً',
    location: { ar: 'قاعة المأدبات الكبرى', en: 'Grand Banquet Hall' },
    background: { ar: 'ملف محمي', en: 'Protected file' },
  },
  allCharacters: [],
  evidenceByRound: { 1: [], 2: [], 3: [] },
  killerTruth: {
    characterId: '',
    trueMotive: { ar: '', en: '' },
    howItWasDone: { ar: '', en: '' },
    flawInAlibi: { ar: '', en: '' },
  },
  winningStory: { ar: '', en: '' },
  losingStory: { ar: '', en: '' },
};

export default case006Package;
