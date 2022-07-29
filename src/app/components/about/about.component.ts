import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/Persona';
import { AboutServiceService } from 'src/app/services/about-service.service';
import { TokenService } from 'src/app/services/token.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //MGCion
 
  //personasList:any=null;
  personasList:Persona[] = [];
  roles!: string[];
  isAdmin = false;

  constructor(public datosPersona: AboutServiceService,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getAllPersons();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
  

  getAllPersons():void{
    this.datosPersona.getAllPersons().subscribe((data:any[])=>{
      console.log(data);
      this.personasList=data;
      //this.color();
     //this.skillColor(<number>this.skillsList.progress);
    })
    }

  //A probar despues:
  borrarPersonaDeLista(personaParaBorrar: Persona): void{
    this.personasList= this.personasList.filter(p => p.id !== personaParaBorrar.id)
    this.datosPersona.deletePersona(this.personasList, personaParaBorrar).subscribe();
  }

  modificarPersona(personaParaEditar:Persona){
    this.personasList= this.personasList.filter(p => p.id !== personaParaEditar.id)
  }


}

