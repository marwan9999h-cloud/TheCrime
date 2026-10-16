/**
 * CASE 002 - "ليلة فيلا الزمالك"
 * Package Suspects / Characters Component
 */

import { CharacterCard } from '../../../../types/game';

export const CASE_002_CHARACTERS: CharacterCard[] = [
  {
    id: 'char_adam',
    name: { ar: 'الشقيق الأصغر', en: 'Younger Brother' },
    title: { ar: 'الشريك التنفيذي', en: 'Executive Partner' },
    role: { ar: 'الشقيق الأصغر', en: 'Younger Brother' },
    avatar: '💼',
    bio: {
      ar: 'شقيق ياسين الأصغر. يعمل معه في شركة الإنتاج الفني منذ سنوات، لكنه يعيش دائمًا تحت ظله ويشعر بالاستغلال المالي والمعنوي.',
      en: 'Yassin\'s younger brother. Works at the production firm, living in his brother\'s shadow while feeling financially exploited.',
    },
    relationshipToVictim: {
      ar: 'الشقيق الأصغر ونائب مدير الشركة.',
      en: 'Younger brother & deputy director.',
    },
    publicAlibi: {
      ar: 'يقول إنه كان في المطبخ يحضر المشروبات وقت انقطاع الكهرباء الـ٥٨ ثانية.',
      en: 'Claims he was in the kitchen preparing drinks during the 58-second blackout.',
    },
    motive: {
      ar: 'الانتقام وتفادي الطرد من الشركة بعد اكتشاف ياسين لتلاعب مالي واسع في حسابات الإنتاج.',
      en: 'Revenge and avoiding termination after Yassin discovered financial tampering in production accounts.',
    },
    secrets: {
      innocentSecret: {
        ar: 'كان ياسين يستعد لطردك من الشركة وسحب صلاحياتك بعد كشف تلاعبك المالي، لكنك لم تقتله وقت انقطاع الكهرباء.',
        en: 'Yassin was preparing to fire you over financial tampering, but you did not kill him during the blackout.',
      },
      killerSecret: {
        ar: 'اكتشفت أن ياسين سيُعلن طردك أمام الجميع الليلة، ففصلت المولد ودخلت غرفة الموسيقى في الظلام وضاربته بتمثال النحاس.',
        en: 'You learned Yassin would announce your firing tonight, so you cut the generator and struck him in the music room with the brass statue.',
      },
    },
    killerTruth: {
      characterId: 'char_adam',
      trueMotive: {
        ar: 'علم أن شقيقه ياسين يحمل كشوفات الاختلاس المالية على هاتفه وسيعلن طرده وفضيحته رسمياً عقب السهرة، فقرر إنهاء حياته واسترداد الهاتف.',
        en: 'Realized Yassin carried audit logs on his phone and would publicly fire him after the party, deciding to eliminate him and steal the phone.',
      },
      howItWasDone: {
        ar: 'قام بفصل القاطع الكهربائي عمداً، وتسلل حافظاً أبعاد الفيلا لغرفة الموسيقى في الظلام، وضربه بالمجسم النحاسي وسرق هاتف ياسين.',
        en: 'Purposely tripped the electrical breaker, memorized room dimensions to sneak into the music room, struck him with a brass statue, and grabbed his phone.',
      },
      flawInAlibi: {
        ar: 'ادعى التواجد بالمطبخ، لكن بقعة العصير المسكوب من كأسه المكسور عُثر عليها على سجادة غرفة الموسيقى مباشرة بجوار الجثة.',
        en: 'Claimed to be in the kitchen, but spilled juice stains from his broken glass were found on the music room carpet right next to the victim.',
      },
    },
    secretObjective: {
      id: 'obj_adam',
      title: { ar: 'تغطية التلاعب المالي', en: 'Cover Financial Tampering' },
      description: {
        ar: 'إبعاد الشبهات عن دفاتر حسابات شركة الإنتاج كسبب للوفاة.',
        en: 'Divert suspicions away from production company ledgers.',
      },
      suspicionRisk: {
        ar: 'مرتفع في حال التدقيق في تحويلات البنك.',
        en: 'High if bank transfers are audited.',
      },
    },
  },
  {
    id: 'char_salma',
    name: { ar: 'الممثلة الصاعدة', en: 'Rising Actress' },
    title: { ar: 'بطلة الفيلم الأخيرة', en: 'Lead Actress' },
    role: { ar: 'الممثلة الصاعدة', en: 'Rising Actress' },
    avatar: '🎭',
    bio: {
      ar: 'ممثلة صاعدة وصديقة قديمة لياسين. حققت نجاحات فنية مؤخراً بفضل مشاريع الشركة، لكنها ترتبط بـ ياسين بعلاقة معقدة.',
      en: 'A rising actress and long-time friend of Yassin. Achieved recent stardom through his films, holding a tense relationship with him.',
    },
    relationshipToVictim: {
      ar: 'بطلة أحدث أفلام ياسين وصديقته المقربة.',
      en: 'Lead actress in Yassin\'s latest film and close friend.',
    },
    publicAlibi: {
      ar: 'تقول إنها كانت في الحمام، وتؤكد أنها لم تتحرك إطلاقاً طوال فترة انقطاع الكهرباء.',
      en: 'States she was in the restroom, insisting she stayed completely frozen during the blackout.',
    },
    motive: {
      ar: 'الرعب من نشر تسجيل سري يمتلكه ياسين كان سيقضي على مستقبلها الفني والجماهيري تماماً.',
      en: 'Panic over a private recording Yassin held that could destroy her artistic career instantly.',
    },
    secrets: {
      innocentSecret: {
        ar: 'ياسين كان يمتلك تسجيلًا محرجاً قد يدمر مستقبلك المهني وكان يبتزك به، لكنكِ لم تقتليه بالظلام.',
        en: 'Yassin possessed a private recording that could ruin your career, but you did not strike him during the blackout.',
      },
      killerSecret: {
        ar: 'عندما قال ياسين "الليلة هنعرف مين كان بيكذب"، ركضتِ إلى غرفة الموسيقى في الظلام وانتزعتِ المجسم وضربتِه لاستعادة الشريط.',
        en: 'When Yassin declared "Tonight we catch the liar", you rushed to the music room in the dark, struck him with the statue, and took the phone.',
      },
    },
    killerTruth: {
      characterId: 'char_salma',
      trueMotive: {
        ar: 'أدركت أن ياسين يخطط لتشغيل التسجيل المحرج المهدد لمستقبلها خلال السهرة أمام الضيوف، فقضت عليه لإخفاء سرها.',
        en: 'Realized Yassin was about to play the damaging recording to party guests, taking his life to bury her secret.',
      },
      howItWasDone: {
        ar: 'استغلت لحظة الظلام والركض المسبق، ودخلت غرفة الموسيقى وضاربته بالتمثال النحاسي وأخفت الهاتف في زهرية الممر.',
        en: 'Capitalized on the darkness, ran into the music room, hit him with the statue, and dropped his phone into a corridor vase.',
      },
      flawInAlibi: {
        ar: 'ادعت بقاءها بالحمام، لكن آثار عطرها الفرنسي النادر وآثار حذائها عُثر عليها على سجادة غرفة الموسيقى بوضوح.',
        en: 'Claimed she froze in the bathroom, but trace marks of her rare French perfume and high heels were found on the music room carpet.',
      },
    },
    secretObjective: {
      id: 'obj_salma',
      title: { ar: 'إخفاء شريط الابتزاز', en: 'Conceal Blackmail Tape' },
      description: {
        ar: 'إبعاد الأنظار عن التسجيل الصوتي الخاص وتكذيب وجوده.',
        en: 'Divert attention from the private audio recording.',
      },
      suspicionRisk: {
        ar: 'مرتفع في حال فحص هاتف ياسين.',
        en: 'High if Yassin\'s phone is decrypted.',
      },
    },
  },
  {
    id: 'char_fareed',
    name: { ar: 'الشريك المالي', en: 'Financial Partner' },
    title: { ar: 'المستثمر الرئيسي', en: 'Lead Investor' },
    role: { ar: 'الشريك المالي', en: 'Financial Partner' },
    avatar: '🕶️',
    bio: {
      ar: 'شريك ياسين الرئيسي في شركة الإنتاج. رجل أعمال هادئ وحذر للغاية، يفضل العمل خلف الستار وإدارة الميزانيات الضخمة.',
      en: 'Yassin\'s main business partner. A calm, cautious investor who handles large-scale budgets behind the scenes.',
    },
    relationshipToVictim: {
      ar: 'الشريك التجاري المالي لـ ياسين.',
      en: 'Financial business partner to Yassin.',
    },
    publicAlibi: {
      ar: 'يدّعي أنه كان في الحديقة الداخلية يجري مكالمة هاتفية مع مستثمرين من دبي.',
      en: 'Claims he was in the inner courtyard patio making a phone call to Dubai investors.',
    },
    motive: {
      ar: 'الخوف الشديد من تهديد ياسين لكشف صفقة مالية وغسيل أموال غير قانونية عبر عقد دبي الأخير.',
      en: 'Fear of Yassin exposing an illegal money-laundering deal embedded in the latest Dubai contract.',
    },
    secrets: {
      innocentSecret: {
        ar: 'ياسين كان يهددك بكشف صفقة غير قانونية مررتها دون علمه، لكنك لم تقتله ليلة الفيلا.',
        en: 'Yassin threatened to expose an illegal deal you passed without his approval, but you did not commit murder.',
      },
      killerSecret: {
        ar: 'عندما هددك ياسين بإبلاغ الأموال العامة الليلة، استغللت الظلام ودخلت من باب الحديقة لغرفة الموسيقى وقضيت عليه.',
        en: 'When Yassin threatened public prosecution tonight, you used the blackout to step from the patio into the music room and strike him.',
      },
    },
    killerTruth: {
      characterId: 'char_fareed',
      trueMotive: {
        ar: 'كان يواجه عقوبة السجن المؤبد في قضية تبييض أموال إذا قام ياسين بتسليم وثائق دبي للشرطة، فقرر تصفيته.',
        en: 'Faced life imprisonment over money laundering if Yassin delivered Dubai contracts to police, choosing to liquidate him.',
      },
      howItWasDone: {
        ar: 'دخل من باب الشرفة الجانبي الملاطق للحديقة فور انقطاع الكهرباء، وسدد ضربة قاضية لياسين بالمجسم النحاسي وسرق هاتف العقود.',
        en: 'Slipped through the patio door adjacent to the music room during darkness, dealt a fatal strike, and seized the contract phone.',
      },
      flawInAlibi: {
        ar: 'ادعى إجراء مكالمة بالحديقة، لكن سجلات شبكة المحمول أثبتت انقطاع المكالمة تماماً قبل انقطاع الكهرباء بدقيقتين.',
        en: 'Claimed he was on a call in the garden, but cellular network logs proved his call dropped 2 minutes before the blackout.',
      },
    },
    secretObjective: {
      id: 'obj_fareed',
      title: { ar: 'تغطية صفقات دبي', en: 'Conceal Dubai Deals' },
      description: {
        ar: 'منع وصول المحققين إلى عقود دبي المحدثة.',
        en: 'Prevent investigators from inspecting updated Dubai contracts.',
      },
      suspicionRisk: {
        ar: 'مرتفع في حال مراجعة الحسابات الخارجية.',
        en: 'High if offshore accounts are checked.',
      },
    },
  },
  {
    id: 'char_nadine',
    name: { ar: 'الصحفية الفنية', en: 'Entertainment Journalist' },
    title: { ar: 'المستشارة الإعلامية', en: 'Media Advisor' },
    role: { ar: 'الصحفية الفنية', en: 'Entertainment Journalist' },
    avatar: '📰',
    bio: {
      ar: 'صحفية فنية معروفة بجرأتها وتقاريرها الاستقصائية. تربطها بياسين علاقة عمل مهنية، لكنها كانت ترصد تحركاته بدقة.',
      en: 'An investigative journalist known for bold exposes. Holds a professional relationship with Yassin while secretly tracking him.',
    },
    relationshipToVictim: {
      ar: 'مغطية صحفية ومستشارة إعلامية للسهرة.',
      en: 'Journalist covering the event and media advisor.',
    },
    publicAlibi: {
      ar: 'تقول إنها كانت تصوّر فيديو للسهرة في غرفة المعيشة وقت انقطاع الكهرباء.',
      en: 'Claims she was recording a video of the party in the living room during the blackout.',
    },
    motive: {
      ar: 'الرغبة المحتدمة في الاستحواذ على هاتف ياسين الذي يحتوي أدلة القضية الكبرى والوثائق المسربة.',
      en: 'Fierce drive to seize Yassin\'s phone containing leaked documents of a major scandal.',
    },
    secrets: {
      innocentSecret: {
        ar: 'لم تكوني موجودة لتغطية السهرة فقط؛ بل كنتِ تبحثين عن دليل على قضية فساد ضخمة على هاتف ياسين، لكنك لم تقتليه.',
        en: 'You were not just covering a party; you were hunting corruption proof on Yassin\'s phone, but you did not kill him.',
      },
      killerSecret: {
        ar: 'عندما رفض ياسين تسليمك الهاتف المليء بالتسريبات وتهددكِ بالمحاكمة، استغللتِ انقطاع الكهرباء وتسللتِ لقتله واسترداد المادة.',
        en: 'When Yassin refused to hand over leaked documents and threatened lawsuits, you used the blackout to strike him and seize the data.',
      },
    },
    killerTruth: {
      characterId: 'char_nadine',
      trueMotive: {
        ar: 'كانت تُهدد بالفصل المباشر والملاحقة القضائية بعد اكتشاف ياسين لتنصتها، فقررت قتله للحصول على الانفراد الصحفي والهاتف.',
        en: 'Faced career destruction and lawsuits after Yassin caught her wiretapping, choosing to kill him for the scoops and phone.',
      },
      howItWasDone: {
        ar: 'أوقفت فيديو الهاتف في الظلام، وتوجهت بسرعة لغرفة الموسيقى وضاربته بالتمثال وسحبت الهاتف للوصول للوثائق.',
        en: 'Stopped recording on her phone in darkness, rushed to the music room, struck him with the statue, and snatched his phone.',
      },
      flawInAlibi: {
        ar: 'فيديو الهاتف الذي ادعت تصويره أثناء الظلام توقف تسجيله فجأة بعد ١٨ ثانية فقط من انقطاع الكهرباء بدلاً من ٥٨ ثانية.',
        en: 'The video she claimed to record in the dark abruptly cut off after only 18 seconds instead of 58 seconds.',
      },
    },
    secretObjective: {
      id: 'obj_nadine',
      title: { ar: 'تغطية البحث عن التسريبات', en: 'Protect Investigation Leak' },
      description: {
        ar: 'إخفاء حقيقة بحثكِ عن وثائق الفساد الفني.',
        en: 'Hide the fact that you were searching for leaked corruption files.',
      },
      suspicionRisk: {
        ar: 'متوسط عند تفحص ذاكرة كاميرتك.',
        en: 'Moderate if camera memory card is inspected.',
      },
    },
  },
];
