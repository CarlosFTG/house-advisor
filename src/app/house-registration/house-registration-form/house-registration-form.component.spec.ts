import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseRegistrationFormComponent } from './house-registration-form.component';

describe('HouseRegistrationFormComponent', () => {
  let component: HouseRegistrationFormComponent;
  let fixture: ComponentFixture<HouseRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
