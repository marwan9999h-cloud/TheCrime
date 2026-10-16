/**
 * CASE 001 - "الوريث الأخير"
 * Package Endings & Solutions Component
 */

import { CaseVariant, Language } from '../../../../types/game';

export interface CasePackageEnding {
  killerTruth: {
    characterId: string;
    trueMotive: Record<Language, string>;
    howItWasDone: Record<Language, string>;
    flawInAlibi: Record<Language, string>;
  };
  winningStory: Record<Language, string>;
  losingStory: Record<Language, string>;
  activeVariantId: string;
  availableVariants: CaseVariant[];
}

export const CASE_001_ENDING: CasePackageEnding = {
  killerTruth: {
    characterId: 'char_tariq',
    trueMotive: {
      ar: 'الابن الأكبر اكتشف أن والده عرف باختلاسه لملايين الجنيهات لتغطية خسائر التداول السرية، وكان سيعلن حرمانه التام من الإرث وإدارة المجموعة في الوصية الجديدة. فقرر التخلص منه في المكتب قبل التوقيع النهائي.',
      en: 'The Eldest Son discovered his father learned of his massive embezzlement to cover stock market debts, and was disinheriting him. He decided to eliminate him in the office before the final signature.',
    },
    howItWasDone: {
      ar: 'أثناء انفراده بوالده في المكتب الساعة ١٠:٥٢ مساءً بحجة مراجعة الحسابات، استغل انشغال والده ودس السيانيد في الكأس الكريستال وقدمه له بنفسه.',
      en: 'While alone with his father at 10:52 PM under the guise of reviewing accounts, the Eldest Son slipped cyanide into the crystal glass and served it himself.',
    },
    flawInAlibi: {
      ar: 'ادعى التواجد في الصالون طول الوقت، لكن تسجيلات الحركة أثبتت دخوله المكتب ١٠:٥٢ م، وبصمات إبهامه انطبعت بوضوح على قاعدة الكأس المسموم.',
      en: 'Claimed he was in the parlor continuously, but corridor logs proved his office entry at 10:52 PM and his thumbprints matched the poisoned glass base.',
    },
  },
  winningStory: {
    ar: 'انتصار العدالة! نجح فريق المحققين في كشف الجاني وإحكام الأدلة عليه بدقة سينمائية!\n\n🎬 إعادة تمثيل الجريمة دقيقة بدقيقة:\n- الساعة ١٠:٤٥ م: احتدم النقاش داخل المكتب وتصاعد التوتر بشأن أسرار الوصية الجديدة.\n- الساعة ١٠:٥٢ م: استغل القاتل لحظة الانفراد بعثمان داخل مكتبه المغلق، ودس جرعة السيانيد القاتلة داخل الكأس الكريستال، ثم خرج محاولاً توجيه الشبهات نحو باقي الحاضرين مستغلاً صراعاتهم العائلية.\n- السقوط: ارتكب القاتل خطأً قاطعا عندما ترك أثرًا ماديًا وبصمات جنائية تناقضت تماماً مع ادعائه بالحضور وشهادة المكان.\n\nتم إيداع القاتل السجن وتأمين الوصية الحقيقية لـ الوريث الأخير!',
    en: 'Justice prevails! The investigation team unmasked the killer with cinematic precision!\n\n🎬 Minute-by-Minute Crime Reenactment:\n- 10:45 PM: Heated argument erupts in the office over new will secrets.\n- 10:52 PM: The killer takes advantage of being alone with Osman inside the locked room, slips lethal cyanide into the crystal glass, and exits attempting to frame other suspects.\n- The Flaw: The killer left definitive physical proof and fingerprints directly contradicting their public alibi.\n\nThe culprit is jailed and the true last heir\'s legacy is secured!',
  },
  losingStory: {
    ar: 'تم القبض على شخص بريء.\nالقاتل الحقيقي ما زال بينكم...\nالتحقيق لم ينتهِ بعد.',
    en: 'An innocent person was arrested.\nThe real killer remains free among you...\nThe investigation is not over yet.',
  },
  activeVariantId: 'A',
  availableVariants: [
    {
      versionId: 'A',
      versionTitle: { ar: 'النسخة A: خطة الابن الأكبر', en: 'Variant A: Eldest Son\'s Plan' },
      killerTruth: {
        characterId: 'char_tariq',
        trueMotive: {
          ar: 'خوف الابن الأكبر من الحرمان التام من الإرث وإدارة الشركة بعد اكتشاف والده لديونه الضخمة في التداول.',
          en: 'Eldest Son\'s fear of complete disinheritance after his father discovered his massive stock trading debts.',
        },
        howItWasDone: {
          ar: 'دس السيانيد في الكأس الكريستال أثناء انفراده بوالده في المكتب الساعة ١٠:٥٢ مساءً.',
          en: 'Slipped cyanide into the crystal cup while alone with his father at 10:52 PM.',
        },
        flawInAlibi: {
          ar: 'بصمات إبهامه المباشرة على قاعدة الكأس الكريستال وتسجيل الحركة بالممر.',
          en: 'His direct thumbprints on the crystal glass base and corridor movement logs.',
        },
      },
    },
    {
      versionId: 'B',
      versionTitle: { ar: 'النسخة B: قرار الابن الأصغر', en: 'Variant B: Youngest Son\'s Decision' },
      killerTruth: {
        characterId: 'char_karim',
        trueMotive: {
          ar: 'انتقام الابن الأصغر من تهميش والده واستبداده المستمر ورفضه تمويل حياته المستقلة خارج البلاد.',
          en: 'Youngest Son\'s retaliation against his father\'s endless marginalization and refusal to support his independent life.',
        },
        howItWasDone: {
          ar: 'تسلل عبر الممر الجانبي للمكتب الساعة ١٠:٥٠ مساءً وحقن السيانيد في زجاجة المشروب.',
          en: 'Sneaked through the side pantry corridor at 10:50 PM and injected cyanide into the drink bottle.',
        },
        flawInAlibi: {
          ar: 'سقوط تذكرة طيرانه السرية وجواز سفره بجوار فتحة تهوية المكتب.',
          en: 'His secret flight ticket and passport dropped near the office ventilation shaft.',
        },
      },
    },
    {
      versionId: 'C',
      versionTitle: { ar: 'النسخة C: سر مديرة المؤسسة الخيرية', en: 'Variant C: Foundation Director\'s Secret' },
      killerTruth: {
        characterId: 'char_layla',
        trueMotive: {
          ar: 'رعب مديرة المؤسسة الخيرية من كشف والدها لبيعها غير القانوني لممتلكات الجمعية وإحالتها للنيابة العامة.',
          en: 'Foundation Director\'s terror of her father uncovering her illegal sale of charity property and reporting her to prosecutors.',
        },
        howItWasDone: {
          ar: 'دخلت من الباب الزجاجي للحديقة الساعة ١٠:٤٨ مساءً ودست كبسولة السم في مشروبه.',
          en: 'Entered via the garden glass door at 10:48 PM and dissolved a poison capsule in his drink.',
        },
        flawInAlibi: {
          ar: 'دبوس مشبك جمعيتها الخيرية الذي انكسر وسقط أسفل الطاولة الزجاجية.',
          en: 'Her charity foundation lapel pin caught beneath the glass table trim.',
        },
      },
    },
    {
      versionId: 'D',
      versionTitle: { ar: 'النسخة D: دافع المدير المالي', en: 'Variant D: CFO\'s Motive' },
      killerTruth: {
        characterId: 'char_sameh',
        trueMotive: {
          ar: 'ذعر المدير المالي بعد مواجهة عثمان له بالتستر على الاختلاسات وتهديده بدمار تاريخه المهني والسجن.',
          en: 'CFO\'s panic after Osman confronted him with covering up embezzlement and threatened prison.',
        },
        howItWasDone: {
          ar: 'قدم القوائم المالية لعثمان الساعة ١٠:٤٦ مساءً وأسقط السيانيد السائل في الكأس.',
          en: 'Handed over financial sheets at 10:46 PM and dropped liquid cyanide into the cup.',
        },
        flawInAlibi: {
          ar: 'حبر قلمه المالي الجاف والتأثير الكيميائي المنطبع على منديل المكتب.',
          en: 'His audit fountain pen ink smudge and chemical trace matched the desk napkin.',
        },
      },
    },
  ],
};
