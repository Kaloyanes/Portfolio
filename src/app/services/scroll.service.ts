import { Injectable } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import { easeOutCubic } from '@utils/Easings';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() {
    const lenis = new Lenis({
      wrapper: document.body as HTMLElement,
      easing: easeOutCubic,
      smoothWheel: true,
      syncTouch: true,
      duration: 0.3,
      normalizeWheel: true,
      wheelMultiplier: 0.8,
      lerp: 0.5
    });

    console.log("lenis created");
    console.log(lenis);

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }


}
