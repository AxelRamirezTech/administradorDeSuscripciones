import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup , FormArray, Validators} from '@angular/forms';
import { DataService } from '../service/data.service';
import { AuthI } from '../interface/auth.interface';
import { USERS } from '../mock/mock-useres';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  auth = USERS;
  form: FormGroup;
  constructor(private dataSvc: DataService,private _snackBar: MatSnackBar, private router: Router,) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {

  }
  
  newUser(){
    const {email,password} = this.form.value;
    const newUser = {email ,password};
    console.log(newUser);
    this.auth.push(newUser);
  }


  correctVerification() {
    this._snackBar.open('Se ha creado un usuario correctamente','',{
      duration: 7000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  private buildForm() {
    return new FormGroup({
      email: new FormControl('', [Validators.email,Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  }
}