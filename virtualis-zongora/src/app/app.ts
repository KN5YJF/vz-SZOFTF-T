import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PianoKeyboardComponent } from './components/piano-keyboard/piano-keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, PianoKeyboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
