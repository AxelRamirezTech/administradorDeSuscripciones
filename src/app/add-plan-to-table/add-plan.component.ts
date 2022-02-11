import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from '../models/customer.inferface';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent implements OnInit {
  form: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data:CustomerI, private dialogRef:MatDialogRef<AddPlanComponent>) {
    this.form = this.buildForm();
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
    this.dialogRef.close({...this.data,name,price,duration})
  }
  

}
