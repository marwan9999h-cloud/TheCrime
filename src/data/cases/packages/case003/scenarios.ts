/**
 * CASE 003 - "آخر رحلة"
 * Scenarios & Dynamic Evidence Engine for All 6 Killers
 */

import { CaseTimelineItem, EvidenceItem, Language } from '../../../../types/game';
import { CASE_003_EVIDENCE } from './evidence';
import { CASE_003_TIMELINE } from './timeline';
import { CASE_003_ENDING } from './ending';

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

export const CASE_003_SCENARIOS: Record<string, KillerScenarioDefinition> = {
  char_shereef: {
    characterId: 'char_shereef',
    killerSecret: {
      ar: 'أنت القاتل! تسللت لغرفة القيادة واستغلت دوار كمال بفعل المنوم، فاعتديت عليه وأخفيت أوراق الشراكة ونسقت مسرح الجريمة مع حركة اليخت.',
      en: 'You are the killer! You snuck onto the bridge, attacked Kamal in his weakened state, stole the partnership files, and framed the scene.',
    },
    killerTruth: {
      characterId: 'char_shereef',
      trueMotive: {
        ar: 'منع كمال من تقديم مستندات إخفاء أرباح الشركة للشرطة واسترداد ملفات الدين.',
        en: 'Prevent Kamal from handing profit embezzlement evidence to authorities.',
      },
      howItWasDone: {
        ar: 'استغل انشغال الجميع، وتسلل لغرفة القيادة وسدد الضربة ثم عدّل وضع الجثة ومسار اليخت للتغطية.',
        en: 'Infiltrated the bridge unnoticed, struck Kamal, and manipulated the yacht controls and body to cover up.',
      },
      flawInAlibi: {
        ar: 'ادعى وجوده بالسطح العلوي طوال الوقت، لكن سجل فتح باب غرفة القيادة أظهر بصمة يده وساعته على الأزرار وقت الجريمة.',
        en: 'Claimed to be on deck, but electronic door logs and console smudge matching his watch face proved his presence.',
      },
    },
    evidenceByRound: CASE_003_EVIDENCE,
    timeline: CASE_003_TIMELINE,
    winningStory: CASE_003_ENDING.winningStory,
    losingStory: CASE_003_ENDING.losingStory,
  },

  char_yara: {
    characterId: 'char_yara',
    killerSecret: {
      ar: 'أنت القاتلة! اقتحمتِ غرفة القيادة عند اكتشاف كمال لكاميرتك المخفية وحدث العراك الذي أدى لمقتله وتعديل المسار.',
      en: 'You entered the bridge when Kamal caught your hidden lens, sparking a confrontation that ended in his murder.',
    },
    killerTruth: {
      characterId: 'char_yara',
      trueMotive: {
        ar: 'تدمير الصور والأدلة التي كان يستغلها كمال لابتزازها.',
        en: 'Destroy blackmail photographs held by Kamal.',
      },
      howItWasDone: {
        ar: 'تسللت لغرفة القيادة، واعتدت عليه عند المواجهة وقامت بتوجيه اليخت لإيهام الجميع بمكان آخر للجريمة.',
        en: 'Snuck into the bridge, confronted him, delivered the fatal blow, and altered course to confuse the scene.',
      },
      flawInAlibi: {
        ar: 'ادعت البقاء بغرفتها، لكن الفلاش التلقائي لكاميراتها انعكس على زجاج نافذة غرفة القيادة في تسجيل الفيديو.',
        en: 'Claimed she was in her cabin, but her camera flash reflected off the bridge window glass in recorded video.',
      },
    },
    evidenceByRound: CASE_003_EVIDENCE,
    timeline: CASE_003_TIMELINE,
    winningStory: CASE_003_ENDING.winningStory,
    losingStory: CASE_003_ENDING.losingStory,
  },

  char_adham: {
    characterId: 'char_adham',
    killerSecret: {
      ar: 'أنت القاتل! تسللت من سلم المحركات الخفي لغرفة القيادة وضربت كمال، وقمت بتغيير مسار اليخت لإخفاء الجريمة.',
      en: 'You climbed the hidden engine ladder to the bridge, struck Kamal, and changed course to mask the crime.',
    },
    killerTruth: {
      characterId: 'char_adham',
      trueMotive: {
        ar: 'حماية رخصته الهندسية وتجنب السجن بعد تهديد كمال بالإبلاغ عن التزوير والإهمال.',
        en: 'Protect his license and avoid jail after Kamal threatened to report his safety cover-up.',
      },
      howItWasDone: {
        ar: 'صعد عبر السلم الميكانيكي المباشر لغرفة القيادة وسدد الضربة القاضية ثم تلاعب بنظام التحكم الإلكتروني.',
        en: 'Used the direct maintenance ladder to enter the bridge, struck Kamal, and tampered with navigation.',
      },
      flawInAlibi: {
        ar: 'ادعى التواجد بالمحركات، لكن سجل فتح الباب الميكانيكي أظهر خروجه الساعة 11:18 م بالتزامن مع توقف اللاسلكي.',
        en: 'Claimed he remained in the engine room, but door logs showed he exited at 11:18 PM matching comms failure.',
      },
    },
    evidenceByRound: CASE_003_EVIDENCE,
    timeline: CASE_003_TIMELINE,
    winningStory: CASE_003_ENDING.winningStory,
    losingStory: CASE_003_ENDING.losingStory,
  },

  char_nadeen: {
    characterId: 'char_nadeen',
    killerSecret: {
      ar: 'أنت القاتلة! واجهتِ والدكِ في غرفة القيادة بشأن بيع اليخت، وعندما سخر منكِ أقدمتِ على ضربه وتغيير المسار لإرباك التحقيق.',
      en: 'Confronted your father on the bridge regarding the sale; when he dismissed you, you struck him and altered the route.',
    },
    killerTruth: {
      characterId: 'char_nadeen',
      trueMotive: {
        ar: 'إيقاف بيع اليخت والحفاظ على الميراث العائلي قبل توقيع العقد النهائي.',
        en: 'Halt the yacht sale and secure her inheritance before the final deal signed.',
      },
      howItWasDone: {
        ar: 'دخلت الجسرة من باب الصالون، ونشبت المشادة وسددت الضربة ثم تركت الباب مفتوحاً لإيهام شخص آخر.',
        en: 'Entered from the lounge door, had a confrontation, struck him, and left the door open to shift blame.',
      },
      flawInAlibi: {
        ar: 'ادعت الإتصال بالهاتف بالصالون، لكن شركات الشبكات أثبتت انقطاع المكالمة في 11:12 م ولم تستأنف.',
        en: 'Claimed to be on a call in the lounge, but telecom records show her call dropped at 11:12 PM and never resumed.',
      },
    },
    evidenceByRound: CASE_003_EVIDENCE,
    timeline: CASE_003_TIMELINE,
    winningStory: CASE_003_ENDING.winningStory,
    losingStory: CASE_003_ENDING.losingStory,
  },
};
