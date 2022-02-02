import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup , FormArray, Validators} from '@angular/forms';
import { DataService } from '../service/data.service';
import { CustomerI } from '../interface/customer.interface';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  customer: CustomerI[] = [];


  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {


    }

    saveNew(){
   

    

    }


    

}
