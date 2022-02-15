import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from '../models/customer.inferface';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data:CustomerI){
  }
  
  ngOnInit(): void {
  }

  deleteSubscriptionFromCustomer(){
    delete this.data.subscription;
  }

  SubscriptionEndDate(){
    const FechaFinal = this.data.subscription?.endDate;
    const FechaActual = new Intl.DateTimeFormat('es-CL',{year:'numeric',month:'long',day:'numeric'}).format(Date.now());
    if(FechaActual === FechaFinal){
      return false
    }
    else{
      return true
    }
  }



}
