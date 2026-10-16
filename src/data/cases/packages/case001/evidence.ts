/**
 * CASE 001 - "الوريث الأخير"
 * Package Evidence Component
 */

import { EvidenceItem } from '../../../../types/game';

export const CASE_001_EVIDENCE: Record<number, EvidenceItem[]> = {
  1: [
    {
      id: 'ev_01_autopsy_report',
      roundNumber: 1,
      type: 'forensic',
      title: { ar: 'تقرير الطب الشرعي #١٠١', en: 'Autopsy Report #101' },
      description: {
        ar: 'التقرير الطبي المبدئي لمعاينة جثة عثمان الألفي داخل مكتبه المغلق.',
        en: 'Initial forensic inspection report of Osman El-Alfy inside his locked office.',
      },
      detailedContent: {
        ar: 'الضحية: عثمان الألفي (٦٢ سنة).\nتوقيت الوفاة: بين ١٠:٤٥ - ١١:٠٠ مساءً.\nسبب الوفاة: هبوط حاد في الدورة الدموية إثر تناول جرعة سيانيد قاتلة ممتزجة بمشروبه الكريستالي.\nملاحظات الطب الشرعي: لا توجد أي آثار مقاومة أو عنف بدني، الباب والشبابيك كانت مغلقة تماماً من الداخل، ولم يخرج أحد من القصر.',
        en: 'Victim: Osman El-Alfy (62).\nTime of Death: 10:45 - 11:00 PM.\nCause: Acute cyanide poisoning dissolved in his crystal drink cup.\nNotes: No physical struggle. Office doors/windows sealed from inside; no outsiders entered.',
      },
      implicatedCharacterIds: ['char_tariq', 'char_karim', 'char_layla', 'char_sameh'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'السم أُضيف إلى مشروبه الخاص داخل القصر خلال النافذة الزمنية القاتلة بين ١٠:٤٥ و١١:٠٠ مساءً.',
        en: 'Poison was added to his private drink inside the mansion between 10:45 and 11:00 PM.',
      },
    },
    {
      id: 'ev_02_will_fragment',
      roundNumber: 1,
      type: 'document',
      title: { ar: 'مسودة الوصية الممزقة', en: 'Shredded Will Draft' },
      description: {
        ar: 'قصاصات أوراق ممزقة عُثر عليها داخل سلة مهملات المكتب.',
        en: 'Shredded paper fragments recovered from the office wastebasket.',
      },
      detailedContent: {
        ar: '[بند ممزق من مسودة الوصية الأولى]\n"... وبناءً عليه، تقرر حرمان (.....) حرمانًا تامًا من أسهم الشركة وإدارة المجموعة، وتخصيص كافة الأصول والمباني لـ (الوريث الأخير) الذي صان اسم العائلة وأمانتها..."',
        en: '[Shredded clause from initial draft]\n"...It is hereby decided to fully disinherit (.....) from company shares and group management, bestowing all assets upon (The Last Heir) who preserved family honor..."',
      },
      implicatedCharacterIds: ['char_tariq', 'char_karim', 'char_layla', 'char_sameh'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'عثمان كان يخطط لحرمان أفراد مقربين وتعيين وريث واحد حقيقي، مما أثار ذعر المشتبه بهم!',
        en: 'Osman planned to disinherit close family members, provoking panic among suspects!',
      },
    },
    {
      id: 'ev_03_hallway_cctv',
      roundNumber: 1,
      type: 'cctv',
      title: { ar: 'سجل مواجهات القصر (١٠:٣٠ - ١٠:٥٥ م)', en: 'Mansion Confrontation Log' },
      description: {
        ar: 'سجل التحركات والمواجهات في الممر المؤدي لمكتب عثمان قبل الجريمة.',
        en: 'Log of corridor movements leading to Osman\'s office prior to the murder.',
      },
      detailedContent: {
        ar: 'السجل الزمني:\n- ١٠:٣٠ م: انقضاء الاجتماع العائلي العام واشتعال الخلافات.\n- ١٠:٤٥ م: دخول المدير المالي للمكتب.\n- ١٠:٤٨ م: مرور مديرة المؤسسة الخيرية عبر شرفة الحديقة الجانبية.\n- ١٠:٥٠ م: تواجد الابن الأصغر بالقرب من الممر الجانبي.\n- ١٠:٥٢ م: دخول الابن الأكبر للمكتب لمدة دقائق حاسمة.\nالنتيجة: كل شخصية كان لديها موعد أو مواجهة حادة مع عثمان في نفس الليلة!',
        en: 'Timeline:\n10:30 PM: General meeting breaks out in anger.\n10:45 PM: CFO enters office.\n10:48 PM: Foundation Director passes via garden patio.\n10:50 PM: Youngest Son near service hall.\n10:52 PM: Eldest Son enters office for crucial minutes.\nResult: Every single suspect had a confrontation with Osman that night!',
      },
      implicatedCharacterIds: ['char_tariq', 'char_karim', 'char_layla', 'char_sameh'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'التويست الأول: كل المشتبه بهم يملكون دافعًا وقاموا بمواجهة عثمان في نفس الليلة! الجميع يبدون مذنَبين!',
        en: 'First Twist: Every suspect possessed a motive and confronted Osman that same night! Everyone appears guilty!',
      },
    },
  ],
  2: [
    {
      id: 'ev_04_audio_wiretap',
      roundNumber: 2,
      type: 'audio',
      title: { ar: 'التسجيل الصوتي المحتجز (١٠:٥٠ م)', en: 'Captured Audio Clip (10:50 PM)' },
      description: {
        ar: 'تفريغ تسجيل صوتي لمشادة عاصفة داخل المكتب.',
        en: 'Transcript of a stormy argument inside the office.',
      },
      detailedContent: {
        ar: '[تفريغ الصوت - ١٠:٥٠ مساءً]\nصوت عثمان الألفي: "مش هسمحلك تدمر اسم العيلة! الوصية دي هتنهي كل حاجة الليلة!"\nصوت المشتبه به الغاضب: "لو وقعت الوصية دي.. مش هتطلع من المكتب ده عايش!"',
        en: '[Transcript - 10:50 PM]\nOsman El-Alfy: "I will not let you destroy our family name! This will ends everything tonight!"\nAngry Suspect: "If you sign this will.. you won\'t walk out of this office alive!"',
      },
      mediaUrl: 'audio_preset_threat',
      audioDurationSeconds: 12,
      transcription: {
        ar: 'عثمان: "الوصية دي هتنهي كل حاجة الليلة!" - صوت غاضب: "مش هتطلع من المكتب ده عايش!"',
        en: 'Osman: "This will ends everything tonight!" - Angry Voice: "You won\'t walk out alive!"',
      },
      implicatedCharacterIds: ['char_tariq', 'char_sameh', 'char_layla', 'char_karim'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'تهديد مباشر بالقتل قبل دقائق معدودة من الوفاة، وتناقض صريح مع أقوال المشتبه بهم!',
        en: 'Direct death threat minutes before the murder, directly contradicting suspect statements!',
      },
    },
    {
      id: 'ev_05_secret_new_will',
      roundNumber: 2,
      type: 'document',
      title: { ar: 'مفاجأة الوصية السرية الأحدث', en: 'Surprise Secret New Will' },
      description: {
        ar: 'نسخة مغلقة ومختومة من وصية ثانية أحدث اتُكتشفت داخل الخزنة السرية.',
        en: 'Sealed second version of a newer will discovered inside a secret safe.',
      },
      detailedContent: {
        ar: '[الوصية الرسمية الأحدث - النسخة B]\n"التويست الثاني: الوصية الممزوقة التي يتصارع عليها الجميع ليست الوصية الأخيرة! أعددتُ هذه النسخة الأحدث سرًا، وحررت فيها قرارًا بوضع كافة الأصول تحت الحراسة واختبار أمانة الجميع... ولن ينال الثروة إلا من كان أمينًا!"',
        en: '[Secret Version B Will]\n"Second Twist: The shredded will everyone is fighting over is NOT the final will! I secretly prepared this newer version, placing all assets under trust to test everyone\'s honesty!"',
      },
      implicatedCharacterIds: ['char_tariq', 'char_karim', 'char_layla', 'char_sameh'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الجميع كان يتقاتل ويخفي أسرارًا بسبب وصية قديمة، بينما عثمان أعدّ وصية أحدث لم يعلم بها أحد!',
        en: 'Everyone was fighting over an older draft, while Osman secretly prepared a newer version nobody knew about!',
      },
    },
    {
      id: 'ev_06_chemical_vial',
      roundNumber: 2,
      type: 'forensic',
      title: { ar: 'عبوة السيانيد والآثار الصيدلانية', en: 'Cyanide Vial & Lab Trace' },
      description: {
        ar: 'عبوة كيميائية فارغة عُثر عليها مخبأة خلف الستارة الجانبية.',
        en: 'Empty chemical vial recovered hidden behind the side drapery.',
      },
      detailedContent: {
        ar: 'تحليل الأدلة الفنية:\nالعبوة تحتوي على بقايا مادة السيانيد القاتلة، وعليها بصمة تركيبية خاصة ترتبط بالمواد الكيميائية والمستحضرات الدوائية المتاحة داخل القصر والمكتب.',
        en: 'Forensic Lab Analysis: Contains residual lethal cyanide with a chemical fingerprint matching pharmaceutical reagents stored in the mansion.',
      },
      implicatedCharacterIds: ['char_tariq', 'char_layla', 'char_sameh', 'char_karim'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'السم تم إحضاره وإذابته بدقة عالية داخل القصر.',
        en: 'The poison was precisely prepared and dissolved inside the mansion.',
      },
    },
    {
      id: 'ev_07_audit_ledger',
      roundNumber: 2,
      type: 'document',
      title: { ar: 'السجل المالي والأسرار المكتومة', en: 'Audit Ledger & Secret Files' },
      description: {
        ar: 'مستندات مالية تكشف الأسرار الخاصة بكل مشتبه به.',
        en: 'Financial documents uncovering private secrets of each suspect.',
      },
      detailedContent: {
        ar: 'تفاصيل الأسرار الكاشفة:\n- الابن الأكبر: ديون ضخمة وتداول خاسر بقيمة ملايين.\n- الابن الأصغر: تذكرة طيران هجرة سرية وجواز سفر جاهز.\n- مديرة المؤسسة الخيرية: عقود بيع غير قانونية لممتلكات الجمعية الخيرية.\n- المدير المالي: تقارير اختلاس ضخمة مكتومة دون إبلاغ.',
        en: 'Concealed Secrets:\nEldest Son: Massive stock market debts.\nYoungest Son: Secret emigration flight booking.\nCharity Foundation Director: Unauthorized sales of foundation property.\nCFO: Covered-up massive embezzlement.',
      },
      implicatedCharacterIds: ['char_tariq', 'char_karim', 'char_layla', 'char_sameh'],
      isRedHerring: true,
      detectiveAnalysis: {
        ar: 'كل شخصية تخفي سرًا كبيراً ورغبة محتدمة، لكن ليس كل سر يعني ارتكاب الجريمة!',
        en: 'Every suspect hides a major secret, but not every secret equates to murder!',
      },
    },
  ],
  3: [
    {
      id: 'ev_08_osman_final_note',
      roundNumber: 3,
      type: 'document',
      title: { ar: 'رسالة عثمان الأخيرة (اختبار الوريث)', en: 'Osman\'s Final Note (The Test)' },
      description: {
        ar: 'رسالة بخط يد عثمان الألفي عُثر عليها مغلّفة بالختم الشمعي.',
        en: 'Handwritten note by Osman El-Alfy sealed in wax.',
      },
      detailedContent: {
        ar: '[بخط يد عثمان الألفي]\n"إلى من يقرأ هذا المستند: أعلنتُ الليلة نيّتي تعديل الوصية لإحداث صدمة واختبار أمانة وإخلاص الجميع... فالوريث الحقيقي ليس من يركض وراء الثروة أو يخفي ديونه وجرائمه، بل من يحفظ أمانة اسم العائلة. وإذا حدث لي أي مكروه الليلة، فالقاتل هو من خاف افتضاح أمره ودس السم في كأسي!"',
        en: '[Handwritten by Osman]\n"To whoever reads this: I announced a will change tonight to test everyone\'s integrity... The true heir is not one who chases wealth or covers crimes, but one who preserves family honor. If harm befalls me, the killer is the one terrified of exposure who poisoned my cup!"',
      },
      implicatedCharacterIds: ['char_tariq', 'char_karim', 'char_layla', 'char_sameh'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'الرسالة تحسم الفكرة الأساسية: عثمان اختبر الجميع، والقاتل هو من ارتكب الجريمة خوفاً من انكشاف سره المالي أو القانوني!',
        en: 'The note clarifies Osman tested everyone, and the killer acted out of panic over exposure!',
      },
    },
    {
      id: 'ev_09_physical_fingerprints',
      roundNumber: 3,
      type: 'forensic',
      title: { ar: 'التقرير الجنائي المادي النهائي', en: 'Final Forensic Physical Proof' },
      description: {
        ar: 'تقرير معمل الأدلة الجنائية النهائي المعتمد المباشر.',
        en: 'Definitive certified forensic evidence report.',
      },
      detailedContent: {
        ar: 'نتيجة الفحص المادي القاطع:\nتم فحص مسرح الجريمة ورصد خطأ القاتل الحاسم:\n- البصمات الجنائية المؤكدة على قاعدة كاس المشروب وتوقيت استخدام ممر الخدم ومقارنتها بسجلات الحركة أثبتت التواجد المباشر للجاني ولحظة التسميم بدقة متناهية.',
        en: 'Definitive Physical Match: Detailed forensic inspection matching physical fingerprints on the poisoned glass base and timestamped movement logs exposed the killer precisely.',
      },
      implicatedCharacterIds: ['char_tariq', 'char_karim', 'char_layla', 'char_sameh'],
      isRedHerring: false,
      detectiveAnalysis: {
        ar: 'دليل قاطع لا يقبل الشك يربط التوقيت بالتحركات والدليل المادي ليحسم القضية!',
        en: 'Conclusive evidence combining timeline, movement, and physical proof to solve the mystery!',
      },
    },
  ],
};
