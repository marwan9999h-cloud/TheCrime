/**
 * CRIME - Digital Investigation Dossier
 * Home Screen - Main Investigation Archive & Menu
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { Play, FolderArchive, HelpCircle, Info, ShieldAlert, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../../utils/soundEngine';

export const HomeScreen: React.FC = () => {
  const { setScreen } = useGame();

  const handleMenuClick = (targetScreen: any) => {
    soundEngine.playClick();
    setScreen(targetScreen);
  };

  const menuItems = [
    {
      id: '01',
      screen: 'case_selection',
      labelEn: 'NEW INVESTIGATION',
      labelAr: 'تحقيق جديد',
      desc: 'فتح ملف قضية جديدة واختيار المشتبه بهم الحاضرين',
      accent: 'border-red-800/80 hover:border-red-500 bg-zinc-950/90',
      badge: 'ACTIVE FILE',
      isPrimary: true,
    },
    {
      id: '02',
      screen: 'case_archive',
      labelEn: 'CASE ARCHIVE',
      labelAr: 'أرشيف القضايا',
      desc: 'استعراض سجل القضايا المغلقة والموسوعة الجنائية للموسم',
      accent: 'border-zinc-800 hover:border-zinc-600 bg-zinc-950/80',
      badge: 'SEASON 01',
      isPrimary: false,
    },
    {
      id: '03',
      screen: 'how_to_play',
      labelEn: 'FIELD MANUAL',
      labelAr: 'دليل التحقيق الجنائي',
      desc: 'قواعد تمرير الجهاز، قراءة الأدلة، المداولة، وغرفة الحجز',
      accent: 'border-zinc-800 hover:border-zinc-600 bg-zinc-950/80',
      badge: 'PROTOCOL',
      isPrimary: false,
    },
    {
      id: '04',
      screen: 'crime_info',
      labelEn: 'CRIME INFORMATION',
      labelAr: 'بيانات النظام الجنائي',
      desc: 'معلومات الإصدار وتوثيق نظام التحقيق والمطور',
      accent: 'border-zinc-800 hover:border-zinc-600 bg-zinc-950/80',
      badge: 'SYSTEM',
      isPrimary: false,
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center max-w-xl mx-auto w-full py-4 sm:py-6 px-2 sm:px-4 text-right font-sans select-none">
      {/* Top Classification Tag */}
      <div className="flex items-center justify-between w-full border-b border-white/[0.08] pb-2.5 mb-6 text-xs text-zinc-400 font-mono">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>DOSSIER // نظام التحقيق الجنائي</span>
        </span>
        <span className="text-zinc-400 border border-white/[0.08] bg-zinc-900/80 px-2.5 py-0.5 rounded-md font-sans text-xs">
          Pass & Play محلي
        </span>
      </div>

      {/* Hero Section */}
      <div className="text-center space-y-3 mb-8 w-full">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/10 text-rose-400 font-mono text-xs font-semibold tracking-wider uppercase">
          <span>CRIMINAL INVESTIGATION GAME</span>
        </div>

        <h1 className="font-heading font-black text-5xl sm:text-6xl tracking-tight text-white uppercase">
          CRIME <span className="text-rose-500 font-sans font-black">| جريمة</span>
        </h1>

        <p className="text-sm sm:text-base text-zinc-300 font-sans max-w-md mx-auto leading-relaxed pt-1">
          لعبة استنتاج وتحقيق اجتماعي جماعية — استجوبوا المشتبه بهم، حللوا الأدلة المتاحة، واكتشفوا القاتل الحقيقي قبل فوات الأوان.
        </p>

        {/* Metadata Strip */}
        <div className="pt-2 flex items-center justify-center gap-2.5 text-xs text-zinc-400">
          <span>٤ لاعبين</span>
          <span className="text-zinc-600">/</span>
          <span>٣ جولات تحقيق</span>
          <span className="text-zinc-600">/</span>
          <span className="text-rose-400 font-medium">مواسم متجددة</span>
        </div>
      </div>

      {/* Investigation Menu */}
      <div className="w-full space-y-3">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-1.5 text-xs text-zinc-400">
          <span className="font-medium">اختر الإجراء للمتابعة</span>
          <span className="font-mono text-[11px] text-zinc-500">SELECT ACTION</span>
        </div>

        <div className="grid grid-cols-1 gap-2.5">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleMenuClick(item.screen)}
              role="button"
              tabIndex={0}
              className={`p-4 rounded-xl border text-right transition-all duration-200 cursor-pointer flex items-center justify-between group active:scale-[0.99] ${
                item.isPrimary
                  ? 'bg-gradient-to-l from-rose-950/40 via-zinc-900/90 to-zinc-900 border-rose-500/40 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-950/30'
                  : 'bg-zinc-900/70 border-white/[0.08] hover:border-zinc-500 hover:bg-zinc-800/80'
              }`}
            >
              <div className="space-y-1 pr-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-heading font-black text-lg transition-colors ${
                      item.isPrimary
                        ? 'text-white group-hover:text-rose-300'
                        : 'text-zinc-100 group-hover:text-white'
                    }`}
                  >
                    {item.labelAr}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider hidden sm:inline">
                    [{item.labelEn}]
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 mr-3">
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono font-semibold rounded-md border ${
                    item.isPrimary
                      ? 'border-rose-500/40 bg-rose-500/20 text-rose-300'
                      : 'border-white/[0.08] bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {item.badge}
                </span>
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${
                    item.isPrimary
                      ? 'bg-rose-600 border-rose-500 text-white shadow-sm group-hover:scale-105'
                      : 'bg-zinc-800 border-zinc-700 text-zinc-300 group-hover:bg-zinc-700 group-hover:text-white'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Subtle Clearance Notice */}
      <div className="mt-8 pt-4 border-t border-white/[0.06] w-full text-center text-xs text-zinc-500">
        جميع جلسات التحقيق تُحفظ وتُدار محلياً على جهازك
      </div>
    </div>
  );
};
