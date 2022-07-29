import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educa } from 'src/app/models/Educa';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {

  constructor(private educationService: EducationService, private router: Router) { }
  
  title: string="";
  starts: number=0;
  ends: number=0;
  school: string="";
  status: string="";
  urlimg: string="";

  ngOnInit(): void {
  }

  onCreate(): void {
    const newEducation = new Educa(this.title, this.starts, this.ends, this.school,
      this.status, this.urlimg);

    this.educationService.saveEducation(newEducation).subscribe(
      data => {
        alert("Education creada");
        this.router.navigate(['/']);
      }

    )
  }
}
