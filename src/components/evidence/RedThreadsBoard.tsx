/**
 * CRIME - Egyptian Social Deduction Mystery Game
 * Visual Red String Evidence Board Component
 */

import React, { useState } from 'react';
import { EvidenceItem, CharacterCard } from '../../types/game';
import { Pin, Sparkles, FileText, Lock, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { soundEngine } from '../../utils/soundEngine';

interface RedThreadsBoardProps {
  unlockedEvidence: EvidenceItem[];
  characters: CharacterCard[];
  notesRecord?: Record<string, string>;
  onUpdateNote?: (evidenceId: string, newNote: string) => void;
}

export const RedThreadsBoard: React.FC<RedThreadsBoardProps> = ({
  unlockedEvidence,
  characters,
  notesRecord = {},
  onUpdateNote,
}) => {
  const [selectedEvidenceId, setSelectedEvidenceId] = useState<string | null>(
    unlockedEvidence.length > 0 ? unlockedEvidence[0].id : null
  );

  const [activeNotes, setActiveNotes] = useState<Record<string, string>>({
    ev_01_autopsy_report: 'ملاحظة المحقق: السم سريع المفعول، يجب حصر من اقترب من الكأس قبل ١١:٠٠ م.',
    ev_02_will_fragment: 'ملاحظة المحقق: مسودة الوصية تثبت وجود حرمان لوريث أساسي!',
    ev_03_hallway_cctv: 'ملاحظة المحقق: طارق ومستشار طاهر كانا بالأقرب للممر.',
    ev_04_audio_wiretap: 'ملاحظة المحقق: التهديد المباشر جاء بصوت نبرة حادة.',
    ev_05_poison_vial: 'ملاحظة المحقق: العبوة تطابق مستلزمات المعمل الطبي.',
    ev_06_bank_transfer: 'ملاحظة المحقق: التحويل البنكي يثبت وجود ديون سريّة.',
    ev_07_final_confession_letter: 'ملاحظة المحقق: الضحية أعد الخطة لاختبار الأمانة.',
    ev_08_glass_fingerprints: 'ملاحظة المحقق: طارق هو من لمس مقبض الكأس.',
    ...notesRecord,
  });

  const handleNoteChange = (evId: string, val: string) => {
    setActiveNotes((prev) => ({ ...prev, [evId]: val }));
    if (onUpdateNote) onUpdateNote(evId, val);
  };

  return (
    <div className="relative w-full bg-[#131110] border-2 border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-2xl overflow-hidden font-serif text-right select-none">
      {/* Wood Cork Board Texture Background Effect */}
      <div className="absolute inset-0 bg-repeat opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-zinc-800 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <Pin className="w-5 h-5 text-red-500 fill-current" />
          <h3 className="font-heading font-black text-xl text-zinc-100">
            لوحة الخيوط الحمراء والروابط الجنائية
          </h3>
        </div>

        <p className="text-xs text-amber-400/90 font-mono">
          📌 اضغط على الدليل لإظهار الخيوط الحمراء الموصلة بالمشتبه بهم
        </p>
      </div>

      {/* Visual Board Layout: Grid of Suspect Pins and Evidence Cards */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Suspect Cards pinned to cork board */}
        <div className="lg:col-span-4 space-y-3">
          <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-2 flex items-center justify-between">
            <span>المشتبه بهم الخمسة</span>
            <span className="text-red-500 font-bold">● دبابيس الربط</span>
          </h4>

          <div className="space-y-2.5 max-h-[550px] overflow-y-auto pr-1">
            {characters.map((char) => {
              const selectedEvidence = unlockedEvidence.find((e) => e.id === selectedEvidenceId);
              const isImplicated = selectedEvidence?.implicatedCharacterIds.includes(char.id);

              return (
                <motion.div
                  key={char.id}
                  animate={{
                    scale: isImplicated ? 1.02 : 1,
                    borderColor: isImplicated ? '#ef4444' : '#27272a',
                  }}
                  className={`relative p-3 rounded-xl border transition-all ${
                    isImplicated
                      ? 'bg-red-950/90 border-red-500 text-white shadow-lg shadow-red-950/80 ring-2 ring-red-500/50'
                      : 'bg-zinc-900/90 border-zinc-800 text-zinc-400'
                  }`}
                >
                  {/* Pushpin top icon */}
                  <div className="absolute -top-2 left-4 p-1 rounded-full bg-red-600 text-white shadow-md">
                    <Pin className="w-3 h-3 fill-current" />
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{char.avatar}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h5 className="font-heading font-bold text-sm text-zinc-100">
                          {char.name.ar}
                        </h5>
                        {isImplicated && (
                          <span className="px-2 py-0.5 bg-red-600 text-white text-[9px] font-mono font-bold rounded-full animate-pulse">
                            مرتبط بالدليل 🔴
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 block">
                        {char.title.ar}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Evidence Polaroid Pins with Notes */}
        <div className="lg:col-span-8 space-y-4">
          <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest border-b border-zinc-800 pb-2 flex items-center justify-between">
            <span>الأدلة الجنائية المكتشفة ({unlockedEvidence.length})</span>
            <span className="text-amber-400 font-bold">📝 ملاحظات افتراضية</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[550px] overflow-y-auto pl-1">
            {unlockedEvidence.map((ev) => {
              const isSelected = ev.id === selectedEvidenceId;

              return (
                <div
                  key={ev.id}
                  onClick={() => {
                    soundEngine.playClick();
                    setSelectedEvidenceId(ev.id);
                  }}
                  className={`relative p-4 rounded-xl border transition-all cursor-pointer text-right flex flex-col justify-between ${
                    isSelected
                      ? 'bg-amber-950/80 border-amber-500 shadow-xl shadow-amber-950/60 ring-2 ring-amber-500/50'
                      : 'bg-zinc-900/90 border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {/* Push Pin */}
                  <div className="absolute -top-2.5 right-4 p-1 rounded-full bg-amber-600 text-white shadow-md">
                    <Pin className="w-3.5 h-3.5 fill-current" />
                  </div>

                  <div>
                    <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 mb-2">
                      <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
                        جولة #{ev.roundNumber}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {ev.type === 'audio' ? '🎙️ صوتي' : ev.type === 'cctv' ? '📷 كاميرا' : '📜 مستند'}
                      </span>
                    </div>

                    <h5 className="font-heading font-black text-base text-zinc-100 mb-1">
                      {ev.title.ar}
                    </h5>

                    <p className="text-xs text-zinc-300 font-sans leading-relaxed mb-3">
                      {ev.description.ar}
                    </p>
                  </div>

                  {/* Manual Detective Default Notes Box */}
                  <div className="bg-zinc-950/90 p-2.5 rounded-lg border border-amber-900/40 space-y-1.5 mt-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-amber-400">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-amber-400" />
                        <span>ملاحظة المحقق الميداني:</span>
                      </span>
                      <span className="text-zinc-500">قابل للتعديل</span>
                    </div>

                    <textarea
                      value={activeNotes[ev.id] || ''}
                      onChange={(e) => handleNoteChange(ev.id, e.target.value)}
                      onKeyDown={() => soundEngine.playTypewriterKey()}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full h-16 bg-zinc-900 text-zinc-200 text-xs font-sans p-2 rounded border border-zinc-800 focus:border-amber-500 focus:outline-none resize-none text-right"
                      placeholder="اكتب ملاحظتك الجنائية هنا..."
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
