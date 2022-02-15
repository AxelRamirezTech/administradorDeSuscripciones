import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  unamePattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/";

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
      this.auth.errorEmailAndPass(email)
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
  
    messagePassword(){
      this._snackBar.open('La contraseña debe tener entre 8 a 100 caracteres, una mayuscula, una minuscula y al menos 1 numero','',{
      duration: 5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'})
  }


  

  private buildForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('',Validators.required),
    });
  }
}