/**
 * CASE 007 - "الغرفة 407"
 * Season 1 - Homicide File #007 (Locked Placeholder)
 */

import { CaseModel } from '../../../../types/game';

export const case007Package: CaseModel = {
  id: 'file_007_room_407',
  fileNumber: 'FILE 007',
  title: {
    ar: '🏨 الغرفة 407',
    en: '🏨 الغرفة 407',
  },
  tagline: {
    ar: 'لغز الغرفة المغلقة من الداخل في الفندق التاريخي... (قيد الإعداد والكتابة)',
    en: 'Locked case under development',
  },
  difficulty: 'monster',
  minPlayers: 4,
  maxPlayers: 4,
  estimatedMinutes: 45,
  coverImage: '/assets/cases/hotel.jpg',
  isLocked: true,
  synopsis: {
    ar: 'ملف مغلق قيد كتابة السيناريو والحوارات من قبل الكاتب... قريباً.',
    en: 'Case file locked pending story integration.',
  },
  victim: {
    name: { ar: 'مراد الألفي', en: 'Mourad El-Alfy' },
    title: { ar: 'نزيل الفندق', en: 'Hotel Guest' },
    avatar: '🏨',
    causeOfDeath: { ar: 'قيد التحقيق', en: 'Under investigation' },
    timeOfDeath: '٠٢:٠٠ صباحاً',
    location: { ar: 'غرفة 407 - الفندق الكبير', en: 'Room 407' },
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

export default case007Package;
