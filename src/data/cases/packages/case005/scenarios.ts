/**
 * CASE 005 - "المكالمة الأخيرة"
 * Scenarios & Dynamic Evidence Engine for All 6 Killers
 */

import { CaseTimelineItem, EvidenceItem, Language } from '../../../../types/game';

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

export const CASE_005_SCENARIOS: Record<string, KillerScenarioDefinition> = {
  // SCENARIO 01: ليلى مراد (اللقطة المحذوفة)
  char_layla: {
    characterId: 'char_layla',
    killerSecret: {
      ar: 'أنتِ القاتلة! اكتشف رامي عقدك السري لبيع حقوق البرنامج لشبكة منافسة وكان سيعلن طردك وفسخ الشراكة وحرمانك من الأرباح الليلة، فاستدرجتِه لغرفة التسجيل وقتلتِهِ بمعدات الاستوديو واستغللتِ محطة التحكم لقطع البث وتغطية وقت الجريمة.',
      en: 'You are the killer! Rami discovered your secret contract with a rival network and was disinheriting and ousting you tonight. You lured him to the audio room, killed him, and manipulated the control console to cover the time window.',
    },
    killerTruth: {
      characterId: 'char_layla',
      trueMotive: {
        ar: 'اكتشاف رامي لعقدها السري مع القناة المنافسة وتهديده بإنهاء شراكتها وحرمانها من ملايين الجنيهات من أرباح البرنامج.',
        en: 'Rami discovered her secret contract with a rival station and threatened to dissolve her partnership and deny her millions in profits.',
      },
      howItWasDone: {
        ar: 'استدرجت رامي إلى غرفة التسجيل الصوتي بحجة مراجعة فقرة الميزانية، وتعدت عليه بجسم معدني ثقيل. ثم عادت سريعًا للـControl Room واستخدمت محطتها الخاصة للتلاعب بسويتش الكاميرات وعمل Cut قصير بتأخير البث لتخطي نافذة الجريمة.',
        en: 'Lured Rami into the audio room under the pretense of budget review, struck him with a heavy metal piece, then rushed back to the Control Room to execute an unscheduled switch cut covering the murder window.',
      },
      flawInAlibi: {
        ar: 'سجل سيرفر البث (Production Log) أثبت أن التحويل المبتكر للجداول الزمنية (Switching) تم إدخاله يدويًا من محطة التحكم الخاصة بليلى (Workstation-A)، مع وجود تعارض واضح بين التايم كود المباشر وتايم كود الصوت.',
        en: 'Production Server logs proved the unscheduled video switch was manually input from Layla Workstation-A, with an unresolvable mismatch between live video and audio timecodes.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_005_l_1_1',
          roundNumber: 1,
          type: 'forensic',
          title: { ar: '📋 تقرير الطب الشرعي المبدئي', en: '📋 Forensic Report' },
          description: {
            ar: 'وفاة رامي بكسور جمجمية إثر ضربة بجسم صلب بأسفل الرأس. توقيت الوفاة التقديري بين ١٠:٤٠ و ١٠:٥٠ مساءً.',
            en: 'Rami died from skull trauma caused by a heavy metal object. Estimated death between 10:40 and 10:50 PM.',
          },
          detailedContent: {
            ar: 'فحص الجمجمة يثبت التعرض لضربة واحدة قاضية أدت لوفاة المخرج في الحال.',
            en: 'Skull exam reveals a single fatal blow resulting in instant death.',
          },
          implicatedCharacterIds: ['char_layla', 'char_seif'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الوفاة وقعت بداخل غرفة التسجيل.', en: 'Death occurred in audio room.' },
        },
        {
          id: 'ev_005_l_1_2',
          roundNumber: 1,
          type: 'document',
          title: { ar: '📞 تفريغ المكالمة المباشرة', en: '📞 Live Broadcast Call Transcript' },
          description: {
            ar: 'تفريغ آخر كلمات رامي: "أنا عارف مين عملها... ومش هسكت المرة دي." ثم تلقى مكالمة وغادر الاستوديو.',
            en: 'Transcript of Rami last words live: "I know who did it... and I won\'t stay silent this time." He took a call and exited.',
          },
          detailedContent: {
            ar: 'تفريغ معتمد من وحدة الصوت يثبت خروج رامي المفاجئ عقب تلقيه المكالمة.',
            en: 'Verified audio transcript showing Rami sudden exit after receiving the call.',
          },
          implicatedCharacterIds: ['char_layla', 'char_hana'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'المكالمة استدرجته لغرفة التسجيل.', en: 'The call lured him to the audio room.' },
        },
      ],
      2: [
        {
          id: 'ev_005_l_2_1',
          roundNumber: 2,
          type: 'document',
          title: { ar: '📽️ سجل محطة التحكم (Production Workstation Log)', en: '📽️ Production Workstation Log' },
          description: {
            ar: 'سجل السيرفر يظهر أن أمراً يدويًا لقطع البث (Cut Command) تم إرساله من محطة ليلى المباشرة (Workstation-A) الساعة ١٠:٤٥:٢٠ مساءً لتغطية التايم كود.',
            en: 'Server log reveals a manual cut command was executed from Layla Workstation-A at 10:45:20 PM to obscure the live timecode.',
          },
          detailedContent: {
            ar: 'تحليل البرمجيات يثبت استخدام رمز دخول ليلى الخاص لإرسال أمر القطع من محطة التحكم A.',
            en: 'Software analysis proves Layla credential was used to execute manual cut from Console A.',
          },
          implicatedCharacterIds: ['char_layla'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'أمر القطع اليدوي نفذته ليلى من جهازها.', en: 'Manual cut was executed by Layla.' },
        },
        {
          id: 'ev_005_l_2_2',
          roundNumber: 2,
          type: 'document',
          title: { ar: '📄 مسودة عقد نقل البرنامج المنافس', en: '📄 Rival Network Transfer Contract' },
          description: {
            ar: 'عُثر في حقيبة ليلى على مسودة عقد موثق بنقل حقوق البرنامج لقناة منافسة بقيمة ٥ ملايين جنيه بشرط استبعاد رامي.',
            en: 'Draft contract found in Layla bag for transferring show rights to a rival channel for 5M EGP excluding Rami.',
          },
          detailedContent: {
            ar: 'المستند يحتوي على بنود قانونية صارمة تنص على طرد رامي وتسليم الماستر للقناة المنافسة.',
            en: 'Document outlines strict clauses transferring rights and firing Rami.',
          },
          implicatedCharacterIds: ['char_layla'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الدافع المالي والجنائي القوي لـ ليلى.', en: 'Strong financial motive for Layla.' },
        },
      ],
      3: [
        {
          id: 'ev_005_l_3_1',
          roundNumber: 3,
          type: 'document',
          title: { ar: '🔍 تعارض التايم كود في محطة ليلى', en: '🔍 Timecode Mismatch on Layla Terminal' },
          description: {
            ar: 'الدليل القاطع: اختلاف قدره ٥٥ ثانية بين تايم كود الكاميرات وصوت الميكروفون المفتوح، ثبت أنه أُنشئ يدويًا عبر رمز الدخول الخاص بـ ليلى.',
            en: 'Crucial evidence: A 55-second offset between camera timecode and mic feed was created manually using Layla login ID.',
          },
          detailedContent: {
            ar: 'التدقيق الرقمي يثبت بالقطع تعمد ليلى تغيير إعدادات التايم كود لخلق حجة غياب وهمية.',
            en: 'Digital audit conclusively proves Layla altered timecode settings to forge a false alibi.',
          },
          implicatedCharacterIds: ['char_layla'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الدليل النهائي الجازم لإدانة ليلى مراد.', en: 'Conclusive evidence incriminating Layla.' },
        },
      ],
    },
    timeline: [
      {
        time: '١٠:٣٠ مساءً',
        location: { ar: 'الاستوديو الرئيسي', en: 'Main Studio' },
        event: { ar: 'بدء البث المباشر للبرنامج في الاستوديو.', en: 'Live broadcast begins.' },
        significance: { ar: 'بداية تتبع البث المباشر.', en: 'Tracking live broadcast starts.' },
      },
      {
        time: '١٠:٤٠ مساءً',
        location: { ar: 'ممر غرفة التحكم', en: 'Control Room Corridor' },
        event: { ar: 'مشادة حادة بين رامي وليلى بشأن العقد السري.', en: 'Argument between Rami and Layla over secret contract.' },
        significance: { ar: 'المواجهة المالية الحادة قبل الجريمة.', en: 'Sharp financial clash before murder.' },
      },
      {
        time: '١٠:٤٢ مساءً',
        location: { ar: 'أرضية الاستوديو', en: 'Studio Floor' },
        event: { ar: 'رامي يتحدث على الهواء قائلاً عبارته الشهيرة.', en: 'Rami speaks live statement.' },
        significance: { ar: 'تصريح رامي العلني بالتهديد.', en: 'Rami public threat statement.' },
      },
      {
        time: '١٠:٤٤ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'ليلى تستدرج رامي لغرفة التسجيل وتضربه بقطعة معدنية.', en: 'Layla lures Rami to audio room and strikes him.' },
        significance: { ar: 'لحظة وقوع الجريمة.', en: 'Exact time of the murder.' },
      },
      {
        time: '١٠:٤٥ مساءً',
        location: { ar: 'غرفة التحكم', en: 'Control Room' },
        event: { ar: 'ليلى تعود لغرفة التحكم وترسل أمر القطع اليدوي من محطتها.', en: 'Layla returns to Control Room and sends manual cut command.' },
        significance: { ar: 'التلاعب بسجل التحكم اليدوي.', en: 'Manual control log override.' },
      },
      {
        time: '١٠:٥٢ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'اكتشاف الجثة وإيقاف البرنامج.', en: 'Body discovered.' },
        significance: { ar: 'اكتشاف مسرح الجريمة.', en: 'Crime scene discovery.' },
      },
    ],
    winningStory: {
      ar: `🎬 **كشف حقيقة "اللقطة المحذوفة" — ليلى مراد هي القاتلة!**

بفضل تحليلكم الدقيق لـ**سجلات محطة التحكم (Production Workstation Log)**، نجحتم في إثبات أن ليلى مراد هي التي استدرجت المخرج رامي الدسوقي إلى غرفة التسجيل الصوتي وقتلته بقطعة معدنية ثقيلة لمنعه من كشف عقدها السري.

أثبتت الأدلة الرقمية أن أمر قطع البث اليدوي (Manual Cut) صَدر خصيصًا من جهازها الشخصي (Workstation-A) لخلق وهم التواجد بالكونترول وخلق ثغرة زمنية.

**أحسنتم العمل! تم القبض على ليلى مراد وإحالتها للنيابة العامة!**`,
      en: `🎬 **"The Deleted Shot" Solved — Layla Mourad is the Killer!**

Your detailed analysis of the **Production Workstation Log** proved Layla lures Rami to the audio room and killed him to protect her secret contract.

Digital evidence established her manual cut command from Workstation-A. Justice has been served!`,
    },
    losingStory: {
      ar: `❌ **خدعة محطة التحكم نجحت والإفلات من العقاب!**

انساق الفريق خلف المشتتات والادعاءات العابرة، بينما تمكنت ليلى مراد من الاستفادة من التلاعب بالتايم كود والإفلات بالجريمة.

أُغلق القضية ضد شخص أخر بريء بينما طليقت القاتلة!`,
      en: `❌ **Layla Escapes Justice!**

The team fell for false leads while Layla successfully used her console manipulations to walk free. Re-examine the workstation logs!`,
    },
  },

  // SCENARIO 02: يوسف حمدي (الصوت اللي سبق الصورة)
  char_youssef: {
    characterId: 'char_youssef',
    killerSecret: {
      ar: 'أنت القاتل! رامي اكتشف أنك حذفت التسجيلات الصوتية السابقة وهدد بطردك وشطبك من النقابة، فاستدرجته لغرفة التسجيل بحجة تعديل الميكروفون وقتلته بحامل الميكروفون المعدني ودبلجت الصوت.',
      en: 'You are the killer! Rami discovered you deleted audio recordings and threatened disbarment. You lured him to the audio room, killed him with a heavy mic stand, and tampered with audio clips.',
    },
    killerTruth: {
      characterId: 'char_youssef',
      trueMotive: {
        ar: 'تهديد رامي المباشر لطرد يوسف وشطبه من النقابة وإثبات إهماله وحذفه لتسجيلات القناة.',
        en: 'Rami direct threat to fire Youssef and report him to the guild for deleting official audio tapes.',
      },
      howItWasDone: {
        ar: 'استدرج رامي إلى غرفة التسجيل الصوتي بحجة وجود مشكلة في الصوت اللاسلكي، وقضى عليه بضربه بحامل الميكروفون الثقيل. ثم قام بتشغيل مقطع صوتي مسبق لرامي عبر الميكروفون لتضليل التوقيت.',
        en: 'Lured Rami into the audio room claiming a mic wireless issue, killed him with a heavy mic stand, then played a pre-recorded clip of Rami to falsify his survival timing.',
      },
      flawInAlibi: {
        ar: 'تحليل الموجات الصوتية (Waveform Analysis) أظهر صوت ضربة الارتطام بوضوح بأسفل الترددات قبل الـTimecode الصوتي المزيف الذي دبلجه يوسف لرامي.',
        en: 'Audio waveform analysis exposed the physical impact thud clearly beneath low frequencies prior to Youssef fake voice timestamp.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_005_y_1_1',
          roundNumber: 1,
          type: 'forensic',
          title: { ar: '📋 تقرير الطب الشرعي المبدئي', en: '📋 Forensic Report' },
          description: {
            ar: 'وفاة رامي بكسور جمجمية إثر ضربة بجسم صلب بأسفل الرأس. توقيت الوفاة التقديري بين ١٠:٤٠ و ١٠:٥٠ مساءً.',
            en: 'Rami died from skull trauma caused by a heavy metal object. Estimated death between 10:40 and 10:50 PM.',
          },
          detailedContent: {
            ar: 'فحص الجمجمة يثبت التعرض لضربة برأس جسم معدني ثقيل.',
            en: 'Skull examination confirms blunt impact from a heavy metal tool.',
          },
          implicatedCharacterIds: ['char_youssef'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الضربة كانت بأداة معدنية بالاستوديو.', en: 'Impact weapon was studio equipment.' },
        },
        {
          id: 'ev_005_y_1_2',
          roundNumber: 1,
          type: 'photo',
          title: { ar: '📸 صورة غرفة التسجيل الصوتي', en: '📸 Audio Recording Room Scene' },
          description: {
            ar: 'الجثة ملقاة بداخل غرفة التسجيل وبجوارها حامل ميكروفون ثقيل متسخ بالدماء وهاتفه المكسور.',
            en: 'Body in audio room with bloody heavy mic stand and broken phone nearby.',
          },
          detailedContent: {
            ar: 'صورة مسرح الجريمة تبين تلطخ حامل الميكروفون بالدماء.',
            en: 'Crime scene photo reveals blood stains on the heavy mic stand.',
          },
          implicatedCharacterIds: ['char_youssef'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'حامل الميكروفون هو أداة الجريمة.', en: 'Mic stand was the murder weapon.' },
        },
      ],
      2: [
        {
          id: 'ev_005_y_2_1',
          roundNumber: 2,
          type: 'forensic',
          title: { ar: '🎙️ فحص أداة الجريمة (حامل الميكروفون)', en: '🎙️ Mic Stand Forensic Analysis' },
          description: {
            ar: 'فحص البصمات على حامل الميكروفون الثقيل يظهر وجود آثار شحم مادي وبصمات مطابقة لقفازات يوسف الصوتية.',
            en: 'Fingerprint testing on the heavy mic stand revealed grease residue matching Youssef audio handling gloves.',
          },
          detailedContent: {
            ar: 'المعامل الجنائية تثبت تطابق الآثار على الحامل مع قفازات يوسف المستخدمة بالصوت.',
            en: 'Forensic lab confirms glove residue matches Youssef audio handling gear.',
          },
          implicatedCharacterIds: ['char_youssef'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'بصمات قفازات يوسف على الحامل.', en: 'Youssef glove prints found on mic stand.' },
        },
        {
          id: 'ev_005_y_2_2',
          roundNumber: 2,
          type: 'audio',
          title: { ar: '🔊 تحليل الموجة الصوتية المزدوجة', en: '🔊 Dual Waveform Analysis' },
          description: {
            ar: 'التحليل يثبت وجود مقطع صوتي مكرر لرامي تم تشغيله من وحدة Soundboard المباشرة لخلق انطباع بأنه كان حياً.',
            en: 'Analysis proves a looped Rami audio phrase was replayed from the Soundboard to forge a live presence.',
          },
          detailedContent: {
            ar: 'موجة الصوت الرقمية تثبت دبلجة المقطع الصوتي من جهاز المكساج.',
            en: 'Digital audio waveform proves audio loop was replayed from the mixer.',
          },
          implicatedCharacterIds: ['char_youssef'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'دبلجة الصوت لتزويف توقيت الوفاة.', en: 'Audio replayed to fake survival timing.' },
        },
      ],
      3: [
        {
          id: 'ev_005_y_3_1',
          roundNumber: 3,
          type: 'audio',
          title: { ar: '🔍 بصمة الارتطام في التردد الصوتي', en: '🔍 Impact Frequency Stamp' },
          description: {
            ar: 'الدليل القاطع: التردد المنخفض لضربة الارتطام بالحامل المعدني سُجل الساعة ١٠:٤٤:١٥، أي قبل تشغيل كليب صوت رامي بدقيقة كاملة.',
            en: 'Crucial evidence: Low frequency impact sound was recorded at 10:44:15, a full minute before the looped audio clip was fired.',
          },
          detailedContent: {
            ar: 'التحليل الترددي القاطع يسقط حجة غياب يوسف ويكشف الجريمة.',
            en: 'Definitive frequency analysis shatters Youssef alibi.',
          },
          implicatedCharacterIds: ['char_youssef'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الدليل القاطع لمقتل رامي على يد يوسف.', en: 'Conclusive proof Youssef killed Rami.' },
        },
      ],
    },
    timeline: [
      {
        time: '١٠:٣٠ مساءً',
        location: { ar: 'الاستوديو الرئيسي', en: 'Main Studio' },
        event: { ar: 'بدء البث المباشر للبرنامج.', en: 'Live broadcast starts.' },
        significance: { ar: 'انطلاق البث المباشر.', en: 'Live airing starts.' },
      },
      {
        time: '١٠:٤١ مساءً',
        location: { ar: 'ممر الصوت', en: 'Audio Corridor' },
        event: { ar: 'يوسف يطلب من رامي دخول غرفة الصوت لدوزنة الميكروفون.', en: 'Youssef asks Rami to enter audio room for mic calibration.' },
        significance: { ar: 'استدراج رامي لغرفة التسجيل.', en: 'Luring Rami to audio room.' },
      },
      {
        time: '١٠:٤٤ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'يوسف يضرب رامي بحامل الميكروفون المعدني الثقيل.', en: 'Youssef strikes Rami with the metal mic stand.' },
        significance: { ar: 'وقوع ضربة الميكروفون القاتلة.', en: 'Fatal mic stand strike.' },
      },
      {
        time: '١٠:٤٥ مساءً',
        location: { ar: 'كبينة الصوت', en: 'Audio Booth' },
        event: { ar: 'يوسف يعود لكبينة المكساج وتشغيل كليب صوتي مكرر لرامي.', en: 'Youssef plays pre-recorded Rami clip from mixing board.' },
        significance: { ar: 'دبلجة المقطع الصوتي.', en: 'Playing the audio loop.' },
      },
      {
        time: '١٠:٥٢ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'اكتشاف الجثة وإيقاف البث.', en: 'Body discovered.' },
        significance: { ar: 'اكتشاف الجثة رسميًا.', en: 'Official body discovery.' },
      },
    ],
    winningStory: {
      ar: `🎬 **كشف لغز "الصوت اللي سبق الصورة" — يوسف حمدي هو القاتل!**

بفضل تحليل **الموجات الصوتية (Dual Waveform Analysis)** وبصمة الارتطام بأسفل الترددات، نجحتم في إثبات أن يوسف حمدي استخدم مقطعاً صوتياً مسجلاً مسبقاً لرامي لتزويف توقيت الوفاة.

كشفت الفحوصات الجنائية آثار الشحم المادي وبصمات قفازاته على حامل الميكروفون الملطخ بالدماء.

**تم القبض على يوسف حمدي وإحالته للمحاكمة العاجلة!**`,
      en: `🎬 **"Audio Before Image" Solved — Youssef Hamdy is the Killer!**

Dual waveform analysis proved Youssef replayed a sound clip of Rami to fabricate survival timing after killing him with the heavy mic stand. Justice is served!`,
    },
    losingStory: {
      ar: `❌ **دبلجة الصوت خدعت الفريق!**

نجح يوسف حمدي في إخفاء جريمته وراء التلاعب بالمقاطع الصوتية ومكساج الأثير.

حاولوا مجدداً وركزوا على ترددات الارتطام بحامل الميكروفون!`,
      en: `❌ **Youssef Escapes!**

The team was deceived by audio mixing trickery. Re-check the mic stand impact timestamps and try again!`,
    },
  },

  // SCENARIO 03: سيف منصور (الكاميرا كانت بتبص الناحية الغلط)
  char_seif: {
    characterId: 'char_seif',
    killerSecret: {
      ar: 'أنت القاتل! علم رامي أن سيف يصوّر مستندات خاصة واستبدله بمدير تصوير أجنبي، فاستغل سيف الزاوية الميتة لتغيير الكاميرات وتسلل لغرفة التسجيل وقتله بجسم إضاءة ثقيل.',
      en: 'You are the killer! Rami caught you filming documents and replaced you with a foreign DP. You exploited camera blind spots during switching to kill him in the audio room.',
    },
    killerTruth: {
      characterId: 'char_seif',
      trueMotive: {
        ar: 'قرارات رامي بإنهاء عمل سيف واستبداله بمدير تصوير أجنبي وحرمانه من المشاريع المستقبلية.',
        en: 'Rami decision to terminate Seif and replace him with an international DP on upcoming films.',
      },
      howItWasDone: {
        ar: 'يعرف سيف زوايا الكاميرات الميتة تمامًا؛ استغل تحويل الكاميرا الرئيسية إلى المذيعة وتسلل عبر الممر الخلفي إلى غرفة التسجيل وقضى على رامي بضربه برأس وحدة إضاءة ثقيلة.',
        en: 'Exploited camera blind spots when switching away from main frame, slipped into the audio room, and struck Rami with a heavy lighting rig unit.',
      },
      flawInAlibi: {
        ar: 'انعكاس صورة سيف في شاشة مراقبة جانبيّة (Monitor) مطفأة بالزاوية كشف تحركه في الممر وقت انقطاع البث بدلاً من الوقوف خلف الكاميرا.',
        en: 'Reflection on a turned-off side monitor caught Seif sneaking down the corridor during the switch, contradicting his alibi.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_005_s_1_1',
          roundNumber: 1,
          type: 'forensic',
          title: { ar: '📋 تقرير الطب الشرعي المبدئي', en: '📋 Forensic Report' },
          description: {
            ar: 'وفاة رامي بكسور جمجمية إثر ضربة بجسم صلب بأسفل الرأس. توقيت الوفاة التقديري بين ١٠:٤٠ و ١٠:٥٠ مساءً.',
            en: 'Rami died from skull trauma caused by a heavy metal object. Estimated death between 10:40 and 10:50 PM.',
          },
          detailedContent: {
            ar: 'التقرير الفني للطب الشرعي أثبت استخدام جزء معدني من معدات الإضاءة.',
            en: 'Forensic report notes trauma inflicted by a heavy lighting component.',
          },
          implicatedCharacterIds: ['char_seif'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'أداة الجريمة من معدات الإضاءة والتصوير.', en: 'Murder weapon was a lighting rig fixture.' },
        },
        {
          id: 'ev_005_s_1_2',
          roundNumber: 1,
          type: 'document',
          title: { ar: '🗺️ مخطط ممرات الاستوديو والزوايا الميتة', en: '🗺️ Blind Spot Studio Map' },
          description: {
            ar: 'مخطط الاستوديو يوضح وجود زوايا ميتة خلف الكاميرات الأرضية تتيح الخروج للممر الخفي.',
            en: 'Map highlights blind spots behind floor cameras allowing exit into side corridor.',
          },
          detailedContent: {
            ar: 'الخريطة الموضحة تبرز النقاط الميتة لكاميرا سيف الرئيسية.',
            en: 'Floor plan details blind spots behind Seif main camera.',
          },
          implicatedCharacterIds: ['char_seif'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الزوايا الميتة سمحت بالانسحاب السري.', en: 'Blind spots allowed stealth exit.' },
        },
      ],
      2: [
        {
          id: 'ev_005_s_2_1',
          roundNumber: 2,
          type: 'cctv',
          title: { ar: '📽️ سجل تحويل كوابل التصوير', en: '📽️ Camera Switch Log' },
          description: {
            ar: 'سجل التحويل يظهر توجيه Cam-1 إلى زاوية واسعة غير معتادة لمدة ٢٤ ثانية بناءً على ضبط سيف المسبق.',
            en: 'Log shows Cam-1 was locked on an unusual wide angle for 24 seconds based on Seif manual preset.',
          },
          detailedContent: {
            ar: 'سجل التغيير الرقمي يثبت قفل الكاميرا بزاوية واسعة بضبط يدوي.',
            en: 'Camera switch log confirms wide angle lock preset.',
          },
          implicatedCharacterIds: ['char_seif'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'تثبيت الزاوية الواسعة لتسهيل الحركة.', en: 'Wide preset locked to enable movement.' },
        },
        {
          id: 'ev_005_s_2_2',
          roundNumber: 2,
          type: 'cctv',
          title: { ar: '🔍 فيديو انعكاس شاشة المراقبة المطفأة', en: '🔍 Side Monitor Reflection Footage' },
          description: {
            ar: 'معالجة فيديو الكاميرا الثانوية كشفت انعكاس سيف على زجاج شاشة الاستوديو الجانبية وهو يجري في الممر وقت الجريمة.',
            en: 'Video enhancement of secondary camera feed captured Seif reflection on side glass running down the hall during the murder window.',
          },
          detailedContent: {
            ar: 'توضيح الفيديو المجهري يظهر صورة سيف المنعكسة بشكل قاطع.',
            en: 'Enhanced video scan clearly reflects Seif running down the hallway.',
          },
          implicatedCharacterIds: ['char_seif'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'انعكاس الشاشة يفضح حركة سيف السرية.', en: 'Monitor reflection reveals Seif hidden movement.' },
        },
      ],
      3: [
        {
          id: 'ev_005_s_3_1',
          roundNumber: 3,
          type: 'forensic',
          title: { ar: '🗡️ بصمات رأس الإضاءة السينمائية', en: '🗡️ Lighting Rig Print Traces' },
          description: {
            ar: 'الدليل القاطع: بصمات كف سيف اليمنى مطبوعة بدماء رامي على مقبض تعديل وحدة الإضاءة المستخدمة في القتل.',
            en: 'Crucial evidence: Seif right palm print stamped in Rami blood on the lighting rig adjustment knob.',
          },
          detailedContent: {
            ar: 'بصمة الكف المدمجة بالدماء تحسم إدانة سيف منصور.',
            en: 'Bloody palm print definitively convicts Seif.',
          },
          implicatedCharacterIds: ['char_seif'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الدليل الجنائي القاطع ضد سيف منصور.', en: 'Conclusive forensic proof against Seif.' },
        },
      ],
    },
    timeline: [
      {
        time: '١٠:٣٠ مساءً',
        location: { ar: 'الاستوديو الرئيسي', en: 'Main Studio' },
        event: { ar: 'بدء البث المباشر للبرنامج.', en: 'Live broadcast begins.' },
        significance: { ar: 'بداية التصوير المباشر.', en: 'Live filming starts.' },
      },
      {
        time: '١٠:٤٢ مساءً',
        location: { ar: 'أرضية الاستوديو', en: 'Studio Floor' },
        event: { ar: 'سيف يثبت الكاميرا الرئيسية على زاوية ثابته واسعة.', en: 'Seif locks Cam-1 on wide preset.' },
        significance: { ar: 'تثبيت الزاوية الواسعة للكاميرا.', en: 'Locking wide camera angle.' },
      },
      {
        time: '١٠:٤٤ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'سيف يتسلل عبر الزاوية الميتة لغرفة التسجيل ويضرب رامي بوحدة الإضاءة.', en: 'Seif sneaks through blind spot and strikes Rami with light rig.' },
        significance: { ar: 'تسلل سيف والاعتداء المباشر.', en: 'Seif stealth entry and attack.' },
      },
      {
        time: '١٠:٤٦ مساءً',
        location: { ar: 'أرضية الاستوديو', en: 'Studio Floor' },
        event: { ar: 'سيف يعود لخلف الكاميرا الرئيسية.', en: 'Seif returns behind Cam-1.' },
        significance: { ar: 'عودة سيف للوقوف خلف الكاميرا.', en: 'Seif return to main camera.' },
      },
      {
        time: '١٠:٥٢ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'اكتشاف الجثة وإيقاف البث.', en: 'Body discovered.' },
        significance: { ar: 'اكتشاف الجثة.', en: 'Body discovery.' },
      },
    ],
    winningStory: {
      ar: `🎬 **كشف لغز "الكاميرا كانت بتبص الناحية الغلط" — سيف منصور هو القاتل!**

بفضل تدقيقكم في **انعكاس الشاشة المطفأة (Side Monitor Reflection)** وبصمات الكف على وحدة الإضاءة، أثبتتم أن سيف منصور استغل الزاوية الميتة للكاميرات وتسلل لقتل رامي.

**تم القبض على سيف منصور وإيقافه عن العمل وتحويله للقضاء!**`,
      en: `🎬 **"Camera Looking Away" Solved — Seif Mansour is the Killer!**

Your analysis of the side monitor reflection and palm prints on the lighting rig proved Seif exploited camera blind spots to murder Rami. Justice is done!`,
    },
    losingStory: {
      ar: `❌ **خدعة الزوايا الميتة انطلت على التحقيق!**

نجح سيف منصور في توهيم الجميع بوجوده خلف الكاميرا، بينما أفلت بالجريمة.

حاولوا مجدداً وراجعوا انعكاس الشاشات الجانبية!`,
      en: `❌ **Seif Escapes!**

The team was fooled by blind spot positioning. Re-examine the side monitor reflections!`,
    },
  },

  // SCENARIO 04: هنا شريف (آخر مكالمة)
  char_hana: {
    characterId: 'char_hana',
    killerSecret: {
      ar: 'أنتِ القاتلة! رامي كان يبتزك بتسريب صوتي مدمر لمستقبلك، فاتصلتِ به للالتقاء في غرفة التسجيل وقتلتِهِ بتمثال الأكريليك الثقيل، واعتمدتِ على الـBroadcast Delay لإثبات وجودك على الشاشة.',
      en: 'You are the killer! Rami was blackmailing you with a recording. You met him in the audio room, killed him with an acrylic statue, and relied on Broadcast Delay buffer to fake your screen presence.',
    },
    killerTruth: {
      characterId: 'char_hana',
      trueMotive: {
        ar: 'امتلاك رامي لتسجيل صوتي حساس يهدد بالقضاء الفوري على مستقبلي زواجها ومسيرتها الإعلامية.',
        en: 'Rami possession of a damaging private recording threatening her broadcast career and personal reputation.',
      },
      howItWasDone: {
        ar: 'اتصلت به هاتفياً للالتقاء في غرفة التسجيل، وحين رفض إعطائها الشريط ضربته بتمثال الأكريليك الثقيل، ثم ركضت للوقوف أمام الكاميرا معتمدة على الـ30 ثانية التأخير البثي (Broadcast Delay Buffer).',
        en: 'Called Rami to meet in the audio room, killed him with a heavy acrylic trophy when he refused to return the tape, then ran back to stage exploiting the 30s broadcast delay buffer.',
      },
      flawInAlibi: {
        ar: 'سجل الاتصالات والتايم كود الفعلي أثبت أن ظهور هنا المباشر على الشاشة الخارجية كان ينقص ٣٠ ثانية عن الحقيقة، وأن التلفون أجرى اتصالاً مباشراً برامي قبل الوفاة بدقيقتين.',
        en: 'Call logs and master timecode proved her televised presence lagged behind actual real-time by 30 seconds, placing her in the corridor during the murder window.',
      },
    },
    evidenceByRound: {
      1: [
        {
          id: 'ev_005_h_1_1',
          roundNumber: 1,
          type: 'document',
          title: { ar: '📞 سجل مكالمات هاتف رامي', en: '📞 Rami Incoming Call Log' },
          description: {
            ar: 'سجل هاتف رامي يظهر استقبال مكالمة مدتها ١٢ ثانية من هاتف هنا شريف الخاص الساعة ١٠:٤٣:٠٥ مساءً.',
            en: 'Rami phone log records a 12-second incoming call from Hana private phone at 10:43:05 PM.',
          },
          detailedContent: {
            ar: 'سجل شركة الاتصالات يؤكد مكالمة صادرة من هنا لرامي.',
            en: 'Telecom log verifies call originated from Hana phone to Rami.',
          },
          implicatedCharacterIds: ['char_hana'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'المكالمة استدعت رامي لمقابلة هنا.', en: 'Call requested Rami to meet Hana.' },
        },
        {
          id: 'ev_005_h_1_2',
          roundNumber: 1,
          type: 'photo',
          title: { ar: '📸 صورة غرفة التسجيل الصوتي', en: '📸 Audio Recording Room Scene' },
          description: {
            ar: 'الجثة ملقاة بداخل غرفة التسجيل وبجوارها تمثال تكريم أكريليكي ثقيل مكسور وملطخ بالدماء.',
            en: 'Body in audio room next to a broken, bloody acrylic award trophy.',
          },
          detailedContent: {
            ar: 'صورة التمثال الأكريليكي المكسور الملطخ بالدماء.',
            en: 'Photo of the broken bloody acrylic award trophy.',
          },
          implicatedCharacterIds: ['char_hana'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'التمثال الأكريليكي كان أداة الجريمة.', en: 'Acrylic trophy was the murder weapon.' },
        },
      ],
      2: [
        {
          id: 'ev_005_h_2_1',
          roundNumber: 2,
          type: 'document',
          title: { ar: '💻 تحليل الـBroadcast Delay Buffer', en: '💻 Broadcast Delay Buffer Analysis' },
          description: {
            ar: 'سيرفر البث يثبت وجود تأخير قدره ٣٠ ثانية مسبق بين تسجيل الكاميرات الميداني وإرسال البث للجمهور.',
            en: 'Broadcast server log confirms a pre-configured 30-second delay buffer between stage cameras and public airing.',
          },
          detailedContent: {
            ar: 'تحليل البث يثبت فارق ٣٠ ثانية مسبق بين المسرح والشاشات.',
            en: 'Stream analysis confirms a 30s buffer between stage and home screens.',
          },
          implicatedCharacterIds: ['char_hana'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'التأخير البثي استُغل لإخفاء خروج هنا.', en: '30s buffer exploited to fake Hana presence.' },
        },
        {
          id: 'ev_005_h_2_2',
          roundNumber: 2,
          type: 'forensic',
          title: { ar: '💄 آثار مساحيق التجميل بمسرح الجريمة', en: '💄 Scene Cosmetic DNA Trace' },
          description: {
            ar: 'فحص تمثال الأكريليك كشف وجود آثار أحمر شفاه ومسحوق تجميل مطابق لماركة هنا شريف المعتمدة.',
            en: 'Forensic test on the acrylic trophy found lipstick and makeup traces matching Hana exclusive brand.',
          },
          detailedContent: {
            ar: 'تطابق مستحضرات التجميل على التمثال مع ماركة هنا.',
            en: 'Cosmetics trace on trophy matches Hana makeup brand.',
          },
          implicatedCharacterIds: ['char_hana'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'بصمات مساحيق هنا على أداة القتل.', en: 'Hana makeup trace on murder weapon.' },
        },
      ],
      3: [
        {
          id: 'ev_005_h_3_1',
          roundNumber: 3,
          type: 'document',
          title: { ar: '🔍 توثيق التايم كود الفعلي للحركة', en: '🔍 Real Timecode Physical Audit' },
          description: {
            ar: 'الدليل القاطع: عند خصم الـ٣٠ ثانية الخاصة بالـDelay، تبين أن هنا كانت غائبة عن المسرح بين ١٠:٤٣:٢٠ و١٠:٤٤:٤٠، وهي نفس نافذة مقتل رامي.',
            en: 'Crucial evidence: Adjusting for the 30s delay reveals Hana was physically absent from stage between 10:43:20 and 10:44:40—the exact murder window.',
          },
          detailedContent: {
            ar: 'التدقيق الرقمي يثبت غياب هنا الميداني وقت الجريمة.',
            en: 'Digital audit proves Hana physical absence during the murder window.',
          },
          implicatedCharacterIds: ['char_hana'],
          isRedHerring: false,
          detectiveAnalysis: { ar: 'الدليل النهائي الجازم لغياب هنا وإدانتها.', en: 'Definitive proof of Hana guilt.' },
        },
      ],
    },
    timeline: [
      {
        time: '١٠:٣٠ مساءً',
        location: { ar: 'الاستوديو الرئيسي', en: 'Main Studio' },
        event: { ar: 'بدء البث المباشر للبرنامج.', en: 'Live broadcast begins.' },
        significance: { ar: 'انطلاق الحلقة المباشرة.', en: 'Live show launches.' },
      },
      {
        time: '١٠:٤٣ مساءً',
        location: { ar: 'الاستوديو الرئيسي', en: 'Main Studio' },
        event: { ar: 'هنا تتصل برامي وتطلب منه مقابلتها سراً بغرفة التسجيل.', en: 'Hana calls Rami asking for urgent secret meeting in audio room.' },
        significance: { ar: 'اتصال هنا الهاتفي الاستدراجي.', en: 'Hana luring phone call.' },
      },
      {
        time: '١٠:٤٤ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'هنا تقتل رامي بتمثال الأكريليك في غرفة التسجيل وترركض للمسرح.', en: 'Hana kills Rami with acrylic trophy in audio room and sprints to stage.' },
        significance: { ar: 'مقتل رامي بتمثال الأكريليك.', en: 'Rami murder with acrylic trophy.' },
      },
      {
        time: '١٠:٤٥ مساءً',
        location: { ar: 'شاشة البث الفضائي', en: 'Satellite Stream' },
        event: { ar: 'ظهور هنا على الشاشة الخارجية بفضل الـ30 ثانية Delay.', en: 'Hana appears on external stream due to 30s delay buffer.' },
        significance: { ar: 'وهم الظهور المباشر.', en: 'The live stream illusion.' },
      },
      {
        time: '١٠:٥٢ مساءً',
        location: { ar: 'غرفة التسجيل الصوتي', en: 'Audio Recording Room' },
        event: { ar: 'اكتشاف الجثة وإيقاف البث.', en: 'Body discovered.' },
        significance: { ar: 'اكتشاف الجثة رسميًا.', en: 'Official body discovery.' },
      },
    ],
    winningStory: {
      ar: `🎬 **كشف لغز "آخر مكالمة" — هنا شريف هي القاتلة!**

بفضل التدقيق في **الـBroadcast Delay Buffer (تأخير الـ30 ثانية)** وآثار التجميل على تمثال الأكريليك، أثبتتم أن هنا شريف استغلت التلاعب بالتوقيت لتغطية خروجها القاتل لمقابلة رامي.

**تم القبض على هنا شريف والتحفظ على أدلتها الجنائية!**`,
      en: `🎬 **"Last Call" Solved — Hana Sherif is the Killer!**

By calculating the 30-second broadcast delay buffer and matching makeup DNA on the acrylic trophy, you exposed Hana screen presence as a time-lagged illusion. Justice is served!`,
    },
    losingStory: {
      ar: `❌ **تأخير البث خدع فريق التحقيق!**

اعتقد الفريق أن وجود هنا على الشاشة ينفي التهمة، بينما كان ذلك مجرد بث مؤجل.

حاولوا مجدداً واطرحوا ٣٠ ثانية من التايم كود!`,
      en: `❌ **Hana Escapes!**

The team mistook delayed broadcast footage for real-time presence. Re-examine the 30-second delay buffer!`,
    },
  },
};
