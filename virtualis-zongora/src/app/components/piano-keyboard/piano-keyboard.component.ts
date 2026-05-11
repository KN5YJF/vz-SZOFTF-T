import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { PIANO_KEYS, KEY_MAP, PianoKey } from '../../models/piano-key.model';

@Component({
  selector: 'app-piano-keyboard',
  standalone: true,
  imports: [],
  templateUrl: './piano-keyboard.component.html',
  styleUrl: './piano-keyboard.component.scss',
})
export class PianoKeyboardComponent implements OnInit, OnDestroy {
  readonly whiteKeys: PianoKey[] = PIANO_KEYS.filter(k => !k.isBlack);
  readonly blackKeys: PianoKey[] = PIANO_KEYS.filter(k => k.isBlack);

  activeKeys = signal<Set<string>>(new Set());
  isLoading = signal(true);

  constructor(private audio: AudioService) {}

  ngOnInit(): void {
    this.audio.loaded.then(() => this.isLoading.set(false));
  }

  ngOnDestroy(): void {
    this.audio.stopAll();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.repeat || this.isLoading()) return;
    const key = KEY_MAP.get(event.key.toLowerCase());
    if (key) {
      event.preventDefault();
      this.pressKey(key);
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (this.isLoading()) return;
    const key = KEY_MAP.get(event.key.toLowerCase());
    if (key) this.releaseKey(key);
  }

  onMouseDown(key: PianoKey, event: MouseEvent): void {
    if (this.isLoading()) return;
    event.stopPropagation();
    this.pressKey(key);
  }

  onMouseUp(key: PianoKey): void {
    this.releaseKey(key);
  }

  onMouseLeave(key: PianoKey): void {
    if (this.isActive(key.id)) this.releaseKey(key);
  }

  pressKey(key: PianoKey): void {
    if (this.isActive(key.id)) return;

    this.audio.playNote(key.id);
    this.activeKeys.update(set => new Set(set).add(key.id));
  }

  releaseKey(key: PianoKey): void {
    if (!this.isActive(key.id)) return;

    this.audio.stopNote(key.id);
    this.activeKeys.update(set => {
      const next = new Set(set);
      next.delete(key.id);
      return next;
    });
  }

  isActive(id: string): boolean {
    return this.activeKeys().has(id);
  }
}