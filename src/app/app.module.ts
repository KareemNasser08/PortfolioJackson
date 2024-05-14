import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SidebarComponent,
    ServicesComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent,
    NotFoundComponent,
    GraphicdesignComponent,
    WebdesignComponent,
    SoftwareComponent,
    AppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
