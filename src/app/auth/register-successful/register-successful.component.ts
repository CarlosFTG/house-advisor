import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, throwError, of, BehaviorSubject,interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-register-successful',
  templateUrl: './register-successful.component.html',
  styleUrls: ['./register-successful.component.css']
})
export class RegisterSuccessfulComponent implements OnInit {

  subscription: Subscription;

  constructor(private router: Router) { 
    const source = interval(5000);
    this.subscription = source.subscribe(val => this.redirect());
  }

  ngOnInit(): void {
  }

  redirect(){
    this.router.navigate(['login']);
  }
}
