import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup , FormArray, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { USERS } from '../mock/mock-users';
import { AuthService } from '../services/auth.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  USERS= USERS;
  form: FormGroup;
 

  constructor(private _snackBar: MatSnackBar, private router: Router, private auth: AuthService) {
    this.form = this.buildForm();
  }

  ngOnInit() {
  }

  private buildForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    const sendEmail = this.form.value.email;
    this.auth.receiveEmail(sendEmail)
    const {email, password} = this.form.value;
    this.auth.checkUser(email,password)
    if(this.auth.isUserLoggedIn == true){
      this.access()
    }
    else{
      this.error()
    }
  }


  error() {
    this._snackBar.open('Email o Contraseña incorrecta','',{
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }


  access(){
  this.router.navigate(['dashboard'])
  }

 











}