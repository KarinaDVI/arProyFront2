import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jwt.DtoComponent } from './jwt.dto.component';

describe('Jwt.DtoComponent', () => {
  let component: Jwt.DtoComponent;
  let fixture: ComponentFixture<Jwt.DtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jwt.DtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jwt.DtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
