/**
 * CASE 005 - "المكالمة الأخيرة"
 * Default Case Evidence Set
 */

import { EvidenceItem } from '../../../../types/game';

export const CASE_005_EVIDENCE: Record<number, EvidenceItem[]> = {
  1: [
    {
      id: 'ev_autopsy',
      roundNumber: 1,
      type: 'forensic',
      title: { ar: '📋 تقرير الطب الشرعي المبدئي', en: '📋 Preliminary Forensic Report' },
      description: {
        ar: 'الوفاة نجمت عن كسور جمجمية ونزيف حاد إثر ضربة بجسم معدني ثقيل بأسفل الرأس. توقيت الوفاة التقديري بين ١٠:٤٠ و ١٠:٥٠ مساءً. أثبتت التحاليل خلو الدم من أي مواد مخدرة.',
        en: 'Death caused by severe skull fractures from a heavy metal blow. Estimated time of death between 10:40 and 10:50 PM. Blood screen negative.',
      },
      detailedContent: {
        ar: 'تقرير الفحص التشريحي الدقيق يوضح تعرض الضحية رامي الدسوقي لضربة واحدة قاضية بأسفل الجمجمة الخلفي تسببت في هبوط حاد بالدورة الدموية والوفاة المباشرة.',
        en: 'Detailed autopsy reveals a single fatal blow to the lower posterior skull causing immediate circulatory collapse.',
      },
      implicatedCharacterIds: ['char_layla', 'char_youssef', 'char_seif', 'char_hana'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'توقيت الوفاة يقع تحديداً في منتصف فترة البث المباشر للبرنامج.',
        en: 'Time of death falls precisely in the middle of the live broadcast segment.',
      },
    },
    {
      id: 'ev_call_transcript',
      roundNumber: 1,
      type: 'document',
      title: { ar: '📞 تفريغ المكالمة المباشرة على الهواء', en: '📞 Live Broadcast Call Transcript' },
      description: {
        ar: 'تفريغ صوتي لآخر لحظات ظهور رامي في الاستوديو: رامي: "أنا عارف مين عملها... ومش هسكت المرة دي." (يرن الهاتف في جيبه، يجيب بصوت منخفض، ثم يترك الكادر فورًا يتجه للممر الخفي).',
        en: 'Audio transcript: Rami: "I know who did it... and I won\'t stay silent this time." (Phone rings, answers in low tone, leaves camera frame into side hallway).',
      },
      detailedContent: {
        ar: 'التفريغ الصوتي المعتمد من مهندسي الرصد يبين استقبال رامي لمكالمة هاتفية قصيرة للغاية استغرقت أقل من ٧ ثوانٍ قبل خروجه من كادر التصوير الرئيسي.',
        en: 'Official audio transcript shows Rami received a brief call lasting under 7 seconds before leaving camera angle.',
      },
      implicatedCharacterIds: ['char_hana', 'char_layla'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'المكالمة الأخيرة كانت المحفز المباشر لخروج رامي من الاستوديو وتوجهه لغرفة التسجيل الصوتي.',
        en: 'The last call directly triggered Rami to leave the floor and enter the audio room.',
      },
    },
    {
      id: 'ev_crime_scene_photo',
      roundNumber: 1,
      type: 'photo',
      title: { ar: '📸 صورة غرفة التسجيل الصوتي (موقع الجثة)', en: '📸 Audio Recording Room Scene Photo' },
      description: {
        ar: 'رامي مُلقى على الأرض بجوار طاولة التحكم الميكروفونية. عُثر بجوار الجثة على أداة معدنية ثقيلة متسخة، وهاتفه المحمول معطل بشاشة مكسورة تحت الكرسي.',
        en: 'Rami lying near the mic console. Heavy dirty tool found beside body; crushed cell phone found under chair.',
      },
      detailedContent: {
        ar: 'فحص مسرح الجريمة بداخل غرفة التسجيل الصوتي يوضح عدم وجود أي آثار لمقاومة بعنف، مما يعني أن الضحية فوجئ بالاعتداء القادم من الخلف.',
        en: 'Crime scene survey indicates no signs of struggle, implying the victim was blindsided from behind.',
      },
      implicatedCharacterIds: ['char_youssef'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'مكان العثور على الجثة مغلق تماماً وبعيد عن أعين الكاميرات الأرضية.',
        en: 'The crime scene location is fully isolated from direct floor cameras.',
      },
    },
    {
      id: 'ev_studio_map',
      roundNumber: 1,
      type: 'document',
      title: { ar: '🗺️ مخطط ممرات وغرف الاستوديو', en: '🗺️ Studio Layout & Corridor Map' },
      description: {
        ar: 'خريطة الاستوديو تشير إلى أن غرفة التسجيل الصوتي تقع في الممر الخلفي، ويمكن الوصول إليها من غرفتي التحكم والمونتاج، وكذلك عبر مخزن المعدات وممر الكاميرات الرئيسي.',
        en: 'Map shows Audio Recording Room in back hallway, accessible from Control Room, Editing Booth, Equipment Storage, and main camera floor.',
      },
      detailedContent: {
        ar: 'تظهر الخريطة أربعة مسارات مختلفة للوصول إلى مسرح الجريمة دون المرور أمام الجمهور أو منصة التقديم الرئيسية.',
        en: 'Map shows 4 distinct pathways to the scene without passing the main stage or live audience.',
      },
      implicatedCharacterIds: ['char_seif', 'char_hana'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تتيح الممرات الخلفية لأي شخص في الطاقم التحرك إلى غرفة التسجيل خلال أقل من ٣٠ ثانية.',
        en: 'Rear hallways allow crew members to reach the audio room in under 30 seconds.',
      },
    },
  ],

  2: [
    {
      id: 'ev_camera_log',
      roundNumber: 2,
      type: 'cctv',
      title: { ar: '📽️ سجل تحويل الكاميرات (Switching Log)', en: '📽️ Camera Switching Log' },
      description: {
        ar: 'سجل وحدة التحكم يظهر الانتقال المفاجئ من الكاميرا الرئيسية Cam-1 إلى المذيعة هنا شريف على Cam-2 الساعة ١٠:٤٤:١٢، يليه Cut قصير غير مجدول مدته ٩ ثوانٍ الساعة ١٠:٤٦:٠٠.',
        en: 'Control log shows unexpected switch from Cam-1 to Hana on Cam-2 at 10:44:12, followed by an unscheduled 9-second cut at 10:46:00.',
      },
      detailedContent: {
        ar: 'بيانات الكنترول تظهر أن الكاميرا الرئيسية تم توجيهها لزاوية جدارية واسعة قبيل انقطاع البث المباشر الميداني.',
        en: 'Control unit data shows Main Cam-1 was redirected to a wide wall angle right before stream interruption.',
      },
      implicatedCharacterIds: ['char_seif', 'char_layla'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'التحويل المباشر للكاميرات يوحي بمحاولة لتغطية خروج أو دخول أفراد الكواليس.',
        en: 'Camera switching strongly suggests an attempt to hide backstage movements.',
      },
    },
    {
      id: 'ev_audio_waveform',
      roundNumber: 2,
      type: 'audio',
      title: { ar: '🔊 تحليل ترددات شريط الصوت (Audio Waveform)', en: '🔊 Audio Track Waveform Analysis' },
      description: {
        ar: 'تحليل شريط الصوت يظهر ضوضاء ارتطام خافتة غير تفسيرية مطابقة لسقوط جسم ثقيل تم تسجيلها عبر ميكروفون خلفي مفتوح الساعة ١٠:٤٥:١٨ مساءً.',
        en: 'Audio waveform analysis reveals an unexplained faint impact thud picked up on an open ambient mic at 10:45:18 PM.',
      },
      detailedContent: {
        ar: 'التحليل الرقمي للتردد المنخفض يكشف أن الصوت ينتمي لارتطام معدني ثقيل بأرضية الاستوديو الملبسة بالخشب.',
        en: 'Digital low-frequency audio inspection confirms heavy metallic impact against wooden studio flooring.',
      },
      implicatedCharacterIds: ['char_youssef'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تحديد صوت الارتطام بالدقيقة والثانية يضيّق نافذة ارتكاب الجريمة بدقة شديدة.',
        en: 'Pinpointing the exact thud timestamp narrows down the murder window precisely.',
      },
    },
    {
      id: 'ev_playback_log',
      roundNumber: 2,
      type: 'document',
      title: { ar: '💻 سجل سيرفر البث والتايم كود (Playback Server Log)', en: '💻 Playback Server Timecode Log' },
      description: {
        ar: 'السجل الإلكتروني يثبت وجود فاصل زمن بثي قدره ٣٠ ثانية (Broadcast Delay Buffer) بين أحداث الاستوديو الحقيقية وما يظهر للشاشات الخارجية.',
        en: 'Electronic log proves a 30-second Broadcast Delay Buffer between live studio actions and the external transmission stream.',
      },
      detailedContent: {
        ar: 'بيانات التايم كود تثبت أن المخرج رامي غادر الاستوديو فعلياً في توقيت يسبق ظهور خروجه على شاشات المنازل بـ ٣٠ ثانية كاملة.',
        en: 'Timecode data proves Rami exited the floor 30 seconds prior to his exit appearing on home screens.',
      },
      implicatedCharacterIds: ['char_hana', 'char_layla'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الفارق الزمني في البث سمح للقاتل ببناء حجة غياب تعتمد على مشاهدة الجمهور التلفزيوني.',
        en: 'The broadcast lag allowed the killer to build an alibi based on audience viewing.',
      },
    },
  ],

  3: [
    {
      id: 'ev_timecode_mismatch',
      roundNumber: 3,
      type: 'document',
      title: { ar: '🔍 التناقض القاطع في التايم كود وصوت الخلفية', en: '🔍 Master Timecode & Audio Discrepancy' },
      description: {
        ar: 'مقارنة دقيقة تثبت أن رامي صمت تمامًا ولم يكن يوجه أي تعليمات عبر السماعة الداخلية ابتداءً من ١٠:٤٥:٠٠، مما يعني أن الحادث وقع قبل وقت قطع البث الظاهري.',
        en: 'Cross-comparison proves Rami fell completely silent on earpiece cues starting at 10:45:00, confirming the attack occurred prior to the apparent stream cut.',
      },
      detailedContent: {
        ar: 'تقرير الرصد الاتصالي يؤكد انقطاع التوجيه الإخراجي الصوتي من سماعة الأذن الخاصة بالطاقم الساعة ١٠:٤٥:٠٠ بدقة متناهية.',
        en: 'Comms audit proves directorial earpiece audio abruptly cut out at 10:45:00 sharp.',
      },
      implicatedCharacterIds: ['char_layla', 'char_youssef', 'char_seif', 'char_hana'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'صمت السماعة الإخراجية يُكذب حجج الغياب التي استندت إلى استمرار سماع صوت التوجيه.',
        en: 'Earpiece silence disproves alibis claiming ongoing directorial guidance.',
      },
    },
    {
      id: 'ev_final_weapon_forensics',
      roundNumber: 3,
      type: 'forensic',
      title: { ar: '🗡️ البصمات المادية على أداة الجريمة', en: '🗡️ Forensic Fingerprint Trace on Weapon' },
      description: {
        ar: 'فحص المجهر الإلكتروني أظهر وجود بقايا عرق وبصمات جزئية مضغوطة على قبضات التحكم بالاستوديو وأداة الجريمة.',
        en: 'Microscopic analysis revealed sweat traces and compressed partial prints matching studio control tools and murder weapon.',
      },
      detailedContent: {
        ar: 'فحوصات البصمة الوراثية وتطابق الحواف المادية حسمت القاتل الحقيقي بدون أدنى مجال للشك.',
        en: 'DNA trace testing and microscopic ridge alignment definitively confirmed the killer.',
      },
      implicatedCharacterIds: ['char_layla', 'char_youssef', 'char_seif', 'char_hana'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الدليل المادي النهائي يربط بين القاتل وأداة الجريمة بالاستوديو بشكل قاطع.',
        en: 'Final physical forensics conclusively links the killer to the studio murder weapon.',
      },
    },
  ],
};
