/**
 * CRIME - Social Deduction Mystery Game
 * Central Case Package Registry
 *
 * Holds lightweight case metadata for browsing screens. The full case
 * packages (characters, scenarios, evidence - the heavy data) are
 * code-split and lazy-loaded only when a case is actually launched,
 * keeping them out of the initial bundle.
 */

import { CaseMeta, CaseModel } from '../../types/game';

interface CaseEntry {
  meta: CaseMeta;
  load: () => Promise<CaseModel>;
}

const CASE_REGISTRY: CaseEntry[] = [
  {
    meta: {
      id: 'file_001_last_heir',
      fileNumber: '001',
      seasonCategory: 'murder',
      title: { ar: 'الوريث الأخير', en: 'الوريث الأخير' },
      tagline: {
        ar: 'مقتل المليونير عثمان الألفي داخل مكتبه المغلق بـ جاردن سيتي... ٤ مشتبه بهم، أسرار عائلية، ووريث واحد حقيقي.',
        en: 'Murder of Osman El-Alfy inside his locked office at Garden City mansion... 4 suspects, family secrets, and one true heir.',
      },
      difficulty: 'medium',
      estimatedMinutes: 35,
    },
    load: () => import('./packages/case001').then((m) => m.case001Package),
  },
  {
    meta: {
      id: 'file_002_zamalek_night',
      fileNumber: 'FILE 002',
      seasonCategory: 'murder',
      title: { ar: '🏛️ ليلة فيلا الزمالك', en: '🏛️ Night at Zamalek Villa' },
      tagline: {
        ar: 'مقتل المنتج الفني ياسين مراد في غرفة الموسيقى بفيلا الزمالك أثناء ٥٨ ثانية فقط من انقطاع الكهرباء الكامل... ٤ مشتبه بهم، شهادات متناقضة، وهاتف مفقود.',
        en: 'Murder of producer Yassin Mourad in the music room during a 58-second blackout... 4 suspects, conflicting testimonies, and a missing phone.',
      },
      difficulty: 'hard',
      estimatedMinutes: 45,
    },
    load: () => import('./packages/case002').then((m) => m.case002Package),
  },
  {
    meta: {
      id: 'file_003_last_voyage',
      fileNumber: 'FILE 003',
      seasonCategory: 'murder',
      title: { ar: 'آخر رحلة', en: 'Last Voyage' },
      tagline: {
        ar: 'مقتل القبطان كمال الديب داخل غرفة قيادة اليخت "نورس" بمنتصف الليل قبالة ساحل الإسكندرية... ٤ مشتبه بهم، مسار معدّل، وأسرار غارقة.',
        en: 'Murder of Captain Kamal El-Deeb on yacht "Nawras" off Alexandria coast... 4 suspects, altered course, and sunken secrets.',
      },
      difficulty: 'monster',
      estimatedMinutes: 50,
    },
    load: () => import('./packages/case003').then((m) => m.case003Package),
  },
  {
    meta: {
      id: 'file_004_seventh_floor',
      fileNumber: 'FILE 004',
      seasonCategory: 'murder',
      title: { ar: '🏢 الطابق السابع', en: '🏢 Seventh Floor' },
      tagline: {
        ar: 'مدير تنفيذي يُعثر عليه ميتًا داخل مكتبه المغلق ببرج الشركات...',
        en: 'CEO found dead in his locked 7th floor corporate office...',
      },
      difficulty: 'medium',
      estimatedMinutes: 35,
    },
    load: () => import('./packages/case004').then((m) => m.case004Package),
  },
  {
    meta: {
      id: 'file_005_last_call',
      fileNumber: 'FILE 005',
      seasonCategory: 'murder',
      title: { ar: '🎬 المكالمة الأخيرة', en: '🎬 The Last Call' },
      tagline: {
        ar: 'جريمة قتل غامضة في موقع تصوير برنامج مباشر على الهواء، حيث الوقت ليس كما يبدو...',
        en: 'A mysterious murder on a live broadcast studio set, where time is not what it seems...',
      },
      difficulty: 'medium',
      estimatedMinutes: 35,
    },
    load: () => import('./packages/case005').then((m) => m.case005Package),
  },
  {
    meta: {
      id: 's02_file_001_bank_heist',
      fileNumber: 'FILE 001',
      seasonCategory: 'theft',
      title: { ar: 'مليون في 15 دقيقة', en: 'مليون في 15 دقيقة' },
      tagline: {
        ar: 'سطو مسلح سريع، أنظمة معطلة، ومليون جنيه اختفت بمساعدة خائن من داخل البنك.',
        en: 'سطو مسلح سريع، أنظمة معطلة، ومليون جنيه اختفت بمساعدة خائن من داخل البنك.',
      },
      difficulty: 'hard',
      estimatedMinutes: 35,
    },
    load: () => import('./packages/caseS02_001').then((m) => m.caseS02_001Package),
  },
];

// All case metadata (browsing lists, season counts)
export const CASE_METAS: CaseMeta[] = CASE_REGISTRY.map((entry) => entry.meta);

// Retrieve case metadata by ID
export const getCaseMetaById = (id: string): CaseMeta | undefined =>
  CASE_METAS.find((c) => c.id === id);

// Retrieve case metadata belonging to a specific Season
export const getCaseMetasBySeason = (seasonCategoryKey: string): CaseMeta[] =>
  CASE_METAS.filter((c) => (c.seasonCategory || 'murder') === seasonCategoryKey && !c.isLocked);

/**
 * Lazy-load the full case package on demand. Each package is its own
 * code-split chunk, fetched only when the case is actually launched.
 */
export const loadCaseById = async (id: string): Promise<CaseModel | undefined> => {
  const entry = CASE_REGISTRY.find((e) => e.meta.id === id);
  return entry ? entry.load() : undefined;
};
