import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { AuthModule } from './auth/auth.module';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { UpperBarModule } from './upper-bar/upper-bar.module';
import { MapComponent } from './map/map.component';
import { HouseRegistrationModule } from './house-registration/house-registration.module';
//import { HouseAdvisorModule } from './house-advisor/house-advisor.module';

@NgModule({
  declarations: [
    AppComponent, MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MaterialModule,
    AuthModule,
    HttpClientModule,
    //HouseAdvisorModule,
    UpperBarModule,
    HouseRegistrationModule
  ],
  providers: [
    ,],
  bootstrap: [AppComponent]
})
export class AppModule { }
