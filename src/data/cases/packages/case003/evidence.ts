/**
 * CASE 003 - "آخر رحلة"
 * Evidence Configuration Across Rounds
 */

import { EvidenceItem } from '../../../../types/game';

export const CASE_003_EVIDENCE: Record<number, EvidenceItem[]> = {
  1: [
    {
      id: 'ev_01_medical_report',
      roundNumber: 1,
      type: 'forensic',
      title: {
        ar: 'تقرير الطبيب الشرعي المبدئي',
        en: 'Initial Medical Report',
      },
      description: {
        ar: 'وقت الوفاة التقريبي بين 11:15 و11:30 مساءً. يوجد أثر إصابة بالرأس، لكن سبب الوفاة الرئيسي غير محسوم.',
        en: 'Estimated time of death between 11:15 - 11:30 PM. Head injury present, exact cause of death inconclusive.',
      },
      detailedContent: {
        ar: 'التقرير الفني يحدد نافذة الوفاة بين 11:15 و11:30 مساءً. كدمة الرأس تشير لارتطام أو ضاربة بآلة كليلة، مع وجود خمول غير عادي بالأنسجة يرجح تعاطي جرعة منومة.',
        en: 'Medical evaluation narrows time of death to 11:15-11:30 PM. Head contusion indicates blunt trauma, accompanied by tissue lethargy suggesting a sedative.',
      },
      implicatedCharacterIds: ['char_shereef', 'char_yara', 'char_adham', 'char_nadeen'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تحديد دقيق لوقت الجريمة مع احتمالية وجود تأثير منوم يضعف مقاومة الضحية.',
        en: 'Narrows time of death and indicates victim’s resistance was compromised.',
      },
    },
    {
      id: 'ev_02_navigation_log',
      roundNumber: 1,
      type: 'document',
      title: {
        ar: 'سجل مسار الملاحة الإلكتروني',
        en: 'Electronic Navigation Log',
      },
      description: {
        ar: 'يوضح أن اليخت "نورس" غيّر اتجاهه بوضوح لمدة 7 دقائق قبل اكتشاف الجثة، دون إذن مسجل.',
        en: 'Shows yacht "Nawras" altered course for 7 minutes before the body was found, without recorded log authorization.',
      },
      detailedContent: {
        ar: 'الرسم البياني للمسار البحري يبين انحرافاً حاداً بذاوية 22 درجة بين 11:20 و11:27 مساءً قبل العودة الجزئية للمسار الاصلي. لا أحد اعترف بإعطاء أمر التغيير.',
        en: 'Course plot shows a 22-degree deviation between 11:20-11:27 PM. No entry indicates who authorized the maneuver.',
      },
      implicatedCharacterIds: ['char_shereef', 'char_yara', 'char_adham', 'char_nadeen'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تغيير المسار لم يكن عشوائياً وكان يهدف للتغطية أو التوجه لمنطقة محددة.',
        en: 'Course change was intentional to mask time or target a specific sea spot.',
      },
    },
    {
      id: 'ev_03_radio_comms',
      roundNumber: 1,
      type: 'audio',
      title: {
        ar: 'جهاز الاتصال اللاسلكي',
        en: 'Radio Communications Log',
      },
      description: {
        ar: 'آخر اتصال أجراه كمال كان في 11:09 مساءً، واستمر 17 ثانية فقط دون ظهور اسم المتصل.',
        en: 'Last call made by Kamal was at 11:09 PM, lasting 17 seconds with caller ID unidentified.',
      },
      detailedContent: {
        ar: 'السجل الرقمي للهاتف اللاسلكي يثبت مكالمة سريعة في 11:09 م، تلاها انقطاع تام للإشارة وتوقف القبطان عن الرد حتى اكتشاف الجثة.',
        en: 'Radio logs show a brief 17-second encrypted call at 11:09 PM followed by total radio silence until body discovery.',
      },
      implicatedCharacterIds: ['char_shereef', 'char_yara', 'char_nadeen', 'char_adham'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'المكالمة القصيرة سبقت الانحراف والتوقف، وتحمل تحذيراً أو مواجهة.',
        en: 'Brief call preceded deviation and blackout, indicating a confrontation.',
      },
    },
  ],
  2: [
    {
      id: 'ev_04_engine_room_access',
      roundNumber: 2,
      type: 'document',
      title: {
        ar: 'سجل دخول غرفة المحركات',
        en: 'Engine Room Access Log',
      },
      description: {
        ar: 'سجل إلكتروني يوضح أن باب غرفة المحركات تم فتحه الساعة 11:18 مساءً، مما يتعارض مع حجة أحد اللاعبين.',
        en: 'Electronic log shows engine room door was opened at 11:18 PM, contradicting one suspect’s alibi.',
      },
      detailedContent: {
        ar: 'الحساس الإلكتروني للباب أظهر بصمة دخول في 11:18 م وتوقف مضخة التبريد لدقيقتين، وهو التوقيت الذي ادعى فيه بعض المشتبه بهم البقاء في مكان آخر.',
        en: 'Door sensor recorded access at 11:18 PM and coolant pump delay, contradicting claims of staying elsewhere.',
      },
      implicatedCharacterIds: ['char_adham', 'char_shereef'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'دليل مباشر على كذب حجة الغياب والتواجد بمسرح صيانة المحركات وقت الحادث.',
        en: 'Direct evidence refuting claims of being away from engine passages.',
      },
    },
    {
      id: 'ev_05_corridor_photo',
      roundNumber: 2,
      type: 'photo',
      title: {
        ar: 'صورة من كاميرا اليخت',
        en: 'Yacht Camera Snapshot',
      },
      description: {
        ar: 'الكاميرا لا تظهر وجه الشخص بوضوح، لكنها تُظهر مظلياً يعبر الممر المؤدي لغرفة القيادة في 11:21 م.',
        en: 'Camera image shows a blurry figure crossing the corridor toward the bridge at 11:21 PM.',
      },
      detailedContent: {
        ar: 'الصورة الملتقطة في 11:21 م تعرض ظلاً لشخص يرتدي سترة داكنة ويتحرك بسرعة باتجاه الجسرة. التوقيت يتطابق تماماً مع انحراف مسار اليخت.',
        en: 'Snapshot at 11:21 PM shows a silhouette moving swiftly toward the bridge, matching the exact course change timestamp.',
      },
      implicatedCharacterIds: ['char_yara', 'char_shereef', 'char_adham', 'char_nadeen'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تأكيد حركة أحد الركاب نحو غرفة القيادة في التوقيت الحرج للجريمة.',
        en: 'Confirms movement toward the bridge right at the critical moment.',
      },
    },
    {
      id: 'ev_06_kamal_draft',
      roundNumber: 2,
      type: 'document',
      title: {
        ar: 'مسودة رسالة القبطان كمال',
        en: 'Captain Kamal’s Unsent Draft',
      },
      description: {
        ar: 'مسودة رسالة غير مرسلة على هاتف كمال: "لو حصل لي حاجة الليلة، الشخص ده هو السبب..." لكن الاسم ناقص.',
        en: 'Unsent text draft on Kamal’s phone: "If anything happens to me tonight, this person is the cause..." but the name is missing.',
      },
      detailedContent: {
        ar: 'تم استرجاع المسودة المكتوبة الساعة 11:05 مساءً. كمال كان يستعد لكشف السر الخطير المهدد به قبل أن يتم مقاطعته واغتياله.',
        en: 'Recovered draft saved at 11:05 PM shows Kamal prepared to reveal the blackmail identity before being interrupted.',
      },
      implicatedCharacterIds: ['char_shereef', 'char_yara', 'char_adham', 'char_nadeen'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تثبت وجود تهديد مباشر وشعور الضحية بالخطر قبل الجريمة بـ 15 دقيقة.',
        en: 'Proves explicit threat and victim’s fear 15 minutes before the crime.',
      },
    },
  ],
  3: [
    {
      id: 'ev_07_gps_target_zone',
      roundNumber: 3,
      type: 'document',
      title: {
        ar: 'إحداثيات تغيير المسار المحفوظة',
        en: 'Stored GPS Target Coordinates',
      },
      description: {
        ar: 'جهاز الملاحة يظهر أن تغيير المسار لم يكن عشوائياً، بل كان للوصول لمنطقة معينة من البحر مرتبطة بسر أحد الحاضرين.',
        en: 'GPS shows route deviation targeted a specific nautical quadrant linked to a suspect’s secret.',
      },
      detailedContent: {
        ar: 'تحليل شريحة الملاحة أثبت أن اليخت تم إدخال إحداثيات موقع إسقاط أو التقاء محددة بعرض البحر [31.21 N, 29.88 E] لمدة 7 دقائق قبل إلغائها.',
        en: 'Chip analysis proves coordinates [31.21 N, 29.88 E] were manually entered for 7 minutes to reach a rendez-vous or disposal drop point.',
      },
      implicatedCharacterIds: ['char_shereef', 'char_yara', 'char_adham', 'char_nadeen'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الربط بين الموقع المستهدف ودافع القاتل الحقيقي في تغطية أثره.',
        en: 'Links the targeted sea quadrant directly to the killer’s core motive.',
      },
    },
    {
      id: 'ev_08_intercom_audio',
      roundNumber: 3,
      type: 'audio',
      title: {
        ar: 'تسجيل اللاسلكي الداخلي بالجسرة',
        en: 'Bridge Intercom Audio Recording',
      },
      description: {
        ar: 'تسجيل صوتي قصير بداخل الجسرة يُسمع فيه صوت كمال، صوت شخص آخر، صوت ارتطام، ثم صوت إنذار الملاحة.',
        en: 'Short intercom recording capturing Kamal’s voice, a second voice, an impact, and navigation alarms.',
      },
      detailedContent: {
        ar: 'التسجيل يحتوي على كلمات حادة: "مش هتقدر تهددني تاني!" متبوعة بصوت ارتطام مفاجئ وسقوط أجهزة الملاحة واشتغال إنذار الانحراف.',
        en: 'Audio contains heated words: "You won’t threaten me anymore!" followed by a blunt strike and deviation alarms.',
      },
      implicatedCharacterIds: ['char_shereef', 'char_yara', 'char_adham', 'char_nadeen'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تسجيل لحظة المواجهة واعتراف القاتل الضمني قبيل الضربة الحاسمة.',
        en: 'Captures the confrontation and implicit confession right at the fatal moment.',
      },
    },
    {
      id: 'ev_09_twist_alibi_flaw',
      roundNumber: 3,
      type: 'forensic',
      title: {
        ar: 'الحقيقة المخفية وثغرة حجة الغياب (The Twist)',
        en: 'Hidden Truth & Alibi Flaw',
      },
      description: {
        ar: 'القاتل استغل حركة اليخت والظلام ليجعل مكان الجثة يبدو وكأنه مسرح الجريمة، لكن الدليل المادي يناقض حجة غيابه.',
        en: 'The killer used yacht movement and pitch darkness to disguise the crime scene, but physical evidence breaks their alibi.',
      },
      detailedContent: {
        ar: 'تجميع الأدلة (وقت الوفاة + مسار اليخت + حركة الشخصيات + تسجيل الاتصال) يثبت أن الجريمة بدأت بمواجهة خارجية قبل نقل التفاصيل للجسرة. التناقض الصغير في حجة غياب الجاني يكشف هويته بلا شك!',
        en: 'Synthesizing evidence proves the confrontation started prior to body placement. The subtle flaw in the killer’s timeline exposes them completely!',
      },
      implicatedCharacterIds: ['char_shereef', 'char_yara', 'char_adham', 'char_nadeen'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الدليل القاطع الذي يربط كافة الخيوط ويكشف القاتل الحقيقي.',
        en: 'The decisive proof that unites all clues and reveals the killer.',
      },
    },
  ],
};
