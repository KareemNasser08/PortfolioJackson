import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { EducationComponent } from './Components/education/education.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { WorkComponent } from './Components/work/work.component';
import { BlogComponent } from './Components/blog/blog.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { GraphicdesignComponent } from './Components/graphicdesign/graphicdesign.component';
import { WebdesignComponent } from './Components/webdesign/webdesign.component';
import { SoftwareComponent } from './Components/software/software.component';
import { AppsComponent } from './Components/apps/apps.component';


const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'work', component: WorkComponent, children:[
    {path:'',redirectTo:'graphicdesign',pathMatch:'full'},
    {path:'graphicdesign',component:GraphicdesignComponent},
    {path:'webdesign',component:WebdesignComponent},
    {path:'software',component:SoftwareComponent},
    {path:'apps',component:AppsComponent},
  ]},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
