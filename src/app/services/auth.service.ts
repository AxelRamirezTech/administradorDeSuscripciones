import { Injectable } from '@angular/core';
import { USERS } from '../mock/mock-users';
import { LoginComponent } from '../login/login.component';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userSvc = '';
  constructor() { }
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





}
