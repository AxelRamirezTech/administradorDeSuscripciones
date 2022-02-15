import { Injectable } from '@angular/core';
import { USERS } from '../mock/mock-users';
import { LoginComponent } from '../login/login.component';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userSvc = '';
  constructor(private _snackBar: MatSnackBar) { }
    users= [...USERS];
    isUserLoggedIn= false; 


  addNewUser(email:string, password:string){
    const newUser = {email ,password}
    this.users.push(newUser);
 
  }

  checkUser(email:string, password:string){
    const found = this.users.find(user => user.email === email);
    if(found?.password === password){
      this.isUserLoggedIn= true;
    }
  }

  isEmailDisponible(email:string){
    const found = this.users.find(user => user.email === email);
    if (found?.email === email) {
      return false;
    }
    return true;
  }

  receiveEmail(userReceived:string){ 
      this.userSvc = userReceived;
  }

  errorEmailAndPass(email:string){
    const found = this.users.find(user => user.email === email);
    if (found?.email === email) {
      this._snackBar.open('El usuario ya esta registado','',{
        duration: 3000,
        horizontalPosition:'center',
        verticalPosition:'bottom'})
    }
    else{
      this._snackBar.open('La contraseña deben ser iguales','',{
        duration: 3000,
        horizontalPosition:'center',
        verticalPosition:'bottom'})
    }

  }




}
