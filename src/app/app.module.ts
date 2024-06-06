import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { SmoothScrollDirective } from './smooth-scroll.directive';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { HackathonsComponent } from './hackathons/hackathons.component'

@NgModule({
  declarations: [
    AppComponent,
    SmoothScrollDirective,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExperienceComponent,
    WorkComponent,
    ProjectsComponent,
    EducationComponent,
    HackathonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports: [SmoothScrollDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
