import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, private router: Router) { }
  
  name:string="";
  aboutProject:string="";
  urlimg:string="";
  

  ngOnInit(): void {
  }

  onCreate(): void {
    const newProject = new Project(this.name,this.aboutProject, this.urlimg);

    this.projectService.saveProject(newProject).subscribe(
      data => {
        alert("Proyecto creado");
        this.router.navigate(['/']);
      }

    )
  }
}
