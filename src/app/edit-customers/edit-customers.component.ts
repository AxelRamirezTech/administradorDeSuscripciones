import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from '../models/customer.inferface';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {
  form: FormGroup;



  constructor(@Inject(MAT_DIALOG_DATA) public data:CustomerI, private dialogRef:MatDialogRef<EditCustomersComponent>) {
    this.form = this.buildForm();
   }
 


  ngOnInit(): void {
  }
  


  private buildForm() {
    return new FormGroup({
      Rut: new FormControl(this.data.Rut, [Validators.required,]),
      companyRut: new FormControl(this.data.companyRut, [Validators.required]),
      fullName: new FormControl(this.data.fullName, [Validators.required])
    });
  }

  editCustomer(){
    const {Rut, companyRut, fullName} = this.form.value;
    this.dialogRef.close({...this.data,Rut,companyRut,fullName})
  
  }
}
