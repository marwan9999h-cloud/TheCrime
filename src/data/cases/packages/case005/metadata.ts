/**
 * CASE 005 - "المكالمة الأخيرة"
 * Metadata & Victim Info
 */

import { CaseModel } from '../../../../types/game';

export const CASE_005_METADATA: Omit<
  CaseModel,
  'allCharacters' | 'evidenceByRound' | 'killerTruth' | 'winningStory' | 'losingStory'
> = {
  id: 'file_005_last_call',
  fileNumber: 'FILE 005',
  seasonCategory: 'murder',
  title: {
    ar: '🎬 المكالمة الأخيرة',
    en: '🎬 The Last Call',
  },
  tagline: {
    ar: 'جريمة قتل غامضة في موقع تصوير برنامج مباشر على الهواء، حيث الوقت ليس كما يبدو...',
    en: 'A mysterious murder on a live broadcast studio set, where time is not what it seems...',
  },
  difficulty: 'medium',
  minPlayers: 4,
  maxPlayers: 4,
  estimatedMinutes: 35,
  coverImage: '/assets/cases/studio.jpg',
  isLocked: false,
  synopsis: {
    ar: 'في موقع تصوير استوديو الإنتاج الإعلامي وأثناء بث مباشر لبرنامج شهير، يغادر المخرج رامي الدسوقي الاستوديو بعد تلقيه مكالمة غامضة، ليُعثر عليه ميتًا داخل غرفة التسجيل الصوتي. التحقيقات تكشف تعارضًا صارخًا بين سجلات البث، التايم كود، وتسجيلات الصوت.',
    en: 'On a live broadcast set at a media studio, director Rami El-Desouky steps out after receiving a mysterious call, only to be found dead inside the audio recording room. Timelines and broadcast logs contradict each other.',
  },
  victim: {
    name: { ar: 'رامي الدسوقي', en: 'Rami El-Desouky' },
    title: { ar: 'مخرج تلفزيوني وسينمائي (٤١ سنة)', en: 'TV & Film Director (41yo)' },
    avatar: '🎬',
    causeOfDeath: {
      ar: 'ضربة قاضية بجسم صلب حاد في مؤخرة الرأس داخل غرفة التسجيل الصوتي',
      en: 'Fatal blunt force trauma to the back of the head inside the audio room',
    },
    timeOfDeath: '١٠:٤٥ مساءً (توقيت النواة المباشر)',
    location: {
      ar: 'استوديو التصوير — غرفة التسجيل الصوتي',
      en: 'Shooting Studio — Audio Recording Room',
    },
    background: {
      ar: 'مخرج مسيطر وعصبي، يحتفظ بأسرار طاقم العمل ويستخدمها للضغط عليهم. قبل وفاته مباشرة صرح على الهواء: "أنا عارف مين عملها... ومش هسكت المرة دي"، ثم غادر الكادر بعد تلقيه مكالمة هاتفية.',
      en: 'Controlling and short-tempered director who kept secrets on staff to manipulate them. Right before dying, he said live on air: "I know who did it... and I won\'t stay silent this time."',
    },
  },
};
