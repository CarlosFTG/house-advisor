import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CoordinatesModel } from 'src/app/models/coordinates';
import { MapService } from 'src/app/services/map.service';
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
  coords: CoordinatesModel;

  constructor(public dialogRef: MatDialogRef<HouseRegistrationFormComponent>, 
    private houseRegistrationService:HouseRegistrationService,
    private mapService: MapService) { 
      this.mapService.coordinates$.subscribe(coords=>{
        if(coords != null){
          this.coords = coords;
        }
      })
    }

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
      'userId':JSON.parse(sessionStorage.getItem('user')).id,
      'appreciation': this.appreciation,
      'title': this.registrationHouseForm.get('title').value,
      'description': this.registrationHouseForm.get('description').value,
      'typology': this.registrationHouseForm.get('typology').value,
      'address': null,
      'coords':this.coords
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
