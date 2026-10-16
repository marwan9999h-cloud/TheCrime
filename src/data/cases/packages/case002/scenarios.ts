/**
 * CASE 002 - "ليلة فيلا الزمالك"
 * Scenarios & Dynamic Evidence Engine for All 6 Killers
 */

import { CaseTimelineItem, EvidenceItem, Language } from '../../../../types/game';
import { CASE_002_EVIDENCE } from './evidence';
import { CASE_002_TIMELINE } from './timeline';
import { CASE_002_ENDING } from './ending';

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

export const CASE_002_SCENARIOS: Record<string, KillerScenarioDefinition> = {
  char_adam: {
    characterId: 'char_adam',
    killerSecret: {
      ar: 'أنت القاتل! اكتشفت أن ياسين سيُعلن طردك أمام الجميع الليلة بعد كشف اختلاساتك، ففصلت المولد ودخلت غرفة الموسيقى في الظلام وضاربته بتمثال النحاس.',
      en: 'You are the killer! You learned Yassin would announce your firing tonight, so you cut the generator and struck him in the music room with the brass statue.',
    },
    killerTruth: {
      characterId: 'char_adam',
      trueMotive: {
        ar: 'خوف الشقيق الأصغر من كشف شقيقه ياسين لتلاعبه المالي وطرده وفضيحته بقطاع الإنتاج.',
        en: 'Younger Brother’s fear of his brother Yassin exposing his financial tampering and ruining his reputation.',
      },
      howItWasDone: {
        ar: 'قام بفصل القاطع الكهربائي عمداً، وتسلل حافظاً أبعاد الفيلا لغرفة الموسيقى في الظلام، وضربه بالتمثال النحاسي وأخذ الهاتف المفقود قبل إخفائه بـ زهرية الممر.',
        en: 'Purposely tripped the electrical breaker, memorized room dimensions to sneak into the music room, struck him with the brass statue, and hid the stolen phone in a hallway vase.',
      },
      flawInAlibi: {
        ar: 'ادعى التواجد بالمطبخ طول فترة الظلام، لكن بقع المشروب المسكوبة من كأسه المكسور وبصماته المادية عُثر عليها بجوار جثة ياسين وسجادة غرفة الموسيقى.',
        en: 'Claimed to be in the kitchen during the blackout, but spilled drink stains from his broken glass and physical fingerprints were found right beside Yassin’s body.',
      },
    },
    evidenceByRound: CASE_002_EVIDENCE,
    timeline: CASE_002_TIMELINE,
    winningStory: CASE_002_ENDING.winningStory,
    losingStory: CASE_002_ENDING.losingStory,
  },

  char_salma: {
    characterId: 'char_salma',
    killerSecret: {
      ar: 'أنت القاتلة! عندما قال ياسين "الليلة هنعرف مين كان بيكذب"، ركضتِ إلى غرفة الموسيقى في الظلام وانتزعتِ المجسم وضربتِه لاستعادة شريط الابتزاز.',
      en: 'When Yassin declared "Tonight we catch the liar", you rushed to the music room in the dark, struck him with the statue, and took the phone.',
    },
    killerTruth: {
      characterId: 'char_salma',
      trueMotive: {
        ar: 'ذعر الممثلة الصاعدة من تشغيل ياسين للتسجيل المحرج المهدد لمستقبلها الفني أمام الضيوف.',
        en: 'Rising Actress’s panic over Yassin playing the damaging recording that would destroy her acting career.',
      },
      howItWasDone: {
        ar: 'اندفعت بالظلام نحو غرفة الموسيقى وضاربته بالتمثال وأخفت الهاتف بـ زهرية الممر.',
        en: 'Rushed into the music room during darkness, hit him with the statue, and dropped the phone into the hallway vase.',
      },
      flawInAlibi: {
        ar: 'آثار عطرها الفرنسي النادر وحذائها العالي المطابقة لسجادة غرفة الموسيقى.',
        en: 'Traces of her rare French perfume and high heels matching the music room carpet.',
      },
    },
    evidenceByRound: CASE_002_EVIDENCE,
    timeline: CASE_002_TIMELINE,
    winningStory: CASE_002_ENDING.winningStory,
    losingStory: CASE_002_ENDING.losingStory,
  },

  char_fareed: {
    characterId: 'char_fareed',
    killerSecret: {
      ar: 'أنت القاتل! عندما هددك ياسين بإبلاغ الأموال العامة الليلة بشأن عقود دبي، استغللت الظلام ودخلت من باب الحديقة لغرفة الموسيقى وقضيت عليه.',
      en: 'When Yassin threatened public prosecution tonight, you used the blackout to step from the patio into the music room and strike him.',
    },
    killerTruth: {
      characterId: 'char_fareed',
      trueMotive: {
        ar: 'رعب الشريك المالي من السجن المؤبد بسبب صفقات غسيل الأموال بعقد دبي.',
        en: 'Financial Partner’s terror of life imprisonment over money laundering deals in the Dubai contract.',
      },
      howItWasDone: {
        ar: 'تسلل من شرفة الحديقة الملاطقة بالظلام وسدد الضربة القاضية بالتمثال النحاسي.',
        en: 'Sneaked from the garden patio in the dark and dealt the fatal blow with the brass statue.',
      },
      flawInAlibi: {
        ar: 'سجل الاتصالات الذي أثبت انقطاع مكالمته قبل الظلام بدقيقتين كاملتين.',
        en: 'Cellular logs proving his call disconnected 2 full minutes before the blackout.',
      },
    },
    evidenceByRound: CASE_002_EVIDENCE,
    timeline: CASE_002_TIMELINE,
    winningStory: CASE_002_ENDING.winningStory,
    losingStory: CASE_002_ENDING.losingStory,
  },

  char_nadine: {
    characterId: 'char_nadine',
    killerSecret: {
      ar: 'أنت القاتلة! عندما رفض ياسين تسليمك الهاتف المليء بالتسريبات وتهددكِ بالمحاكمة، استغللتِ انقطاع الكهرباء وتسللتِ لقتله واسترداد المادة.',
      en: 'When Yassin refused to hand over leaked documents and threatened lawsuits, you used the blackout to strike him and seize the data.',
    },
    killerTruth: {
      characterId: 'char_nadine',
      trueMotive: {
        ar: 'رغبة الصحفية الفنية في الاستحواذ على تسريبات هاتف ياسين وتفادي محاكمتها بتهمة التجسس.',
        en: 'Entertainment Journalist’s drive to seize leaked files on Yassin’s phone and avoid espionage charges.',
      },
      howItWasDone: {
        ar: 'قطعت فيديو الهاتف وركضت في الظلام لغرفة الموسيقى وسددت الضربة وسحبت الهاتف.',
        en: 'Cut her phone video, ran through darkness to the music room, struck him, and grabbed the phone.',
      },
      flawInAlibi: {
        ar: 'توقف فيديو هاتفها فجأة بعد ١٨ ثانية من انقطاع النور بعكس ادعائها.',
        en: 'Her phone video abruptly cut off after 18 seconds, contradicting her claim.',
      },
    },
    evidenceByRound: CASE_002_EVIDENCE,
    timeline: CASE_002_TIMELINE,
    winningStory: CASE_002_ENDING.winningStory,
    losingStory: CASE_002_ENDING.losingStory,
  },
};
