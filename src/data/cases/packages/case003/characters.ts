/**
 * CASE 003 - "آخر رحلة"
 * Suspect Characters Configuration
 */

import { CharacterCard } from '../../../../types/game';

export const CASE_003_CHARACTERS: CharacterCard[] = [
  {
    id: 'char_shereef',
    name: {
      ar: 'الشريك التجاري',
      en: 'Business Partner',
    },
    title: {
      ar: 'شريك كمال السابق',
      en: 'Former Business Partner',
    },
    role: {
      ar: 'الشريك التجاري',
      en: 'Business Partner',
    },
    avatar: '💼',
    bio: {
      ar: 'كان يعمل مع كمال في شركة رحلات بحرية وانتهت الشراكة بينهما بطريقة سيئة.',
      en: 'Worked with Kamal in a marine charter company until their partnership ended bitterly.',
    },
    relationshipToVictim: {
      ar: 'شريك سابق وطرف في نزاع مالي حاد',
      en: 'Former partner in a sharp financial dispute',
    },
    publicAlibi: {
      ar: 'كنت على سطح اليخت وقت الحادث في الهواء الطلق.',
      en: 'I was out on the yacht deck at the time.',
    },
    motive: {
      ar: 'كمال كان يحتفظ بمستندات تثبت أن الشريك أخفى جزءًا من أرباح الشركة ويهدده بالتقديم للنيابة.',
      en: 'Kamal held documents proving the Partner concealed company profits and threatened prosecution.',
    },
    secrets: {
      innocentSecret: {
        ar: 'حاولت البحث في حقيبة كمال الشخصية بالصالون لإيجاد مستندات الأرباح المسروقة لكنك لم تقتله.',
        en: 'You searched Kamal’s personal bag for the profit documents, but did not kill him.',
      },
      killerSecret: {
        ar: 'تسللت لغرفة القيادة واستغلت دوار كمال بفعل المنوم، فاعتديت عليه وأخفيت أوراق الشراكة ونسقت مسرح الجريمة مع حركة اليخت.',
        en: 'You snuck onto the bridge, attacked Kamal in his weakened state, stole the partnership files, and framed the scene.',
      },
    },
    secretObjective: {
      id: 'obj_shereef',
      title: { ar: 'إخفاء مستند الأرباح', en: 'Conceal Financial Records' },
      description: {
        ar: 'تأكد ألا يصل أي لاعب لمستندات الأرباح المخبأة.',
        en: 'Ensure no player recovers the hidden profit records.',
      },
      suspicionRisk: { ar: 'عالي', en: 'High' },
    },
    killerTruth: {
      characterId: 'char_shereef',
      trueMotive: {
        ar: 'منع كمال من تقديم مستندات إخفاء أرباح الشركة للشرطة واسترداد ملفات الدين.',
        en: 'Prevent Kamal from handing profit embezzlement evidence to authorities.',
      },
      howItWasDone: {
        ar: 'استغل انشغال الجميع، وتسلل لغرفة القيادة وسدد الضربة ثم عدّل وضع الجثة ومسار اليخت للتغطية.',
        en: 'Infiltrated the bridge unnoticed, struck Kamal, and manipulated the yacht controls and body to cover up.',
      },
      flawInAlibi: {
        ar: 'ادعى وجوده بالسطح العلوي طوال الوقت، لكن سجل فتح باب غرفة القيادة أظهر بصمة يده وساعته على الأزرار وقت الجريمة.',
        en: 'Claimed to be on deck, but electronic door logs and console smudge matching his watch face proved his presence.',
      },
    },
  },
  {
    id: 'char_yara',
    name: {
      ar: 'المصورة الوثائقية',
      en: 'Documentary Photographer',
    },
    title: {
      ar: 'صانعة محتوى الرحلة',
      en: 'Trip Content Creator',
    },
    role: {
      ar: 'المصورة الوثائقية',
      en: 'Documentary Photographer',
    },
    avatar: '📷',
    bio: {
      ar: 'دعيت للرحلة لتصوير محتوى لليخت وتبدو بعيدة عن المشاكل.',
      en: 'Invited to document content for the yacht, appearing neutral and uninvolved.',
    },
    relationshipToVictim: {
      ar: 'مصورة الرحلة',
      en: 'Charter Photographer',
    },
    publicAlibi: {
      ar: 'كنت في غرفة النوم أراجع الصور واللقاطات التي التقطتها.',
      en: 'I was in my cabin reviewing photo footage.',
    },
    motive: {
      ar: 'لم تكن تصور الرحلة فقط، بل كانت تبحث عن كمال للضغط عليه بسبب قضية ابتزاز قديمة.',
      en: 'She wasn’t just photographing; she was tracking down a lead regarding past blackmail.',
    },
    secrets: {
      innocentSecret: {
        ar: 'التقطتِ صوراً سرية لممر غرفة القيادة تظهر شخصاً يعبر في 11:21 م وأخفيتِ الكاميرا خوفاً.',
        en: 'You took a secret photo of the bridge corridor showing someone passing at 11:21 PM and hid your camera in fear.',
      },
      killerSecret: {
        ar: 'اقتحمتِ غرفة القيادة عند اكتشاف كمال لكاميرتك المخفية وحدث العراك الذي أدى لمقتله وتعديل المسار.',
        en: 'You entered the bridge when Kamal caught your hidden lens, sparking a confrontation that ended in his murder.',
      },
    },
    secretObjective: {
      id: 'obj_yara',
      title: { ar: 'حماية كارت الذاكرة', en: 'Protect Memory Card' },
      description: {
        ar: 'إخفاء كارت ذاكرة الكاميرا الذي يحتوي صور الممر.',
        en: 'Hide the memory card containing corridor photos.',
      },
      suspicionRisk: { ar: 'متوسط', en: 'Medium' },
    },
    killerTruth: {
      characterId: 'char_yara',
      trueMotive: {
        ar: 'تدمير الصور والأدلة التي كان يستغلها كمال لابتزازها.',
        en: 'Destroy blackmail photographs held by Kamal.',
      },
      howItWasDone: {
        ar: 'تسللت لغرفة القيادة، واعتدت عليه عند المواجهة وقامت بتوجيه اليخت لإيهام الجميع بمكان آخر للجريمة.',
        en: 'Snuck into the bridge, confronted him, delivered the fatal blow, and altered course to confuse the scene.',
      },
      flawInAlibi: {
        ar: 'ادعت البقاء بغرفتها، لكن الفلاش التلقائي لكاميراتها انعكس على زجاج نافذة غرفة القيادة في تسجيل الفيديو.',
        en: 'Claimed she was in her cabin, but her camera flash reflected off the bridge window glass in recorded video.',
      },
    },
  },
  {
    id: 'char_adham',
    name: {
      ar: 'مهندس اليخت',
      en: 'Yacht Engineer',
    },
    title: {
      ar: 'كبير مهندسي الصيانة',
      en: 'Chief Maintenance Engineer',
    },
    role: {
      ar: 'مهندس اليخت',
      en: 'Yacht Engineer',
    },
    avatar: '🔧',
    bio: {
      ar: 'مسؤول عن فحص محرك اليخت ويعرف تفاصيل النظام الميكانيكي بالكامل.',
      en: 'In charge of the yacht’s engine inspection, fully versed in its mechanical systems.',
    },
    relationshipToVictim: {
      ar: 'مهندس صيانة المحركات',
      en: 'Chief Marine Engineer',
    },
    publicAlibi: {
      ar: 'كنت في غرفة المحركات أفحص ضغط الوقود والحرارة.',
      en: 'I was down in the engine room checking fuel pressure.',
    },
    motive: {
      ar: 'اكتشف عطلًا خطيرًا بالمحرك قبل الرحلة ولم يبلغ كمال، وكمال هدد بفصله ومحاكمته بتهمة الإهمال الجسيم.',
      en: 'Discovered a major engine defect prior to sailing but hid it; Kamal threatened to report his gross negligence.',
    },
    secrets: {
      innocentSecret: {
        ar: 'قمت بإنقاص ضغط الوقود يدوياً لإجبار اليخت على التهدئة لتغطية العطل لكنك لم تقتل كمال.',
        en: 'You manually lowered fuel pressure to stall the yacht and cover up the defect, but did not kill Kamal.',
      },
      killerSecret: {
        ar: 'تسللت من سلم المحركات الخفي لغرفة القيادة وضربت كمال، وقمت بتغيير مسار اليخت لإخفاء الجريمة.',
        en: 'You climbed the hidden engine ladder to the bridge, struck Kamal, and changed course to mask the crime.',
      },
    },
    secretObjective: {
      id: 'obj_adham',
      title: { ar: 'مسح تقرير المحرك', en: 'Erase Engine Log' },
      description: {
        ar: 'تأكد من إخفاء سجل أخطاء الصيانة الميكانيكية.',
        en: 'Ensure mechanical maintenance error logs are concealed.',
      },
      suspicionRisk: { ar: 'عالي', en: 'High' },
    },
    killerTruth: {
      characterId: 'char_adham',
      trueMotive: {
        ar: 'حماية رخصته الهندسية وتجنب السجن بعد تهديد كمال بالإبلاغ عن التزوير والإهمال.',
        en: 'Protect his license and avoid jail after Kamal threatened to report his safety cover-up.',
      },
      howItWasDone: {
        ar: 'صعد عبر السلم الميكانيكي المباشر لغرفة القيادة وسدد الضربة القاضية ثم تلاعب بنظام التحكم الإلكتروني.',
        en: 'Used the direct maintenance ladder to enter the bridge, struck Kamal, and tampered with navigation.',
      },
      flawInAlibi: {
        ar: 'ادعى التواجد بالمحركات، لكن سجل فتح الباب الميكانيكي أظهر خروجه الساعة 11:18 م بالتزامن مع توقف اللاسلكي.',
        en: 'Claimed he remained in the engine room, but door logs showed he exited at 11:18 PM matching comms failure.',
      },
    },
  },
  {
    id: 'char_nadeen',
    name: {
      ar: 'ابنة القبطان',
      en: 'Captain’s Daughter',
    },
    title: {
      ar: 'الوريثة الوحيدة',
      en: 'Sole Heiress',
    },
    role: {
      ar: 'ابنة القبطان',
      en: 'Captain’s Daughter',
    },
    avatar: '👤',
    bio: {
      ar: 'العلاقة بينها وبين والدها سيئة ومتوترة منذ سنوات بسبب قراراته المالية.',
      en: 'Strained relationship with her father for years over financial and personal disputes.',
    },
    relationshipToVictim: {
      ar: 'ابنة الضحية الوحيدة',
      en: 'Victim’s daughter',
    },
    publicAlibi: {
      ar: 'كنت في صالون اليخت أتحدث في الهاتف مع صديقتي.',
      en: 'I was in the main lounge on the phone.',
    },
    motive: {
      ar: 'اكتشفت أن والدها كان يخطط لبيع اليخت وحرمانها من الميراث والشركة البحرية.',
      en: 'Discovered her father planned to sell the yacht and disinherit her from the marine business.',
    },
    secrets: {
      innocentSecret: {
        ar: 'مزقتِ مسودة عقد بيع اليخت بالصالون قبل الجريمة بدقائق، لكنكِ لم تؤذي والدكِ.',
        en: 'You tore up a draft contract to sell the yacht in the lounge minutes before, but didn’t harm your father.',
      },
      killerSecret: {
        ar: 'واجهتِ والدكِ في غرفة القيادة بشأن بيع اليخت، وعندما سخر منكِ أقدمتِ على ضربه وتغيير المسار لإرباك التحقيق.',
        en: 'Confronted your father on the bridge regarding the sale; when he dismissed you, you struck him and altered the route.',
      },
    },
    secretObjective: {
      id: 'obj_nadeen',
      title: { ar: 'إخفاء مسودة العقد', en: 'Conceal Sales Draft' },
      description: {
        ar: 'إخفاء بقايا عقد البيع الممزق بالصالون.',
        en: 'Hide the torn sales contract pieces from the lounge.',
      },
      suspicionRisk: { ar: 'متوسط', en: 'Medium' },
    },
    killerTruth: {
      characterId: 'char_nadeen',
      trueMotive: {
        ar: 'إيقاف بيع اليخت والحفاظ على الميراث العائلي قبل توقيع العقد النهائي.',
        en: 'Halt the yacht sale and secure her inheritance before the final deal signed.',
      },
      howItWasDone: {
        ar: 'دخلت الجسرة من باب الصالون، ونشبت المشادة وسددت الضربة ثم تركت الباب مفتوحاً لإيهام شخص آخر.',
        en: 'Entered from the lounge door, had a confrontation, struck him, and left the door open to shift blame.',
      },
      flawInAlibi: {
        ar: 'ادعت الإتصال بالهاتف بالصالون، لكن شركات الشبكات أثبتت انقطاع المكالمة في 11:12 م ولم تستأنف.',
        en: 'Claimed to be on a call in the lounge, but telecom records show her call dropped at 11:12 PM and never resumed.',
      },
    },
  },
];
