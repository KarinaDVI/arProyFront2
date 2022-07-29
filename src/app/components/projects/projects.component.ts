import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projectList:Project[]=[];

  constructor(private projectService: ProjectService) { }
    
  ngOnInit():void {
    this.cargarProject();

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
