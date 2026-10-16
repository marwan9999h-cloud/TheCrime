/**
 * CASE 002 - "ليلة فيلا الزمالك"
 * Package Metadata Component
 */

import { CaseVictim, DifficultyLevel, Language } from '../../../../types/game';

export interface CasePackageMetadata {
  id: string;
  fileNumber: string;
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  difficulty: DifficultyLevel;
  minPlayers: number;
  maxPlayers: number;
  estimatedMinutes: number;
  coverImage: string;
  synopsis: Record<Language, string>;
  victim: CaseVictim;
}

export const CASE_002_METADATA: CasePackageMetadata = {
  id: 'file_002_zamalek_night',
  fileNumber: 'FILE 002',
  title: {
    ar: '🏛️ ليلة فيلا الزمالك',
    en: '🏛️ Night at Zamalek Villa',
  },
  tagline: {
    ar: 'مقتل المنتج الفني ياسين مراد في غرفة الموسيقى بفيلا الزمالك أثناء ٥٨ ثانية فقط من انقطاع الكهرباء الكامل... ٤ مشتبه بهم، شهادات متناقضة، وهاتف مفقود.',
    en: 'Murder of producer Yassin Mourad in the music room during a 58-second blackout... 4 suspects, conflicting testimonies, and a missing phone.',
  },
  difficulty: 'hard',
  minPlayers: 4,
  maxPlayers: 4,
  estimatedMinutes: 45,
  coverImage: '/assets/cases/zamalek.jpg',
  synopsis: {
    ar: 'الساعة ١١:٤٧ مساءً. فيلا قديمة في الزمالك تستضيف سهرة خاصة بمناسبة عودة ياسين مراد، صاحب شركة إنتاج فني، من دبي. السهرة تضم مجموعة صغيرة من أصدقائه وشركائه. في منتصف السهرة، تنقطع الكهرباء عن الفيلا بالكامل. ٥٨ ثانية فقط من الظلام. عندما تعود الكهرباء، يجد الجميع ياسين ملقى على أرضية غرفة الموسيقى ميتًا. الغريب أن باب الفيلا الرئيسي كان مراقبًا طوال الوقت، ولا أحد خرج من المنزل. والأغرب... أن كل واحد من الموجودين تقريبًا لديه قصة مختلفة عما حدث خلال الـ٥٨ ثانية.',
    en: 'At 11:47 PM, a private party at an old Zamalek villa celebrates film producer Yassin Mourad\'s return from Dubai. Mid-party, a complete blackout hits for exactly 58 seconds. When lights return, Yassin is found dead on the music room floor. The main door was guarded and no one left. Almost everyone has a different story of those 58 seconds in the dark.',
  },
  victim: {
    name: {
      ar: 'ياسين مراد',
      en: 'Yassin Mourad',
    },
    title: {
      ar: 'منتج فني وصاحب شركة إنتاج سينمائي',
      en: 'Film Producer & Production House Owner',
    },
    avatar: '🎬',
    causeOfDeath: {
      ar: 'ضربة قاتلة بآلة معدنية ثقيلة (مجسم نحاسي) على خلفية الرأس أثناء الظلام',
      en: 'Lethal blow to the back of the head with a heavy brass statue during the blackout',
    },
    timeOfDeath: '١١:٤٧ مساءً (خلال الـ٥٨ ثانية القاتلة)',
    location: {
      ar: 'غرفة الموسيقى - فيلا الزمالك',
      en: 'Music Room - Zamalek Villa',
    },
    background: {
      ar: 'منتج فني ناجح ومحبوب أمام الجمهور، لكنه كان يخفي صراعات مالية وعلاقات معقدة، وقبل انقطاع الكهرباء بدقائق أعلن: "الليلة هنعرف مين كان بيكذب عليا!"',
      en: 'A successful producer who announced minutes before the blackout: "Tonight we learn who\'s been lying to me!"',
    },
  },
};
