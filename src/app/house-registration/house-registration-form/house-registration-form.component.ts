import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-house-registration-form',
  templateUrl: './house-registration-form.component.html',
  styleUrls: ['./house-registration-form.component.css']
})
export class HouseRegistrationFormComponent implements OnInit {

  registrationHouseForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<HouseRegistrationFormComponent>) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registrationHouseForm = new FormGroup({
      'title': new FormControl(),
      'description': new FormControl(),
    });
  }

  saveHouseRegister(){

  }
}
