import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { AboutServiceService } from 'src/app/services/about-service.service';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.css']
})
export class NewAboutComponent implements OnInit {

  constructor( private aboutService:AboutServiceService, 
               private router:Router) { }
  
  nombre:string="";
  apellido:string="";
  fechaNac:string="";
  seniority:string="";
  urlimage:string="";
  company:string="";
  position:string="";
  abouts:string="";
  
  ngOnInit(): void {
  }

  onCreate(): void  {
  const personNew=new Persona(this.nombre,this.apellido,this.fechaNac,this.seniority,
    this.urlimage,this.company,this.position,this.abouts);

  this.aboutService.savePersona(personNew).subscribe!(
    data => {
      alert("Acerca de mi creado")!;
      this.router.navigate([''])!;
      }
    )
    alert("Acerca de mi creado")!;
    this.router.navigate(['']);
  }
  
}
