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
    SkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
