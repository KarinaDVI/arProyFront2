import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationExperienceComponent } 
from './components/education-experience/education-experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } 
from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { NewAboutComponent } from './components/new-about/new-about.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { NewEducationComponent } from './components/new-education/new-education.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './components/new-experience/new-experience.component';
import { EditProjetcComponent } from './components/edit-projetc/edit-projetc.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { RegistroComponent } from './components/auth/registro.component';
import { LoginComponent } from './components/auth/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    LogoApComponent,
    AboutComponent,
    ExperienceComponent,
    EducationExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    EditAboutComponent,
    NewAboutComponent,
    NewSkillComponent,
    EditSkillComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditExperienceComponent,
    NewExperienceComponent,
    EditProjetcComponent,
    NewProjectComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    
  ],
  providers: [AuthService,
  {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
