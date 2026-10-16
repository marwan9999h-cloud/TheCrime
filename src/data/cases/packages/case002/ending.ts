/**
 * CASE 002 - "ليلة فيلا الزمالك"
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

export const CASE_002_ENDING: CasePackageEnding = {
  killerTruth: {
    characterId: 'char_adam',
    trueMotive: {
      ar: 'الشقيق الأصغر اكتشف أن شقيقه ياسين يمتلك كشوفات وتفاصيل التلاعب المالي على هاتفه وكان سيعلن طرده وفضيحته رسمياً عقب السهرة، فقرر إنهاء حياته واسترداد الهاتف.',
      en: 'The Younger Brother discovered his brother Yassin held audit logs on his phone and would publicly fire him after the party, deciding to eliminate him and reclaim the phone.',
    },
    howItWasDone: {
      ar: 'قام بفصل القاطع الكهربائي عمداً، وتسلل حافظاً أبعاد الفيلا لغرفة الموسيقى في الظلام، وضربه بالتمثال النحاسي وأخذ الهاتف المفقود قبل إخفائه بـ زهرية الممر.',
      en: 'Purposely tripped the electrical breaker, memorized room dimensions to sneak into the music room, struck him with the brass statue, and hid the stolen phone in a hallway vase.',
    },
    flawInAlibi: {
      ar: 'ادعى التواجد بالمطبخ طول فترة الظلام، لكن بقع المشروب المسكوبة من كأسه المكسور وبصماته المادية عُثر عليها بجوار جثة ياسين وسجادة غرفة الموسيقى.',
      en: 'Claimed to be in the kitchen during the blackout, but spilled drink stains from his broken glass and physical fingerprints were found right beside Yassin\'s body.',
    },
  },
  winningStory: {
    ar: 'انتصار المحققين! نجح فريق التحقيق في حل لغز الـ٥٨ ثانية وإعادة تمثيل الجريمة بدقة متناهية!\n\n🎬 إعادة بناء ثواني الجريمة القاتلة (الـ٥٨ ثانية):\n- ١١:٤٧:٠٢ - تنطفئ الأنوار بالكامل بعد فصل القاطع.\n- ١١:٤٧:١١ - يبدأ الحاضرون في التحرك في الظلام.\n- ١١:٤٧:٢٤ - يدخل القاتل إلى الممر بسرعة مستغلاً حفظه أبعاد الفيلا.\n- ١١:٤٧:٣٩ - يصل القاتل إلى غرفة الموسيقى ويواجه الضحية.\n- ١١:٤٧:٤٧ - يحدث الاعتداء وتسديد الضربة القاضية بالتمثال النحاسي وسحب الهاتف.\n- ١١:٤٧:٥٥ - يخرج القاتل مسرعاً ويدس الهاتف داخل الزهرية الفخارية.\n- ١١:٤٨:٠٠ - تعود الكهرباء تلقائياً، وتُكتشف الجثة.\n\n✨ ٥٨ ثانية كانت كافية لجريمة كاملة... لكن تفاصيلكم الدقيقة كشفت القاتل!',
    en: 'Investigators victory! The team solved the 58-second blackout mystery with second-by-second precision!\n\n🎬 Second-by-Second Crime Reenactment:\n- 11:47:02 - Lights blackout completely after circuit breaker is tripped.\n- 11:47:11 - Guests begin moving in darkness.\n- 11:47:24 - The killer moves down the corridor using intimate room layout memory.\n- 11:47:39 - The killer reaches the music room and confronts the victim.\n- 11:47:47 - The assault takes place; lethal brass statue strike and phone snatching.\n- 11:47:55 - The killer flees, hiding the phone inside the ceramic hallway vase.\n- 11:48:00 - Power restores automatically, revealing the victim.\n\n✨ 58 seconds were enough for a complete crime... but your sharp analysis brought justice!',
  },
  losingStory: {
    ar: 'تم القبض على شخص أخطأ في روايته فقط...\nالقاتل الحقيقي استغل الـ٥٨ ثانية ونجح في الإفلات بالهاتف المفقود!\nالتحقيق لم ينتهِ بعد.',
    en: 'An innocent person with a flawed testimony was wrongly arrested...\nThe true killer escaped with the missing phone during those 58 seconds!\nThe investigation continues.',
  },
  activeVariantId: 'A',
  availableVariants: [
    {
      versionId: 'A',
      versionTitle: { ar: 'النسخة A: خطة الشقيق الأصغر', en: 'Variant A: Younger Brother\'s Plan' },
      killerTruth: {
        characterId: 'char_adam',
        trueMotive: {
          ar: 'خوف الشقيق الأصغر من كشف شقيقه ياسين لتلاعبه المالي وطرده وفضيحته بقطاع الإنتاج.',
          en: 'Younger Brother\'s fear of his brother Yassin exposing his financial tampering and ruining his reputation.',
        },
        howItWasDone: {
          ar: 'فصل القاطع الكهربائي، ودخل غرفة الموسيقى بالظلام وضربه بتمثال النحاس وأخذ الهاتف.',
          en: 'Tripped the breaker, entered the music room in total dark, hit him with the brass statue, and grabbed the phone.',
        },
        flawInAlibi: {
          ar: 'بقعة مشروبه المسكوبة وبصماته المباشرة على سجادة غرفة الموسيقى بجوار الجثة.',
          en: 'Spilled drink stain from his cup and direct fingerprints on the music room carpet near the body.',
        },
      },
    },
    {
      versionId: 'B',
      versionTitle: { ar: 'النسخة B: انتقام الممثلة الصاعدة', en: 'Variant B: Rising Actress\'s Revenge' },
      killerTruth: {
        characterId: 'char_salma',
        trueMotive: {
          ar: 'ذعر الممثلة الصاعدة من تشغيل ياسين للتسجيل المحرج المهدد لمستقبلها الفني أمام الضيوف.',
          en: 'Rising Actress\'s panic over Yassin playing the damaging recording that would destroy her acting career.',
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
    },
    {
      versionId: 'C',
      versionTitle: { ar: 'النسخة C: خوف الشريك المالي', en: 'Variant C: Financial Partner\'s Panic' },
      killerTruth: {
        characterId: 'char_fareed',
        trueMotive: {
          ar: 'رعب الشريك المالي من السجن المؤبد بسبب صفقات غسيل الأموال بعقد دبي.',
          en: 'Financial Partner\'s terror of life imprisonment over money laundering deals in the Dubai contract.',
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
    },
    {
      versionId: 'D',
      versionTitle: { ar: 'النسخة D: سباق الصحفية الفنية', en: 'Variant D: Entertainment Journalist\'s Race' },
      killerTruth: {
        characterId: 'char_nadine',
        trueMotive: {
          ar: 'رغبة الصحفية الفنية في الاستحواذ على تسريبات هاتف ياسين وتفادي محاكمتها بتهمة التجسس.',
          en: 'Entertainment Journalist\'s drive to seize leaked files on Yassin\'s phone and avoid espionage charges.',
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
    },
  ],
};
