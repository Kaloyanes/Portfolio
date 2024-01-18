import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAuthGuard } from './guards/CreateAuthGuard.guard';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { LoginAuthGuard } from './guards/LoginAuthGuard.guard';

function GenerateTitle(title: string): string {
  if (title.trim() == "") return "Kaloyanes";

  return `Kaloyanes - ${title}`
}

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', title: GenerateTitle("") },
  { path: 'home', redirectTo: '', pathMatch: 'full', },
  {
    path: 'create', component: CreateComponent, pathMatch: 'full', canActivate: [
      CreateAuthGuard
    ],
    title: GenerateTitle("Create a new project")
  },
  {
    path: 'login', component: LoginComponent, pathMatch: 'full',
    canActivate: [
      LoginAuthGuard
    ],
    title: GenerateTitle("Login")
  },
  { path: 'projects', component: AllProjectsComponent, pathMatch: 'full', title: GenerateTitle("Projects") },
  { path: 'project', redirectTo: "projects", pathMatch: 'full', },
  { path: 'project/:id', component: ProjectDetailsComponent, pathMatch: 'full', title: GenerateTitle("Project") },
  { path: 'projects/:id', redirectTo: "project/:id", pathMatch: 'full', },
  { path: "**", redirectTo: "", pathMatch: "full" },

];
