import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, throwError } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import Swal from 'sweetalert2'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;

  

  constructor(private authService :  AuthService, public dialogRef: MatDialogRef<LoginComponent>) { 
    this.user = new User();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'name': new FormControl(),
      'password': new FormControl(),
    });
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

  login(){
    let registerParams = {
      'email': this.loginForm.get('name').value,
      'password': this.loginForm.get('password').value
    }

    this.user.name = this.loginForm.get('name').value;
    this.user.password = this.loginForm.get('password').value

    let response =this.authService.doLoginUser(this.user).subscribe(
      res=>{
        console.log(res)
        //@ts-ignore
        let payload = JSON.parse(response.acces_token.split(".")[1]);
        this.authService.saveUser(payload);
        this.authService.saveToken(payload);
        this.dialogRef.close();
        Swal.fire('Login correcto', 'success');
      },
      err=>{
        //fake token until backend is fixed
        
        let payload = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJpZCI6MX0.nAdWVTMzg4nt_7mBFbz9DVkHqmwW2qwSiXb7EJZjPSk'
        
        //this.handleError(err);
        console.log('kj'+payload)
        this.authService.saveUser(payload);
        this.authService.saveToken(payload);
        this.dialogRef.close();//remove when backend login fixed
        //Swal.fire('Login erróneo', 'error');
        Swal.fire('Login correcto', 'success');
        this.authService.notifyLogin(true);
      }
    );
    
  }

  

}
