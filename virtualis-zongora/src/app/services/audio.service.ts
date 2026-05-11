import { Injectable } from '@angular/core';
import * as Tone from 'tone';

const SAMPLE_BASE = 'samples/';

const SAMPLES: Record<string, string> = {
  A0:   'A0.mp3',  C1:   'C1.mp3',  'D#1': 'Ds1.mp3', 'F#1': 'Fs1.mp3',
  A1:   'A1.mp3',  C2:   'C2.mp3',  'D#2': 'Ds2.mp3', 'F#2': 'Fs2.mp3',
  A2:   'A2.mp3',  C3:   'C3.mp3',  'D#3': 'Ds3.mp3', 'F#3': 'Fs3.mp3',
  A3:   'A3.mp3',  C4:   'C4.mp3',  'D#4': 'Ds4.mp3', 'F#4': 'Fs4.mp3',
  A4:   'A4.mp3',  C5:   'C5.mp3',  'D#5': 'Ds5.mp3', 'F#5': 'Fs5.mp3',
  A5:   'A5.mp3',  C6:   'C6.mp3',  'D#6': 'Ds6.mp3', 'F#6': 'Fs6.mp3',
  A6:   'A6.mp3',  C7:   'C7.mp3',  'D#7': 'Ds7.mp3', 'F#7': 'Fs7.mp3',
  A7:   'A7.mp3',  C8:   'C8.mp3',
};

@Injectable({ providedIn: 'root' })
export class AudioService {
  private sampler: Tone.Sampler;
  readonly loaded: Promise<void>;

  constructor() {
    const urls: Record<string, string> = { ...SAMPLES };

    let resolveLoaded!: () => void;
    this.loaded = new Promise(r => (resolveLoaded = r));

    this.sampler = new Tone.Sampler({
      urls,
      baseUrl: SAMPLE_BASE,
      onload: () => resolveLoaded(),
    }).toDestination();
  }

  playNote(noteId: string): void {
    const noteName = this.toToneName(noteId);
    void Tone.start();
    this.sampler.triggerAttack(noteName);
  }

  stopNote(noteId: string): void {
    const noteName = this.toToneName(noteId);
    this.sampler.triggerRelease(noteName);
  }

  stopAll(): void {
    this.sampler.releaseAll();
  }

  private toToneName(noteId: string): string {
    return noteId.replace(/^([A-G])s(\d)$/, '$1#$2');
  }
}