import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from '../models/customer.inferface';
import { UserI } from '../models/user.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {
  form: FormGroup;
  today:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:CustomerI,private auth: AuthService, private dialogRef:MatDialogRef<AddPlanComponent>) {
    this.form = this.buildForm();
    this.today = new Intl.DateTimeFormat('es-CL',{year:'numeric',month:'long',day:'numeric'}).format(Date.now());
   }
 


  ngOnInit(): void {
  }
  


  private buildForm() {
    return new FormGroup({
      name: new FormControl('', [Validators.required,]),
      price: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required])
    });
  }

  Addnew() {
    const {name, price, duration} = this.form.value;
    const creadtedBy = this.auth.userSvc; //funciona solo fijo
    console.log(creadtedBy)
    const createdAt = this.today;
    this.dialogRef.close({...this.data,name,price,duration,creadtedBy,createdAt})
  }
  

}
