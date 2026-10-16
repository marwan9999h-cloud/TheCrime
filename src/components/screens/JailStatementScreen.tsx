/**
 * CRIME - Digital Investigation Dossier
 * Detained Suspect Statement & 15-Second Defense Record
 */

import React, { useState, useEffect } from 'react';
import { useGame } from '../../context/GameContext';
import { soundEngine } from '../../utils/soundEngine';
import { Lock, ArrowLeft, Play, Pause, RotateCcw, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';
import { DossierHeader } from '../dossier/DossierComponents';

export const JailStatementScreen: React.FC = () => {
  const { state, advanceToNextRound, revealFinalVerdict } = useGame();
  const roundState = state.roundState;
  const caseData = state.caseData;
  const fileNumber = caseData?.fileNumber || 'FILE 001';

  const jailedId = roundState.jailedPlayerThisRoundId;
  const jailedPlayer =
    state.players.find((p) => p.id === jailedId) || state.players.find((p) => p.isJailed);

  const character = jailedPlayer
    ? caseData?.allCharacters.find((c) => c.id === jailedPlayer.characterId)
    : null;

  const [speechSeconds, setSpeechSeconds] = useState(15);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timer: any = null;
    if (isTimerRunning && speechSeconds > 0) {
      timer = setInterval(() => {
        setSpeechSeconds((prev) => {
          if (prev <= 1) {
            soundEngine.playGavelStrike();
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, speechSeconds]);

  if (!jailedPlayer) return null;

  const isFinalRound = roundState.currentRound >= roundState.totalRounds;

  const handleFinish = () => {
    soundEngine.playGavelStrike();
    if (jailedPlayer.role === 'killer' || isFinalRound) {
      revealFinalVerdict();
    } else {
      advanceToNextRound();
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-xl mx-auto w-full py-6 px-4 space-y-5 text-right font-sans select-none">
      {/* Top Security Header Navigation */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
          <span className="px-2 py-0.5 border border-zinc-700 bg-zinc-900 text-[10px] uppercase font-bold tracking-widest">
            {fileNumber}
          </span>
          <span className="text-zinc-500 uppercase">
            DETENTION RECORD // SUSPECT STATEMENT
          </span>
        </div>

        <span className="px-2 py-0.5 border border-red-900/60 bg-red-950/30 text-red-400 font-mono text-[10px] font-bold tracking-widest uppercase">
          RECORDED PLEA
        </span>
      </div>

      {/* Main Detained Statement Document */}
      <div className="border border-zinc-800 bg-zinc-950/90 rounded-sm p-5 space-y-5">
        <DossierHeader
          caseFileNumber={fileNumber}
          classification="CONFIDENTIAL // DETENTION RECORD"
          category="SUSPECT ORAL PLEA"
          subjectNumber={jailedPlayer.displayName.toUpperCase()}
          isRestricted={false}
        />

        {/* Suspect Profile Header */}
        <div className="border-b border-zinc-800 pb-4 space-y-1">
          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
            <span>DETAINED SUBJECT</span>
            <span className="text-red-400 font-bold">15-SECOND ALLOCATION</span>
          </div>

          <h2 className="font-heading font-black text-2xl text-zinc-100">
            {character?.name.ar || jailedPlayer.displayName}
          </h2>
          <div className="text-xs font-mono text-zinc-400">
            {jailedPlayer.displayName} — {character?.title.ar || 'مشتبه به موقوف'}
          </div>
        </div>

        {/* Response Timer Card */}
        <div className="border border-zinc-800 bg-zinc-900/50 p-5 rounded-sm text-center space-y-3 font-mono">
          <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase tracking-widest border-b border-zinc-800/80 pb-2">
            <span>RESPONSE TIME</span>
            <span className={speechSeconds <= 5 ? 'text-red-400 font-bold' : 'text-zinc-400'}>
              {speechSeconds <= 5 ? 'TIME CRITICAL' : 'COUNTDOWN ACTIVE'}
            </span>
          </div>

          <div
            className={`text-5xl sm:text-6xl font-black tracking-widest transition-colors py-2 ${
              speechSeconds <= 5 ? 'text-red-400' : 'text-zinc-100'
            }`}
          >
            00:{speechSeconds.toString().padStart(2, '0')}
          </div>

          <div className="flex justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setIsTimerRunning(!isTimerRunning);
              }}
              className={`px-4 py-2 border rounded-sm text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                isTimerRunning
                  ? 'border-red-600 bg-red-950/40 text-red-300'
                  : 'border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200'
              }`}
            >
              {isTimerRunning ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>PAUSE TIMER</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>START TIMER</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setSpeechSeconds(15);
                setIsTimerRunning(false);
              }}
              className="p-2 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 rounded-sm cursor-pointer transition-colors"
              title="إعادة التوقيت"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Recorded Statement Instruction */}
        <div className="border border-zinc-800 bg-zinc-900/30 p-4 rounded-sm space-y-1.5 font-sans">
          <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-zinc-500" />
            <span>RECORDED STATEMENT // بيان الدفاع الشفهي</span>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            يُمنح المشتبه به المحبوس 15 ثانية فقط لتوجيه كلمته الأخيرة قبل إغلاق محضر الجلسة — لتبرئة ساحته أو لفت انتباه المحققين نحو الأدلة المهملة.
          </p>
        </div>

        {/* Complete Statement Action */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleFinish}
            className="w-full py-4 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-100 font-mono text-xs font-bold tracking-widest uppercase rounded-sm cursor-pointer transition-all flex items-center justify-center gap-2"
          >
            <span>COMPLETE STATEMENT // إنهاء البيان ومتابعة التحقيق</span>
            <ArrowLeft className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
