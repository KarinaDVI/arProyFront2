import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/Skill';
import { SkillServiceService } from 'src/app/services/skill-service.service';


@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  constructor(private skillService:SkillServiceService,
    private router: Router) { }
    
  name: string = "";
  progress: number = 0;
  confirms: number = 0;
  confirmsNames: string = "";
  outerStrokeColor: string = "";
  innerStrokeColor: string = "";
  imageSrc: string = "";
  ngOnInit(): void {
  }
  onCreate(): void {
    const newSkill = new Skill(this.name,this.progress,this.confirms,
      this.confirmsNames,this.imageSrc,this.outerStrokeColor,this.innerStrokeColor);

    this.skillService.saveSkill(newSkill).subscribe(
      data => {
        alert("About creado");
        this.router.navigate(['']);
      }

    )
  }

 

}

