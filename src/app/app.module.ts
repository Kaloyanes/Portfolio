import { TuiRootModule, TuiDialogModule, TuiAlertModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { AboutShortComponent } from './components/about-short/about-short.component';
import { HeaderButtonsComponent } from './components/header-buttons/header-buttons.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { AwardsComponent } from './sections/awards/awards.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { ScrollToTopFabComponent } from './components/scroll-to-top-fab/scroll-to-top-fab.component';
import { SkillComponent } from './components/skill/skill.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatExpansionModule } from '@angular/material/expansion';
import { ProjectCardComponent } from './components/project-card/project-card.component';



@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AboutShortComponent,
    HeaderButtonsComponent,
    EducationComponent,
    SkillsComponent,
    AwardsComponent,
    ProjectsComponent,
    ContactMeComponent,
    ScrollToTopFabComponent,
    SkillComponent,
    ProjectPageComponent,
    HomeComponent,
    NotFoundComponent,
    ProjectCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
