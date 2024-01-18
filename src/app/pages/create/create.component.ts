import { Component, computed, signal } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Auth, signOut } from '@angular/fire/auth';
import { ProjectsService } from '@services/projects.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Project } from '@models/project';
import { Storage, uploadBytes } from '@angular/fire/storage';

@Component({
  selector: 'create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(public auth: Auth, public ProjectService: ProjectsService, public Firestore: Firestore, public Storage: Storage,) { }

  name = new FormControl<string>("");
  description = new FormControl<string>("");
  shortDescription = new FormControl<string>("");
  top = new FormControl<boolean>(false);
  position = new FormControl<number>(0);
  files = new FormControl<File[]>([]);
  images = signal<string[]>([]);

  async createProject() {
    let id = this.ProjectService.GenerateSlug(this.name.value!);
    console.log(id, this.name.value!);

  }

  async signOut() {
    await signOut(this.auth);
    window.location.href = "/home";
  }



}
