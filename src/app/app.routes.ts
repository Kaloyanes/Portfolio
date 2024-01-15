import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAuthGuard } from './guards/CreateAuthGuard.guard';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'create', component: CreateComponent, pathMatch: 'full', canActivate: [
      CreateAuthGuard
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full', },
  { path: 'project/:id', component: ProjectDetailsComponent, pathMatch: 'full', },
  { path: "**", redirectTo: "", pathMatch: "full" },

];
