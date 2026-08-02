// Simple Web Audio API Synthesizer for Gospel Audio Previews

class AudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timer: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playGospelChords(onTick?: (timeSec: number) => void) {
    this.initContext();
    if (!this.ctx) return;
    this.stop();
    this.isPlaying = true;

    let elapsed = 0;
    // Gospel chord progression frequencies (C maj9 - Am7 - Fmaj7 - G9)
    const chords = [
      [261.63, 329.63, 392.00, 493.88, 587.33], // Cmaj9
      [220.00, 261.63, 329.63, 392.00, 440.00], // Am7
      [174.61, 220.00, 261.63, 329.63, 440.00], // Fmaj7
      [196.00, 246.94, 293.66, 349.23, 440.00], // G9
    ];

    let chordIdx = 0;

    const playChord = () => {
      if (!this.isPlaying || !this.ctx) return;

      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      currentChord.forEach((freq) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Warm organ/pad envelope
        gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 3.0);
      });
    };

    playChord();
    this.timer = window.setInterval(() => {
      if (!this.isPlaying) return;
      elapsed += 1;
      if (onTick) onTick(elapsed);
      if (elapsed % 3 === 0) {
        playChord();
      }
    }, 1000);
  }

  public stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

export const audioSynth = new AudioSynthesizer();
