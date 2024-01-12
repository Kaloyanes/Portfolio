import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'Portfolio';

  fs = signal("fs");

  constructor(private firestore: Firestore) { }

  async ngOnInit() {

  }
}
