import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperBarComponent } from './upper-bar/upper-bar.component';
import { MaterialModule } from '../material.module';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [UpperBarComponent],
  imports: [
    CommonModule, MaterialModule, AuthModule
  ],
  exports:[UpperBarComponent]
})
export class UpperBarModule { }
