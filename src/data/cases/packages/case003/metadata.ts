/**
 * CASE 003 - "آخر رحلة"
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

export const CASE_003_METADATA: CasePackageMetadata = {
  id: 'file_003_last_voyage',
  fileNumber: 'FILE 003',
  title: {
    ar: 'آخر رحلة',
    en: 'Last Voyage',
  },
  tagline: {
    ar: 'مقتل القبطان كمال الديب داخل غرفة قيادة اليخت "نورس" بمنتصف الليل قبالة ساحل الإسكندرية... ٤ مشتبه بهم، مسار معدّل، وأسرار غارقة.',
    en: 'Murder of Captain Kamal El-Deeb on yacht "Nawras" off Alexandria coast... 4 suspects, altered course, and sunken secrets.',
  },
  difficulty: 'monster',
  minPlayers: 4,
  maxPlayers: 4,
  estimatedMinutes: 50,
  coverImage: '/assets/cases/yacht.jpg',
  synopsis: {
    ar: 'الساعة 11:32 مساءً. اليخت الخاص "نورس" يبحر بعيدًا عن ساحل الإسكندرية في رحلة خاصة على متنه ستة أشخاص بالإضافة للقبطان كمال الديب. أثناء الليل، يتوقف القبطان عن الرد على جهاز الاتصال، ثم يُعثر عليه ميتًا داخل غرفة القيادة. باب الغرفة مفتوح، لا توجد آثار اقتحام، والكرسي خالٍ. البحر حولهم مظلم، والقاتل ما زال على متن اليخت!',
    en: 'At 11:32 PM, private yacht "Nawras" sails off Alexandria with six guests and Captain Kamal El-Deeb. During the night, the captain stops answering the radio, then is found dead inside the bridge. The door is open with no forced entry. The sea is pitch black, and the killer remains on board!',
  },
  victim: {
    name: {
      ar: 'كمال الديب',
      en: 'Kamal El-Deeb',
    },
    title: {
      ar: 'قبطان اليخت ومالكه (57 سنة)',
      en: 'Yacht Captain & Owner (57)',
    },
    avatar: '🚢',
    causeOfDeath: {
      ar: 'إصابة بالرأس وتسمم بجرعة منومة حادة، مع إخفاء مسرح الجريمة واستغلال حركة اليخت',
      en: 'Head trauma and severe sedative poisoning, disguised using yacht movement',
    },
    timeOfDeath: '11:15 مساءً - 11:30 مساءً',
    location: {
      ar: 'غرفة القيادة - اليخت نورس',
      en: 'The Bridge - Yacht Nawras',
    },
    background: {
      ar: 'قبطان معروف في عالم الرحلات البحرية الخاصة. هادئ ومحترم أمام الناس لكنه كان يعرف أسرارًا خطيرة عن المتواجدين باليخت ويهدد أحدهم بكشف سره.',
      en: 'Respected captain who held dangerous secrets about the guests on board and threatened to expose one of them.',
    },
  },
};
