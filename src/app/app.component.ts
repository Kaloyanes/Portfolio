import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { FaviconService } from '@services/favicon.service';
import { ScrollService } from '@services/scroll.service';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';

@Component({
  selector: 'root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet]
})
export class AppComponent {

  constructor(private firestore: Firestore, public faviconService: FaviconService, public scrollService: ScrollService) {
    inject({ mode: 'auto' });
    injectSpeedInsights({ framework: 'angular' })
  }


}
