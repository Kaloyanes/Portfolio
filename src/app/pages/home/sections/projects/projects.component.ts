import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { ProjectsService } from '@services/projects.service';
import { ProjectCardComponent } from "@components/project-card/project-card.component";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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

  constructor(public projectsService: ProjectsService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing hello world hello world hello world hello world hello world hello world hello world.
    this.projectsService.GetProjects();
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.


  }
}
