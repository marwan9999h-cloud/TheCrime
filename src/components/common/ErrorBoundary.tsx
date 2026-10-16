/**
 * CRIME - Social Deduction Mystery Game
 * Error Boundary Component for Graceful Error Handling
 */

import React, { ErrorInfo, ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  // @ts-ignore
  state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('CRIME Error Boundary caught exception:', error, errorInfo);
  }

  handleReset = () => {
    // @ts-ignore
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-zinc-900 border border-red-800 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-950 border-2 border-red-600 flex items-center justify-center text-red-500">
              <AlertTriangle className="w-8 h-8 animate-pulse" />
            </div>

            <h2 className="font-heading font-black text-2xl text-red-400">
              INVESTIGATION SYSTEM INTERRUPTED
            </h2>

            <p className="text-xs text-zinc-300 font-mono bg-zinc-950 p-3 rounded border border-zinc-800 text-left overflow-x-auto">
              {
                // @ts-ignore
                this.state.error?.message || 'An unexpected runtime error occurred.'
              }
            </p>

            <p className="text-xs text-zinc-400">
              Don't worry, detective. Reloading the board will restore state.
            </p>

            <button
              onClick={this.handleReset}
              className="w-full py-3 bg-red-900 hover:bg-red-800 text-red-100 border border-red-600 rounded-xl font-heading font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reload Investigation Board</span>
            </button>
          </div>
        </div>
      );
    }

    // @ts-ignore
    return this.props.children;
  }
}
