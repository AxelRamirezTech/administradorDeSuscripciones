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
    this.expirationChecker()
  }
  deleteSubscriptionFromCustomer(){
    delete this.data.subscription;
  }

  expirationChecker(){
    const localDate = new Date();
    const localDateNumber = localDate.setMonth(localDate.getMonth()+0);
    const endDate = this.data.subscription?.endDate;

    if (endDate){
      if (localDateNumber >= endDate){
        this.data.subscription!.validated = false;

      }
    }
  }

}
