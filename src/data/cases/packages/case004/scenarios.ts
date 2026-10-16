/**
 * CASE 004 - "الطابق السابع"
 * Scenarios & Dynamic Evidence Engine for All 4 Killers
 */

import {
  CaseTimelineItem,
  EvidenceItem,
  Language,
} from '../../../../types/game';

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

export const CASE_004_SCENARIOS: Record<string, KillerScenarioDefinition> = {
  // =========================================================================
  // SCENARIO 1: كريم منصور (نائب المدير التنفيذي)
  // =========================================================================
  karim: {
    characterId: 'karim',
    killerSecret: {
      ar: 'أنت القاتل! اكتشف ياسر تلاعبك ببنود صفقة استثمارية كبرى وكان سيبلوغ مجلس الإدارة بفصلك ومحاكمتك. دخلت مكتبه الساعة 8:26 بحجة توقيع عقد عاجل، وعند المواجهة اعتديت عليه بتمثال خشبي ثقيل على المكتب، ثم رتبت الأوراق لتظهر كأنها جلسة عمل. ادعاء حضورك في غرفة الاجتماعات كاذب وسجل الغرفة يخلوك! اخفِ التناقض في التوقيت وشكك في حركة المصاعد وسجلات الحسابات!',
      en: 'You are the killer! Yasser caught you tampering with deal clauses and planned to report you to the board. You entered his office at 8:26 PM and attacked him with a heavy wooden statue. Hide your alibi gap!',
    },
    killerTruth: {
      characterId: 'karim',
      trueMotive: {
        ar: 'اكتشاف الضحية لتلاعب كريم ببنود صفقة استثمارية ضخمة وتهديده بالفصل والمحاكمة الإدارية.',
        en: 'Victim discovery of Karim deal tampering and threats of termination and prosecution.',
      },
      howItWasDone: {
        ar: 'دخل كريم مكتب ياسر الساعة 8:26 بحجة توقيع عقد صفقة عاجل، ونشبت مواجهة حادة ضرب خلالها ياسر بتمثال خشبي ثقيل على رأسه، ثم رتب المكتب كجلسة عمل طبيعية.',
        en: 'Karim entered Yasser office at 8:26 PM under guise of contract signing and struck him with a heavy wooden statue.',
      },
      flawInAlibi: {
        ar: 'سجل حجز وحساسات غرفة الاجتماعات يثبت خلو الغرفة تماماً من 8:10 إلى 8:40، والمستند الملطخ ببصمات كريم وُجد مغطى ببصمات دم داخل مكتب الضحية.',
        en: 'Conference room motion sensor proves room was empty 8:10-8:40 PM, and contract with Karim fingerprints was found in victim office.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_004_k_1_1',
          roundNumber: 1,
          type: 'forensic',
          title: { ar: 'تقرير الطب الشرعي الأول', en: 'Initial Forensic Report' },
          description: {
            ar: 'تحديد وقت الوفاة بين 8:20 و 8:35 مساءً نتيجة ضربة بجسم صلب ثقيل على الرأس.',
            en: 'Time of death estimated between 8:20 and 8:35 PM due to blunt force trauma.',
          },
          detailedContent: {
            ar: 'وفاة ياسر نجيب نجمت عن تهشم بالجزء الخلفي من الجمجمة. أشار التقرير إلى أن أداة الجريمة جسم خشبي مزخرف ومستقر بمسرح الجريمة، وساعة المكتب توقفت عند 8:32 نتيجة ارتطام الجثة.',
            en: 'Death caused by severe skull fracture. Crime weapon is a heavy wooden ornament at the desk.',
          },
          implicatedCharacterIds: ['karim', 'adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'زمن الوفاة يحدد بدقة النافذة الزمنية الحساسة بين 8:20 و 8:35 مساءً.',
            en: 'Time of death establishes crucial 8:20-8:35 PM window.',
          },
        },
        {
          id: 'ev_004_k_1_2',
          roundNumber: 1,
          type: 'cctv',
          title: { ar: 'كاميرا ممر الطابق السابع', en: '7th Floor Hallway CCTV' },
          description: {
            ar: 'تسجيل الممر الرئيسي المتجه لمكتب المدير التنفيذي بالطابق السابع.',
            en: 'Hallway footage leading to CEO office.',
          },
          detailedContent: {
            ar: 'تظهر الكاميرا حركة بعض الموظفين، لكن شريط التسجيل به ثغرة انقطاع غامضة مدتها 5 دقائق بين 8:25 و 8:30 مساءً.',
            en: 'Show movement in hallway with a suspicious 5-minute freeze between 8:25 and 8:30 PM.',
          },
          implicatedCharacterIds: ['adham', 'karim'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'الانقطاع الكاميري حدث بالضبط في الدقائق الحساسة للجريمة.',
            en: 'Footage freeze coincides with time of murder.',
          },
        },
        {
          id: 'ev_004_k_1_3',
          roundNumber: 1,
          type: 'document',
          title: { ar: 'معاينة المكتب وكوب القهوة', en: 'Office Inspection & Coffee Cup' },
          description: {
            ar: 'تقرير معاينة الأدلة المادية داخل مكتب المدير التنفيذي.',
            en: 'Inspection report of CEO office contents.',
          },
          detailedContent: {
            ar: 'كوب القهوة المفضل لياسر كان نصف فارغ وما زال دافئاً نسبياً. وُجدت ورقة مسودة عقد صفقة استثمارية مفتوحة على المكتب وبجوارها قلمين.',
            en: 'Half-empty warm coffee cup and open investment deal contract draft on desk with two pens.',
          },
          implicatedCharacterIds: ['karim', 'salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'وجود القلمين والمسودة يشير إلى حضور شخص لمناقشة العقد والتوقيع.',
            en: 'Two pens and draft suggest a meeting regarding the contract.',
          },
        },
      ],
      2: [
        {
          id: 'ev_004_k_2_1',
          roundNumber: 2,
          type: 'document',
          title: { ar: 'سجل حجز غرفة الاجتماعات', en: 'Conference Room Log' },
          description: {
            ar: 'السجل الإلكتروني لحساسات التواجد بغرفة الاجتماعات المغلقة.',
            en: 'Electronic occupancy log of conference room.',
          },
          detailedContent: {
            ar: 'سجل النظام يثبت أن غرفة الاجتماعات بالطابق السابع كانت فارغة تماماً من 8:10 إلى 8:40 مساءً بدون أي حركة داخلية، مما يكذب حجة غياب كريم منصور!',
            en: 'Room occupancy log shows room was empty 8:10-8:40 PM, contradicting Karim alibi!',
          },
          implicatedCharacterIds: ['karim'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'كريم لم يكن داخل غرفة الاجتماعات كما ادعى طوال الوقت.',
            en: 'Karim was not inside conference room as claimed.',
          },
        },
        {
          id: 'ev_004_k_2_2',
          roundNumber: 2,
          type: 'document',
          title: { ar: 'مسودة عقد الصفقة المكتشفة', en: 'Discovered Contract Draft' },
          description: {
            ar: 'مسودة بنود الصفقة الاستثمارية الكبرى التي كان يراجعها الضحية.',
            en: 'Major investment deal contract draft reviewed by victim.',
          },
          detailedContent: {
            ar: 'تحتوي المسودة على ملاحظات بخط يد الضحية حمراء اللون: "تعديلات غير قانونية بواسطة كريم - إلغاء التوقيع فوراً وإبلاغ المحامي".',
            en: 'Contains red handwritten notes by victim: "Illegal modifications by Karim - cancel signature and report".',
          },
          implicatedCharacterIds: ['karim'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دافع قوي جداً لكريم للتخلص من الضحية قبل إبلاغ مجلس الإدارة.',
            en: 'Strong motive for Karim to eliminate victim before board report.',
          },
        },
        {
          id: 'ev_004_k_2_3',
          roundNumber: 2,
          type: 'witness',
          title: { ar: 'شهادة أوفيس بوي الطابق السابع', en: '7th Floor Office Boy Witness' },
          description: {
            ar: 'أقوال عامل الضيافة حول الحركة بالقرب من مكتب المدير.',
            en: 'Statement from floor hospitality worker regarding movement.',
          },
          detailedContent: {
            ar: 'أكد أنه شاهد شخصاً ببدلة رسمية وربطة عنق داكنة يدخل مكتب ياسر حوالي الساعة 8:25 مساءً ومعه ملفت أوراق.',
            en: 'Confirmed seeing a suited man with a dark tie entering Yasser office around 8:25 PM carrying a file.',
          },
          implicatedCharacterIds: ['karim', 'adham'],
          isRedHerring: true,
          detectiveAnalysis: {
            ar: 'الوصف ينطبق على كريم منصور وبعض المسؤولين التنفيذيين.',
            en: 'Matches Karim Mansour and executive staff.',
          },
        },
      ],
      3: [
        {
          id: 'ev_004_k_3_1',
          roundNumber: 3,
          type: 'forensic',
          title: { ar: 'تقرير رفع البصمات عن تمثال المكتب', en: 'Desk Statue Fingerprint Report' },
          description: {
            ar: 'التقرير المعملي المتقدم لأثر البصمات على أداة الجريمة.',
            en: 'Advanced lab report of fingerprints on murder weapon.',
          },
          detailedContent: {
            ar: 'تم الكشف عن بصمات كريم منصور واضحة ومطبوعة على قاعدة التمثال الخشبي الملطخ بالدماء، مما يثبت إمساكه بالأداة واعتداءه على الضحية.',
            en: 'Karim Mansour fingerprints clearly found on bloody base of desk statue.',
          },
          implicatedCharacterIds: ['karim'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دليل حاسم يربط كريم بأداة الجريمة بشكل مباشر.',
            en: 'Conclusive evidence linking Karim to weapon directly.',
          },
        },
        {
          id: 'ev_004_k_3_2',
          roundNumber: 3,
          type: 'cctv',
          title: { ar: 'التقرير الفني لتعديل التوقيت', en: 'CCTV Timestamp Correction' },
          description: {
            ar: 'تقرير الخبراء بعد استعادة توقيت الكاميرات الأصلي.',
            en: 'Expert report after restoring original CCTV timestamp.',
          },
          detailedContent: {
            ar: 'بعد معالجة الثغرة الشبكيا، تظهر الكاميرا كريم منصور وهو يخرج من مكتب ياسر الساعة 8:31 مساءً حاملاً ملفاً ويغلق الباب خلفه بارتباك شديد.',
            en: 'Restored footage shows Karim Mansour leaving Yasser office at 8:31 PM anxiously holding a file.',
          },
          implicatedCharacterIds: ['karim'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دليل يقطع بصحة ارتكاب كريم منصور للجريمة ومغادرته مسرح الحادث.',
            en: 'Definitive proof of Karim presence at crime scene during murder.',
          },
        },
      ],
    },
    timeline: [
      { time: '08:15 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'ياسر يراجع بنود صفقة الاستثمار ويكتشف تلاعب كريم.', en: 'Yasser reviews deal clauses and discovers Karim tampering.' }, significance: { ar: 'بداية دافع الجريمة', en: 'Motive trigger' } },
      { time: '08:24 مساءً', location: { ar: 'مكتب نائب المدير', en: 'Deputy CEO Office' }, event: { ar: 'كريم يغادر مكتبه مدعياً التوجه لغرفة الاجتماعات.', en: 'Karim leaves office claiming meeting.' }, significance: { ar: 'بداية حجة الغياب الكاذبة', en: 'False alibi start' } },
      { time: '08:26 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'كريم يدخل مكتب ياسر وتندلع المشادة حول بنود العقد.', en: 'Karim enters Yasser office; heated argument breaks out.' }, significance: { ar: 'دخول القاتل', en: 'Killer entry' } },
      { time: '08:30 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'كريم يضرب ياسر بالتمثال الخشبي وتتوقف الساعة عند 8:32.', en: 'Karim strikes Yasser with statue; desk clock stops 8:32.' }, significance: { ar: 'لحظة القتل', en: 'Time of murder' } },
      { time: '08:31 مساءً', location: { ar: 'ممر الطابق السابع', en: '7th Floor Corridor' }, event: { ar: 'كريم يخرج من المكتب متجهاً للسلم الداخلي.', en: 'Karim exits office towards stairs.' }, significance: { ar: 'هروب الجاني', en: 'Killer escape' } },
    ],
    winningStory: {
      ar: 'نجحتم في كشف الجاني! كريم منصور حاول استغلال منصبه كنود نائباً للمدير وإخفاء الجريمة وراء ادعاء كاذب بالتواجد في غرفة الاجتماعات. لكن دقة الأدلة وسجل حجز الغرفة والبصمات المكتشفة على تمثال المكتب كشفت الحقيقة كاملة. تم إلقاء القبض على القاتل!',
      en: 'You caught the killer! Karim Mansour attempted to use his executive rank and a fake conference room alibi, but fingerprint analysis and occupancy logs exposed his crime.',
    },
    losingStory: {
      ar: 'للأسف! أفلت كريم منصور بجريمته وتم الزج ببريء في السجن! استغل كريم ثغرات التوقيت وتشتيت الأذهان ونفذ مخطط السيطرة على الشركة، بينما ظل القاتل الحقيقي يبتسم في الظلام.',
      en: 'Unfortunately, Karim Mansour escaped justice while an innocent suspect was jailed.',
    },
  },

  // =========================================================================
  // SCENARIO 2: سلمى عادل (مديرة الحسابات)
  // =========================================================================
  salma: {
    characterId: 'salma',
    killerSecret: {
      ar: 'أنت القاتلة! ياسر اكتشف اختلاساً وتلاعباً كبيراً في ميزانية الحسابات وكان سيبلغ النيابة صباح الغد. صعدتِ لمكتبه بالطابق السابع الساعة 8:24 وسلمتيه الملف المالي الأصلي، وعندما رفض التستر عليكِ اعتديتِ عليه بأداة ثقيلة، ثم أخذتِ الملف ونزلتِ. ادعاؤك بالطباعة في الطابق السادس كاذب وسجل الطابعة يثبت ذلك! ركزي الشبهات على نائب المدير والتسريبات!',
      en: 'You are the killer! Yasser discovered embezzlement in the financial accounts. You went to his office at 8:24 PM, struck him after he refused to cover up, and stole the audit file. Hide your printer log flaw!',
    },
    killerTruth: {
      characterId: 'salma',
      trueMotive: {
        ar: 'اكتشاف الضحية لتلاعب واختلاس مالي كبير في حسابات الشركة وتحضيره لبلاغ رسمي للنيابة.',
        en: 'Victim discovery of major financial embezzlement and preparation of official police report.',
      },
      howItWasDone: {
        ar: 'صعدت سلمى لمكتب ياسر الساعة 8:24 وسلمته الملف المالي الأصلي، وعند رفضه التستر اعتدت عليه بأداة ثقيلة على رأسه وأخذت الملف ونزلت بالطابق السادس.',
        en: 'Salma went to Yasser office at 8:24 PM with the original file, struck him upon refusal, and took the file.',
      },
      flawInAlibi: {
        ar: 'سجل طابعة الطابق السادس يثبت أن أمر الطباعة لم يبدأ إلا 8:42 مساءً، بينما سجل بوابة المصعد يثبت صعود بطاقتها للطابق السابع 8:24 مساءً.',
        en: '6th floor printer log proves printing started only at 8:42 PM, while elevator badge log places her on the 7th floor at 8:24 PM.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_004_s_1_1',
          roundNumber: 1,
          type: 'forensic',
          title: { ar: 'تقرير الطب الشرعي الأولي', en: 'Forensic Report' },
          description: {
            ar: 'تحديد زمن الوفاة بين 8:20 و 8:35 مساءً نتيجة إصابة بالرأس.',
            en: 'Time of death between 8:20 and 8:35 PM from head injury.',
          },
          detailedContent: {
            ar: 'وفاة ياسر نجيب ناتجة عن ضربة بقاعدة تمثال المكتب الخشبي. عُثر على خصلات شعر قصيرة بالقرب من المكتب.',
            en: 'Death caused by wooden statue base strike. Short hair strands found near desk.',
          },
          implicatedCharacterIds: ['salma', 'nourhan'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'الأدلة تؤكد وقوع الجريمة في الثلث الأخير من الساعة الثامنة.',
            en: 'Confirms murder occurred in late 8 PM window.',
          },
        },
        {
          id: 'ev_004_s_1_2',
          roundNumber: 1,
          type: 'document',
          title: { ar: 'كشف التحويلات الحسابية', en: 'Financial Transfers Record' },
          description: {
            ar: 'تقرير التحويلات المالية الخارجية الصادر من إدارة الحسابات.',
            en: 'External wire transfers report from finance dept.',
          },
          detailedContent: {
            ar: 'يظهر الكشف عجزاً حسابياً غير مفسر بقيمة 2.4 مليون جنيه تم تحويله لحسابات وسيطة غير مسجلة.',
            en: 'Shows unexplained 2.4 million EGP discrepancy transferred to unlisted accounts.',
          },
          implicatedCharacterIds: ['salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'العجز المالي يكشف عن وجود تلاعب كبير بقسم الحسابات.',
            en: 'Discrepancy reveals major accounting manipulation.',
          },
        },
        {
          id: 'ev_004_s_1_3',
          roundNumber: 1,
          type: 'cctv',
          title: { ar: 'سجل مصعد المبنى الذكي', en: 'Smart Elevator Badge Log' },
          description: {
            ar: 'سجل قراءات بطاقات المرور بمصعد الطوابق الإدارية.',
            en: 'Badge scan records for executive elevator.',
          },
          detailedContent: {
            ar: 'تسجيل المصعد يظهر استخدام بطاقة دخول سلمى عادل للصعود من الطابق السادس إلى الطابق السابع الساعة 8:24 مساءً.',
            en: 'Log shows Salma Adel badge scanned for 7th floor ascent at 8:24 PM.',
          },
          implicatedCharacterIds: ['salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'تناقض مباشر مع ادعاء سلمى ببطاقات التواجد بالطابق السادس.',
            en: 'Direct contradiction with Salma claim of remaining on 6th floor.',
          },
        },
      ],
      2: [
        {
          id: 'ev_004_s_2_1',
          roundNumber: 2,
          type: 'document',
          title: { ar: 'سجل طابعة الطابق السادس', en: '6th Floor Printer Spool Log' },
          description: {
            ar: 'السجل التقني لأوامر الطباعة الخاصة بطابعة الحسابات.',
            en: 'Spool log of finance department printer.',
          },
          detailedContent: {
            ar: 'سجل الطابعة يثبت خلو الطابعة من أي أمر طباعة بين 8:15 و 8:40 مساءً، وأن أول أمر طباعة باسم سلمى تم إرساله الساعة 8:42 مساءً!',
            en: 'Printer log proves no print jobs were submitted between 8:15 and 8:40 PM. Salma first job was at 8:42 PM!',
          },
          implicatedCharacterIds: ['salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'حجة غياب سلمى بالطباعة المستمرة صنيعة وهمية لغرض التغطية.',
            en: 'Salma printing alibi was fabricated after the crime.',
          },
        },
        {
          id: 'ev_004_s_2_2',
          roundNumber: 2,
          type: 'document',
          title: { ar: 'تقرير المراجعة المالية المغلق', en: 'Audit File Summary' },
          description: {
            ar: 'ملخص التقرير المالي السرّي الذي تسلمه المدير التنفيذي.',
            en: 'Confidential audit summary received by CEO.',
          },
          detailedContent: {
            ar: 'يحتوي التقرير على توقيع الضحية وملاحظة: "إحالة مديرة الحسابات سلمى عادل للتحقيق العاجل وتجميد صلاحياتها".',
            en: 'Contains victim signature and note: "Refer CFO Salma Adel to urgent investigation and freeze powers".',
          },
          implicatedCharacterIds: ['salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دافع مباشر وقطعي لارتكاب سلمى للجريمة لإخفاء الملف.',
            en: 'Direct motive for Salma to commit murder to hide audit file.',
          },
        },
        {
          id: 'ev_004_s_2_3',
          roundNumber: 2,
          type: 'witness',
          title: { ar: 'أقوال عامل النظافة بالطابق السادس', en: '6th Floor Cleaner Statement' },
          description: {
            ar: 'شهادة العامل المسؤول عن تنظيف المكاتب.',
            en: 'Statement from office cleaner.',
          },
          detailedContent: {
            ar: 'أفاد بأنه رأى سلمى تخرج من المصعد مسرعة الساعة 8:33 مساءً ووجهها شاحب للغاية وتتجه لمكتبها.',
            en: 'Reported seeing Salma exit elevator hurriedly at 8:33 PM looking extremely pale.',
          },
          implicatedCharacterIds: ['salma'],
          isRedHerring: true,
          detectiveAnalysis: {
            ar: 'تأكيد توقيت عودتها المربوكة من الطابق السابع.',
            en: 'Confirms timing of her anxious return from 7th floor.',
          },
        },
      ],
      3: [
        {
          id: 'ev_004_s_3_1',
          roundNumber: 3,
          type: 'forensic',
          title: { ar: 'تقرير العثور على الملف المالي', en: 'Discovered Audit File Forensic' },
          description: {
            ar: 'تقرير الأدلة الجنائية المكتشفة داخل سلة مهملات الحسابات.',
            en: 'Forensic report of audit file found in finance trash.',
          },
          detailedContent: {
            ar: 'تم العثور على أصل ملف التدقيق المالي المفقود ممزقاً بسلة مكتب سلمى، وعليه آثار دماء تطابق فصيلة دماء الضحية ياسر نجيب.',
            en: 'Original audit file found torn in Salma office trash, bearing blood matching victim Yasser Nageeb.',
          },
          implicatedCharacterIds: ['salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دليل مادي قاطع يربط سلمى بمسرح الجريمة وأخذ الملف المالي.',
            en: 'Definitive physical evidence linking Salma to crime scene and stolen file.',
          },
        },
        {
          id: 'ev_004_s_3_2',
          roundNumber: 3,
          type: 'forensic',
          title: { ar: 'بصمات سلمى على أداة الجريمة', en: 'Salma Fingerprints on Weapon' },
          description: {
            ar: 'نتيجة الفحص المجهري المتقدم لقاعدة تمثال المكتب.',
            en: 'Advanced lab result of statue base fingerprints.',
          },
          detailedContent: {
            ar: 'تطابق بصمات كف اليد الأيمن لسلمى عادل على الجزء العُلوي لتمثال المكتب الخشبي الملطخ بالدم.',
            en: 'Salma Adel right palm fingerprints match upper section of bloody statue.',
          },
          implicatedCharacterIds: ['salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'إثبات قاطع ومباشر لارتكاب سلمى عادل لجريمة القتل.',
            en: 'Conclusive proof of Salma Adel committing murder.',
          },
        },
      ],
    },
    timeline: [
      { time: '08:18 مساءً', location: { ar: 'مكتب الحسابات بالطابق السادس', en: '6th Floor Finance' }, event: { ar: 'سلمى تأخذ ملف التقرير المالي الأصلي لتصعد به للمدير.', en: 'Salma takes audit file to ascend to CEO.' }, significance: { ar: 'تحضير للزيارة', en: 'Visit setup' } },
      { time: '08:24 مساءً', location: { ar: 'مصعد الطابق السابع', en: '7th Floor Elevator' }, event: { ar: 'بطاقة سلمى تسجل صعودها للطابق السابع ودخول مكتب ياسر.', en: 'Salma badge scans at 7th floor CEO office.' }, significance: { ar: 'وصول القاتل', en: 'Killer arrival' } },
      { time: '08:29 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'ياسر يرفض التستر وسالمى تضربه بالتمثال وتأخذ الملف.', en: 'Yasser refuses cover-up; Salma strikes him and steals file.' }, significance: { ar: 'لحظة الجريمة', en: 'Murder time' } },
      { time: '08:33 مساءً', location: { ar: 'الطابق السادس', en: '6th Floor' }, event: { ar: 'سلمى تعود لمكتب الحسابات وتخفي الملف الممزق.', en: 'Salma returns to 6th floor and hides torn file.' }, significance: { ar: 'هروب القاتل', en: 'Escape' } },
      { time: '08:42 مساءً', location: { ar: 'مكتب الحسابات', en: 'Finance Office' }, event: { ar: 'سلمى ترسل أمر طباعة صورياً لصنع حجة غياب.', en: 'Salma sends fake print job for alibi.' }, significance: { ar: 'حجة الغياب الوهمية', en: 'Fake alibi' } },
    ],
    winningStory: {
      ar: 'أحسنتم! كشفتم حقيقة سلمى عادل! حاولت التستر على الاختلاس المالي بإنهاء حياة المدير وسرقة الملف الحسابي، وصنعت حجة طباعة وهمية، لكن سجلات المصعد وبطاقات الدخول كانت خيط الوصول للجاني.',
      en: 'Great job! You exposed Salma Adel! She tried to cover up financial fraud by killing the CEO, but elevator logs and printer spools betrayed her.',
    },
    losingStory: {
      ar: 'للأسف! أفلتت القاتلة سلمى عادل من العدالة وسقط بريء في فخ الاتهام! تم إغلاق ملف القضية بينما نجحت سلمى في إخفاء الجريمة الاختلاسية.',
      en: 'Unfortunately, Salma Adel escaped justice while an innocent player took the fall.',
    },
  },

  // =========================================================================
  // SCENARIO 3: أدهم رأفت (مسؤول IT)
  // =========================================================================
  adham: {
    characterId: 'adham',
    killerSecret: {
      ar: 'أنت القاتل! ياسر اكتشف أنك تسرب سيرفرات الشركة وتبيع بيانات الموظفين والصفقات لجهة منافسة وكان سيسلمك للشرطة. دخلت مكتبه 8:26 بحجة صيانة جهازه واعتديت عليه. بعد الجريمة عدت لغرفة السيرفرات وقمت بالدخول بحساب الأدمن لتعديل التوقيت الزمني لكاميرات الممر بـ 5 دقائق لإبعاد الشبهة. ادعاؤك التواجد المستمر في IT كاذب! اخفِ تعديل السيرفر وركز الشبهات على نواب المدير!',
      en: 'You are the killer! Yasser discovered you were selling company data. You entered his office at 8:26 PM, struck him, and modified CCTV timestamps via server access at 8:38 PM. Hide your Audit Trail trail!',
    },
    killerTruth: {
      characterId: 'adham',
      trueMotive: {
        ar: 'اكتشاف الضحية لبيع أدهم بيانات وسجلات الشركة لجهة منافسة وقراره بتسليمه للشرطة.',
        en: 'Victim discovery that Adham sold company data to competitors and plan to arrest him.',
      },
      howItWasDone: {
        ar: 'دخل أدهم مكتب ياسر بحجة الصيانة واعتدى عليه، ثم عاد لغرفة السيرفرات واستخدم صلاحيات الأدمن لتعديل التوقيت الزمني لكاميرات الممر والسجلات.',
        en: 'Adham entered Yasser office under guise of maintenance, struck him, then altered server CCTV timestamps at 8:38 PM.',
      },
      flawInAlibi: {
        ar: 'سجل Audit Trail بسيرفر الشركة يثبت دخول حساب أدهم وتعديل التوقيت الزمني لكاميرات الممر الساعة 8:38 مساءً من خادم السيرفرات.',
        en: 'Server Audit Trail log proves Adham admin account logged in and altered CCTV timestamps at 8:38 PM.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_004_a_1_1',
          roundNumber: 1,
          type: 'forensic',
          title: { ar: 'تقرير الطب الشرعي الأولي', en: 'Forensic Medical Report' },
          description: {
            ar: 'تحديد زمن الوفاة التقريبي بين 8:20 و 8:35 مساءً.',
            en: 'Estimated time of death between 8:20 and 8:35 PM.',
          },
          detailedContent: {
            ar: 'الوفاة ناتجة عن ضربة قوية بالجزء الخلفي للرأس بمجسم خشبي ثقيل بالمكتب.',
            en: 'Death caused by severe blunt force trauma from desk statue.',
          },
          implicatedCharacterIds: ['adham', 'karim'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'التقرير يثبت توقيت الجريمة في الفترة الحرجة.',
            en: 'Report fixes murder timing in critical window.',
          },
        },
        {
          id: 'ev_004_a_1_2',
          roundNumber: 1,
          type: 'cctv',
          title: { ar: 'تسجيل كاميرا الممر المعدل', en: 'Altered CCTV Corridor Footage' },
          description: {
            ar: 'تسجيل كاميرات الممر الرئيسي بالطابق السابع.',
            en: '7th floor corridor CCTV video.',
          },
          detailedContent: {
            ar: 'التسجيل يظهر فارقاً زملنياً قدره 5 دقائق مقارنة بساعة المبنى الرئيسية، مما يشير لتعديل التوقيت.',
            en: 'Shows a 5-minute time displacement compared to building clock, indicating manipulation.',
          },
          implicatedCharacterIds: ['adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'التعديل الزمني بالأنظمة لا يقدر عليه إلا مسؤول الـ IT.',
            en: 'System timestamp manipulation requires IT admin privileges.',
          },
        },
        {
          id: 'ev_004_a_1_3',
          roundNumber: 1,
          type: 'document',
          title: { ar: 'سجل صيانة كمبيوتر الضحية', en: 'Victim PC Maintenance Log' },
          description: {
            ar: 'سجل أوامر الصيانة البرمجية الصادر من الـ IT.',
            en: 'IT software maintenance request ticket.',
          },
          detailedContent: {
            ar: 'طلب صيانة طارئ مسجل باسم أدهم رأفت لدخول مكتب المدير الساعة 8:20 مساءً لإصلاح ثغرة البريد.',
            en: 'Emergency maintenance ticket logged by Adham Raafat to access CEO office at 8:20 PM.',
          },
          implicatedCharacterIds: ['adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'تذكرة الصيانة تمنح أدهم تصريحاً بدخول المكتب وقت الجريمة.',
            en: 'Maintenance ticket gave Adham authorized entry near murder time.',
          },
        },
      ],
      2: [
        {
          id: 'ev_004_a_2_1',
          roundNumber: 2,
          type: 'document',
          title: { ar: 'سجل نقل البيانات الخارجي', en: 'Data Leak Network Log' },
          description: {
            ar: 'تقرير الأمان الشبكي بنقل ملفات الشركة.',
            en: 'Network security log of external file transfers.',
          },
          detailedContent: {
            ar: 'يظهر التقرير قيام حساب أدهم بنقل 40 جيجابايت من بيانات الصفقات وسجلات الموظفين لخادم خارجي مجهول.',
            en: 'Log shows Adham account transferred 40GB of deal data to external server.',
          },
          implicatedCharacterIds: ['adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'جرم الجاسوسية الرقمية يمنح ياسر سبباً كافياً لإبلاغ الشرطة.',
            en: 'Digital espionage provides strong motive for murder.',
          },
        },
        {
          id: 'ev_004_a_2_2',
          roundNumber: 2,
          type: 'witness',
          title: { ar: 'شهادة موظف أمن الشبكات', en: 'Network Security Officer Statement' },
          description: {
            ar: 'أقوال فني الأمن حول تواجد أدهم.',
            en: 'Statement from security tech regarding Adham location.',
          },
          detailedContent: {
            ar: 'أفاد بأن أدهم غادر غرفة السيرفرات من 8:22 حتى 8:34 مساءً حاملاً حقيبة أدوات تقنية.',
            en: 'Stated Adham left server room 8:22 to 8:34 PM carrying a tech tool bag.',
          },
          implicatedCharacterIds: ['adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'تأكيد خروج أدهم من غرفة السيرفرات في توقيت الجريمة.',
            en: 'Confirms Adham left server room during murder window.',
          },
        },
        {
          id: 'ev_004_a_2_3',
          roundNumber: 2,
          type: 'message',
          title: { ar: 'رسالة تحذيرية من الضحية', en: 'Warning Email from Victim' },
          description: {
            ar: 'مسودة بريد إلكتروني غير مرسل على جهاز ياسر.',
            en: 'Unsent email draft on Yasser computer.',
          },
          detailedContent: {
            ar: 'مضمون المسودة: "أدهم رأفت - تم اكتشاف بيع البيانات. مباحث الأموال العامة في الطريق".',
            en: 'Draft text: "Adham Raafat - Data theft discovered. Cyber police notified".',
          },
          implicatedCharacterIds: ['adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دليل قاطع على كشف الضحية لجرائم أدهم قبل دقائق من قتله.',
            en: 'Definitive proof victim caught Adham minutes before murder.',
          },
        },
      ],
      3: [
        {
          id: 'ev_004_a_3_1',
          roundNumber: 3,
          type: 'document',
          title: { ar: 'تقرير Audit Trail بسيرفر المبنى', en: 'Server Audit Trail Report' },
          description: {
            ar: 'سجل التتبع الإلكتروني للتعديلات على سيرفرات الكاميرات.',
            en: 'Audit Trail log of CCTV server modifications.',
          },
          detailedContent: {
            ar: 'التقرير يثبت دخول حساب الأدمن (Adham_Admin) على السيرفر الرئيسي الساعة 8:38 مساءً وتغيير التوقيت الزمني لكاميرات الطابق السابع بإرجاع الساعات 5 دقائق.',
            en: 'Audit trail proves admin account (Adham_Admin) logged into server at 8:38 PM and rolled back CCTV clocks by 5 minutes.',
          },
          implicatedCharacterIds: ['adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'الدليل التقني الدامغ الذي يفند خدعة أدهم بالكامل.',
            en: 'Irrefutable digital proof exposing Adham cover-up.',
          },
        },
        {
          id: 'ev_004_a_3_2',
          roundNumber: 3,
          type: 'forensic',
          title: { ar: 'البصمات على أداة الجريمة واستعادة الكاميرات', en: 'Restored CCTV & Fingerprints' },
          description: {
            ar: 'التقرير الفني الشامل لمسرح الجريمة.',
            en: 'Comprehensive technical crime scene report.',
          },
          detailedContent: {
            ar: 'بعد استعادة التوقيت الأصلي، الكاميرا تظهر أدهم يخرج من مكتب ياسر 8:31 مساءً حاملاً قرصاً صلباً، وبصماته مطبوعة على قاعدة التمثال.',
            en: 'Restored footage shows Adham leaving office at 8:31 PM holding a hard drive; prints match statue base.',
          },
          implicatedCharacterIds: ['adham'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'إدانة حتمية ومباشرة لأدهم رأفت.',
            en: 'Incontrovertible proof of Adham Raafat guilt.',
          },
        },
      ],
    },
    timeline: [
      { time: '08:20 مساءً', location: { ar: 'غرفة السيرفرات', en: 'Server Room' }, event: { ar: 'أدهم ينشئ أمر صيانة وهمي لمكتب المدير التنفيذي.', en: 'Adham creates fake maintenance ticket for CEO office.' }, significance: { ar: 'التغطية الإدارية', en: 'Ticket cover' } },
      { time: '08:26 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'أدهم يدخل مكتب ياسر بحقيبة الأدوات وتندلع المواجهة.', en: 'Adham enters Yasser office; confrontation begins.' }, significance: { ar: 'دخول القاتل', en: 'Killer entry' } },
      { time: '08:30 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'أدهم يضرب ياسر بالتمثال الخشبي ويستعيد وحدة التخزين.', en: 'Adham strikes Yasser with statue and retrieves hard drive.' }, significance: { ar: 'لحظة القتل', en: 'Murder moment' } },
      { time: '08:34 مساءً', location: { ar: 'غرفة السيرفرات', en: 'Server Room' }, event: { ar: 'أدهم يعود لغرفة الـ IT.', en: 'Adham returns to IT room.' }, significance: { ar: 'عودة القاتل', en: 'Return' } },
      { time: '08:38 مساءً', location: { ar: 'سيرفر المبنى', en: 'Building Server' }, event: { ar: 'أدهم يدخل بحساب الأدمن ويعدل توقيت الكاميرات.', en: 'Adham logs in as admin and modifies CCTV clocks.' }, significance: { ar: 'التلاعب بالسيرفر', en: 'Server tamper' } },
    ],
    winningStory: {
      ar: 'تحقيق بارع! أدهم رأفت ظن أن خبرته التقنية وقدرته على تعديل السيرفرات والكاميرات ستمنحه الجريمة الكاملة. لكن سجل الـ Audit Trail الأصلي فضح تلاعبه بالتوقيت وأثبت وجوده في مكتب المدير وقت وقوع الجريمة.',
      en: 'Brilliant deduction! Adham Raafat thought his IT admin access gave him the perfect crime, but the unalterable server Audit Trail exposed his timestamp manipulation.',
    },
    losingStory: {
      ar: 'للأسف! انطوت الخدعة التقنية على المحققين ونجح أدهم رأفت في تضليل الجميع والهروب بالجريمة!',
      en: 'Unfortunately, Adham technical trickery deceived the investigators, letting him walk free.',
    },
  },

  // =========================================================================
  // SCENARIO 4: نورهان سامي (مساعدة المدير التنفيذي)
  // =========================================================================
  nourhan: {
    characterId: 'nourhan',
    killerSecret: {
      ar: 'أنت القاتلة! ياسر اكتشف أنكِ تسربين مستندات الصفقات السرية لمكتب منافس مقابل مبالغ مالية وكان سيطردكِ ويمسح سمعتكِ. تظاهرتِ بالمغادرة الساعة 8:18 ثم عدتِ عبر الباب الخلفي للطابق السابع 8:25 لاسترجاع الفلاشة المحتواة على الدلائل. اعتديتِ عليه أثناء المواجهة وأخذتِ الفلاشة. ادعاؤك المغادرة النهائية 8:18 كاذب! اخفي عودتكِ وركزي على صراعات نواب المدير والمستثمرين!',
      en: 'You are the killer! Yasser discovered you leaked deal files to a competitor. You faked an 8:18 PM departure, sneaked back via the 7th floor rear entrance at 8:25 PM, killed him, and retrieved the flash drive. Hide your rear door card scan!',
    },
    killerTruth: {
      characterId: 'nourhan',
      trueMotive: {
        ar: 'اكتشاف الضحية لتسريب نورهان وثائق وصور صفقات سرية لمكتب منافس وقراره بطردها ومحاكمتها.',
        en: 'Victim discovery of Nourhan leaking deal files to competitor and decision to terminate her.',
      },
      howItWasDone: {
        ar: 'تظاهرت نورهان بالمغادرة 8:18 ثم عادت عبر الباب الخلفي للطابق السابع 8:25 واسترجعت الفلاشة الحساسة من مكتب ياسر واعتدت عليه عند المشادة.',
        en: 'Nourhan faked 8:18 PM departure, re-entered via rear door at 8:25 PM, retrieved flash drive and struck Yasser.',
      },
      flawInAlibi: {
        ar: 'سجل بطاقة الدخول بالباب الخلفي يثبت استخدام بطاقة نورهان 8:25 مساءً، وكاميرا الشارع تظهر خروجها الفعلي 8:40 وليس 8:18.',
        en: 'Rear entrance card reader log proves Nourhan card was used at 8:25 PM, and street camera shows her actual exit at 8:40 PM.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_004_n_1_1',
          roundNumber: 1,
          type: 'forensic',
          title: { ar: 'تقرير معاينة الجثة الشرعي', en: 'Autopsy Report' },
          description: {
            ar: 'تقدير زمن الوفاة بين 8:20 و 8:35 مساءً.',
            en: 'Time of death estimated 8:20 to 8:35 PM.',
          },
          detailedContent: {
            ar: 'الوفاة ناتجة عن كسور بالجمجمة من ضربة خلفية بتمثال خشبي. توجد آثار عطر نسائي نفاذ بالقرب من جثة الضحية.',
            en: 'Death caused by skull fracture from wooden statue. Strong women perfume scent noted near victim.',
          },
          implicatedCharacterIds: ['nourhan', 'salma'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'أثر العطر النسائي يضيق دائرة الاشتباه.',
            en: 'Perfume scent narrows suspect list.',
          },
        },
        {
          id: 'ev_004_n_1_2',
          roundNumber: 1,
          type: 'document',
          title: { ar: 'جدول مواعيد المدير التنفيذي', en: 'CEO Schedule' },
          description: {
            ar: 'الجدول اليومي المنظم بواسطة نورهان سامي.',
            en: 'Daily schedule managed by Nourhan Sami.',
          },
          detailedContent: {
            ar: 'الجدول يظهر مغادرة جميع المساعدين الساعة 8:15 مساءً، لكن الخانة المخصصة للساعة 8:30 بها شطب بخط اليد.',
            en: 'Shows assistants leaving at 8:15 PM, but 8:30 PM slot has handwritten cross-out.',
          },
          implicatedCharacterIds: ['nourhan'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'الشطب يوضح إلغاء موعد أو تعديل جدول الحضور.',
            en: 'Cross-out indicates cancelled appointment or altered schedule.',
          },
        },
        {
          id: 'ev_004_n_1_3',
          roundNumber: 1,
          type: 'cctv',
          title: { ar: 'تسجيل البوابة الرئيسية للمبنى', en: 'Main Entrance CCTV' },
          description: {
            ar: 'تسجيل دخول وخروج الموظفين من البوابة الرئيسية.',
            en: 'Main gate entry and exit camera footage.',
          },
          detailedContent: {
            ar: 'تظهر نورهان سامي وهي تمر من البوابة الرئيسية وتلتقط هاتفها الساعة 8:18 مساءً، لكنها لم تبتعد عن الشارع.',
            en: 'Shows Nourhan Sami passing main gate at 8:18 PM on phone, but remaining nearby.',
          },
          implicatedCharacterIds: ['nourhan'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'المغادرة الأولى مسجلة بالبوابة الرئيسية فقط.',
            en: 'First exit logged at main gate only.',
          },
        },
      ],
      2: [
        {
          id: 'ev_004_n_2_1',
          roundNumber: 2,
          type: 'document',
          title: { ar: 'سجل الباب الخلفي للطابق السابع', en: '7th Floor Rear Door Badge Log' },
          description: {
            ar: 'قراءة بطاقات المرور الممغنطة بالباب الخلفي الخدمي.',
            en: 'Card reader log at service rear door.',
          },
          detailedContent: {
            ar: 'السجل الإلكتروني يثبت استخدام بطاقة المرور الخاصة بنورهان سامي لتنفيذ فتح للباب الخلفي للطابق السابع الساعة 8:25 مساءً!',
            en: 'Electronic log proves Nourhan Sami keycard opened the 7th floor rear door at 8:25 PM!',
          },
          implicatedCharacterIds: ['nourhan'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دليل يثبت عودة نورهان السرية للطابق السابع بعد ادعاء المغادرة.',
            en: 'Proof Nourhan secretly returned to 7th floor after claiming exit.',
          },
        },
        {
          id: 'ev_004_n_2_2',
          roundNumber: 2,
          type: 'message',
          title: { ar: 'تفريغ رسائل الواتساب السرية', en: 'Leaked WhatsApp Chat Export' },
          description: {
            ar: 'محادثة مسترجعة من هاتف الضحية.',
            en: 'Recovered chat export from victim phone.',
          },
          detailedContent: {
            ar: 'رسالة من ياسر لنورهان الساعة 8:10 مساءً: "الفلاشة المسربة معي في المكتب، لو لم تأتي الآن سأرسل الملف للنيابة".',
            en: 'Message from Yasser to Nourhan at 8:10 PM: "I have the leaked drive in my office. If you do not come now, I report you".',
          },
          implicatedCharacterIds: ['nourhan'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'تهديد مباشر من الضحية يدفع نورهان للعودة الفورية وتصفية الحساب.',
            en: 'Direct threat from victim forcing Nourhan immediate return.',
          },
        },
        {
          id: 'ev_004_n_2_3',
          roundNumber: 2,
          type: 'witness',
          title: { ar: 'شهادة سائق التاكسي بالشارع الجانبي', en: 'Side Street Taxi Driver Witness' },
          description: {
            ar: 'أقوال السائق المنتظر خارج البوابة الخلفية.',
            en: 'Statement of driver waiting outside rear exit.',
          },
          detailedContent: {
            ar: 'أكد أنه شاهد سيدة بنفس مواصفات نورهان تخرج من الباب الخدمي الجانبي مسرعة الساعة 8:38 مساءً وتطلب التوجه لمنزلها.',
            en: 'Confirmed seeing a woman matching Nourhan description exit side door hurriedly at 8:38 PM.',
          },
          implicatedCharacterIds: ['nourhan'],
          isRedHerring: true,
          detectiveAnalysis: {
            ar: 'تأكيد توقيت الخروج الحقيقي لنورهان عقب الجريمة.',
            en: 'Confirms Nourhan actual departure time post-murder.',
          },
        },
      ],
      3: [
        {
          id: 'ev_004_n_3_1',
          roundNumber: 3,
          type: 'cctv',
          title: { ar: 'تسجيل كاميرا المحل التجاري المقابل', en: 'Opposite Store CCTV' },
          description: {
            ar: 'تسجيل كاميرا مراقبة للممر الخارجي الجانبي.',
            en: 'Corridor camera footage from store across the street.',
          },
          detailedContent: {
            ar: 'التسجيل يوضح دخول نورهان من الممر الجانبي الخدمي 8:24 مساءً وخروجها منه 8:38 مساءً وهي تلف حقيبتها حول يدها.',
            en: 'Footage shows Nourhan entering side service alley at 8:24 PM and leaving at 8:38 PM clutching her bag.',
          },
          implicatedCharacterIds: ['nourhan'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'تسجيل مادي قاطع ينسف حجة غياب نورهان نهائياً.',
            en: 'Definitive footage destroying Nourhan alibi.',
          },
        },
        {
          id: 'ev_004_n_3_2',
          roundNumber: 3,
          type: 'forensic',
          title: { ar: 'العثور على الفلاشة والبصمات', en: 'Flash Drive & Fingerprints Discovery' },
          description: {
            ar: 'تقرير فحص حقيبة نورهان سامي.',
            en: 'Search report of Nourhan Sami handbag.',
          },
          detailedContent: {
            ar: 'تم ضبط الفلاشة الخاصة بالصفقات المسربة داخل حقيبة نورهان، وعليها آثار بقع دماء مطابقة لفصيلة الضحية وبصمات نورهان المباشرة.',
            en: 'Leaked deal flash drive found inside Nourhan bag with victim blood traces and her fingerprints.',
          },
          implicatedCharacterIds: ['nourhan'],
          isRedHerring: false,
          detectiveAnalysis: {
            ar: 'دليل الإدانة النهائي لنورهان سامي.',
            en: 'Final incriminating evidence against Nourhan Sami.',
          },
        },
      ],
    },
    timeline: [
      { time: '08:10 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'ياسر يرسل برقية تحذيرية لنورهان بشأن الفلاشة المسربة.', en: 'Yasser sends warning text to Nourhan regarding leaked drive.' }, significance: { ar: 'بداية الأزمة', en: 'Crisis trigger' } },
      { time: '08:18 مساءً', location: { ar: 'البوابة الرئيسية', en: 'Main Gate' }, event: { ar: 'نورهان تسجل خروجاً صورياً من البوابة الرئيسية.', en: 'Nourhan logs fake exit at main gate.' }, significance: { ar: 'حجة الغياب الأولى', en: 'First fake exit' } },
      { time: '08:25 مساءً', location: { ar: 'الباب الخلفي للطابق السابع', en: '7th Floor Rear Door' }, event: { ar: 'نورهان تستخدم بطاقتك وتتسلل لمكتب ياسر.', en: 'Nourhan scans card at rear service door.' }, significance: { ar: 'العودة السرية', en: 'Secret re-entry' } },
      { time: '08:30 مساءً', location: { ar: 'مكتب المدير التنفيذي', en: 'CEO Office' }, event: { ar: 'المواجهة واعتداء نورهان على ياسر بتمثال المكتب واختطاف الفلاشة.', en: 'Confrontation; Nourhan strikes Yasser with statue and snatches drive.' }, significance: { ar: 'لحظة الجريمة', en: 'Murder moment' } },
      { time: '08:38 مساءً', location: { ar: 'الشارع الجانبي', en: 'Side Street' }, event: { ar: 'نورهان تغادر عبر الممر الجانبي وتستقل تاكسي.', en: 'Nourhan exits via side alley and takes taxi.' }, significance: { ar: 'الهروب النهائي', en: 'Final escape' } },
    ],
    winningStory: {
      ar: 'ممتاز! نورهان سامي خططت للمغادرة الصورية لتثبيت حجة غيابها، لكن تسجيل الباب الخلفي وكاميرات الشارع كشفت عودتها لمسرح الجريمة واسترجاع الفلاشة المسربة.',
      en: 'Excellent work! Nourhan Sami planned a fake early exit, but side door badge logs and street cameras exposed her secret return and murder.',
    },
    losingStory: {
      ar: 'للأسف! خدعة الخروج المبكر خيلت على الجميع وأفلتت نورهان سامي من العقاب.',
      en: 'Unfortunately, Nourhan fake early exit tricked everyone, allowing her to escape.',
    },
  },
};
