import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';
//import { ActivatedRoute, Router } from '@angular/router';
import { SkillServiceService } from 'src/app/services/skill-service.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  radius:number=100;
  modalSwitch: boolean=false;
  skillsList:Skill[]=[];
  roles!: string[];
  isAdmin = false;

  constructor(private skillsDataService: SkillServiceService,
              private tokenService: TokenService 
              ) { }
    
  ngOnInit():void {

    this.cargarSkill();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
   
  outerStrokeColor:string=this.color();

  skillColor(progress:number):string{
    if(progress!==0){
      this.outerStrokeColor=this.color();
    }return this.outerStrokeColor
  }

cargarSkill():void{
  this.skillsDataService.getAllSkill().subscribe((data:any[])=>{
    console.log(data);
    this.skillsList=data;
  })
  }

  borrarSkillDeLista(skillParaBorrar: Skill): void{
    this.skillsList= this.skillsList.filter(p => p.id !== skillParaBorrar.id)
    this.skillsDataService.deleteSkill(this.skillsList, skillParaBorrar).subscribe();
  }

  
  /*
  modificarSkill(skillParaEditar:Skill){
    this.skillEdit= this.skillsList.filter(p => p.id !== skillParaEditar.id)
    this.skillsDataService.updateSkill( skillParaEditar.id!,this.skillEdit).subscribe();
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillsDataService.updateSkill(id, this.listSkill!).subscribe();
    
  }*/

  openModal(){
    this.modalSwitch = true;

  }

  //Dejar esta función para color picker en caso de necesidad
  color():string{
    let bg_colour:string="";
    bg_colour= Math.floor(Math.random() * 16777215).toString(16);
      bg_colour = "#" + ("000000" + bg_colour).slice(-6);
      console.log(bg_colour);
      return bg_colour;
      
    }
}

