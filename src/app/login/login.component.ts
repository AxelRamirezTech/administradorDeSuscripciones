import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup , FormArray, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { USERS } from '../mock/mock-useres';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  auth= USERS;
  form: FormGroup;

  constructor(private _snackBar: MatSnackBar, private router: Router) {
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
    const {email,password} = this.form.value;
    if(email==='a@a.a' && password==='a'){
      this.fakeAccess()
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


  fakeAccess(){
  this.router.navigate(['dashboard'])
  }












}