// Web Audio API Sound Effects & Background Hanukkah Music Engine
// All sounds and music are synthesized programmatically in real-time.
// Zero external MP3 dependencies! Completely offline, lightweight and instant.

const NOTE_FREQS = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.00, A3: 220.00, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, 'F#4': 369.99, G4: 392.00,
  'G#4': 415.30, A4: 440.00, 'Bb4': 466.16, B4: 493.88,
  C5: 523.25, D5: 587.33, 'Eb5': 622.25, E5: 659.25, F5: 698.46, 'F#5': 739.99,
  G5: 783.99, A5: 880.00, 'Bb5': 932.33, B5: 987.77, C6: 1046.50, REST: 0
};

// ============================================================================
// Sound Effects Engine
// ============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  // Soft click / pop for button interactions
  playClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.05);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.05);
  }

  // Joyful sparkling chime for correct answers
  playSuccess() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = now + idx * 0.08;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.18, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + 0.46);
    });
  }

  // Gentle, friendly retry sound (no harsh buzzer!)
  playRetry() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const notes = [349.23, 293.66]; // F4, D4
    const now = this.ctx.currentTime;

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = now + idx * 0.12;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, start);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.12, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + 0.26);
    });
  }

  // Festive stage victory fanfare
  playFanfare() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const fanfareNotes = [
      { f: 392.00, t: 0.0, d: 0.15 },
      { f: 523.25, t: 0.14, d: 0.15 },
      { f: 659.25, t: 0.28, d: 0.15 },
      { f: 783.99, t: 0.42, d: 0.35 },
      { f: 1046.50, t: 0.75, d: 0.8 }
    ];

    const now = this.ctx.currentTime;

    fanfareNotes.forEach(item => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const start = now + item.t;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(item.f, start);

      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.18, start + 0.03);
      gain.gain.setValueAtTime(0.16, start + item.d * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + item.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(start);
      osc.stop(start + item.d + 0.05);
    });
  }

  // Realistic synthesized crowd applause (מחיאות כפיים)
  // Generates randomized clapping bursts over 3.2 seconds
  playApplause() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const bufferSize = Math.floor(this.ctx.sampleRate * 3.0);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Create pink/bandpassed noise claps
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2 + white * 0.5362) * 0.12;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to emphasize clapping hand spectrum (800Hz - 2500Hz)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.1, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.35, now + 0.25);
    gain.gain.setValueAtTime(0.32, now + 2.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + 3.05);

    // Play fanfare together with the applause
    setTimeout(() => {
      this.playFanfare();
    }, 180);
  }
}

// ============================================================================
// Hanukkah Background Music Engine (שירי חנוכה ברקע)
// ============================================================================
class HanukkahMusicPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.currentSongIndex = 0;
    this.timeoutId = null;
    this.volume = 0.09; // soft, gentle background volume suitable for children
    this.activeNodes = [];

    // Classic Hanukkah Melodies for Israeli 1st Grade
    this.songs = [
      {
        id: 'svivon',
        name: 'סְבִיבוֹן סֹב סֹב סֹב',
        tempo: 220, // ms per beat (8th note)
        notes: [
          // ס-בי-בון סב סב סב
          ['D4', 1], ['D4', 1], ['G4', 2], ['G4', 1], ['A4', 1], ['B4', 2],
          // חנוכה הוא חג טוב
          ['C5', 1], ['B4', 1], ['A4', 1], ['G4', 1], ['B4', 2], ['G4', 2],
          // ס-בי-בון סב סב סב
          ['D4', 1], ['D4', 1], ['G4', 2], ['G4', 1], ['A4', 1], ['B4', 2],
          // חנוכה הוא חג טוב
          ['C5', 1], ['B4', 1], ['A4', 1], ['G4', 1], ['G4', 4],
          // חג שמחה הוא לעם
          ['B4', 1], ['C5', 1], ['D5', 2], ['D5', 2], ['D5', 1], ['C5', 1], ['B4', 2],
          // נס גדול היה שם/פה
          ['A4', 1], ['B4', 1], ['C5', 2], ['C5', 2], ['C5', 1], ['B4', 1], ['A4', 2],
          // חג שמחה הוא לעם
          ['B4', 1], ['C5', 1], ['D5', 2], ['D5', 2], ['D5', 1], ['C5', 1], ['B4', 2],
          // נס גדול היה פה!
          ['A4', 1], ['B4', 1], ['C5', 2], ['B4', 1], ['A4', 1], ['G4', 4],
          ['REST', 4]
        ]
      },
      {
        id: 'yemei',
        name: 'יְמֵי הַחֲנֻכָּה',
        tempo: 230,
        notes: [
          // ימי החנוכה חנוכת מקדשנו
          ['G4', 1], ['C5', 1], ['C5', 1], ['C5', 1], ['D5', 1], ['E5', 1], ['D5', 1], ['C5', 1], ['B4', 1], ['A4', 1], ['G4', 2],
          // בגיל ובשמחה ממלאים את לבנו
          ['G4', 1], ['C5', 1], ['C5', 1], ['C5', 1], ['D5', 1], ['E5', 1], ['D5', 1], ['C5', 1], ['B4', 1], ['A4', 1], ['G4', 2],
          // לילה ויום סביבוננו יסוב
          ['E5', 1], ['E5', 1], ['E5', 1], ['D5', 1], ['C5', 1], ['D5', 1], ['E5', 1], ['D5', 2],
          // סופגניות נאכל בם לרוב
          ['E5', 1], ['E5', 1], ['E5', 1], ['D5', 1], ['C5', 1], ['D5', 1], ['E5', 1], ['C5', 2],
          // האירו, הדליקו נרות חנוכה רבים
          ['G4', 1], ['G4', 1], ['C5', 2], ['C5', 1], ['D5', 1], ['E5', 2],
          ['F5', 1], ['E5', 1], ['D5', 1], ['C5', 3],
          ['REST', 4]
        ]
      },
      {
        id: 'choshech',
        name: 'בָּאנוּ חֹשֶׁךְ לְגָרֵשׁ',
        tempo: 240,
        notes: [
          // באנו חושך לגרש
          ['D4', 1], ['G4', 1], ['G4', 1], ['A4', 1], ['B4', 1], ['B4', 1], ['A4', 1], ['G4', 2],
          // בידינו אור ואש
          ['A4', 1], ['B4', 1], ['C5', 1], ['B4', 1], ['A4', 2], ['G4', 2],
          // כל אחד הוא אור קטן
          ['B4', 1], ['D5', 1], ['D5', 1], ['C5', 1], ['B4', 1], ['A4', 1], ['G4', 2],
          // וכולנו אור איתן
          ['A4', 1], ['B4', 1], ['C5', 1], ['B4', 1], ['A4', 2], ['G4', 2],
          // סורה חושך הלאה שחור
          ['B4', 1], ['B4', 1], ['B4', 2], ['A4', 2], ['G4', 2],
          // סורה מפני האור!
          ['A4', 1], ['A4', 1], ['A4', 2], ['G4', 2], ['D4', 2],
          // סורה חושך הלאה שחור
          ['B4', 1], ['B4', 1], ['B4', 2], ['A4', 2], ['G4', 2],
          // סורה מפני האור!
          ['A4', 1], ['B4', 1], ['A4', 2], ['G4', 4],
          ['REST', 4]
        ]
      },
      {
        id: 'kad_katan',
        name: 'כַּד קָטָן',
        tempo: 250,
        notes: [
          // כד קטן, כד קטן
          ['G4', 2], ['E4', 1], ['G4', 3], ['G4', 2], ['E4', 1], ['G4', 3],
          // שמונה ימים שמנו נתן
          ['A4', 1], ['G4', 1], ['F4', 1], ['E4', 1], ['D4', 1], ['C4', 1], ['D4', 1], ['E4', 2],
          // כל העם התפלא
          ['G4', 2], ['E4', 1], ['G4', 3], ['G4', 2], ['E4', 1], ['G4', 3],
          // איזה נס התגלה!
          ['A4', 1], ['G4', 1], ['F4', 1], ['E4', 1], ['D4', 1], ['E4', 1], ['C4', 3],
          ['REST', 4]
        ]
      },
      {
        id: 'chag_yafe',
        name: 'חֲנֻכָּה חַג יָפֶה כָּל כָּךְ',
        tempo: 260,
        notes: [
          // חנוכה, חנוכה, חג יפה כל כך
          ['G4', 2], ['E4', 2], ['G4', 2], ['E4', 2], ['G4', 1], ['A4', 1], ['G4', 4],
          // אור חביב מסביב גיל לילד רך
          ['F4', 2], ['D4', 2], ['F4', 2], ['D4', 2], ['F4', 1], ['G4', 1], ['F4', 4],
          // חנוכה, חנוכה, סביבון סוב סוב
          ['E4', 1], ['G4', 1], ['C5', 2], ['B4', 2], ['A4', 2], ['G4', 4],
          // סוב נא סוב, סוב נא סוב, מה נעים וטוב!
          ['F4', 1], ['E4', 1], ['D4', 2], ['E4', 1], ['D4', 1], ['C4', 4],
          ['REST', 4]
        ]
      }
    ];
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  getCurrentSong() {
    return this.songs[this.currentSongIndex];
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
    return this.isPlaying;
  }

  play(songIndex = null) {
    this.init();
    if (!this.ctx) return;

    if (songIndex !== null && songIndex >= 0 && songIndex < this.songs.length) {
      this.currentSongIndex = songIndex;
    }

    this.stopCurrentPlayback();
    this.isPlaying = true;
    this.scheduleSong(this.songs[this.currentSongIndex]);
  }

  pause() {
    this.isPlaying = false;
    this.stopCurrentPlayback();
  }

  nextSong() {
    this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
    if (this.isPlaying) {
      this.play(this.currentSongIndex);
    }
    return this.getCurrentSong();
  }

  prevSong() {
    this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
    if (this.isPlaying) {
      this.play(this.currentSongIndex);
    }
    return this.getCurrentSong();
  }

  stopCurrentPlayback() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.activeNodes.forEach(node => {
      try {
        node.stop();
        node.disconnect();
      } catch (e) {}
    });
    this.activeNodes = [];
  }

  // Plays a single musical note with gentle music-box / celesta timbre
  playNote(freq, durationSec, startTime) {
    if (!this.ctx || freq <= 0) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    // Sweet sine + gentle harmonic octave
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, startTime); // soft octave overtone

    // Soft music-box envelope: crisp chime attack, smooth sweet decay
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(this.volume, startTime + 0.015);
    gain.gain.setValueAtTime(this.volume * 0.75, startTime + durationSec * 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + durationSec * 0.98);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, startTime);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(filter);
    filter.connect(this.ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + durationSec);
    osc2.stop(startTime + durationSec);

    this.activeNodes.push(osc1, osc2);
  }

  scheduleSong(song) {
    if (!this.isPlaying || !this.ctx) return;

    const beatDuration = song.tempo / 1000;
    let accumulatedTime = 0.05; // tiny start buffer
    const startTime = this.ctx.currentTime;

    song.notes.forEach(([noteName, beats]) => {
      const freq = NOTE_FREQS[noteName] || 0;
      const noteDuration = beats * beatDuration;
      const noteStart = startTime + accumulatedTime;

      if (freq > 0) {
        this.playNote(freq, noteDuration * 0.92, noteStart);
      }
      accumulatedTime += noteDuration;
    });

    // Schedule next song loop when this finishes
    this.timeoutId = setTimeout(() => {
      if (this.isPlaying) {
        // Automatically progress to next Hanukkah song
        this.nextSong();
      }
    }, accumulatedTime * 1000);
  }
}

// Global Singletons
const soundManager = new SoundEffects();
const musicPlayer = new HanukkahMusicPlayer();
