/**
 * CASE 001 - "الوريث الأخير"
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

export const CASE_001_METADATA: CasePackageMetadata = {
  id: 'file_001_last_heir',
  fileNumber: '001',
  title: {
    ar: 'الوريث الأخير',
    en: 'الوريث الأخير',
  },
  tagline: {
    ar: 'مقتل المليونير عثمان الألفي داخل مكتبه المغلق بـ جاردن سيتي... ٤ مشتبه بهم، أسرار عائلية، ووريث واحد حقيقي.',
    en: 'Murder of Osman El-Alfy inside his locked office at Garden City mansion... 4 suspects, family secrets, and one true heir.',
  },
  difficulty: 'medium',
  minPlayers: 4,
  maxPlayers: 4,
  estimatedMinutes: 35,
  coverImage: '/assets/cases/mansion.jpg',
  synopsis: {
    ar: 'بعد سنوات من الخلافات العائلية، يجمع رجل الأعمال عثمان الألفي أفراد عائلته وأقرب مساعديه داخل قصره في جاردن سيتي لإعلان قرار سيغيّر مستقبل إمبراطوريته المالية. قبل دقائق من توقيع الوصية الجديدة، يُعثر عليه ميتًا داخل مكتبه المغلق. لم يغادر أحد القصر، ولم يدخل أي شخص من الخارج. كل من في القصر لديه سبب يجعله مشتبهًا به... والقاتل ما زال بينكم.',
    en: 'After years of family disputes, businessman Osman El-Alfy gathers his family and closest aides inside his Garden City mansion to announce a decision that will alter his financial empire forever. Minutes before signing the new will, he is found dead inside his locked office. No one left the mansion, and no outsider entered. Everyone inside has a motive... and the killer is still among you.',
  },
  victim: {
    name: {
      ar: 'عثمان الألفي',
      en: 'عثمان الألفي',
    },
    title: {
      ar: 'رجل أعمال ورئيس إمبراطورية الألفي المالية',
      en: 'Businessman & Head of El-Alfy Empire',
    },
    avatar: '🏰',
    causeOfDeath: {
      ar: 'تسمم حاد بمادة السيانيد القاتلة داخل مشروبه الخاص',
      en: 'Acute cyanide poisoning in his private drink',
    },
    timeOfDeath: '١٠:٤٥ مساءً - ١١:٠٠ مساءً',
    location: {
      ar: 'المكتب الخاص المغلق - قصر جاردن سيتي',
      en: 'Locked Private Office - Garden City Mansion',
    },
    background: {
      ar: 'رجل أعمال عصامي وصارم، جمع عائلته والمساعدين لإعلان قرار الوصية الشاملة التي تغير ملامح ثروته.',
      en: 'Self-made patriarch who summoned his family and aides to sign a game-changing new will.',
    },
  },
};
