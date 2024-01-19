import { Component, computed, signal } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Auth, signOut } from '@angular/fire/auth';
import { ProjectsService } from '@services/projects.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { getDownloadURL, uploadBytes } from '@angular/fire/storage';
import { Project } from '@models/project';

@Component({
  selector: 'create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(public auth: Auth, public ProjectService: ProjectsService, public Firestore: Firestore,) { }

  name = new FormControl<string>("");
  description = new FormControl<string>("");
  shortDescription = new FormControl<string>("");
  top = new FormControl<boolean>(false);
  position = new FormControl<number>(0);
  files = new FormControl<FileList | undefined>(undefined);
  images = signal<string[]>([]);

  async createProject() {
    let id = this.ProjectService.GenerateSlug(this.name.value!);
    console.log(id, this.name.value!);

    await this.uploadImages(id);

    console.log(this.images());

    var project: Project = {
      id: id,
      name: this.name.value!,
      description: this.description.value!,
      shortDescription: this.shortDescription.value!,
      top: this.top.value!,
      position: this.position.value!,
      images: this.images(),
    }

    await this.ProjectService.CreateNewProject(project);

    this.clearFields();
  }

  async uploadImages(id: string) {
    console.log(this.files.value!);


    if (this.files.value === null) return;

    var files = this.files.value;

    if (files === undefined) return;

    for (let i = 0; i < files.length; i++) {
      let file = files.item(i)!;

      let storage = getStorage();
      console.log(file.name)
      let reference = ref(storage, `projects/${id}/${file.name}`);

      var sd = await uploadBytes(reference, file);
      var sf = await getDownloadURL(sd.ref);

      this.images.set([...this.images(), sf])
      console.log(sf);
    }
  }

  onImagePicked($event: Event) {
    let target = $event.target as HTMLInputElement;

    if (target.files === null) return;

    var files = target.files;

    this.files.setValue(files);
  }

  clearFields() {
    this.name.setValue("");
    this.description.setValue("");
    this.shortDescription.setValue("");
    this.top.setValue(false);
    this.position.setValue(0);
    this.files.setValue(undefined);
  }

  async signOut() {
    await signOut(this.auth);
    window.location.href = "/home";
  }
}
