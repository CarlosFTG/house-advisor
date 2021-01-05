import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  name: string;
  surname: string;
  email: string;
  password: string;
  password2: string;

  constructor(private authService :  AuthService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.registerForm = new FormGroup({
      'name': new FormControl(),
      'surname': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
      'password2': new FormControl(),
    });
  }

  registerUser(){

    let registerParams = {
      'name': this.registerForm.get('name').value,
      'surname': this.registerForm.get('surname').value,
      'email': this.registerForm.get('email').value,
      'password': this.registerForm.get('password').value
    }

    if(this.validateEmail(registerParams.email) && this.validatePassword(registerParams.password, this.registerForm.get('password2').value)){
      this.authService.registerUser(registerParams);
    }
  }

  validateEmail(email: string){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validatePassword(password: string, password2: string){
    if(password === password2){
    //   const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    // let test = re.test(String(password).toLowerCase());
    // console.log(test)
    return true;
    }else{
      return false;
    }
  }
  
}
