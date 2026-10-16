/**
 * CRIME - Egyptian Social Deduction Mystery Game
 * Natural Egyptian Arabic Dictionary
 */

export const EGYPTIAN_STRINGS: Record<string, string> = {
  // Navigation & Common
  appTitle: 'جريمة',
  appSubTitle: 'ملفات تحري واستنتاج جنائي',
  back: 'رجوع',
  next: 'التالي',
  confirm: 'تأكيد',
  cancel: 'إلغاء',
  close: 'إغلاق',
  continue: 'متابعة',
  start: 'ابدأ التحقيق',
  settings: 'الإعدادات',
  howToPlay: 'إزاي تلعب؟',
  about: 'عن اللعبة',
  selectCase: 'اختر الملف',
  round: 'جولة',
  of: 'من',

  // Home Screen
  newGame: 'تحقيق جديد',
  gameTagline: 'متأمنش لأي حد.. كل مشتبه به مخبي سر، والجاني واحد بس وسطكم.',
  passAndPlayNotice: 'لعبة جماعية على موبايل واحد (٤ مشتبه بهم)',

  // Case Selection
  availableCases: 'أرشيف القضايا السرية',
  difficulty: 'مستوى التعقيد',
  players: 'المشتبه بهم',
  duration: 'الوقت المتوقع',
  minutes: 'دقيقة',
  caseBriefing: 'تفاصيل الملف',
  victim: 'الضحية',
  causeOfDeath: 'سبب الوفاة',
  timeOfDeath: 'وقت الحادث',
  crimeScene: 'مسرح الجريمة',

  // Player Setup
  investigationTeam: 'تحديد المشتبه بهم',
  enterPlayerNames: 'سجل أسماء المشتبه بهم الحاضرين معك (٤ لاعبين).',
  playerNamePlaceholder: 'اكتب اسم المشتبه به...',
  assignCharacters: 'الملف الشخصي المسند',
  randomizeRoles: 'توزيع الأدوار والأسرار في سرية تامة',

  // Pass Device Screen
  passDeviceTitle: 'ملف سري للغاية',
  passDevicePrompt: 'سلم الموبايل في سرية تامة لـ:',
  ensurePrivacy: 'تأكد إن محدش باصص على الشاشة جنبك قبل ما تفتح الملف!',
  revealMySecret: 'افتح ملفي السري',

  // Secret Briefing Screen
  yourIdentity: 'دوارك وسرك السري',
  killerRoleTitle: 'أنت الجاني القاتل!',
  innocentRoleTitle: 'أنت بريء من الجريمة!',
  yourBio: 'الخلفية الشخصية',
  yourAlibi: 'حجتك وقت الجريمة',
  yourMotive: 'الدافع المترصد لك',
  yourSecret: 'سرك الخفي الخاص',
  yourObjective: 'هدفك السري',
  iUnderstandHide: 'فهمت المطلوب — اقفل الملف وسلّم الجهاز',

  // Evidence Board & Discussion
  evidenceBoardTitle: 'لوحة الأدلة والتحريات',
  newEvidenceUnlocked: 'تم كشف دليل جديد في جولة التحقيق هذه!',
  evidenceTypeAudio: 'تسجيل صوتي سري',
  evidenceTypeCCTV: 'تسجيل كاميرات المراقبة',
  evidenceTypePhoto: 'صورة من مسرح الجريمة',
  evidenceTypeDocument: 'وثيقة / رسالة سرية',
  evidenceTypeForensic: 'تقرير الطب الشرعي',
  evidenceTypeWitness: 'إفادة شاهد عيان',
  evidenceTypeMessage: 'رسائل نصية مسربة',

  discussionTimer: 'وقت المناقشة والمواجهة',
  startVoting: 'الانتقال إلى التصويت السري',
  detectiveNotes: 'قائمة المشتبه بهم والأدلة',

  // Voting
  votingTitle: 'صندوق التصويت السري',
  voterPrompt: 'مين في رأيك ارتكب الجريمة دي؟',
  castVote: 'تأكيد التصويت السري',

  // Jail / Arrest
  jailedTitle: 'قرار التحقيق والتحفظ',
  playerJailedMsg: 'تم التحفظ عليه وإيداعه في الحجز!',
  jailRulesNotice: 'المشتبه به الموقوف مش بيشارك في التصويت أو النقاش المفتوح، لكن بياخد ١٥ ثانية دفاع بعد كل دليل جديد!',
  jail15SecTimer: 'كلمة الدفاع للحبيس (١٥ ثانية)',

  // Reveal & Endings
  innocentsWinTitle: 'تم حل الملف! نجحت التحريات',
  killerWinsTitle: 'تم حفظ الملف ضد مجهول!',
  killerIdentityRevealed: 'القاتل الحقيقي كان:',
  truthStory: 'سيناريو ارتكاب الجريمة بالكامل',
  playAgain: 'فتح ملف جديد',

  // Settings
  soundEffects: 'المؤثرات الصوتية',
  musicVolume: 'الموسيقى والخلفية',
  discussionDuration: 'وقت جولة النقاش (بالدقائق)',
};

export const getUIString = (key: string, _lang?: string): string => {
  if (EGYPTIAN_STRINGS[key]) {
    return EGYPTIAN_STRINGS[key];
  }
  return key;
};
