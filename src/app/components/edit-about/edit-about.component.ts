import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/Persona';
import { AboutServiceService } from 'src/app/services/about-service.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  aboutMe:any;

  constructor(
    private aboutService: AboutServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.getPersona(id).subscribe(
      (data) => {
        this.aboutMe = data;
      });
    //this.router.navigate(['/']);
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.aboutService.updatePersona(id, this.aboutMe!).subscribe(
      /*agregado by me
      (data) => {
        this.aboutMe = data;}
        */
    );
  }

}
