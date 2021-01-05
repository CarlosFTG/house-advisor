import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HouseRegistration } from '../models/house-registration';
import { HouseRegistrationService } from '../services/house-registration.service';


@Component({
  selector: 'app-house-registration-form',
  templateUrl: './house-registration-form.component.html',
  styleUrls: ['./house-registration-form.component.css']
})
export class HouseRegistrationFormComponent implements OnInit {

  registrationHouseForm: FormGroup;
  appreciation : boolean = true;

  constructor(public dialogRef: MatDialogRef<HouseRegistrationFormComponent>, private houseRegistrationService:HouseRegistrationService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registrationHouseForm = new FormGroup({
      'title': new FormControl(),
      'description': new FormControl(),
      'typology': new FormControl(),
    });
  }

  saveHouseRegister(){
    let houseToRegister: HouseRegistration = {
      'id':null,
      'userId':null,
      'appreciation': this.appreciation,
      'title': this.registrationHouseForm.get('title').value,
      'description': this.registrationHouseForm.get('description').value,
      'typology': this.registrationHouseForm.get('typology').value,
    }
    this.houseRegistrationService.saveHouseRegistration(houseToRegister);
  }

  onTabChanged(appreciation){
    if(appreciation.index === 0){
      this.appreciation  = true;
    }else{
      this.appreciation  = false;
    }
  }
}
