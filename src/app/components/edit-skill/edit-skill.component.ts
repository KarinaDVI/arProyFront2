import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/Skill';
import { SkillServiceService } from 'src/app/services/skill-service.service';


@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  //skill: Skill|any = null;
  listSkill: Skill | undefined;
  

  constructor(
    private skillService: SkillServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.getSkill(id).subscribe(
      (data) => {
        this.listSkill=data;
      });
  }
      
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.updateSkill(id, this.listSkill!).subscribe(
      data => {
        alert("Modificado con éxito");
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar skills");
         this.router.navigate(['']);
      }
    )
  }
  
}
