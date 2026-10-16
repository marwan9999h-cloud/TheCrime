/**
 * CRIME - Digital Investigation Dossier
 * How To Play Screen - Official Field Manual
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { ArrowLeft, ArrowRight, BookOpen, ShieldAlert } from 'lucide-react';
import { DossierHeader } from '../dossier/DossierComponents';

export const HowToPlayScreen: React.FC = () => {
  const { setScreen } = useGame();

  const handleBack = () => {
    soundEngine.playClick();
    setScreen('home');
  };

  const manualSections = [
    {
      step: '01',
      titleEn: 'BEFORE THE INVESTIGATION',
      titleAr: 'توزيع الأدوار وتمرير الجهاز',
      content:
        'اختاروا ملف قضية وسجلوا أسماء ٤ مشتبه بهم حاضرين معكم في الجلسة. مرروا الجهاز بالترتيب، حيث يفتح كل مشتبه به ملفه السري ويطلع على هويته، دوافعه، وسره الخاص بعيداً عن أعين الآخرين.',
      notice:
        'مشتبه به واحد فقط هو القاتل الحقيقي في السر! باقي المشتبه بهم أبرياء، ولكن لدى كل منهم سر أو مصلحة مالية تجعله موضع اشتباه.',
    },
    {
      step: '02',
      titleEn: 'CHARACTER FILES',
      titleAr: 'ملفات الشخصيات ودوافع الاشتباه',
      content:
        'يحتوي كل ملف شخصي على تفاصيل الضحية وعلاقتها بالشخصية وسيناريو حجة الغياب وسر لا يعرفه أحد. احفظ معلوماتك جيداً واستعد للدفاع عن نفسك وتوجيه أصابع الاتهام للآخرين.',
      notice: null,
    },
    {
      step: '03',
      titleEn: 'EVIDENCE',
      titleAr: 'لوحة الأدلة والتقارير الجنائية',
      content:
        'يتكون التحقيق من ٣ جولات رئيسية. في بداية كل جولة يتم فك تشفير دليل جنائي جديد (تسجيلات صوتية، كاميرات مراقبة، تقارير الطب الشرعي، سجلات هاتفية). حللوا التفاصيل الدقيقة لكشف الأكاذيب.',
      notice: null,
    },
    {
      step: '04',
      titleEn: 'DISCUSSION',
      titleAr: 'جلسة الاستجواب والمناقشة المفتوحة',
      content:
        'يتاح للمحققين وقت محدد للمناقشة ومواجهة المشتبه بهم بالتناقضات بين أقوالهم والأدلة المطروحة. استمعوا لنبرات الصوت وحللوا الثغرات قبل بدء صندوق الاقتراع.',
      notice: null,
    },
    {
      step: '05',
      titleEn: 'VOTING & DETENTION',
      titleAr: 'صندوق التصويت السري وغرفة الحجز',
      content:
        'يُمرر الجهاز بسرية تامة ليدلي كل مشتبه به بصوته على المتهم الأبرز. الحاصل على أعلى الأصوات يُودع الحبس الاحتياطي ويُحجب تصويته في الجولات التالية، ويُمنح فقط ١٥ ثانية لتسجيل بيان دفاعه بعد كل دليل.',
      notice: null,
    },
    {
      step: '06',
      titleEn: 'FINAL REVEAL',
      titleAr: 'محضر النتيجة النهائية وإغلاق القضية',
      content:
        'تنتصر العدالة إذا نجحتم في سجن القاتل الحقيقي قبل انتهاء الجولات. ويفلت القاتل إذا انتهت الجولات دون حبسه أو تم إيداع شخص بريء في الجولة الختامية.',
      notice: null,
    },
  ];

  return (
    <div className="flex-1 flex flex-col max-w-2xl mx-auto w-full py-6 px-4 space-y-6 text-right font-sans select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-[11px] text-zinc-400">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowRight className="w-3.5 h-3.5" />
          <span>RETURN TO ARCHIVE</span>
        </button>

        <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-zinc-300 font-mono text-[10px] font-bold tracking-widest uppercase">
          MANUAL // DOC-001
        </span>
      </div>

      {/* Main Field Manual Container */}
      <div className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-5 sm:p-7 space-y-6">
        <DossierHeader
          caseFileNumber="DOC 001 // MANUAL"
          classification="OFFICIAL INVESTIGATION PROTOCOL"
          category="FIELD OPERATION MANUAL"
          subjectNumber="STANDARD OPERATING PROCEDURES"
          isRestricted={false}
        />

        {/* Title */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
            INVESTIGATION RULES & PROTOCOLS
          </span>
          <h2 className="font-heading font-black text-2xl text-zinc-100">
            دليل التحقيق الجنائي الميداني
          </h2>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            البروتوكول الرسمي المعتمد لإدارة جلسة التحقيق الجنائي الميدانية بنمط Pass & Play.
          </p>
        </div>

        {/* Manual Sections */}
        <div className="space-y-3.5">
          {manualSections.map((sec) => (
            <div
              key={sec.step}
              className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-2"
            >
              <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 font-mono text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-bold">{sec.step}</span>
                  <span className="text-zinc-500 uppercase tracking-wider">
                    // {sec.titleEn}
                  </span>
                </div>
                <span className="text-zinc-600">SEC-RULE</span>
              </div>

              <div className="space-y-1">
                <h3 className="font-heading font-bold text-sm text-zinc-100">
                  {sec.titleAr}
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  {sec.content}
                </p>
              </div>

              {sec.notice && (
                <div className="mt-2 border border-red-900/60 bg-red-950/20 p-2.5 rounded-xs text-[11px] font-sans text-red-300 leading-relaxed">
                  <strong className="font-mono text-[10px] uppercase tracking-wider block text-red-400">
                    CLASSIFIED DIRECTIVE // توجيه أمني:
                  </strong>
                  {sec.notice}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-zinc-800/80">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setScreen('case_selection');
            }}
            className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-mono text-xs font-bold tracking-widest uppercase rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            <span>START INVESTIGATION // بدء التحقيق</span>
            <ArrowLeft className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
