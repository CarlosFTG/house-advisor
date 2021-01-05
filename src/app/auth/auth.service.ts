import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { Observable, throwError, of, BehaviorSubject,interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User;

  private _token: String;

  private loginOut = new BehaviorSubject<boolean>(null);
  notifyLogin$ = this.loginOut.asObservable();


  constructor(private httpClient: HttpClient,private router: Router) {
    
   }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  registerUser(registerUser){
    let  headers = new HttpHeaders({'Accept': 'application/json' ,'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    let userpojo = {
      'name': registerUser.name,
      'surname': registerUser.surname,
      'email': registerUser.email,
      'password': registerUser.password
    }
    
    this.httpClient.post('http://localhost:8080/api/houseAdvisorService/registerUser',userpojo 
      ).subscribe(
        res=>{
          //@ts-ignore
          if(res.success){
            this.router.navigate(['registrationSuccess']);
          }
        },
        err =>{
          console.log(err)
        }
      )
  }


  doLoginUser(loginUser: User):Observable<any>{

    const urlEndpoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', loginUser.name);
    params.set('password', loginUser.password);
    console.log(params.toString());
    return this.httpClient.post<any>(urlEndpoint, params.toString(), { headers: httpHeaders });
      
  }

  //saves user
  saveUser(accesToken: string): void{
    
    let payload = this.getPayLoad(accesToken);
    this._user = new User();
    this._user.id = payload.id;
    this._user.name = payload.name;
    this._user.roles = payload.autorities;
    sessionStorage.setItem('user',JSON.stringify(this._user));
  }

  //saves user´s token
  saveToken(accesToken: string): void{
    this._token = accesToken;
    sessionStorage.setItem('token',accesToken);
  }

  getPayLoad(accesToken: string):any{
    if(accesToken !== null){
      return JSON.parse(atob(accesToken.split(".")[1]));
    }
  }

  notifyLogin(login: boolean) {
    this.loginOut.next(login);
  }

  logOut(){
    this._user = null;
    this._token = null;
    this.notifyLogin(false);
    sessionStorage.clear();
  }
}
