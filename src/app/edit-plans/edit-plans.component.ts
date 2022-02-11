import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanI } from '../models/customer.inferface';

@Component({
  selector: 'app-edit-plans',
  templateUrl: './edit-plans.component.html',
  styleUrls: ['./edit-plans.component.scss']
})
export class EditPlansComponent implements OnInit {
  form: FormGroup;



  constructor(@Inject(MAT_DIALOG_DATA) public data:PlanI, private dialogRef:MatDialogRef<EditPlansComponent>) {
    this.form = this.buildForm();
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
    this.dialogRef.close({...this.data,name, price,duration})
  
  }
}
