/**
 * CASE 001 - "الوريث الأخير"
 * Package Suspects / Characters Component
 */

import { CharacterCard } from '../../../../types/game';

export const CASE_001_CHARACTERS: CharacterCard[] = [
  {
    id: 'char_tariq',
    name: { ar: 'الابن الأكبر', en: 'Eldest Son' },
    title: { ar: 'النائب التنفيذي السابق', en: 'Former Executive Deputy' },
    role: { ar: 'الابن الأكبر', en: 'Eldest Son' },
    avatar: '💼',
    bio: {
      ar: 'الابن الأكبر لـ عثمان الألفي. كان المرشح الطبيعي والإداري الفعلي لمشاريع العائلة، لكن علاقته بوالده تدهورت بحدّة خلال السنوات الأخيرة بسبب المغامرات المالية.',
      en: 'Eldest son of Osman. The natural successor to manage the family empire, but his relationship with his father severely deteriorated recently due to high-risk financial gambles.',
    },
    relationshipToVictim: {
      ar: 'الابن الأكبر والنائب التنفيذي السابق.',
      en: 'Eldest son and former executive deputy.',
    },
    publicAlibi: {
      ar: 'ادعى أنه كان يراجع ملفات الميزانية في صالون القصر الرئيسي بين ١٠:٣٠ و١١:٠٠ مساءً.',
      en: 'Claimed he was reviewing budget files in the main mansion parlor between 10:30 and 11:00 PM.',
    },
    motive: {
      ar: 'الرعب الشديد من كشف ديونه الضخمة وحرمانه النهائي من الوصية وإلغاء صلاحياته.',
      en: 'Dread of exposing his massive debts and being completely written out of the new will.',
    },
    secrets: {
      innocentSecret: {
        ar: 'أنت غارق في ديون ضخمة لا يعرفها أحد بسبب خسائر البورصة وقمت بسحب مبالغ لتطويقها، لكنك لم تقتل والدك.',
        en: 'You are drowning in massive secret debts from stock market losses and pulled funds to cover them, but you did not kill your father.',
      },
      killerSecret: {
        ar: 'اكتشفت أن والدك عرف بديونك الضخمة واختلاساتك وسيحرمك تمامًا في الوصية الجديدة، فاستغللت انفرادك به ودسست السيانيد في مشروبه.',
        en: 'You discovered your father learned of your massive debts and embezzlement and was disinheriting you, so you slipped cyanide into his drink.',
      },
    },
    killerTruth: {
      characterId: 'char_tariq',
      trueMotive: {
        ar: 'اكتشف أن والده عثمان عرف بحجم ديونه السرية واختلاسه لمبالغ ضخمة لتغطية خسائر البورصة، وكان سيعلن حرمانه التام من الإرث والإدارة. فقرر قتله قبل التوقيع النهائي.',
        en: 'Discovered his father learned of his secret debts and embezzlement to cover stock losses, and was disinheriting him. He decided to kill him before the final signature.',
      },
      howItWasDone: {
        ar: 'دخل المكتب بحجة استلام أوراق الميزانية الساعة ١٠:٥٢ مساءً، واستغل لحظة انشغال والده ودس السيانيد القاتل في كأس المشروب.',
        en: 'Entered the office under the guise of reviewing budget papers at 10:52 PM, capitalized on a momentary distraction, and slipped cyanide into the drink.',
      },
      flawInAlibi: {
        ar: 'ادعى التواجد المستمر في الصالون، لكن بصمات إبهامه انطبعت بوضوح على القاعدة الزجاجية للكأس المسموم إضافة لتسجيل الممر.',
        en: 'Claimed constant presence in the parlor, but his thumbprints were plainly matched on the base of the poisoned glass alongside corridor logs.',
      },
    },
    secretObjective: {
      id: 'obj_tariq',
      title: { ar: 'تغطية ديون البورصة', en: 'Cover Secret Debts' },
      description: {
        ar: 'إقناع الجميع بأن تدهور نتائج الشركات كان بسبب الأزمة الاقتصادية العامة وليس بسبب ديونك.',
        en: 'Convince investigators that company losses were macro-economic rather than your private debts.',
      },
      suspicionRisk: {
        ar: 'مرتفع جدًا في حال تفحص الحسابات السرية.',
        en: 'Very high if secret ledgers are examined.',
      },
    },
  },
  {
    id: 'char_karim',
    name: { ar: 'الابن الأصغر', en: 'Youngest Son' },
    title: { ar: 'الفنان التشكيلي', en: 'Visual Artist' },
    role: { ar: 'الابن الأصغر', en: 'Youngest Son' },
    avatar: '🎨',
    bio: {
      ar: 'الابن الأصغر لـ عثمان الألفي. شخصية هادئة وقليلة الكلام، لكنه يتألم في صمت ويشعر دائمًا أن العائلة لا تراه ولا تقر بوجوده أو إمكانياته.',
      en: 'The youngest son of Osman. Quiet and reserved, suffering silently from feeling invisible and unappreciated by his overbearing family.',
    },
    relationshipToVictim: {
      ar: 'الابن الأصغر لـ عثمان الألفي.',
      en: 'Youngest son of Osman El-Alfy.',
    },
    publicAlibi: {
      ar: 'قال إنه كان يتصفح الكتب والمستندات القديمة في مكتبة القصر البعيدة.',
      en: 'Stated he was browsing old art books and documents in the far mansion library.',
    },
    motive: {
      ar: 'الشعور بالتهميش المستمر والغضب الكفين من استبداد والده ورفضه تمويل حياته المستقلة.',
      en: 'Resentment over lifelong marginalization and father’s refusal to fund his independent life.',
    },
    secrets: {
      innocentSecret: {
        ar: 'كنت تخطط لترك العائلة والهجرة خارج البلاد بعد أيام معدودة ومعك حجز الطيران السري، لكنك لم تقتل والدك.',
        en: 'You were planning to abandon the family and emigrate abroad in a few days with a secret flight ticket, but you did not kill your father.',
      },
      killerSecret: {
        ar: 'عندما واجهت والدك برغبتك في الهجرة سخر منك وأكد حرمانه لك من أي فلس، فدخلت ممر الخدم ودسست السم في مشروبه.',
        en: 'When you confronted your father about emigrating, he mocked you and cut you off, prompting you to enter via the service pantry and poison his cup.',
      },
    },
    killerTruth: {
      characterId: 'char_karim',
      trueMotive: {
        ar: 'أدرك أن والده يخطط لحرمانه وإبقائه تحت وصايته حتى بعد وفاته، فقرر إنهاء حياته للحصول على حصته ومغادرة البلاد فوراً.',
        en: 'Realized his father planned to keep him controlled and disinherited, deciding to eliminate him to claim his share and leave the country.',
      },
      howItWasDone: {
        ar: 'تسلل عبر الممر الجانبي للمكتب الساعة ١٠:٥٠ مساءً وحقن السيانيد في زجاجة المشروب.',
        en: 'Sneaked through the side pantry corridor at 10:50 PM and injected cyanide into the drink bottle.',
      },
      flawInAlibi: {
        ar: 'سقطت تذكرة طيرانه السرية وجواز سفره بجوار فتحة التهوية الخلفية للمكتب.',
        en: 'His secret flight ticket and passport slip dropped near the office rear ventilation grate.',
      },
    },
    secretObjective: {
      id: 'obj_karim',
      title: { ar: 'إخفاء خطة الهجرة', en: 'Hide Emigration Plan' },
      description: {
        ar: 'عدم كشف تذكرة الطيران السرية وجواز السفر لمحيط العائلة.',
        en: 'Prevent family members from discovering your hidden flight booking and passport.',
      },
      suspicionRisk: {
        ar: 'متوسط إذا عثروا على حقيبتك الخاصة.',
        en: 'Moderate if your private travel bag is searched.',
      },
    },
  },
  {
    id: 'char_layla',
    name: { ar: 'مديرة المؤسسة الخيرية', en: 'Charity Foundation Director' },
    title: { ar: 'ابنة المجني عليه', en: 'Daughter of Victim' },
    role: { ar: 'مديرة المؤسسة الخيرية', en: 'Charity Foundation Director' },
    avatar: '🏛️',
    bio: {
      ar: 'ابنة عثمان. تدير مؤسسة خيرية باسم العائلة وتحظى باحترام المجتمع، لكنها تخفي صراعات مالية معقدة خلف الستار.',
      en: 'Osman’s daughter. Manages a prominent family charitable foundation, respected publicly but concealing complex financial stress.',
    },
    relationshipToVictim: {
      ar: 'ابنة عثمان ومديرة الجمعية العائلية.',
      en: 'Daughter of Osman and director of family foundation.',
    },
    publicAlibi: {
      ar: 'أكدت أنها كانت تجري اتصالات هاتفية في حديقة القصر لمراجعة كشوفات التبرعات.',
      en: 'Stated she was making phone calls in the mansion gardens reviewing donor registries.',
    },
    motive: {
      ar: 'الخوف الشديد من افتضاح أمر تصرفها في بعض ممتلكات المؤسسة دون علم والدها وإلغاء تمويلها.',
      en: 'Terror of her father exposing her unauthorized sale of foundation properties and revoking funding.',
    },
    secrets: {
      innocentSecret: {
        ar: 'باعتِ جزءًا من ممتلكات المؤسسة دون علم والدك لتسوية التزامات، لكنك لم تقتلي والدك.',
        en: 'You sold a portion of foundation property without your father’s knowledge to settle debts, but you did not kill him.',
      },
      killerSecret: {
        ar: 'اكتشفتِ أن والدك طلب مراجعة ممتلكات المؤسسة وسيكشف البيع ويبلغ النيابة، فسممتِ مشروبه لإخفاء الجريمة.',
        en: 'You learned your father ordered a full audit of foundation assets which would expose the sale, so you poisoned his drink to silence him.',
      },
    },
    killerTruth: {
      characterId: 'char_layla',
      trueMotive: {
        ar: 'اكتشفت أن والدها أصدر أمراً للمحامي بفحص كافة أصول الجمعية الخيرية، مما سيكشف بيعها لممتلكات المؤسسة ويعرضها للسجن والفضائح.',
        en: 'Realized her father ordered the lawyer to audit all foundation assets, which would expose her unauthorized property sales to prison and scandal.',
      },
      howItWasDone: {
        ar: 'أثناء مرورها بحديقة المكتب، دخلت من الباب الزجاجي الجانبي الساعة ١٠:٤٨ م ودست كبسولة السم في كأسه.',
        en: 'Passing through the garden patio, entered via the glass side door at 10:48 PM and dissolved a poison capsule in his cup.',
      },
      flawInAlibi: {
        ar: 'عُثر على دبوس مشبك خاص بجمعيتها الخيرية ملقى تحت حافة الطاولة الزجاجية بجوار الكأس.',
        en: 'A distinctive lapel pin from her charity foundation was found caught beneath the glass table trim next to the cup.',
      },
    },
    secretObjective: {
      id: 'obj_layla',
      title: { ar: 'حماية كشوفات الجمعية', en: 'Protect Foundation Ledgers' },
      description: {
        ar: 'إبعاد أي تحقيقات عن دفاتر الحسابات الرسمية للجمعية الخيرية.',
        en: 'Divert any forensic attention away from official foundation financial records.',
      },
      suspicionRisk: {
        ar: 'مرتفع في حال مراجعة سجلات الملكية.',
        en: 'High if property registry documents are audited.',
      },
    },
  },
  {
    id: 'char_sameh',
    name: { ar: 'المدير المالي', en: 'Chief Financial Officer' },
    title: { ar: 'المدير المالي للمجموعة', en: 'Group CFO' },
    role: { ar: 'المدير المالي', en: 'Chief Financial Officer' },
    avatar: '📊',
    bio: {
      ar: 'المدير المالي للمجموعة. يعمل مع عثمان منذ أكثر من عشرين عامًا، ويعرف دقائق الإمبراطورية المالية وكواليس المعاملات البنكية.',
      en: 'CFO of the group. Has worked alongside Osman for over 20 years, possessing intricate knowledge of every banking transfer.',
    },
    relationshipToVictim: {
      ar: 'المدير المالي والصديق المقرب لـ عثمان لأكثر من عقدين.',
      en: 'CFO and trusted financial confidant for over two decades.',
    },
    publicAlibi: {
      ar: 'قال إنه كان يجهز القوائم المالية والمستندات النهائية بقاعة السكرتارية الملحقة.',
      en: 'Claimed he was compiling final financial balance sheets in the adjacent secretary room.',
    },
    motive: {
      ar: 'الرعب من المساءلة القانونية بعد اكتشافه اختلاسات ضخمة داخل الشركة دون أن يبلغ عنها.',
      en: 'Dread of legal liability after discovering massive internal embezzlement and staying silent.',
    },
    secrets: {
      innocentSecret: {
        ar: 'اكتشفت اختلاسات ضخمة داخل الشركة ولم تبلغ عنها خوفاً على موقعك، لكنك لم تقتل عثمان.',
        en: 'You discovered massive internal embezzlement and stayed silent to protect your position, but you did not kill Osman.',
      },
      killerSecret: {
        ar: 'عثمان واجهك بالاختلاسات واتهمك بالتواطؤ والتغطية وهدد بسجنك الليلة، فوضع السيانيد في مشروبه لإسكاته.',
        en: 'Osman confronted you with the embezzlement, accused you of complicity and threatened immediate arrest, so you poisoned his drink.',
      },
    },
    killerTruth: {
      characterId: 'char_sameh',
      trueMotive: {
        ar: 'علِم أن عثمان اكتشف التستر على الاختلاسات وسيقوم بإحالته للنيابة العامة وتدمير تاريخه المهني، فقرر التخلص منه.',
        en: 'Learned Osman uncovered the covered-up embezzlement and was turning him over to prosecutors, deciding to liquidate him.',
      },
      howItWasDone: {
        ar: 'قدم القوائم المالية لعثمان بنفسه الساعة ١٠:٤٦ مساءً ودس السيانيد الطبي السائل أثناء مناقشة التقرير.',
        en: 'Handed over financial reports directly at 10:46 PM, dropping liquid cyanide into the cup during argument.',
      },
      flawInAlibi: {
        ar: 'أثر حبر قلمه المالي الجاف وريحة المادة الكيميائية انطبعت على حافة المناديل الورقية بالمكتب.',
        en: 'Distinct audit ink smudge and chemical trace matched his fountain pen wipe on the desk napkin.',
      },
    },
    secretObjective: {
      id: 'obj_sameh',
      title: { ar: 'تغطية الاختلاسات', en: 'Conceal Embezzlement' },
      description: {
        ar: 'إقناع الجميع أن الاختلاس كان ثغرة خارجية وليس إهمالاً أو تسترًا منك.',
        en: 'Convince everyone that financial leakage was an external breach rather than your cover-up.',
      },
      suspicionRisk: {
        ar: 'مرتفع جدًا عند فحص السجلات المالية البنكية.',
        en: 'Very high if bank transfer ledgers are audited.',
      },
    },
  },
];
