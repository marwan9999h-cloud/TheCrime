/**
 * CASE 002 - "ليلة فيلا الزمالك"
 * Package Reconstruction Timeline Component
 */

import { CaseTimelineItem } from '../../../../types/game';

export const CASE_002_TIMELINE: CaseTimelineItem[] = [
  {
    time: '١١:٤٧:٠٢ مساءً',
    location: { ar: 'لوحة القاطع والفيلا بالكامل', en: 'Electrical Panel & Villa' },
    event: { ar: 'تنطفئ الأنوار بالكامل في الفيلا بسبب تعمد فصل القاطع الرئيسي.', en: 'Lights blackout completely across the villa as the main circuit breaker is manually tripped.' },
    significance: { ar: 'بداية الـ٥٨ ثانية من الظلام التام.', en: 'Start of the 58 seconds of total darkness.' },
  },
  {
    time: '١١:٤٧:١١ مساءً',
    location: { ar: 'الممر الرئيسي والمطبخ', en: 'Main Corridor & Kitchen' },
    event: { ar: 'يبدأ الحاضرون في التحرك بالظلام ويُسمع صوت باب الممر الخشبي.', en: 'Guests begin moving in darkness; creak of service hallway door is heard.' },
    significance: { ar: 'استغلال الظلام للتسلل والتحرك دون رؤية.', en: 'Exploiting the blackout to move stealthily unnoticed.' },
  },
  {
    time: '١١:٤٧:٢٤ مساءً',
    location: { ar: 'ممر غرفة الموسيقى', en: 'Music Room Hallway' },
    event: { ar: 'يدخل الجاني بخطوات سريعة مستغلاً حفظه التام لأبعاد ومعالم الفيلا.', en: 'The killer enters with fast steps using intimate knowledge of the villa layout.' },
    significance: { ar: 'وصول الجاني لهدفه المحدد بدقة.', en: 'The culprit reaches their targeted location.' },
  },
  {
    time: '١١:٤٧:٣٩ مساءً',
    location: { ar: 'داخل غرفة الموسيقى', en: 'Inside Music Room' },
    event: { ar: 'مواجهة خاطفة بين الجاني وياسين مراد في الظلام وصراخ مكتوم.', en: 'Brief confrontation between culprit and Yassin in darkness with a muffled shout.' },
    significance: { ar: 'ياسين يكتشف هوية الجاني قبل ضربه.', en: 'Yassin realizes the killer\'s identity right before being struck.' },
  },
  {
    time: '١١:٤٧:٤٧ مساءً',
    location: { ar: 'غرفة الموسيقى', en: 'Music Room' },
    event: { ar: 'الجاني يسدد ضربة قاضية بالمجسم النحاسي على رأس ياسين وينتزع هاتفه.', en: 'Culprit deals a fatal strike with the brass statue to Yassin\'s head and snatches his phone.' },
    significance: { ar: 'وقوع الوفاة الفورية واستعادة الهاتف المطلوب.', en: 'Instant death and seizure of the targeted phone.' },
  },
  {
    time: '١١:٤٧:٥٥ مساءً',
    location: { ar: 'ممر الخدمة الجانبي', en: 'Side Service Hallway' },
    event: { ar: 'هروب الجاني مسرعاً وإخفاء هاتف ياسين داخل زهرية الممر الفخارية.', en: 'Culprit flees, hiding Yassin\'s phone inside a large ceramic hallway vase.' },
    significance: { ar: 'التخلص السريع من الدليل قبل عودة النور.', en: 'Disposing of the missing evidence before lights return.' },
  },
  {
    time: '١١:٤٨:٠٠ مساءً',
    location: { ar: 'فيلا الزمالك بالكامل', en: 'Entire Zamalek Villa' },
    event: { ar: 'عودة الكهرباء تلقائياً، واكتشاف جثة ياسين ملقاة على الأرض.', en: 'Power restores automatically, revealing Yassin\'s body dead on the floor.' },
    significance: { ar: 'انتهاء الـ٥٨ ثانية القاتلة وإغلاق أبواب الفيلا للتحقيق.', en: 'End of the 58-second crime window and initiation of the murder probe.' },
  },
];
