import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-projetc',
  templateUrl: './edit-projetc.component.html',
  styleUrls: ['./edit-projetc.component.css']
})
export class EditProjetcComponent implements OnInit {

  listProject: Project | undefined;
  
  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.getProject(id).subscribe(
      (data) => {
        this.listProject = data;
      });
      //this.router.navigate(['/']);
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.updateProject(id, this.listProject!).subscribe(
      
    );
  }
}

