import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, computed, signal } from '@angular/core';
import { collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { ProjectsService } from '@services/projects.service';
import { ProjectCardComponent } from "@components/project-card/project-card.component";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { animate, stagger, timeline } from 'motion';
import { easeOutCubic } from '@utils/Easings';


@Component({
  selector: 'projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ProjectCardComponent
  ]
})
export class ProjectsComponent {

  x = computed(() => {
    if (this.projectsService.sortedProjects().length > 0) {
      this.animation();
    }
  });

  constructor(public projectsService: ProjectsService) { }

  animation() {
    var elementsToAnimate = document.querySelectorAll('#projectsTitle, #seeMoreButton, .project-card');

    animate(elementsToAnimate, {
      opacity: [0, 1],
      scale: [0, 1],
      // x: [325, 0],
      y: [50, 0],
    }, {
      delay: stagger(0.1),
      duration: 0.3,
      easing: easeOutCubic,
    });
  }
}
