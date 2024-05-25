import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [{path:'app-home', component:HomeComponent, title:"Home"},
{path:'app-education', component:EducationComponent, title:"Education"},
{path:'app-experience', component: ExperienceComponent, title:"Experience"}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
