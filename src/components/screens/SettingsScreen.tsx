/**
 * CRIME - Digital Investigation Dossier
 * Settings Screen - System & Investigation Parameters
 */

import React from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { ArrowRight, Volume2, Clock, ShieldAlert, Check } from 'lucide-react';
import { DossierHeader } from '../dossier/DossierComponents';

export const SettingsScreen: React.FC = () => {
  const { setScreen, settings, updateSettings } = useGame();

  const handleBack = () => {
    soundEngine.playClick();
    setScreen('home');
  };

  const handleTestAudio = () => {
    soundEngine.playGavelStrike();
  };

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
          CONFIG // SYS-SETTINGS
        </span>
      </div>

      {/* Main Settings Dossier Container */}
      <div className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-5 sm:p-7 space-y-6">
        <DossierHeader
          caseFileNumber="CFG 001 // SYSTEM"
          classification="SYSTEM CONFIGURATION PROTOCOL"
          category="HARDWARE & INVESTIGATION PARAMETERS"
          subjectNumber="RUNTIME SETTINGS"
          isRestricted={false}
        />

        {/* Title */}
        <div className="space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 block">
            CONFIGURATION CONSOLE
          </span>
          <h2 className="font-heading font-black text-2xl text-zinc-100">
            إعدادات النظام والتحقيق
          </h2>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            تخصيص مستويات الصوت، مدد جولات النقاش، وقواعد الاستجواب الخاصة.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 01: AUDIO */}
        {/* ========================================================================= */}
        <div className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-4 font-sans">
          <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 font-mono text-[10px]">
            <span className="text-zinc-400 font-bold uppercase tracking-wider">
              01 // AUDIO PARAMETERS
            </span>
            <button
              type="button"
              onClick={handleTestAudio}
              className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              [TEST SOUND ⚡]
            </button>
          </div>

          {/* Sound Toggle */}
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="font-heading font-bold text-sm text-zinc-100 block">
                تفعيل المؤثرات الصوتية الجنائية
              </span>
              <span className="text-xs text-zinc-400 font-sans block">
                أصوات المطرقة، أزرار الآلة الكاتبة، تنبيهات الأدلة، وأقفال الحجز.
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                updateSettings({ soundEnabled: !settings.soundEnabled });
              }}
              className={`px-3 py-1.5 rounded-sm border font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                settings.soundEnabled
                  ? 'border-zinc-500 bg-zinc-800 text-zinc-100'
                  : 'border-zinc-800 bg-zinc-950 text-zinc-600'
              }`}
            >
              {settings.soundEnabled ? 'ENABLED [✓]' : 'DISABLED [✕]'}
            </button>
          </div>

          {/* Volume Slider */}
          <div className="space-y-2 pt-2 border-t border-zinc-800/50">
            <div className="flex justify-between text-xs font-mono text-zinc-400">
              <span className="uppercase tracking-wider text-[10px]">MASTER VOLUME // مستوى الصوت العام</span>
              <span className="text-zinc-200 font-bold">{Math.round(settings.masterVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={settings.masterVolume}
              onChange={(e) => updateSettings({ masterVolume: parseFloat(e.target.value) })}
              className="w-full h-1.5 bg-zinc-800 rounded-none appearance-none cursor-pointer accent-zinc-300"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 02: INVESTIGATION & TIMERS */}
        {/* ========================================================================= */}
        <div className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 font-mono text-[10px]">
            <span className="text-zinc-400 font-bold uppercase tracking-wider">
              02 // INVESTIGATION TIMERS
            </span>
            <span className="text-zinc-600">DELIBERATION</span>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
              DISCUSSION TIME PER ROUND // وقت النقاش لكل جولة
            </label>
            <div className="grid grid-cols-3 gap-2 font-mono">
              {[2, 3, 5].map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => {
                    soundEngine.playClick();
                    updateSettings({ discussionTimeLimitMinutes: mins });
                  }}
                  className={`py-2.5 rounded-sm border text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    settings.discussionTimeLimitMinutes === mins
                      ? 'bg-zinc-800 border-zinc-500 text-zinc-100'
                      : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-700'
                  }`}
                >
                  {mins} MINUTES
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 03: SPECIAL RULES */}
        {/* ========================================================================= */}
        <div className="border border-zinc-800/90 bg-zinc-900/30 p-4 rounded-sm space-y-3 font-sans">
          <div className="flex items-center justify-between border-b border-zinc-800/60 pb-1.5 font-mono text-[10px]">
            <span className="text-zinc-400 font-bold uppercase tracking-wider">
              03 // JUDICIAL RULES
            </span>
            <span className="text-zinc-600">DETENTION</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <span className="font-heading font-bold text-sm text-zinc-100 block">
                حق الدفاع للمشتبه به المحبوس (١٥ ثانية)
              </span>
              <span className="text-xs text-zinc-400 font-sans block">
                إتاحة نافذة دفاع صوتية مدتها ١٥ ثانية للمحبوس بعد كل دليل جديد لإثبات براءته.
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                updateSettings({ enable15SecJailRule: !settings.enable15SecJailRule });
              }}
              className={`px-3 py-1.5 rounded-sm border font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                settings.enable15SecJailRule
                  ? 'border-zinc-500 bg-zinc-800 text-zinc-100'
                  : 'border-zinc-800 bg-zinc-950 text-zinc-600'
              }`}
            >
              {settings.enable15SecJailRule ? 'ACTIVE [✓]' : 'OFF [✕]'}
            </button>
          </div>
        </div>

        {/* Save and Return Button */}
        <div className="pt-2 border-t border-zinc-800/80">
          <button
            type="button"
            onClick={handleBack}
            className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-mono text-xs font-bold tracking-widest uppercase rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            <span>SAVE & RETURN TO ARCHIVE // حفظ والعودة</span>
            <Check className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
