/**
 * CRIME - Digital Investigation Dossier
 * Evidence Record Entry & Examination Detail Viewer
 */

import React, { useState, useEffect } from 'react';
import { EvidenceItem } from '../../types/game';
import { soundEngine } from '../../utils/soundEngine';
import {
  Play,
  Pause,
  X,
  Volume2,
  Camera,
  FileText,
  Activity,
  MessageSquare,
  UserCheck,
  Search,
  Maximize2,
  FileCheck,
  Shield,
  Clock,
  Eye,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface EvidenceBubbleCardProps {
  evidence: EvidenceItem;
  onClick: () => void;
}

export const getEvidenceTypeLabel = (type: EvidenceItem['type']) => {
  switch (type) {
    case 'audio':
      return { en: 'AUDIO RECORD', ar: 'تسجيل صوتي', tag: 'AUDIO' };
    case 'cctv':
      return { en: 'SECURITY CAMERA', ar: 'كاميرا مراقبة', tag: 'CCTV' };
    case 'photo':
      return { en: 'SCENE PHOTOGRAPH', ar: 'صورة مسرح الجريمة', tag: 'PHOTO' };
    case 'document':
      return { en: 'INVESTIGATION DOC', ar: 'وثيقة رسمية', tag: 'DOCUMENT' };
    case 'forensic':
      return { en: 'FORENSIC LAB REPORT', ar: 'تقرير الطب الشرعي', tag: 'FORENSIC' };
    case 'witness':
      return { en: 'WITNESS STATEMENT', ar: 'شهادة شاهد', tag: 'WITNESS' };
    case 'message':
      return { en: 'RECOVERED COMM', ar: 'مراسلة مسترجعة', tag: 'COMM' };
    default:
      return { en: 'EVIDENCE RECORD', ar: 'دليل مادي', tag: 'EVIDENCE' };
  }
};

export const EvidenceBubbleCard: React.FC<EvidenceBubbleCardProps> = ({ evidence, onClick }) => {
  const typeInfo = getEvidenceTypeLabel(evidence.type);
  const evidenceNum = evidence.id.replace('ev_', '').toUpperCase();

  return (
    <div
      onClick={() => {
        soundEngine.playTypewriterKey();
        onClick();
      }}
      role="button"
      tabIndex={0}
      className="bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/[0.08] hover:border-rose-500/50 rounded-xl p-4 sm:p-5 transition-all duration-200 flex flex-col justify-between gap-3 cursor-pointer group text-right select-none active:scale-[0.99] shadow-xs hover:shadow-md hover:shadow-rose-950/20"
    >
      {/* Top Header Information */}
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md border border-rose-500/30 bg-rose-950/30 font-bold text-rose-300">
            دليل {evidenceNum}
          </span>
          <span className="text-zinc-400 font-sans text-xs">
            الجولة 0{evidence.roundNumber}
          </span>
        </div>

        <span className="px-2 py-0.5 rounded-md border border-white/[0.08] bg-zinc-800 text-zinc-300 font-sans text-[11px]">
          {typeInfo.tag}
        </span>
      </div>

      {/* Title & Short Description */}
      <div className="space-y-1 my-0.5">
        <h4 className="font-heading font-black text-base text-white group-hover:text-rose-300 transition-colors">
          {evidence.title.ar}
        </h4>
        <p className="text-xs sm:text-sm text-zinc-300 font-sans line-clamp-2 leading-relaxed">
          {evidence.description.ar}
        </p>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-2.5 border-t border-white/[0.06] text-xs font-sans">
        <span className="text-zinc-400">
          {typeInfo.ar}
        </span>

        <span className="flex items-center gap-1.5 font-semibold text-rose-300 group-hover:text-rose-200 transition-colors">
          <span>فحص الدليل</span>
          <Eye className="w-3.5 h-3.5 text-rose-400 group-hover:text-rose-300" />
        </span>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * Specific Evidence Type Examination Views
 * ------------------------------------------------------------- */

const CCTVView: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  return (
    <div className="space-y-3 font-mono">
      {/* CCTV Monitor Frame */}
      <div className="border border-zinc-700 bg-black rounded-sm p-4 relative overflow-hidden space-y-3">
        {/* CCTV Top Status Bar */}
        <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-400 font-bold">REC</span>
            <span>CAM 04 // MAIN CORRIDOR</span>
          </div>
          <div className="text-zinc-500 tracking-widest">
            23:42:18 [SEC-SYNC]
          </div>
        </div>

        {/* CCTV Visual Viewport */}
        <div className="min-h-[140px] bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center p-4 text-center relative">
          <div className="absolute top-2 left-2 text-[9px] text-zinc-600 tracking-tighter">
            FRAME RATE: 30 FPS // ISO 6400
          </div>
          <Camera className="w-8 h-8 text-zinc-600 mb-2 stroke-[1.2]" />
          <span className="text-xs text-zinc-400 font-sans">
            تسجيل الكاميرا الأمنية المؤرشف للقطاع المشتبه به
          </span>
        </div>

        {/* Scanlines Effect Indicator */}
        <div className="flex items-center justify-between text-[9px] text-zinc-500 pt-1">
          <span>STATUS: EVIDENCE CAPTURE VERIFIED</span>
          <span>SOURCE: BUILDING SECURITY SERVER</span>
        </div>
      </div>

      {/* Observation Content */}
      <div className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-sm space-y-1.5 font-sans">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-semibold block">
          SECURITY OBSERVATION // تفريغ المشاهدة
        </span>
        <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
          {evidence.detailedContent?.ar || evidence.description.ar}
        </div>
      </div>
    </div>
  );
};

const AudioView: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = () => {
    if (isPlaying) {
      soundEngine.playClick();
      setIsPlaying(false);
    } else {
      soundEngine.playAudioPreset(evidence.mediaUrl || 'audio_preset_threat');
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), (evidence.audioDurationSeconds || 8) * 1000);
    }
  };

  return (
    <div className="space-y-3 font-mono">
      {/* Audio Deck Player */}
      <div className="border border-zinc-700 bg-zinc-950 p-4 rounded-sm space-y-3">
        <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800 pb-2">
          <span>AUDIO INVESTIGATION RECORD</span>
          <span className="text-zinc-500">FORMAT: WAV 24-BIT // 48kHz</span>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleToggleAudio}
            className={`px-4 py-2.5 border rounded-sm font-mono text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2 ${
              isPlaying
                ? 'border-red-600 bg-red-950/50 text-red-300'
                : 'border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-zinc-200'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 text-red-400 animate-pulse" />
                <span>PAUSE PLAYBACK</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 text-zinc-300" />
                <span>PLAY RECORDING</span>
              </>
            )}
          </button>

          <span className="text-xs text-zinc-400 font-bold">
            00:00 / 00:{evidence.audioDurationSeconds ? String(evidence.audioDurationSeconds).padStart(2, '0') : '08'}
          </span>
        </div>

        {/* Audio Waveform Visualization */}
        <div className="flex items-center gap-1 h-8 px-2 bg-zinc-900/80 border border-zinc-800 rounded-sm">
          {[25, 60, 40, 85, 30, 75, 95, 45, 65, 30, 80, 50, 90, 35, 70, 40, 85, 20].map((h, i) => (
            <div
              key={i}
              style={{ height: `${isPlaying ? h : 15}%` }}
              className={`flex-1 rounded-xs transition-all duration-150 ${
                isPlaying ? 'bg-red-500' : 'bg-zinc-700'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Transcription */}
      {evidence.transcription && (
        <div className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-sm space-y-1.5 font-sans">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-semibold block">
            TRANSCRIPT // النص المسجل
          </span>
          <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic border-r-2 border-zinc-700 pr-3">
            "{evidence.transcription.ar}"
          </div>
        </div>
      )}
    </div>
  );
};

const PhotoView: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  return (
    <div className="space-y-3">
      {/* Crime Scene Photograph Presentation */}
      <div className="border border-zinc-700 bg-zinc-950 p-4 rounded-sm space-y-3 font-mono">
        <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800 pb-2">
          <span>CRIME SCENE PHOTOGRAPH</span>
          <span className="text-zinc-500">EVID-IMG // RAW</span>
        </div>

        {/* Photo Container */}
        <div className="min-h-[160px] bg-zinc-900/60 border border-zinc-800 flex flex-col items-center justify-center p-4 text-center rounded-sm">
          <Camera className="w-10 h-10 text-zinc-600 mb-2 stroke-[1.2]" />
          <span className="text-xs font-sans text-zinc-300">
            صورة فوتوغرافية موثقة من مسرح الجريمة
          </span>
        </div>

        <div className="text-[9px] text-zinc-500 text-center">
          INVESTIGATION EVIDENCE LOGGED
        </div>
      </div>

      {/* Photograph Observations */}
      <div className="border border-zinc-800 bg-zinc-900/40 p-4 rounded-sm space-y-1.5 font-sans">
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 font-semibold block">
          PHOTOGRAPHIC OBSERVATIONS // ملاحظات الصورة
        </span>
        <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
          {evidence.detailedContent?.ar || evidence.description.ar}
        </div>
      </div>
    </div>
  );
};

const DocumentView: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  const evidenceNum = evidence.id.replace('ev_', '').toUpperCase();

  return (
    <div className="space-y-3 font-sans">
      {/* Official Documentary Investigation Document */}
      <div className="border border-zinc-700 bg-zinc-950 p-4 sm:p-5 rounded-sm space-y-3">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 font-mono text-[10px] text-zinc-400">
          <span>DOCUMENTARY EVIDENCE</span>
          <span>DOCUMENT NO. {evidenceNum}</span>
        </div>

        {/* Digital Investigation Paper Block */}
        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-sm font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
          {evidence.detailedContent?.ar || evidence.description.ar}
        </div>

        <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest text-right">
          AUTHENTICATED DOCUMENTARY RECORD // CONFIDENTIAL
        </div>
      </div>
    </div>
  );
};

const ForensicView: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  return (
    <div className="space-y-3 font-sans">
      <div className="border border-zinc-700 bg-zinc-950 p-4 sm:p-5 rounded-sm space-y-3">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 font-mono text-[10px] text-zinc-400">
          <span>FORENSIC PATHOLOGY & LAB REPORT</span>
          <span className="text-zinc-500">DEPT. OF FORENSIC MEDICINE</span>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-sm space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
            LAB FINDINGS // النتائج المعملية
          </span>
          <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
            {evidence.detailedContent?.ar || evidence.description.ar}
          </div>
        </div>

        <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest text-right">
          CERTIFIED BY FORENSIC PATHOLOGIST // BIO-LOG #449
        </div>
      </div>
    </div>
  );
};

const WitnessView: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  return (
    <div className="space-y-3 font-sans">
      <div className="border border-zinc-700 bg-zinc-950 p-4 sm:p-5 rounded-sm space-y-3">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 font-mono text-[10px] text-zinc-400">
          <span>WITNESS STATEMENT RECORD</span>
          <span className="text-zinc-500">OFFICIAL TESTIMONY</span>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-sm space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
            STATEMENT // أقوال الشاهد
          </span>
          <div className="text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
            {evidence.detailedContent?.ar || evidence.description.ar}
          </div>
        </div>
      </div>
    </div>
  );
};

const MessageView: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  return (
    <div className="space-y-3 font-sans">
      <div className="border border-zinc-700 bg-zinc-950 p-4 sm:p-5 rounded-sm space-y-3">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 font-mono text-[10px] text-zinc-400">
          <span>RECOVERED COMMUNICATION</span>
          <span className="text-zinc-500">EXTRACTED CHAT LOG</span>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-sm space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block font-semibold">
            INTERCEPTED MESSAGES // المراسلات المسترجعة
          </span>
          <div className="font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap">
            {evidence.detailedContent?.ar || evidence.description.ar}
          </div>
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------
 * Main Evidence Detail Examination Modal / Overlay
 * ------------------------------------------------------------- */

export interface EvidenceDetailModalProps {
  evidence: EvidenceItem;
  onClose: () => void;
}

export const EvidenceDetailModal: React.FC<EvidenceDetailModalProps> = ({ evidence, onClose }) => {
  const typeInfo = getEvidenceTypeLabel(evidence.type);
  const evidenceNum = evidence.id.replace('ev_', '').toUpperCase();

  const renderTypeView = () => {
    switch (evidence.type) {
      case 'cctv':
        return <CCTVView evidence={evidence} />;
      case 'audio':
        return <AudioView evidence={evidence} />;
      case 'photo':
        return <PhotoView evidence={evidence} />;
      case 'document':
        return <DocumentView evidence={evidence} />;
      case 'forensic':
        return <ForensicView evidence={evidence} />;
      case 'witness':
        return <WitnessView evidence={evidence} />;
      case 'message':
        return <MessageView evidence={evidence} />;
      default:
        return <DocumentView evidence={evidence} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 text-right overflow-y-auto select-none font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 6 }}
        className="max-w-2xl w-full bg-[#18191f] border border-white/[0.12] rounded-2xl p-5 sm:p-6 relative space-y-4 my-auto shadow-2xl"
      >
        {/* Top Official Dossier Examination Header */}
        <div className="flex items-start justify-between border-b border-white/[0.08] pb-3 gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-2 py-0.5 rounded-md border border-rose-500/30 bg-rose-950/30 font-bold text-rose-300">
                دليل {evidenceNum}
              </span>
              <span className="text-zinc-400 font-sans text-xs">
                الجولة 0{evidence.roundNumber}
              </span>
              <span className="px-2 py-0.5 rounded-md border border-white/[0.08] bg-zinc-800 text-zinc-300 font-sans text-xs">
                {typeInfo.ar}
              </span>
            </div>

            <h3 className="font-heading font-black text-xl sm:text-2xl text-white pt-1">
              {evidence.title.ar}
            </h3>
          </div>

          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/[0.08] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="إغلاق فحص الدليل"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Synopsis / Quick Description */}
        <div className="bg-[#15161a] p-4 rounded-xl border border-white/[0.06] text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed">
          {evidence.description.ar}
        </div>

        {/* Specialized Type-Specific Examination Template */}
        {renderTypeView()}

        {/* Detective Analysis (if present) */}
        {evidence.detectiveAnalysis && (
          <div className="border border-rose-500/30 bg-rose-950/20 p-4 rounded-xl space-y-1.5 font-sans">
            <div className="text-xs font-semibold text-rose-300 flex items-center gap-1.5">
              <span>تحليل فريق التحقيق الجنائي:</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
              {evidence.detectiveAnalysis.ar}
            </p>
          </div>
        )}

        {/* Footer Action */}
        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="w-full py-3.5 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-sans text-sm font-bold tracking-wide transition-all duration-150 flex items-center justify-center gap-2 border border-white/[0.1] cursor-pointer shadow-sm active:scale-[0.99]"
          >
            <span>إغلاق فحص الدليل والعودة للوحة</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export const EvidenceCard: React.FC<{ evidence: EvidenceItem }> = ({ evidence }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <EvidenceBubbleCard evidence={evidence} onClick={() => setIsModalOpen(true)} />
      {isModalOpen && (
        <EvidenceDetailModal evidence={evidence} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};
