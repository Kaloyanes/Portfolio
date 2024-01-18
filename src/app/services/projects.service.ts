import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  generateSlug(projectName: string): string {
    return projectName.toLowerCase().trim().replace(" ", "-");
  }

}
