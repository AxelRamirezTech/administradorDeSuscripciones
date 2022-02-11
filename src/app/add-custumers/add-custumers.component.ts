import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from '../models/customer.inferface';


@Component({
  selector: 'app-add-custumers',
  templateUrl: './add-custumers.component.html',
  styleUrls: ['./add-custumers.component.scss']
})


export class AddCustumersComponent implements OnInit {
  form: FormGroup;



  constructor(@Inject(MAT_DIALOG_DATA) public data:CustomerI, private dialogRef:MatDialogRef<AddCustumersComponent>) {
    this.form = this.buildForm();
   }
 


  ngOnInit(): void {
  }
  


  private buildForm() {
    return new FormGroup({
      Rut: new FormControl('', [Validators.required,]),
      companyRut: new FormControl('', [Validators.required,]),
      fullName: new FormControl('', [Validators.required,]),
      
    });
  }

  Addnew() {
    const {Rut, companyRut, fullName} = this.form.value;
    this.dialogRef.close({...this.data,Rut,companyRut,fullName})
  }
  


  
}
