export interface PianoKey {
  id: string;
  label: string;
  frequency: number;
  isBlack: boolean;
  keyboardShortcut: string;
  leftOffset?: number;
}

function midiToFreq(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

const WHITE_KEY_TOTAL = 50;
const BLACK_KEY_WIDTH = 30;

function blackLeft(rightWhiteIndex: number): number {
  return rightWhiteIndex * WHITE_KEY_TOTAL - BLACK_KEY_WIDTH / 2;
}

export const PIANO_KEYS: PianoKey[] = [
  { id: 'C4',  label: 'C',  frequency: midiToFreq(60), isBlack: false, keyboardShortcut: 'a' },
  { id: 'D4',  label: 'D',  frequency: midiToFreq(62), isBlack: false, keyboardShortcut: 's' },
  { id: 'E4',  label: 'E',  frequency: midiToFreq(64), isBlack: false, keyboardShortcut: 'd' },
  { id: 'F4',  label: 'F',  frequency: midiToFreq(65), isBlack: false, keyboardShortcut: 'f' },
  { id: 'G4',  label: 'G',  frequency: midiToFreq(67), isBlack: false, keyboardShortcut: 'g' },
  { id: 'A4',  label: 'A',  frequency: midiToFreq(69), isBlack: false, keyboardShortcut: 'h' },
  { id: 'B4',  label: 'B',  frequency: midiToFreq(71), isBlack: false, keyboardShortcut: 'j' },
  { id: 'C5',  label: 'C',  frequency: midiToFreq(72), isBlack: false, keyboardShortcut: 'k' },
  { id: 'D5',  label: 'D',  frequency: midiToFreq(74), isBlack: false, keyboardShortcut: 'l' },
  { id: 'E5',  label: 'E',  frequency: midiToFreq(76), isBlack: false, keyboardShortcut: 'é' },
  { id: 'F5',  label: 'F',  frequency: midiToFreq(77), isBlack: false, keyboardShortcut: 'y' },
  { id: 'G5',  label: 'G',  frequency: midiToFreq(79), isBlack: false, keyboardShortcut: 'x' },
  { id: 'A5',  label: 'A',  frequency: midiToFreq(81), isBlack: false, keyboardShortcut: 'c' },
  { id: 'B5',  label: 'B',  frequency: midiToFreq(83), isBlack: false, keyboardShortcut: 'v' },
  { id: 'Cs4', label: 'C#', frequency: midiToFreq(61), isBlack: true, keyboardShortcut: 'w', leftOffset: blackLeft(1)  },
  { id: 'Ds4', label: 'D#', frequency: midiToFreq(63), isBlack: true, keyboardShortcut: 'e', leftOffset: blackLeft(2)  },
  { id: 'Fs4', label: 'F#', frequency: midiToFreq(66), isBlack: true, keyboardShortcut: 't', leftOffset: blackLeft(4)  },
  { id: 'Gs4', label: 'G#', frequency: midiToFreq(68), isBlack: true, keyboardShortcut: 'z', leftOffset: blackLeft(5)  },
  { id: 'As4', label: 'A#', frequency: midiToFreq(70), isBlack: true, keyboardShortcut: 'u', leftOffset: blackLeft(6)  },
  { id: 'Cs5', label: 'C#', frequency: midiToFreq(73), isBlack: true, keyboardShortcut: 'o', leftOffset: blackLeft(8)  },
  { id: 'Ds5', label: 'D#', frequency: midiToFreq(75), isBlack: true, keyboardShortcut: 'p', leftOffset: blackLeft(9)  },
  { id: 'Fs5', label: 'F#', frequency: midiToFreq(78), isBlack: true, keyboardShortcut: 'b', leftOffset: blackLeft(11) },
  { id: 'Gs5', label: 'G#', frequency: midiToFreq(80), isBlack: true, keyboardShortcut: 'n', leftOffset: blackLeft(12) },
  { id: 'As5', label: 'A#', frequency: midiToFreq(82), isBlack: true, keyboardShortcut: 'm', leftOffset: blackLeft(13) },
];

export const KEY_MAP = new Map(PIANO_KEYS.map(k => [k.keyboardShortcut, k]));
