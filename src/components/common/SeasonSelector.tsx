/**
 * CRIME - Social Deduction Mystery Game
 * SeasonSelector Component
 * Displays the 6 official seasons reading from the package/seasons registry
 */

import React from 'react';
import { OFFICIAL_SEASONS } from '../../data/seasons';
import { getCasesBySeason } from '../../data/cases';
import { Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { SeasonModel } from '../../types/seasons';

interface SeasonSelectorProps {
  selectedSeasonId: string;
  onSelectSeason: (seasonId: string) => void;
  className?: string;
  viewMode?: 'tabs' | 'grid';
}

export const SeasonSelector: React.FC<SeasonSelectorProps> = ({
  selectedSeasonId,
  onSelectSeason,
  className = '',
  viewMode = 'tabs',
}) => {
  if (viewMode === 'grid') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {OFFICIAL_SEASONS.map((season: SeasonModel) => {
          const isSelected = selectedSeasonId === season.id;
          const cases = getCasesBySeason(season.categoryKey);

          return (
            <div
              key={season.id}
              onClick={() => onSelectSeason(season.id)}
              className={`relative rounded-2xl p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-zinc-900 border-red-500 shadow-xl shadow-red-950/40 ring-1 ring-red-500/50'
                  : season.isUnlocked
                  ? 'bg-zinc-950/90 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                  : 'bg-zinc-950/50 border-zinc-900/80 hover:border-zinc-800 opacity-80 hover:opacity-100'
              }`}
            >
              <div>
                {/* Top Badge & Lock Status */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xl shadow-inner">
                    {season.icon}
                  </span>

                  {season.isUnlocked ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-950/90 text-emerald-400 border border-emerald-800/80 rounded-full text-[11px] font-mono font-bold">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{season.releaseStatus.ar}</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-950/70 text-amber-400 border border-amber-800/60 rounded-full text-[11px] font-mono font-bold">
                      <Lock className="w-3 h-3" />
                      <span>{season.releaseStatus.ar}</span>
                    </span>
                  )}
                </div>

                {/* Season Title & Tagline */}
                <h3 className="font-heading font-black text-lg text-zinc-100 mb-1">
                  {season.title.ar}
                </h3>
                <p className="text-xs text-zinc-400 font-serif leading-relaxed mb-4">
                  {season.tagline.ar}
                </p>
              </div>

              {/* Bottom Meta */}
              <div className="pt-3 border-t border-zinc-900 flex items-center justify-between text-xs font-mono">
                {season.isUnlocked ? (
                  <span className="text-red-400 font-bold">
                    {cases.length} {cases.length === 1 ? 'قضية متاحة' : 'قضايا متاحة'}
                  </span>
                ) : (
                  <span className="text-zinc-600 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-500/60" />
                    موسم القضايا القادم
                  </span>
                )}
                <span className="text-zinc-500 font-sans text-[11px]">
                  موسم #{season.number}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // Default: Tabs mode
  return (
    <div className={`flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar ${className}`}>
      {OFFICIAL_SEASONS.map((season) => {
        const isSelected = selectedSeasonId === season.id;
        return (
          <button
            key={season.id}
            onClick={() => onSelectSeason(season.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              isSelected
                ? 'bg-red-950 border-2 border-red-500 text-red-100 shadow-lg shadow-red-950/80 scale-[1.02]'
                : season.isUnlocked
                ? 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                : 'bg-zinc-950 border border-zinc-900 text-zinc-500 hover:text-zinc-400 hover:bg-zinc-900/50'
            }`}
          >
            <span className="text-base">{season.icon}</span>
            <span>{season.title.ar}</span>
            {!season.isUnlocked && <Lock className="w-3.5 h-3.5 text-amber-500/80" />}
          </button>
        );
      })}
    </div>
  );
};
