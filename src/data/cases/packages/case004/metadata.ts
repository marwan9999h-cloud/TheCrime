/**
 * CASE 004 - "الطابق السابع"
 * Metadata & Victim Info
 */

import { CaseModel } from '../../../../types/game';

export const CASE_004_METADATA: Omit<
  CaseModel,
  'allCharacters' | 'evidenceByRound' | 'killerTruth' | 'winningStory' | 'losingStory'
> = {
  id: 'file_004_seventh_floor',
  fileNumber: 'FILE 004',
  seasonCategory: 'murder',
  title: {
    ar: '🏢 الطابق السابع',
    en: '🏢 Seventh Floor',
  },
  tagline: {
    ar: 'مدير تنفيذي يُعثر عليه ميتًا داخل مكتبه المغلق ببرج الشركات...',
    en: 'CEO found dead in his locked 7th floor corporate office...',
  },
  difficulty: 'medium',
  minPlayers: 4,
  maxPlayers: 4,
  estimatedMinutes: 35,
  coverImage: '/assets/cases/office.jpg',
  isLocked: false,
  synopsis: {
    ar: 'مدير تنفيذي يُعثر عليه ميتًا داخل مكتبه في الطابق السابع. سجلات الشركة وكاميراتها لا تتفق على ما حدث في آخر دقائق من حياته.',
    en: 'A CEO is found dead inside his 7th floor office. Company logs and CCTV timestamps contradict the final minutes of his life.',
  },
  victim: {
    name: { ar: 'ياسر نجيب', en: 'Yasser Nageeb' },
    title: { ar: 'المدير التنفيذي لشركة أفق للاستثمار', en: 'CEO of Ofok Investments' },
    avatar: '👔',
    causeOfDeath: {
      ar: 'اعتداء بجسم صلب على الرأس داخل المكتب المغلق',
      en: 'Blunt force trauma to the head inside locked office',
    },
    timeOfDeath: '٠٨:٣٠ مساءً',
    location: {
      ar: 'الطابق السابع — مكتب المدير التنفيذي',
      en: '7th Floor — CEO Office',
    },
    background: {
      ar: 'مدير صارم ومسيطر. قبل مقتله كان يجهز قرارات فصل، تقارير تحقيق داخلي، وتصفية حسابات ومستندات صفقات استثمارية.',
      en: 'Strict and controlling CEO. Prior to his murder, he was preparing termination notices, internal audit reports, and investment deal liquidations.',
    },
  },
};
