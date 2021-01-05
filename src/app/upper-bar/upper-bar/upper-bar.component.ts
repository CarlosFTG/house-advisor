import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';

@Component({
  selector: 'app-upper-bar',
  templateUrl: './upper-bar.component.html',
  styleUrls: ['./upper-bar.component.css']
})
export class UpperBarComponent implements OnInit {

  login: boolean = false;
  userName: string = null ;

  constructor(public dialog: MatDialog, private authService: AuthService, iconRegistry: MatIconRegistry, 
    sanitizer: DomSanitizer, private _snackBar: MatSnackBar) {
    this.authService.notifyLogin$.subscribe(login=>{
      if(login !=null){
        this.login = login;
        this.userName = JSON.parse(sessionStorage.getItem('user')).name;
      }
    })

    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/iconmonstr-plus-3.svg'));
   }

  ngOnInit(): void {
  }

  openRegister(){
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '250px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.animal = result;
    });
  }

  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.animal = result;
    });
  }

  logOut(){
    this.authService.logOut();
    this.userName=null;
  }

  addRegister(){
    this._snackBar.open('Haga click en el punto del registro', 'test', {
      duration: 2000,
    });
  }
}
