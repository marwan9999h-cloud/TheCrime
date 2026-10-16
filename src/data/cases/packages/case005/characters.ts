/**
 * CASE 005 - "المكالمة الأخيرة"
 * Suspect Character Cards (6 Suspects)
 */

import { CharacterCard } from '../../../../types/game';

export const CASE_005_CHARACTERS: CharacterCard[] = [
  {
    id: 'char_layla',
    name: { ar: 'منتجة البرنامج', en: 'Executive Producer' },
    title: { ar: 'شريكة الإنتاج والمبيعات', en: 'Production & Sales Partner' },
    role: { ar: 'منتجة البرنامج', en: 'Executive Producer' },
    avatar: '👩‍💼',
    bio: {
      ar: 'منتجة صارمة تمتلك نفوذًا واسعًا بالاستوديو. شريكة رامي المهنية منذ سنوات لكن العلاقات بينهما كانت متوترة جدًا مؤخرًا.',
      en: 'Strict executive producer with heavy influence in the studio. Longtime business partner of Rami with growing friction.',
    },
    relationshipToVictim: {
      ar: 'شريكته المهنية والمسؤولة المباشرة عن الميزانية والمبيعات.',
      en: 'Business partner and direct authority over budget and commercial deals.',
    },
    publicAlibi: {
      ar: 'تقول إنها كانت تواجدت داخل غرفة التحكم (Control Room) تتابع الشاشات طوال فترة البث المباشر.',
      en: 'Claims she was inside the Control Room monitoring live feeds throughout the broadcast.',
    },
    motive: {
      ar: 'رامي كان يهدد بفتح ملفات الميزانية وحرمانها من نسبة الأرباح وإلغاء العقد.',
      en: 'Rami threatened to audit budget records and cancel her profit distribution share.',
    },
    secrets: {
      innocentSecret: {
        ar: 'وقعتِ عقدًا سريًا لنقل حقوق البرنامج لشركة منافسة بدءًا من الشهر القادم دون علم رامي.',
        en: 'You signed a secret contract transferring show rights to a rival network starting next month.',
      },
    },
    secretObjective: {
      id: 'layla_obj',
      title: { ar: 'حماية الميزانية', en: 'Protect Budget' },
      description: {
        ar: 'وجّه الأنظار نحو الخلافات الفنية وتجنب الحديث عن عقود الإنتاج والشركات المنافسة.',
        en: 'Divert attention to artistic conflicts and avoid discussing production contracts.',
      },
      suspicionRisk: { ar: 'متوسطة', en: 'Medium' },
    },
  },

  {
    id: 'char_youssef',
    name: { ar: 'مهندس الصوت', en: 'Sound Engineer' },
    title: { ar: 'مسؤول المكساج المباشر', en: 'Live Audio & Mixing Engineer' },
    role: { ar: 'مهندس الصوت', en: 'Sound Engineer' },
    avatar: '🎧',
    bio: {
      ar: 'مهندس صوت خبير بالاستوديو، يعرف كل زاوية ونظام تسجيلي بالكامل. خاض مشادات كلامية حادة مع رامي قبل البث.',
      en: 'Expert audio engineer who knows every mic and recorder in the facility. Had heated arguments with Rami.',
    },
    relationshipToVictim: {
      ar: 'المسؤول عن تسجيلات رامي الصوتية ومكساج البرنامج المباشر.',
      en: 'Responsible for Rami audio mixing and live broadcast sound controls.',
    },
    publicAlibi: {
      ar: 'يدعي أنه كان متواجدًا داخل غرفة ضبط الصوت ينظم القنوات الميكروفونية أثناء البث.',
      en: 'Claims he stayed inside the audio mixing booth adjusting mic channels during the show.',
    },
    motive: {
      ar: 'رامي اتهامه بإفساد تسجيلات سابقة وهدده بالطرد الفوري وإبلاغ النقابة.',
      en: 'Rami accused him of ruining prior tapes and threatened instant dismissal and disbarment.',
    },
    secrets: {
      innocentSecret: {
        ar: 'قمت بحذف تسجيل صوتي يحتوي على مشادة حادة وشتم بينك وبين رامي قبل بدء التصوير مباشرة.',
        en: 'You deleted an audio track containing a harsh swearing argument between you and Rami before shooting.',
      },
    },
    secretObjective: {
      id: 'youssef_obj',
      title: { ar: 'إخفاء العراك الصوتي', en: 'Hide Audio Clash' },
      description: {
        ar: 'ركز على الأعطال التقنية في الميكروفونات وشكك في صحة الـTimecode.',
        en: 'Focus on mic technical glitches and question Timecode accuracy.',
      },
      suspicionRisk: { ar: 'عالية', en: 'High' },
    },
  },

  {
    id: 'char_seif',
    name: { ar: 'مدير التصوير', en: 'Director of Photography' },
    title: { ar: 'مسؤول حركة الكاميرات', en: 'Lead Camera Operator' },
    role: { ar: 'مدير التصوير', en: 'Director of Photography' },
    avatar: '📹',
    bio: {
      ar: 'مصور سينمائي محترف ومسؤول عن حركة الكاميرات بالأرضية. طموح ويرى أن رامي ينسب مجهوده الفني لنفسه.',
      en: 'Professional cinematographer managing studio floor cameras. Believes Rami takes credit for his visuals.',
    },
    relationshipToVictim: {
      ar: 'مدير التصوير المباشر والمنفذ للرؤية البصرية للبرنامج.',
      en: 'Direct DP executing the visual look and camera setups for the victim.',
    },
    publicAlibi: {
      ar: 'يقسم أنه كان يقف خلف الكاميرا الرئيسية (Cam-1) في أرضية الاستوديو طوال البث.',
      en: 'Swears he stood behind Main Camera 1 on the studio floor throughout the live airing.',
    },
    motive: {
      ar: 'علم أن رامي قرر استبداله بمدير تصوير أجنبي في المشروع السينمائي القادم.',
      en: 'Learned Rami decided to replace him with an international DP for the upcoming film.',
    },
    secrets: {
      innocentSecret: {
        ar: 'قمت بتصوير كواليس ومواد غير مصرح بها من أوراق رامي الشخصية لاستخدامها في فيلمك الوثائقي الخاص.',
        en: 'You filmed unauthorized footage of Rami personal documents to use in your indie documentary.',
      },
    },
    secretObjective: {
      id: 'seif_obj',
      title: { ar: 'تشتيت شاشات المراقبة', en: 'Distract CCTV Angles' },
      description: {
        ar: 'ادفع التحقيق باتجاه الزوايا الميتة للكاميرات والنظام الاحتياطي للرؤية.',
        en: 'Push inquiry toward camera blind spots and secondary monitoring setups.',
      },
      suspicionRisk: { ar: 'متوسطة', en: 'Medium' },
    },
  },

  {
    id: 'char_hana',
    name: { ar: 'مقدمة البرنامج', en: 'Show Host' },
    title: { ar: 'نجمة البث والمذيعة', en: 'Lead Presenter & Host' },
    role: { ar: 'مقدمة البرنامج', en: 'Show Host' },
    avatar: '🎙️',
    bio: {
      ar: 'نجمة الإعلام والوجه الإعلامي للبرنامج. تبدو متماسكة أمام الشاشات لكنها تمر بضغوط نفسية وتهديدات شخصية.',
      en: 'Lead TV presenter and public face of the show. Polished on screen but under severe private distress.',
    },
    relationshipToVictim: {
      ar: 'المذيعة الرئيسية التي يعتمد رامي على أدائها لتسويق البرنامج.',
      en: 'Lead presenter whose performance Rami relied on to market the show.',
    },
    publicAlibi: {
      ar: 'تؤكد أنها كانت تواصل تقديم المونولوج الرئيسي أمام الكاميرا المباشرة طوال البث.',
      en: 'Insists she was continuously delivering the live monologue on camera.',
    },
    motive: {
      ar: 'رامي كان يمتلك تسريباً صوتياً وثيقة قد تنهي مسيرتها الإعلامية وتمررها للإعلام.',
      en: 'Rami possessed a private audio leak that would end her media broadcasting career.',
    },
    secrets: {
      innocentSecret: {
        ar: 'كنتِ آخر شخص اتصل برامي هاتفياً قبل البث بدقائق لرجائه بعدم نشر التسريب المهدد لها.',
        en: 'You were the last caller to Rami minutes before air, pleading with him not to leak the file.',
      },
    },
    secretObjective: {
      id: 'hana_obj',
      title: { ar: 'إبعاد سجل الاتصالات', en: 'Shield Call Logs' },
      description: {
        ar: 'ركز على مضمون المكالمة الأخيرة المسجلة على الهواء وتجنب المكالمات الشخصية السابقة.',
        en: 'Focus on the live on-air call content and avoid personal pre-show phone calls.',
      },
      suspicionRisk: { ar: 'متوسطة', en: 'Medium' },
    },
  },
];
