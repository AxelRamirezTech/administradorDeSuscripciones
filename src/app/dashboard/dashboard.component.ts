import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from '../mock/mock-customers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  CUSTOMERS= CUSTOMERS;

  constructor() { }
  
  ngOnInit(): void {
    }
  
}
    

