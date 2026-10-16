/**
 * CASE 003 - "آخر رحلة"
 * Timeline Configuration
 */

import { CaseTimelineItem } from '../../../../types/game';

export const CASE_003_TIMELINE: CaseTimelineItem[] = [
  {
    time: '11:05 مساءً',
    event: {
      ar: 'كمال يكتب مسودة الرسالة على هاتف المحمول محذراً من التهديد الذي يواجهه.',
      en: 'Kamal writes the unsent draft on his mobile warning of impending danger.',
    },
    location: {
      ar: 'غرفة القيادة والجسرة',
      en: 'Yacht Bridge',
    },
    significance: {
      ar: 'شعور كمال بالخطر وشروعه في كشف السر.',
      en: 'Kamal senses danger before crime.',
    },
  },
  {
    time: '11:09 مساءً',
    event: {
      ar: 'كمال يجري مكالمة لاسلكية قصيرة لمدة 17 ثانية فقط مع جهة مجهولة.',
      en: 'Kamal makes a brief 17-second radio call to an unknown party.',
    },
    location: {
      ar: 'غرفة القيادة والجسرة',
      en: 'Yacht Bridge',
    },
    significance: {
      ar: 'آخر اتصال مسجل للقبطان.',
      en: 'Last recorded call.',
    },
  },
  {
    time: '11:15 - 11:18 مساءً',
    event: {
      ar: 'فتح باب غرفة المحركات وتسريب ضغط الوقود جزئياً مع رصد تحركات مريبة بالمرور.',
      en: 'Engine room access sensor triggers and fuel pressure drops.',
    },
    location: {
      ar: 'غرفة المحركات والممر',
      en: 'Engine Room & Passageway',
    },
    significance: {
      ar: 'بداية التجهيز الميكانيكي وتعطيل الحركة.',
      en: 'Engine stall preparation.',
    },
  },
  {
    time: '11:20 - 11:27 مساءً',
    event: {
      ar: 'اليخت يغير اتجاهه لمدة 7 دقائق وسط الظلام والتأرجح بعرض البحر.',
      en: 'Yacht alters course for 7 minutes in open water.',
    },
    location: {
      ar: 'عرض البحر قبالة الإسكندرية',
      en: 'Open Sea off Alexandria',
    },
    significance: {
      ar: 'الانحراف المسجل والتوجه للمنطقة المستهدفة.',
      en: 'Course alteration window.',
    },
  },
  {
    time: '11:21 مساءً',
    event: {
      ar: 'التقاط صورة الظل بالممر المؤدي لغرفة القيادة وسماع صوت المواجهة بإنتركم الجسرة.',
      en: 'Camera captures shadow in bridge corridor; intercom records struggle.',
    },
    location: {
      ar: 'الممر وغرفة القيادة',
      en: 'Corridor & Bridge',
    },
    significance: {
      ar: 'توقيت المواجهة الحاسمة والجريمة.',
      en: 'Fatal confrontation.',
    },
  },
  {
    time: '11:32 مساءً',
    event: {
      ar: 'القبطان كمال يتوقف كلياً عن الرد واكتشاف الجثة داخل غرفة القيادة والباب مفتوح.',
      en: 'Kamal stops responding; body discovered inside the bridge with open door.',
    },
    location: {
      ar: 'غرفة القيادة والجسرة',
      en: 'Yacht Bridge',
    },
    significance: {
      ar: 'اكتشاف الوفاة واشتعال الشكوك بين الجميع.',
      en: 'Body discovery.',
    },
  },
];
