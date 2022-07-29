import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

  export class ExperienceComponent implements OnInit {

    listExperience:Experience[]=[];
      
      constructor(private expeService:ExperienceService,
                  private activatedRoute: ActivatedRoute,
                  private router: Router
                  ) { }
      
      
      //educationList:any;
      //educa = new Educa("2008","#","EEMNº2 BR","finalizado");
    
      ngOnInit(): void {
        this.cargarEducation();
    
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
    


