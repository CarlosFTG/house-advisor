import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSuccessfulComponent } from './auth/register-successful/register-successful.component';
import { RegisterComponent } from './auth/register/register.component';
//import { HouseAdvisorComponent } from './house-advisor/house-advisor/house-advisor.component';
import { MapComponent } from '../app/map/map.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
//  {path:'houseAdvisorComponent', component:HouseAdvisorComponent},
  {path:'map', component:MapComponent},
 {path:'registrationSuccess', component:RegisterSuccessfulComponent},
 {path:'register', component:RegisterComponent},
 {path:'login', component:LoginComponent},
 { path: '',
    redirectTo: '/map',
    pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
