/**
 * CASE 001 - "الوريث الأخير"
 * Package Reconstruction Timeline Component
 */

import { CaseTimelineItem } from '../../../../types/game';

export const CASE_001_TIMELINE: CaseTimelineItem[] = [
  {
    time: '١٠:٣٠ مساءً',
    location: { ar: 'الصالون الرئيسي - قصر جاردن سيتي', en: 'Main Parlor - Garden City Mansion' },
    event: { ar: 'بداية الاجتماع العائلي المغلق وإعلان عثمان عن نية تعديل الوصية.', en: 'Start of the closed family meeting and Osman\'s announcement to amend the will.' },
    significance: { ar: 'اشتعال الخلافات والذعر بين جميع أفراد العائلة والمساعدين.', en: 'Eruption of disputes and panic among family members and aides.' },
  },
  {
    time: '١٠:٤٥ مساءً',
    location: { ar: 'المكتب الخاص المغلق', en: 'Private Locked Office' },
    event: { ar: 'انفراد عثمان بالمدير المالي لإعداد الملفات المالية والمسودة.', en: 'Osman meets privately with CFO to draft financial clauses.' },
    significance: { ar: 'بدء صياغة البنود وتحضير الكأس الكريستالي للمشروب المسائي.', en: 'Drafting initial clauses and preparing the evening crystal drink.' },
  },
  {
    time: '١٠:٤٨ - ١٠:٥٠ مساءً',
    location: { ar: 'ممرات القصر والشرفة الجانبية', en: 'Mansion Corridors & Side Patio' },
    event: { ar: 'تحركات متقاطعة لـ مديرة المؤسسة، الابن الأصغر، والابن الأكبر حول ممرات المكتب والمشروبات.', en: 'Crossing movements by Foundation Director, Youngest Son, and Eldest Son around office corridors and drinks.' },
    significance: { ar: 'تزايد الشكوك حول الجميع ومواجهتهم لعثمان في نفس الليلة (Twist 1).', en: 'Heightened suspicion as everyone confronted Osman that same night (Twist 1).' },
  },
  {
    time: '١٠:٥٢ مساءً',
    location: { ar: 'المكتب الخاص المغلق', en: 'Private Locked Office' },
    event: { ar: 'دخول الابن الأكبر وانفراده بعثمان لخمس دقائق حاسمة.', en: 'Eldest Son enters for a critical 5-minute private confrontation with Osman.' },
    significance: { ar: 'النافذة الزمنية القاتلة ودس السيانيد داخل الكأس الكريستالي.', en: 'The lethal time window and slipping cyanide into the crystal glass.' },
  },
  {
    time: '١١:٠٠ مساءً',
    location: { ar: 'المكتب الخاص المغلق', en: 'Private Locked Office' },
    event: { ar: 'العثور على جثة عثمان ميتًا وإغلاق القصر ومنع الخروج تماماً.', en: 'Discovery of Osman\'s body, total mansion lockdown, and start of investigation.' },
    significance: { ar: 'حصر الجريمة داخل القصر وفتح مستندات التحقيق الجنائي.', en: 'Confirming an inside job and opening official murder files.' },
  },
];
