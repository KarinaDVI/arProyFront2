import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {

  //skill: Skill|any = null;
  listExperience: Experience | undefined;
  /*
  id:string=0;
  title:string="";
  yearBegin:string="";
  yearEnd:string="";
  school:string="";
  status="";
*/

  constructor(
    private expeService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expeService.getExperience(id).subscribe(
      data => {
        this.listExperience = data;
      }, err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expeService.updateExperience(id, this.listExperience!).subscribe(
      data => {
        alert("Experiencia Actualizada");
        this.router.navigate(['/']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
