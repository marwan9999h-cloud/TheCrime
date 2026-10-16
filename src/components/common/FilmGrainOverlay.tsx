/**
 * CRIME - Egyptian Social Deduction Mystery Game
 * Noir Film Grain & Dust Overlay Effect
 */

import React from 'react';

export const FilmGrainOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden mix-blend-overlay opacity-15 select-none"
      aria-hidden="true"
    >
      {/* SVG Canvas Noise Texture */}
      <svg className="w-full h-full opacity-20">
        <filter id="noir-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noir-grain)" />
      </svg>

      {/* Subtle Dust Flicker & Vignette Shading */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
    </div>
  );
};
