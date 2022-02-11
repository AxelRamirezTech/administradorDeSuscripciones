import { Component, OnInit, Inject} from '@angular/core';
import { FormControl,FormGroup , Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI, PlanI } from '../models/customer.inferface';
import { PlanService } from '../services/plan.service'
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-plan-to-customer',
  templateUrl: './add-plan-to-customer.component.html',
  styleUrls: ['./add-plan-to-customer.component.scss']
})
export class AddPlanToCustomerComponent implements OnInit {
  selectedValue!: PlanI;
  plans= [...this.planSvc.plans]
  form: FormGroup;
 

  constructor(@Inject(MAT_DIALOG_DATA) public selectedCustomer:CustomerI, private dialogRef:MatDialogRef<AddPlanToCustomerComponent>, private planSvc:PlanService ) {
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

    if(this.selectedCustomer.hasOwnProperty('subscription')){
      this.selectedCustomer.subscription?.plan?.push(this.selectedValue)
    }
    
    else{
      const subscriptionToAdd= this.createSubscription(this.selectedValue)
      this.selectedCustomer.subscription= subscriptionToAdd;
    }

    console.log(this.selectedCustomer)
    this.dialogRef.close()
  }


  createSubscription(initialPlan: PlanI){
    
    const uuid = uuidv4()
    const validated = true
    const price = initialPlan.price
    const duration = initialPlan.duration
    const enabled = true
    const plan= [initialPlan]
    const newSub={uuid, validated, price, duration, enabled, plan}

    return newSub

  
  }


}
