import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

  export class ExperienceComponent implements OnInit {

    roles!: string[];
    isAdmin = false;
    listExperience:Experience[]=[];
      
      constructor(private expeService:ExperienceService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router,
                  private tokenService: TokenService
                  ) { }
    
      ngOnInit(): void {
        this.cargarEducation();
        this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
    
      cargarEducation():void{
        this.expeService.getAllExperience().subscribe((data:any[])=>{
          console.log(data);
          this.listExperience=data;
        })
        }
        borrarExperienceDeLista(experienceParaBorrar: Experience): void{
          this.listExperience= this.listExperience.filter(p => p.id !== experienceParaBorrar.id)
          this.expeService.deleteExperience(this.listExperience, experienceParaBorrar).subscribe();
        }
      }
    


