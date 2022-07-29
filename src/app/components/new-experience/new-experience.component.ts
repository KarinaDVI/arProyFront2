import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {


  constructor(private expeService: ExperienceService, private router: Router) { }
  
  position:string="";
  company:string="";
  starts:number=0;
  ends:number=0;
  urlimg:string="";
  mode:string="";

  ngOnInit(): void {
  }

  onCreate(): void {
    const newExperience = new Experience(this.position,this.company, this.starts, this.ends, 
      this.urlimg, this.mode);

    this.expeService.saveExperience(newExperience).subscribe(
      data => {
        alert("Education creada");
        this.router.navigate(['/']);
      }

    )
  }
}
