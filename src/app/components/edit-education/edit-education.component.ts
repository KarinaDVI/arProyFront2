import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educa } from 'src/app/models/Educa';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})


export class EditEducationComponent implements OnInit {

  
  listEducation: Educa | undefined;

  constructor(
    private eduService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduService.getEducation(id).subscribe(
      data => {
        this.listEducation= data;
      });
      //this.router.navigate(['/']);
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduService.updateEducation(id, this.listEducation!).subscribe(
      data => {
        alert("Educación Actualizada");
        this.router.navigate(['/']);
      }, err =>{
         alert("Error al modificar educación");
         this.router.navigate(['']);
      }
    )
  }
}
