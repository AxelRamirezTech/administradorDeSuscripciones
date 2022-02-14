import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanI } from '../models/customer.inferface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-edit-plans',
  templateUrl: './edit-plans.component.html',
  styleUrls: ['./edit-plans.component.scss']
})
export class EditPlansComponent implements OnInit {
  form: FormGroup;
  today:string;


  constructor(@Inject(MAT_DIALOG_DATA) public data:PlanI, private dialogRef:MatDialogRef<EditPlansComponent>,private auth: AuthService) {
    this.form = this.buildForm();
    this.today = new Intl.DateTimeFormat('es-CL',{year:'numeric',month:'long',day:'numeric'}).format(Date.now());
   }

 


  ngOnInit(): void {
  }
  


  private buildForm() {
    return new FormGroup({
      name: new FormControl(this.data.name, [Validators.required,]),
      price: new FormControl(this.data.price, [Validators.required]),
      duration: new FormControl(this.data.duration, [Validators.required])
    });
  }
  


  editPlans(){
    const {name, price, duration} = this.form.value;
    const updatedBy = this.auth.userSvc;
    const updatedAt = this.today;
    this.dialogRef.close({...this.data,name, price,duration,updatedBy,updatedAt})
  
  }
}
