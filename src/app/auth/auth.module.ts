import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RegisterSuccessfulComponent } from './register-successful/register-successful.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [RegisterComponent, RegisterSuccessfulComponent, LoginComponent],
  imports: [
    CommonModule,MaterialModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,FormsModule
  ],
  exports: [
    RegisterComponent, LoginComponent
  ]
})
export class AuthModule { }
