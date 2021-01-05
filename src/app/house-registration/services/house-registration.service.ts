import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseRegistrationService {

  constructor(private httpClient: HttpClient) { }

  saveHouseRegistration(){

    const urlEndpoint = 'http://localhost:8080/api/houseAdvisorService/saveHouseRegistration';

    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    // params.set('username', loginUser.name);
    // params.set('password', loginUser.password);
    // console.log(params.toString());

    // this.httpClient.post('')
  }
}
