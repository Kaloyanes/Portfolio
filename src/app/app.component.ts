import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { FaviconService } from '@services/favicon.service';

@Component({
  selector: 'root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {

  constructor(private firestore: Firestore, public faviconService: FaviconService) { }


}
