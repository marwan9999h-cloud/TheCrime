/**
 * CASE 003 - "آخر رحلة"
 * Endings & Variants Configuration
 */

import { Language } from '../../../../types/game';

export interface CaseEndingConfig {
  killerTruth: {
    characterId: string;
    trueMotive: Record<Language, string>;
    howItWasDone: Record<Language, string>;
    flawInAlibi: Record<Language, string>;
  };
  winningStory: Record<Language, string>;
  losingStory: Record<Language, string>;
}

export const CASE_003_ENDING: CaseEndingConfig = {
  killerTruth: {
    characterId: 'char_shereef',
    trueMotive: {
      ar: 'كشفت التحقيقات الحقيقة الكاملة لجريمة اليخت نورس: استغل الجاني انشغال الجميع وتغيير مسار اليخت وسط البحر، وتسلل لغرفة القيادة حيث واجه كمال وسدد الضربة القاضية ثم عدّل ترتيب مسرح الجريمة مستغلاً حركة اليخت والظلام.',
      en: 'Investigation revealed the full truth: the killer exploited the course change and darkness in open sea, snuck into the bridge, struck Kamal, and disguised the crime scene.',
    },
    howItWasDone: {
      ar: 'تسلل لغرفة القيادة عند انحراف المسار، ونشبت المشادة وسدد الضربة المباشرة بالرأس ثم قام بتنسيق المكان لإظهار الجريمة كحادث تعثر.',
      en: 'Infiltrated the bridge during course shift, engaged in a confrontation, delivered the head blow, and rearranged the scene.',
    },
    flawInAlibi: {
      ar: 'التناقض الصغير في حجة الغياب (المتمثل في تسجيل الوقت وبصمة التواجد المادية بالجسرة) حسم الجريمة بشكل قاطع.',
      en: 'The small flaw in the alibi (time logs and physical trace at the bridge) exposed the killer beyond doubt.',
    },
  },
  winningStory: {
    ar: 'تم كشف الحقيقة الكاملة لجريمة "آخر رحلة"! أثبت فريق المحققين أن القاتل استغل انحراف اليخت لمدة 7 دقائق والظلام التام بعرض البحر، وتسلل لغرفة القيادة لارتكاب الجريمة. والتناقض الدقيق بين وقت الوفاة وسجلات الحركة أثبت التهمة على الجاني الحقيقي بشكل قاطع!',
    en: 'The truth of "Last Voyage" has been uncovered! Investigators proved the killer exploited the 7-minute route alteration and sea darkness to commit the crime on the bridge. Contradictions in the timeline conclusively convicted the killer!',
  },
  losingStory: {
    ar: 'فشل التحقيق في كشف الجاني الحقيقي! تم اتهام مشتبه به بريء بينما استغل القاتل ظلام البحر وإرباك المسار للتخلص من باقي المستندات والأدلة، ليهرب بجريمته كاملة فور وصول اليخت للشاطئ!',
    en: 'The investigation failed! An innocent suspect was blamed while the real killer disposed of incriminating documents in open sea, escaping justice upon docking!',
  },
};
