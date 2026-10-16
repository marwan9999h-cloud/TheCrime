/**
 * CASE 004 - "الطابق السابع"
 * Character Cards (6 Core Suspects)
 */

import { CharacterCard } from '../../../../types/game';

export const CASE_004_CHARACTERS: CharacterCard[] = [
  {
    id: 'karim',
    name: { ar: 'نائب المدير', en: 'Deputy Director' },
    title: { ar: 'نائب المدير التنفيذي', en: 'Deputy CEO' },
    role: { ar: 'نائب المدير', en: 'Deputy Director' },
    avatar: '💼',
    bio: {
      ar: 'الذراع الأيمن لياسر في إدارة الشركة. طموح للغاية ويحلم بالوصول لمنصب المدير التنفيذي.',
      en: 'Yasser right-hand man in managing strategy. Ambitious and eyes the CEO seat.',
    },
    relationshipToVictim: {
      ar: 'نائب الضحية والمنافس الأول له في القرارات الاستراتيجية والصفقات.',
      en: 'Deputy to victim and primary competitor in strategic decisions.',
    },
    publicAlibi: {
      ar: 'يدعي أنه كان مجتمعاً في غرفة الاجتماعات المغلقة بالطابق السابع من 8:10 حتى 8:40 مساءً.',
      en: 'Claims he was in a closed meeting in the 7th floor conference room from 8:10 to 8:40 PM.',
    },
    motive: {
      ar: 'خوفه من استبعاده من الصفقة الاستثمارية الجديدة وسحب صلاحياته الإدارية.',
      en: 'Fear of being excluded from the major investment deal and stripped of authority.',
    },
    secrets: {
      innocentSecret: {
        ar: 'كنت تحاول إخفاء تحويل مالي خاطئ قمت بتعديله سابقاً، ولا علاقة لك بمقتل ياسر.',
        en: 'You were trying to conceal an old financial transfer error you fixed, completely unrelated to Yasser murder.',
      },
    },
    secretObjective: {
      id: 'karim_obj',
      title: { ar: 'تشتيت الشبهات', en: 'Divert Suspicion' },
      description: {
        ar: 'وجه الأنظار نحو سجلات الحسابات وقم بالتركيز على تسريبات المستندات خارج الشركة.',
        en: 'Direct attention to financial audit records and leak issues.',
      },
      suspicionRisk: { ar: 'متوسطة', en: 'Medium' },
    },
  },
  {
    id: 'salma',
    name: { ar: 'مديرة الحسابات', en: 'Finance Director' },
    title: { ar: 'مديرة الحسابات والمالية', en: 'Chief Financial Officer' },
    role: { ar: 'مديرة الحسابات', en: 'Finance Director' },
    avatar: '📊',
    bio: {
      ar: 'مديرة الحسابات بالشركة. دقيقة في عملها لكنها تمر بضغوط مالية وشخصية كبيرة.',
      en: 'CFO of the company. Precise in her work but experiencing financial pressure.',
    },
    relationshipToVictim: {
      ar: 'مسؤولة التقارير المالية والتدقيق المباشر أمام الضحية.',
      en: 'Responsible for direct financial reporting to victim.',
    },
    publicAlibi: {
      ar: 'تقول إنها كانت تطبع ميزانية السنة في الطابق السادس من 8:15 حتى 8:40 مساءً.',
      en: 'Claims she was printing annual budgets on the 6th floor from 8:15 to 8:40 PM.',
    },
    motive: {
      ar: 'اكتشاف ياسر لخطأ مالي جسيم في أحد الملفات المالية تحت مسؤوليتها.',
      en: 'Discovery by Yasser of a major accounting error in her department.',
    },
    secrets: {
      innocentSecret: {
        ar: 'أخفيتِ خطأً حسابياً بسيطاً صححتِه بنفسك، وتخشين المساءلة الإدارية فقط.',
        en: 'You hid a small accounting error you corrected yourself and feared administrative review.',
      },
    },
    secretObjective: {
      id: 'salma_obj',
      title: { ar: 'حماية الحسابات', en: 'Protect Accounts' },
      description: {
        ar: 'أكدي أن الحسابات سليمة تماماً وركزي على ثغرات نظام الـ IT والتوقيت الزمني.',
        en: 'Insist the accounts are clean and focus on IT timestamps.',
      },
      suspicionRisk: { ar: 'منخفضة', en: 'Low' },
    },
  },
  {
    id: 'adham',
    name: { ar: 'مسؤول تكنولوجيا المعلومات', en: 'IT Director' },
    title: { ar: 'مسؤول الأنظمة والسيرفرات', en: 'Systems & Servers Lead' },
    role: { ar: 'مسؤول تكنولوجيا المعلومات', en: 'IT Director' },
    avatar: '💻',
    bio: {
      ar: 'مسؤول السيرفرات والكاميرات وأنظمة الدخول بالشركة. يتحكم في البنية البرمجية بالكامل.',
      en: 'IT director managing servers, cameras, and access control.',
    },
    relationshipToVictim: {
      ar: 'مسؤول عن تأمين أجهزة الضحية وسجلات اتصالاته وأنظمة الدخول.',
      en: 'Responsible for victim computer security and access control logs.',
    },
    publicAlibi: {
      ar: 'يدعي أنه كان في غرفة الـ IT بالطابق السادس يتتبع عطلاً شبكياً طوال الليل.',
      en: 'Claims he was in the 6th floor server room troubleshooting network faults.',
    },
    motive: {
      ar: 'تهديد ياسر بتحميله مسؤولية اختراق أمني وتصفية حسابه بالشركة.',
      en: 'Threat by Yasser to hold him liable for a security breach.',
    },
    secrets: {
      innocentSecret: {
        ar: 'قمت بالدخول على جهاز ياسر بدون إذنه بدافع الفضول لمعرفة قرارات الفصل المرتقبة.',
        en: 'You logged into Yasser laptop without permission out of curiosity regarding upcoming lay-offs.',
      },
    },
    secretObjective: {
      id: 'adham_obj',
      title: { ar: 'التشكيك في السجلات', en: 'Question Logs' },
      description: {
        ar: 'أصر على أن السجلات الإلكترونية قد تكون مخترقة من شخص آخر بالطابق.',
        en: 'Insist electronic logs could have been manipulated by others.',
      },
      suspicionRisk: { ar: 'عالية', en: 'High' },
    },
  },
  {
    id: 'nourhan',
    name: { ar: 'المساعدة التنفيذية', en: 'Executive Assistant' },
    title: { ar: 'مساعدة المدير التنفيذي', en: 'Executive Assistant' },
    role: { ar: 'المساعدة التنفيذية', en: 'Executive Assistant' },
    avatar: '📑',
    bio: {
      ar: 'المساعدة الشخصية لياسر. تعرف جدول مواعيد الاتصالات والمقابلات بدقة متناهية.',
      en: 'Executive assistant who manages Yasser schedule and private files.',
    },
    relationshipToVictim: {
      ar: 'المساعدة المباشرة والمسؤولة عن تنظيم أعمال الضحية اليومية.',
      en: 'Direct assistant organizing daily operations for victim.',
    },
    publicAlibi: {
      ar: 'تقول إنها غادرت المبنى نهائياً الساعة 8:18 مساءً بعد إنهاء أعمال اليوم.',
      en: 'Claims she left the building permanently at 8:18 PM.',
    },
    motive: {
      ar: 'غضب ياسر منها بسبب شكوكه في تسريب معلومات إدارية لمنافسين.',
      en: 'Victim suspicions that she leaked internal deal info.',
    },
    secrets: {
      innocentSecret: {
        ar: 'كنتِ تسربين مواعيد اجتماعات ياسر لزميلك لمساعدته في توقع القرارات، وليس للضرورة.',
        en: 'You leaked schedule details to a colleague to anticipate decisions, not to harm company.',
      },
    },
    secretObjective: {
      id: 'nourhan_obj',
      title: { ar: 'إثبات المغادرة', en: 'Prove Exit' },
      description: {
        ar: 'ركزي على أنك غادرت مبكراً ووجهي الشبهات نحو نواب المدير والمصاعد.',
        en: 'Focus on early exit and direct suspicion to executive deputies.',
      },
      suspicionRisk: { ar: 'متوسطة', en: 'Medium' },
    },
  },
];
