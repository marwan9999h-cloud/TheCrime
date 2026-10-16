/**
 * CRIME - Social Deduction Mystery Game
 * Main Entry Point
 */

import React from 'react';
import { GameProvider } from './context/GameContext';
import { AppLayout } from './components/layout/AppLayout';
import { AppRouter } from './router/AppRouter';
import { ErrorBoundary } from './components/common/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary>
      <GameProvider>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </GameProvider>
    </ErrorBoundary>
  );
}
