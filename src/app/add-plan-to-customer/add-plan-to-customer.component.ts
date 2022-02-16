import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI, PlanI } from '../models/customer.inferface';
import { PlanService } from '../services/plan.service'
import { v4 as uuidv4 } from 'uuid';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-plan-to-customer',
  templateUrl: './add-plan-to-customer.component.html',
  styleUrls: ['./add-plan-to-customer.component.scss']
})
export class AddPlanToCustomerComponent implements OnInit {
  selectedValue!: PlanI;
  plans= [...this.planSvc.plans]
  form: FormGroup;
  date = new Date();
  
  constructor(@Inject(MAT_DIALOG_DATA) 
    public selectedCustomer:CustomerI, 
    private dialogRef:MatDialogRef<AddPlanToCustomerComponent>, 
    private planSvc:PlanService,
    private snackBar: MatSnackBar){
      this.form = this.buildForm();
  }
  ngOnInit(): void {
  }
  private buildForm() {
    return new FormGroup({
      selectedValue: new FormControl('', [Validators.required,]),
    });
  }

  addPlan(){
    const subscriptionToAdd= this.createSubscription(this.selectedValue)
    this.selectedCustomer.subscription= subscriptionToAdd;
    this.PlanAdded()
    this.dialogRef.close()
  }

  createSubscription(initialPlan: PlanI){
    const uuid = uuidv4()
    const validated = true
    const price = initialPlan.price
    const duration = initialPlan.duration
    const enabled = true
    const plan= [initialPlan] 
    const startDate = this.date.setMonth(this.date.getMonth());
    const endDate= this.date.setMonth(this.date.getMonth() + duration);
    const a = new Date(startDate)
    const newSub={uuid, validated, price, duration, enabled, plan,startDate,endDate}
    return newSub
  }

  PlanAdded() {
    this.snackBar.open('El usuario se ha suscrito ','',{
      duration: 3000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

}
