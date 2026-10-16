/**
 * CASE 002 - "ليلة فيلا الزمالك"
 * Package Evidence Component
 */

import { EvidenceItem } from '../../../../types/game';

export const CASE_002_EVIDENCE: Record<number, EvidenceItem[]> = {
  1: [
    {
      id: 'ev_01_autopsy_blackout',
      roundNumber: 1,
      type: 'forensic',
      title: { ar: 'تقرير الطب الشرعي المبدئي #٢٠٢', en: 'Autopsy Report #202' },
      description: {
        ar: 'التقرير الطبي المبدئي لمعاينة جثة ياسين مراد داخل غرفة الموسيقى.',
        en: 'Initial forensic inspection of Yassin Mourad in the music room.',
      },
      detailedContent: {
        ar: 'الضحية: ياسين مراد (٤٦ سنة).\nتوقيت الوفاة: دقيق جداً عند الساعة ١١:٤٧ مساءً (خلال فترة الـ٥٨ ثانية من انقطاع الكهرباء).\nسبب الوفاة: كسور حادة بالجمجمة إثر ضربة قاطعة بقاعدة مجسم نحاسي ثقيل عُثر عليه بجوار الجثة.\nملاحظات مسرح الجريمة: لم تخرج أي شخصية من الفيلا، الباب الرئيسي كان بحراسة مشددة ولم يُفتح.',
        en: 'Victim: Yassin Mourad (46).\nTime of Death: Exactly at 11:47 PM during the 58-second blackout.\nCause: Skull fracture from a blow with a heavy brass statue found near the body.\nNotes: Guarded main entrance, no entry or exit from the villa during the party.',
      },
      implicatedCharacterIds: ['char_adam', 'char_salma', 'char_fareed', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الجريمة وقعت بالكامل داخل الـ٥٨ ثانية من الظلام التام، والقاتل شخص داخل الفيلا يعرف تفاصيل المكان!',
        en: 'The crime occurred entirely during the 58-second blackout by an insider familiar with the villa!',
      },
    },
    {
      id: 'ev_02_music_room_photo',
      roundNumber: 1,
      type: 'photo',
      title: { ar: 'معاينة طاولة غرفة الموسيقى', en: 'Music Room Table Photo' },
      description: {
        ar: 'صورة فوتوغرافية لطاولة غرفة الموسيقى فور عودة النور.',
        en: 'Photograph of the music room table immediately when power returned.',
      },
      detailedContent: {
        ar: 'تفاصيل الصورة:\nتظهر الطاولة وبها كأسان ومشروبان مسكوبان على السجادة، رغم ادعاء الجميع أن ياسين كان يجلس بمفرده تماماً في غرفة الموسيقى قبل انقطاع الكهرباء مباشرة.',
        en: 'Photo details:\nShows two cups and spilled drinks on the carpet, directly contradicting suspect claims that Yassin was completely alone in the room before the blackout.',
      },
      implicatedCharacterIds: ['char_adam', 'char_salma', 'char_fareed', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'شخص ما كان يتحدث مع ياسين داخل غرفة الموسيقى أو دخل عليه قبيل انقطاع الكهرباء مباشرة!',
        en: 'Someone was speaking with Yassin inside the music room right before the blackout occurred!',
      },
    },
    {
      id: 'ev_03_pre_blackout_cctv',
      roundNumber: 1,
      type: 'cctv',
      title: { ar: 'لقطة كاميرا الممر (١١:٤٦:٥٠ م)', en: 'Corridor CCTV Snapshot (11:46:50 PM)' },
      description: {
        ar: 'آخر صورة التقاطها كاميرا الممر الموصل لغرفة الموسيقى قبل الظلام بأميال قليلة.',
        en: 'Final CCTV snapshot of the corridor leading to the music room right before blackout.',
      },
      detailedContent: {
        ar: 'تفاصيل اللقطة (الساعة ١١:٤٦:٥٠ م):\nتظهر الحركة المتشعبة والارتباك الملاحظ قبل انقطاع النور:\n- الشقيق الأصغر يتحرك باتجاه المطبخ.\n- الممثلة الصاعدة تتجه نحو الممر الخلفي.\n- الشريك المالي يخطو نحو شرفة الحديقة.\n- الصحفية الفنية ترفع هاتفها للتصوير.',
        en: 'Snapshot at 11:46:50 PM:\nShows scattered movements right before the lights failed:\nYounger Brother toward kitchen, Rising Actress toward back hall, Financial Partner toward patio, Entertainment Journalist holding phone.',
      },
      implicatedCharacterIds: ['char_adam', 'char_salma', 'char_fareed', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الجميع تحركوا في نفس التوقيت! انقطاع الكهرباء أتاح الفرصة للجميع للتسلل في الظلام!',
        en: 'Everyone was moving simultaneously! The blackout provided stealth cover for all suspects!',
      },
    },
  ],
  2: [
    {
      id: 'ev_04_nadine_video',
      roundNumber: 2,
      type: 'photo',
      title: { ar: 'تحليل فيديو هاتف الصحفية المحذوف الصوت', en: 'Journalist\'s Muted Video Analysis' },
      description: {
        ar: 'فيديو هاتف الصحفية الذي زعمت تصويره طوال فترة الظلام.',
        en: 'Journalist\'s smartphone video claimed to be recorded throughout the blackout.',
      },
      detailedContent: {
        ar: 'نتائج التحليل الفني للتسجيل:\n- الصوت منزوع بالكامل ومكتوم عمداً.\n- مدة التسجيل المظلم ١٨ ثانية فقط بدلاً من ٥٨ ثانية الكاملة!\n- الحركة المفاجئة لعدسة الكاميرا تعكس ترك الصحفية لمكانها والركض في الظلام نحو الممر.',
        en: 'Technical Analysis:\nAudio deliberately stripped. Dark recording duration is only 18 seconds instead of full 58 seconds! Lens jerk reflects the journalist abandoning her spot to rush down the hall in the dark.',
      },
      implicatedCharacterIds: ['char_nadine', 'char_salma'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'كذبة الصحفية وسُقوط ادعائها بالتواجد المستمر في غرفة المعيشة!',
        en: 'Exposes the journalist\'s lie regarding constant presence in the living room!',
      },
    },
    {
      id: 'ev_05_generator_log',
      roundNumber: 2,
      type: 'document',
      title: { ar: 'سجل المولد وقاطع الكهرباء الإلكتروني', en: 'Digital Breaker & Generator Log' },
      description: {
        ar: 'التقرير التقني لقاطع المولد الكهربائي بالفيلا.',
        en: 'Technical report of the villa\'s main circuit breaker.',
      },
      detailedContent: {
        ar: 'سجل اللوحة الكهربائية:\n- انقطاع الكهرباء الساعة ١١:٤٧:٠٢ م لم يكن بسبب عطل فني في المولد، بل نتج عن فصل يدوي متعمد للقاطع الرئيسي.\n- إعادة التيار الكهربائي الساعة ١١:٤٨:٠٠ م تمت تلقائياً عبر ضبط المؤقت الذكي دون أي تدخل يدوي!',
        en: 'Electrical Log:\nPower cutoff at 11:47:02 PM was manually tripped at the main breaker, not a fault. Power auto-restored at 11:48:00 PM via smart timer without any manual intervention!',
      },
      implicatedCharacterIds: ['char_adam', 'char_fareed', 'char_salma', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تفنيد ادعاءات المشتبه بهم: الكهرباء فُصلت بفعل فاعل لإحداث الظلام القاتل!',
        en: 'Breaker was hand-tripped to cause the murder blackout!',
      },
    },
    {
      id: 'ev_06_yassin_backup_msg',
      roundNumber: 2,
      type: 'message',
      title: { ar: 'رسالة هاتف ياسين الاحتياطي', en: 'Yassin\'s Backup Phone Message' },
      description: {
        ar: 'رسالة نصية أرسلها ياسين قبل وفاته بعشر دقائق.',
        en: 'Text message sent by Yassin 10 minutes prior to his death.',
      },
      detailedContent: {
        ar: '[نص الرسالة المسجلة - ١١:٣٧ م]\n"لو حصل لي حاجة الليلة، اسألوا عن اللي حصل وقت النور... فيه حد معانا بيخطط لسرقة الهاتف والأوراق، ومش هسكت له!"',
        en: '[Text Message - 11:37 PM]\n"If anything happens to me tonight, ask about what happened when the lights were on... someone here is plotting to steal my phone and papers, and I won\'t stay silent!"',
      },
      implicatedCharacterIds: ['char_adam', 'char_salma', 'char_fareed', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'ياسين كان يشعر بالخطر الداهت، ومصدر السر كان يكمن في هاتفه الذكي المفقود الذي يحتوي أسرار الجميع!',
        en: 'Yassin sensed impending danger stemming from his missing smartphone containing everyone\'s secrets!',
      },
    },
  ],
  3: [
    {
      id: 'ev_07_darkness_audio',
      roundNumber: 3,
      type: 'audio',
      title: { ar: 'التسجيل الصوتي المكتشف أثناء الظلام', en: 'Blackout Audio Snippet' },
      description: {
        ar: 'تسجيل قصير التقطه تطبيق تسجيل تلقائي على هاتف أحد الضيوف أثناء الـ٥٨ ثانية.',
        en: 'Short audio captured by an auto-recorder app on a guest\'s phone during the 58 seconds.',
      },
      detailedContent: {
        ar: '[تفريغ الصوت أثناء الـ٥٨ ثانية من الظلام]\n- (١١:٤٧:١٢ م): صوت فتح خشبي سريع لباب ممر الخدمة.\n- (١١:٤٧:٣٥ م): صوت خطوات سريعة ومكتومة على سجادة غرفة الموسيقى.\n- (١١:٤٧:٤٢ م): صراخ مكتوم من ياسين: "أنت؟! مش هتاخد الهاتف ده!"\n- (١١:٤٧:٤٦ م): صوت ارتطام معدني ثقيل (ضربة التمثال) وسقوط جسد.\n- (١١:٤٧:٥٢ م): صوت انفاس متسارعة وخطوات تبتعد مسرعة.',
        en: '[Audio Transcript during 58s Blackout]\n11:47:12 PM: Service door creaks open.\n11:47:35 PM: Fast muffled footsteps on music room carpet.\n11:47:42 PM: Muffled shout from Yassin: "You?! You won\'t take this phone!"\n11:47:46 PM: Heavy metallic impact sound and body collapse.\n11:47:52 PM: Rapid breathing and retreating footsteps.',
      },
      mediaUrl: 'audio_preset_struggle',
      audioDurationSeconds: 15,
      transcription: {
        ar: 'ياسين: "أنت؟! مش هتاخد الهاتف ده!" - ثم صوت ارتطام معدني ثقيل وسقوط.',
        en: 'Yassin: "You?! You won\'t take this phone!" followed by a heavy metallic strike.',
      },
      implicatedCharacterIds: ['char_adam', 'char_salma', 'char_fareed', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تسجيل قاطع يثبت مواجهة القاتل لياسين في الظلام واستيلائه على الهاتف المفقود فور الضربة القاتلة!',
        en: 'Conclusive recording proving the killer confronted Yassin in the dark and seized the missing phone after the blow!',
      },
    },
    {
      id: 'ev_08_missing_phone_found',
      roundNumber: 3,
      type: 'forensic',
      title: { ar: 'موقع العثور على هاتف ياسين المفقود', en: 'Missing Phone Discovery Site' },
      description: {
        ar: 'تقرير العثور على هاتف الضحية داخل زهرية الممر.',
        en: 'Forensic recovery report of victim\'s smartphone inside a corridor vase.',
      },
      detailedContent: {
        ar: 'تفاصيل الاكتشاف الجنائي:\nعُثر على هاتف ياسين الذكي المفقود مخبأً بدقة في قاع زهرية فخارية ضخمة تقع بممر الخدمة الجانبي الفاصل بين غرفة الموسيقى والمطبخ.\nملاحظة الطب الشرعي: الزهرية لا يمكن الوصول إليها إلا عبر المسار الزمني الخاطف الذي سلكه الجاني أثناء خروجه من غرفة الموسيقى وقبل عودة الكهرباء بأميال!',
        en: 'Discovery details:\nYassin\'s missing smartphone was recovered hidden inside a large ceramic vase along the side service hall connecting the music room and kitchen.\nNote: Reaching this vase required moving along the killer\'s exact escape route before power returned!',
      },
      implicatedCharacterIds: ['char_adam', 'char_salma', 'char_fareed', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'موقع الهاتف يحدد خط سير القاتل بدقة ويكشف الشخص الذي تحرك نحو هذا الممر بالذات وقت الظلام!',
        en: 'Phone location pinpointed the killer\'s exact route, exposing who traveled through this passage during the blackout!',
      },
    },
    {
      id: 'ev_09_decisive_physical_proof',
      roundNumber: 3,
      type: 'forensic',
      title: { ar: 'الدليل الجنائي المادي القاطع', en: 'Decisive Physical Movement Proof' },
      description: {
        ar: 'الدليل المادي القاطع الذي يحسم حركة الجاني ويطابق البصمات.',
        en: 'Conclusive physical evidence matching fingerprints and movement trajectory.',
      },
      detailedContent: {
        ar: 'الدليل الجنائي الحاسم:\nفحص البصمات المادية والدقيقة المقارنة على الآلة المعدنية القاتلة (المجسم النحاسي) وقاعدة الزهرية أثبتت بالدليل القاطع بصمات القاتل وتناقضها الكامل مع حجة غيابه الزائفة التي ادعاها طوال التحقيق!',
        en: 'Decisive Forensic Proof:\nFingerprint inspection matching the murder weapon (brass statue) and the vase base conclusively proved the killer\'s identity, obliterating their alibi!',
      },
      implicatedCharacterIds: ['char_adam', 'char_salma', 'char_fareed', 'char_nadine'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الدليل الذي يسقط الادعاء بالبقاء في المكان، ويؤكد حركة الجاني لتنفيذ الجريمة خلال الـ٥٨ ثانية!',
        en: 'Proof that shatters the stationary alibi, confirming the killer\'s precise attack during the 58 seconds!',
      },
    },
  ],
};
