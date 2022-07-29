import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educa } from 'src/app/models/Educa';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';
//import { Educa } from 'src/app/models/Educa';


@Component({
  selector: 'app-education-experience',
  templateUrl: './education-experience.component.html',
  styleUrls: ['./education-experience.component.css']
})
export class EducationExperienceComponent implements OnInit {

roles!: string[];
isAdmin = false;
listEducation:Educa[]=[];
  
  constructor(private educationService:EducationService,
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
    this.educationService.getAllEducation().subscribe((data:any[])=>{
      console.log(data);
      this.listEducation=data;
    })
    }
    borrarEducationDeLista(educationParaBorrar: Educa): void{
      this.listEducation= this.listEducation.filter(p => p.id !== educationParaBorrar.id)
      this.educationService.deleteEducation(this.listEducation, educationParaBorrar).subscribe();
    }

}
