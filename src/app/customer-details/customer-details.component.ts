import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerI } from '../models/customer.inferface';
import { CustomerService } from '../services/customer.service';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) 
    public data:CustomerI, 
    private dialogRef:MatDialogRef<CustomerDetailsComponent>,
    private customerSvc:CustomerService){
  }
  
  ngOnInit(): void {
  }

  deleteSubscriptionFromCustomer(){
    delete this.data.subscription;
  }

}
