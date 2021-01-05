import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseRegistrationFormComponent } from './house-registration-form/house-registration-form.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [HouseRegistrationFormComponent],
  imports: [
    CommonModule, MaterialModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,FormsModule
  ],
  exports: [HouseRegistrationFormComponent]
})
export class HouseRegistrationModule { }
