import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup , FormArray, Validators} from '@angular/forms';
import { USERS } from '../mock/mock-users';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  USERS= USERS;

  form: FormGroup;

  constructor(private _snackBar: MatSnackBar,private auth: AuthService, private router: Router) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
  }
  

  newUser(){
    const {email, password, repeatPassword} = this.form.value;
    if(password === repeatPassword && this.auth.isEmailDisponible(email)){
        this.auth.addNewUser(email,password)
        this.registeredMessage()
        this.redirect()
      }
    else {
      this.error()
    }
}
  
  registeredMessage() {
    this.form.reset();
    this._snackBar.open('Usuario registrado','',{
      duration: 3000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  redirect(){
    this.router.navigate([''])
    }
  
  error(){
    this._snackBar.open('Las contraseñas deben ser iguales o el usuario ya esta registado','',{
    duration: 3000,
    horizontalPosition:'center',
    verticalPosition:'bottom'
  })


  }

  private buildForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required])
    });

  }
}