import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { NewAboutComponent } from './components/new-about/new-about.component';
import { NewEducationComponent } from './components/new-education/new-education.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';
import { EditExperienceComponent } from './components/edit-experience/edit-experience.component';
import { NewExperienceComponent } from './components/new-experience/new-experience.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { EditProjetcComponent } from './components/edit-projetc/edit-projetc.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/auth/login.component';
import { RegistroComponent } from './components/auth/registro.component';
import { EditEducationComponent } from './components/edit-education/edit-education.component';
//import { PortfolioComponent } from './components/portfolio/portfolio.component';



const routes: Routes = [

  //{path:'portfolio',component:PortfolioComponent},// canActivate:[GuardGuard]},
  

  
  {path:'',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path: 'registro',component: RegistroComponent},
  {path:'aboutNuevo',component: NewAboutComponent},
  {path:'aboutEdit/:id',component: EditAboutComponent},
  {path:'skillNuevo',component: NewSkillComponent},
  {path:'skillEdit/:id',component: EditSkillComponent},
  {path:'educationNuevo',component: NewEducationComponent},
  {path:'educationEdit/:id',component: EditEducationComponent},
  {path:'experienceEdit/:id',component: EditExperienceComponent},
  {path:'experienceNuevo',component: NewExperienceComponent},
  {path:'projectNuevo',component: NewProjectComponent},
  {path:'projectEdit/:id',component: EditProjetcComponent},
  //{path:'experienceEdit/:id',component: EditSkillComponent},
  //{path:'',redirectTo:'portfolio',pathMatch:'full'},
  //Original
  //{path:'',redirectTo:'login',pathMatch:'full'}//,
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[NewAboutComponent,EditAboutComponent,NewSkillComponent]
