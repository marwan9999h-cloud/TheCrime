/**
 * CASE 005 - "المكالمة الأخيرة"
 * Default Timeline
 */

import { CaseTimelineItem } from '../../../../types/game';

export const CASE_005_TIMELINE: CaseTimelineItem[] = [
  {
    time: '١٠:٣٠ مساءً',
    location: { ar: 'الاستوديو الرئيسي', en: 'Main Studio Floor' },
    event: {
      ar: 'بدء البث المباشر لفقرة البرنامج في الاستوديو الرئيسي بحضور جميع أفراد الطاقم.',
      en: 'Live show segment commences in main studio floor with full crew present.',
    },
    significance: {
      ar: 'انطلاق حلقة البرنامج على الهواء ومراقبة التايم كود.',
      en: 'Show segment launch and timecode tracking start.',
    },
  },
  {
    time: '١٠:٣٨ مساءً',
    location: { ar: 'ممر الكواليس', en: 'Backstage Corridor' },
    event: {
      ar: 'مشادة كلامية سريعة وخافضة الصوت عند الممر بين رامي وطاقم العمل قبل نهاية الإعلانات.',
      en: 'Brief hushed argument in hallway between Rami and crew members prior to commercial break.',
    },
    significance: {
      ar: 'توتر العلاقات والتهديدات المتبادلة قبيل الجريمة.',
      en: 'Friction and escalated tension right before the attack.',
    },
  },
  {
    time: '١٠:٤٢ مساءً',
    location: { ar: 'أرضية الاستوديو', en: 'Studio Floor' },
    event: {
      ar: 'رامي يقف خلف الكاميرا الرئيسية ويتلفظ بعبارته الشهيرة عبر الميكروفون المفتوح.',
      en: 'Rami stands behind main camera making his famous statement on open microphone.',
    },
    significance: {
      ar: 'آخر تصريح رسمي لرامي قبل خروجه من الكادر.',
      en: 'Rami final public statement on live broadcast.',
    },
  },
  {
    time: '١٠:٤٣ مساءً',
    location: { ar: 'ممر غرفة الصوت', en: 'Audio Room Corridor' },
    event: {
      ar: 'رنين هاتف رامي وإجابته بصوت حاد ثم انسحابه السريع باتجاه غرفة التسجيل الصوتي.',
      en: 'Rami phone rings; he answers sharply and quickly exits toward audio room.',
    },
    significance: {
      ar: 'لحظة مغادرة رامي لكادر الكاميرا وتوجهه للغرفة المغلقة.',
      en: 'Rami exit from camera frame into the isolated audio room.',
    },
  },
  {
    time: '١٠:٤٥ مساءً',
    location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
    event: {
      ar: 'توقيت الاعتداء القاتل داخل غرفة التسجيل الصوتي انطلاقاً من التحليل الترددي ورصد التايم كود.',
      en: 'Fatal attack takes place inside audio recording room based on frequency timecode.',
    },
    significance: {
      ar: 'توقيت ارتكاب الجريمة الحقيقي بدقة.',
      en: 'Exact real timestamp of the murder.',
    },
  },
  {
    time: '١٠:٤٦ مساءً',
    location: { ar: 'غرفة التحكم والمونتاج', en: 'Control & Editing Booth' },
    event: {
      ar: 'حدوث التبديل والتلاعب بجدولة البث وسيرفر التشغيل المؤجل (Broadcast Delay Buffer).',
      en: 'Switching manipulation and delayed playback buffer adjustment occur on master console.',
    },
    significance: {
      ar: 'التلاعب التقني لتغطية مسرح الجريمة وتزويف التايم كود.',
      en: 'Technical manipulation altering timestamps and delay logs.',
    },
  },
  {
    time: '١٠:٥٢ مساءً',
    location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
    event: {
      ar: 'اكتشاف جثة رامي داخل غرفة التسجيل الصوتي وقطع البث المباشر واستدعاء أجهزة الأمن.',
      en: 'Rami body discovered in audio recording room; broadcast halted and police notified.',
    },
    significance: {
      ar: 'اكتشاف الجثة وإيقاف البث الرسمي للبرنامج.',
      en: 'Discovery of the crime scene and transmission shutdown.',
    },
  },
];
