/**
 * CRIME - Web Audio Synthesizer Sound Engine
 * Generates rich film noir sound effects without external audio assets.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private volume: number = 0.8;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean): void {
    this.isMuted = muted;
  }

  public setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
  }

  /**
   * Button click sound (subtle metallic/typewriter tap)
   */
  public playClick(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.15 * this.volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Audio context error ignore
    }
  }

  /**
   * Typewriter key stroke sound
   */
  public playTypewriterKey(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const bufferSize = ctx.sampleRate * 0.02;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800 + Math.random() * 400;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2 * this.volume, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.02);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      whiteNoise.start();
    } catch {
      // Audio context error ignore
    }
  }

  /**
   * Gavel impact sound for voting and jail decisions
   */
  public playGavelStrike(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(40, now + 0.25);

      gain.gain.setValueAtTime(0.8 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);

      // Wood thump sub-harmonic
      const sub = ctx.createOscillator();
      const subGain = ctx.createGain();
      sub.type = 'triangle';
      sub.frequency.setValueAtTime(90, now);
      sub.frequency.exponentialRampToValueAtTime(20, now + 0.2);

      subGain.gain.setValueAtTime(0.6 * this.volume, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

      sub.connect(subGain);
      subGain.connect(ctx.destination);

      sub.start(now);
      sub.stop(now + 0.2);
    } catch {
      // Audio context error ignore
    }
  }

  /**
   * Suspense / Evidence reveal sting
   */
  public playEvidenceSting(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Dark low drone
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(65, now); // C2
      osc1.frequency.exponentialRampToValueAtTime(55, now + 1.2); // A1#

      gain1.gain.setValueAtTime(0.35 * this.volume, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);

      osc1.start(now);
      osc1.stop(now + 1.2);

      // Tense metallic harmonic accent
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(440, now);
      osc2.frequency.setValueAtTime(466.16, now + 0.3); // Minor 2nd interval for tension

      gain2.gain.setValueAtTime(0.2 * this.volume, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc2.start(now);
      osc2.stop(now + 1.0);
    } catch {
      // Audio context error ignore
    }
  }

  /**
   * Timer tick sound (discussion countdown)
   */
  public playTimerTick(isUrgent = false): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(isUrgent ? 1200 : 800, now);

      gain.gain.setValueAtTime((isUrgent ? 0.3 : 0.12) * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio context error ignore
    }
  }

  /**
   * Jail door slam sound effect
   */
  public playJailSlam(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Metallic impact
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(120, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.4);

      gain.gain.setValueAtTime(0.5 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Audio context error ignore
    }
  }

  /**
   * Play wiretap audio preset
   */
  public playAudioPreset(presetName: string): void {
    if (this.isMuted) return;
    this.playEvidenceSting();
  }

  private bgDroneOsc1: OscillatorNode | null = null;
  private bgDroneOsc2: OscillatorNode | null = null;
  private bgDroneGain: GainNode | null = null;
  private isMusicPlaying: boolean = false;

  /**
   * Toggle or start film noir ambient background music synth drone
   */
  public startBackgroundMusic(): void {
    if (this.isMuted || this.isMusicPlaying) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      this.bgDroneOsc1 = ctx.createOscillator();
      this.bgDroneOsc2 = ctx.createOscillator();
      this.bgDroneGain = ctx.createGain();

      this.bgDroneOsc1.type = 'sine';
      this.bgDroneOsc1.frequency.setValueAtTime(55, now); // A1 bass drone

      this.bgDroneOsc2.type = 'sawtooth';
      this.bgDroneOsc2.frequency.setValueAtTime(110, now); // A2 harmonic

      // Filter to make it warm and moody
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);

      this.bgDroneGain.gain.setValueAtTime(0.01, now);
      this.bgDroneGain.gain.linearRampToValueAtTime(0.08 * this.volume, now + 2);

      this.bgDroneOsc1.connect(filter);
      this.bgDroneOsc2.connect(filter);
      filter.connect(this.bgDroneGain);
      this.bgDroneGain.connect(ctx.destination);

      this.bgDroneOsc1.start(now);
      this.bgDroneOsc2.start(now);
      this.isMusicPlaying = true;
    } catch {
      // Audio error fallback
    }
  }

  public stopBackgroundMusic(): void {
    if (!this.isMusicPlaying) return;
    try {
      if (this.bgDroneGain && this.ctx) {
        this.bgDroneGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1);
        setTimeout(() => {
          this.bgDroneOsc1?.stop();
          this.bgDroneOsc2?.stop();
          this.bgDroneOsc1?.disconnect();
          this.bgDroneOsc2?.disconnect();
          this.isMusicPlaying = false;
        }, 1000);
      } else {
        this.bgDroneOsc1?.stop();
        this.bgDroneOsc2?.stop();
        this.isMusicPlaying = false;
      }
    } catch {
      this.isMusicPlaying = false;
    }
  }

  /**
   * Victory sound fanfare
   */
  public playVictoryFanfare(): void {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;

    try {
      const notes = [261.63, 329.63, 392.0, 523.25]; // C E G C
      const now = ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);

        gain.gain.setValueAtTime(0.3 * this.volume, now + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.6);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.15);
        osc.stop(now + idx * 0.15 + 0.6);
      });
    } catch {
      // Audio context error ignore
    }
  }
}

export const soundEngine = new SoundEngine();
