/**
 * CRIME - Digital Investigation Dossier
 * Global Minimal Header Component
 */

import React, { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { Settings, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { soundEngine } from '../../utils/soundEngine';
import logoImg from '../../assets/images/crime_shield_logo_1785960331637.jpg';

export const Header: React.FC = () => {
  const { state, settings, setScreen, updateSettings, resetGame } = useGame();
  const [logoError, setLogoError] = useState(false);

  const toggleSound = () => {
    updateSettings({ soundEnabled: !settings.soundEnabled });
  };

  const isHome = state.currentScreen === 'home';

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#16171c]/95 backdrop-blur-md px-4 py-2.5 text-right font-sans select-none">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => {
            if (!isHome) {
              if (window.confirm('هل تريد العودة للقائمة الرئيسية؟ سيتم إعادة ضبط التحقيق الحالي.')) {
                soundEngine.playClick();
                resetGame();
              }
            }
          }}
          aria-label="العودة للرئيسية"
          className="flex items-center gap-2.5 text-right group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-md overflow-hidden border border-rose-500/30 bg-rose-950/30 flex items-center justify-center shrink-0 shadow-sm group-hover:border-rose-500/50 transition-colors">
            {!logoError ? (
              <img
                src={logoImg}
                alt="CRIME"
                className="w-full h-full object-cover grayscale contrast-125 opacity-90 group-hover:opacity-100 transition-opacity"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-mono text-xs font-bold text-rose-400">CR</span>
            )}
          </div>

          <div className="flex items-baseline gap-2">
            <span className="font-heading font-black text-xl tracking-wider text-white group-hover:text-rose-200 transition-colors uppercase">
              CRIME
            </span>
            <span className="font-mono text-[11px] text-rose-400/90 font-medium hidden sm:inline">
              | جريمة
            </span>
          </div>
        </button>

        {/* Current Active Case Metadata indicator */}
        {state.caseData && (
          <div className="hidden sm:flex items-center gap-2.5 font-mono text-[11px] text-zinc-300 border border-white/[0.08] bg-zinc-900/80 px-3.5 py-1 rounded-md shadow-xs">
            <span className="text-rose-400 font-bold uppercase tracking-wider">
              {state.caseData.fileNumber || 'FILE 001'}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-zinc-200 font-sans font-medium">
              {state.caseData.title.ar}
            </span>
            <span className="text-zinc-600">/</span>
            <span className="text-amber-400 font-semibold uppercase">
              الجولة 0{state.roundState.currentRound}
            </span>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Audio Sound Toggle */}
          <button
            onClick={() => {
              soundEngine.playClick();
              toggleSound();
            }}
            title={settings.soundEnabled ? 'كتم المؤثرات' : 'تفعيل المؤثرات'}
            aria-label={settings.soundEnabled ? 'كتم المؤثرات' : 'تفعيل المؤثرات'}
            className="p-2 rounded-md border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            {settings.soundEnabled ? (
              <Volume2 className="w-4 h-4 text-rose-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            )}
          </button>

          {/* Settings Trigger */}
          <button
            onClick={() => {
              soundEngine.playClick();
              setScreen('settings');
            }}
            title="إعدادات النظام"
            aria-label="إعدادات النظام"
            className="p-2 rounded-md border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Reset / Return to Main Archive when in-game */}
          {!isHome && (
            <button
              onClick={() => {
                if (window.confirm('هل تريد إلغاء التحقيق والعودة للرئيسية؟')) {
                  soundEngine.playClick();
                  resetGame();
                }
              }}
              title="إعادة ضبط التحقيق والعودة"
              aria-label="إعادة ضبط التحقيق والعودة"
              className="p-2 rounded-md border border-rose-900/60 bg-rose-950/30 hover:bg-rose-950/60 text-rose-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
