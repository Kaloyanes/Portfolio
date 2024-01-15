import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { Project } from '@models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'project-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {
  id = signal("");

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id.set(this.route.snapshot.paramMap.get('id') ?? "");
  }
}
