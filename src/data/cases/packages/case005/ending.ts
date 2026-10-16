/**
 * CASE 005 - "المكالمة الأخيرة"
 * Default Ending Stories
 */

import { Language } from '../../../../types/game';

export const CASE_005_ENDING: {
  winningStory: Record<Language, string>;
  losingStory: Record<Language, string>;
} = {
  winningStory: {
    ar: `🎬 **كشف حقيقة لغز البث المباشر!**

بفضل تحليلاتكم الدقيقة وتتبع الفارق بين **التايم كود المباشر** و**تأخير البث (Broadcast Delay)**، نجحتم في إسقاط أقنعة الخداع والتضليل التي شيدها الجاني.

أدرك التحقيق أن التوقيت الذي رآه الجمهور على الشاشات الخارجية لم يكن سوى وهمٍ هندسي تم اختلاقه لاستبعاد القاتل من دائرة التواجد في مسرح الجريمة. ومن خلال مطابقة **سجلات التحكم بتبديل الكاميرات** وتفريغ **الترددات الصوتية** الصادرة من الميكروفونات المفتوحة، انكشفت لحظة الوفاة الحقيقية داخل غرفة التسجيل الصوتي.

حين تم مواجهة القاتل بالدليل القاطع والتناقض الزمني المحتوم، انهار واعترف بتفاصيل الجريمة وكيف استغل صلاحياته الفنية للتغطية على الحقيقة. تم التحفظ على الأدلة واقتياد القاتل إلى النيابة العامة.

**أحسنتم يا رجال التحقيق! لقد انتصرت العدالة وكُشف المستور على الهواء مباشرة!**`,
    en: `🎬 **The Live Broadcast Mystery Unraveled!**

Thanks to your precise analysis tracking the gap between **live timecodes** and the **broadcast delay buffer**, you shattered the calculated deception constructed by the killer.

The investigation revealed that the broadcast timing seen by television audiences was merely a technical illusion orchestrated to clear the culprit. By cross-referencing **camera switching logs** and **ambient microphone frequencies**, the true moment of Rami's murder inside the audio room was pinpointed.

When confronted with undeniable electronic logs and timecode mismatches, the killer confessed. Justice has prevailed!`,
  },
  losingStory: {
    ar: `❌ **الجريمة الكبرى تُبث بعيدًا عن العدالة!**

للأسف، انساق فريق التحقيق وراء الادعاءات الظاهرية وحجج الغياب المزيفة التي أُعدت بعناية باستخدام ثغرات البث وتأخير التايم كود.

تسبب ذلك في إلقاء التهمة على الشخص الخاطئ، بينما تمكن القاتل الحقيقي من الإفلات بتمويهه الفني، وإخفاء أداة الجريمة وتعديل السجلات الإلكترونية بالاستوديو. غادر القاتل الاستوديو حراً طليقاً، بينما أُغلق الملف ضد بريء!

**حاولوا مرة أخرى وأعيدوا التدقيق في تفاصيل التايم كود والـDelay البثي!**`,
    en: `❌ **The True Killer Escapes Justice!**

Unfortunately, the investigation fell for calculated alibis and broadcast delay illusions.

An innocent suspect was wrongly accused while the real killer successfully manipulated logs and walked free. Re-examine the timecode discrepancies and try again!`,
  },
};
