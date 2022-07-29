import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projectList:Project[]=[];
  roles!: string[];
  isAdmin = false;

  constructor(private projectService: ProjectService,
              private tokenService: TokenService) { }
    
  ngOnInit():void {
    this.cargarProject();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

cargarProject():void{
  this.projectService.getAllProject().subscribe((data:any[])=>{
    console.log(data);
    this.projectList=data;
  })
  }

  borrarProjectDeLista(projectParaBorrar: Project): void{
    this.projectList= this.projectList.filter(p => p.id !== projectParaBorrar.id)
    this.projectService.deleteProject(this.projectList, projectParaBorrar).subscribe();
  }

}
