/**
 * CASE 001 - "الوريث الأخير"
 * Scenarios & Dynamic Evidence Engine for All 6 Killers
 */

import { CaseTimelineItem, EvidenceItem, Language } from '../../../../types/game';
import { CASE_001_EVIDENCE } from './evidence';
import { CASE_001_TIMELINE } from './timeline';
import { CASE_001_ENDING } from './ending';

export interface KillerScenarioDefinition {
  characterId: string;
  killerSecret: Record<Language, string>;
  killerTruth: {
    characterId: string;
    trueMotive: Record<Language, string>;
    howItWasDone: Record<Language, string>;
    flawInAlibi: Record<Language, string>;
  };
  evidenceByRound: Record<number, EvidenceItem[]>;
  timeline: CaseTimelineItem[];
  winningStory: Record<Language, string>;
  losingStory: Record<Language, string>;
}

export const CASE_001_SCENARIOS: Record<string, KillerScenarioDefinition> = {
  char_tariq: {
    characterId: 'char_tariq',
    killerSecret: {
      ar: 'أنت القاتل! اكتشفت أن والدك عرف بديونك الضخمة واختلاساتك وسيحرمك تمامًا في الوصية الجديدة، فاستغللت انفرادك به الساعة ١٠:٥٢ مساءً ودسست السيانيد في مشروبه الكريستالي.',
      en: 'You are the killer! You discovered your father learned of your massive debts and embezzlement and was disinheriting you, so you slipped cyanide into his drink at 10:52 PM.',
    },
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
    evidenceByRound: CASE_001_EVIDENCE,
    timeline: CASE_001_TIMELINE,
    winningStory: CASE_001_ENDING.winningStory,
    losingStory: CASE_001_ENDING.losingStory,
  },

  char_karim: {
    characterId: 'char_karim',
    killerSecret: {
      ar: 'أنت القاتل! عندما واجهت والدك برغبتك في الهجرة سخر منك وأكد حرمانه لك من أي فلس، فتسللت عبر ممر الخدم الساعة ١٠:٥٠ مساءً وحقنت السيانيد في زجاجة المشروب.',
      en: 'You are the killer! When you confronted your father about emigrating, he mocked you and cut you off, prompting you to sneak through the service corridor at 10:50 PM and inject cyanide into his drink bottle.',
    },
    killerTruth: {
      characterId: 'char_karim',
      trueMotive: {
        ar: 'الابن الأصغر أدرك أن والده يخطط لحرمانه وإبقائه تحت وصايته حتى بعد وفاته، فقرر إنهاء حياته للحصول على حصته ومغادرة البلاد فوراً.',
        en: 'The Youngest Son realized his father planned to keep him controlled and disinherited, deciding to eliminate him to claim his share and leave the country.',
      },
      howItWasDone: {
        ar: 'تسلل عبر الممر الجانبي للمكتب الساعة ١٠:٥٠ مساءً وحقن السيانيد في زجاجة المشروب.',
        en: 'Sneaked through the side pantry corridor at 10:50 PM and injected cyanide into the drink bottle.',
      },
      flawInAlibi: {
        ar: 'سقطت تذكرة طيرانه السرية وجواز سفره بجوار فتحة التهوية الخلفية للمكتب.',
        en: 'His secret flight ticket and passport slip dropped near the office rear ventilation grate.',
      },
    },
    evidenceByRound: CASE_001_EVIDENCE,
    timeline: CASE_001_TIMELINE,
    winningStory: CASE_001_ENDING.winningStory,
    losingStory: CASE_001_ENDING.losingStory,
  },

  char_layla: {
    characterId: 'char_layla',
    killerSecret: {
      ar: 'أنت القاتلة! اكتشفتِ أن والدك طلب مراجعة ممتلكات الجمعية وسيكشف بيعك غير القانوني ويبلغ النيابة، فدخلتِ من الباب الزجاجي للحديقة الساعة ١٠:٤٨ مساءً ودستِ كبسولة السم في كأسه.',
      en: 'You are the killer! You learned your father ordered a full audit of foundation assets which would expose your property sales, so you entered via the garden glass door at 10:48 PM and dissolved poison in his cup.',
    },
    killerTruth: {
      characterId: 'char_layla',
      trueMotive: {
        ar: 'مديرة المؤسسة الخيرية اكتشفت أن والدها أصدر أمراً للمحامي بفحص كافة أصول الجمعية، مما سيكشف بيعها لممتلكات المؤسسة ويعرضها للسجن والفضائح.',
        en: 'The Foundation Director realized her father ordered the lawyer to audit all foundation assets, which would expose her unauthorized property sales to prison and scandal.',
      },
      howItWasDone: {
        ar: 'أثناء مرورها بحديقة المكتب، دخلت من الباب الزجاجي الجانبي الساعة ١٠:٤٨ م ودست كبسولة السم في كأسه.',
        en: 'Passing through the garden patio, entered via the glass side door at 10:48 PM and dissolved a poison capsule in his cup.',
      },
      flawInAlibi: {
        ar: 'عُثر على دبوس مشبك خاص بجمعيتها الخيرية ملقى تحت حافة الطاولة الزجاجية بجوار الكأس.',
        en: 'A distinctive lapel pin from her charity foundation was found caught beneath the glass table trim next to the cup.',
      },
    },
    evidenceByRound: CASE_001_EVIDENCE,
    timeline: CASE_001_TIMELINE,
    winningStory: CASE_001_ENDING.winningStory,
    losingStory: CASE_001_ENDING.losingStory,
  },

  char_sameh: {
    characterId: 'char_sameh',
    killerSecret: {
      ar: 'أنت القاتل! عثمان واجهك بالاختلاسات واتهمك بالتواطؤ والتغطية وهدد بسجنك الليلة، فقدمت له القوائم المالية الساعة ١٠:٤٦ مساءً ودسست السيانيد السائل أثناء مناقشة التقرير.',
      en: 'You are the killer! Osman confronted you with covered-up embezzlement and threatened immediate arrest, so you handed him financial sheets at 10:46 PM and dropped liquid cyanide into his cup.',
    },
    killerTruth: {
      characterId: 'char_sameh',
      trueMotive: {
        ar: 'المدير المالي علِم أن عثمان اكتشف التستر على الاختلاسات وسيقوم بإحالته للنيابة العامة وتدمير تاريخه المهني، فقرر التخلص منه.',
        en: 'The CFO learned Osman uncovered the covered-up embezzlement and was turning him over to prosecutors, deciding to liquidate him.',
      },
      howItWasDone: {
        ar: 'قدم القوائم المالية لعثمان بنفسه الساعة ١٠:٤٦ مساءً ودس السيانيد الطبي السائل أثناء مناقشة التقرير.',
        en: 'Handed over financial reports directly at 10:46 PM, dropping liquid cyanide into the cup during argument.',
      },
      flawInAlibi: {
        ar: 'أثر حبر قلمه المالي الجاف وريحة المادة الكيميائية انطبعت على حافة المناديل الورقية بالمكتب.',
        en: 'Distinct audit ink smudge and chemical trace matched his fountain pen wipe on the desk napkin.',
      },
    },
    evidenceByRound: CASE_001_EVIDENCE,
    timeline: CASE_001_TIMELINE,
    winningStory: CASE_001_ENDING.winningStory,
    losingStory: CASE_001_ENDING.losingStory,
  },
};
