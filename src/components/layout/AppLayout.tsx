/**
 * CRIME - Social Deduction Mystery Game
 * AppLayout Container Component
 */

import React from 'react';
import { Header } from '../common/Header';
import { Footer } from '../common/Footer';
import { FilmGrainOverlay } from '../common/FilmGrainOverlay';
import { useGame } from '../../context/GameContext';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { settings } = useGame();
  const isRtl = settings.language === 'ar';

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col bg-[#141519] text-zinc-100 dark-vignette relative overflow-x-hidden ${
        isRtl ? 'font-sans' : ''
      }`}
    >
      {/* Subtle Film Grain Texture */}
      <FilmGrainOverlay />

      {/* Atmospheric Crimson & Slate Ambient Lighting */}
      <div className="fixed top-0 left-1/3 w-[500px] h-[500px] bg-rose-950/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[450px] h-[450px] bg-red-900/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <Header />

      {/* Main Screen Content Area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-5 md:py-7 relative z-10 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
