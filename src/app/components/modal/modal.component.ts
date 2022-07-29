import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/Skill';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() skill:Skill|any=null;
  constructor() { }

  ngOnInit(): void {
    
  }

}
