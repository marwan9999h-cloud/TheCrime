/**
 * CRIME - Digital Investigation Dossier
 * Global Minimal Footer Component
 */

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-4 px-4 text-center select-none">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-right font-mono text-[10px] text-zinc-600 uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span>CRIME // DIGITAL INVESTIGATION DOSSIER</span>
          <span>•</span>
          <span>VER 1.0.0</span>
        </div>

        <div>
          <span>MARWAN M. HAMMAD // ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
};
