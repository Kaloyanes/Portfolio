import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/AuthGuard.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  {
    path: 'create', component: CreateComponent, pathMatch: 'full', canActivate: [
      AuthGuard
    ]
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full', }

];
