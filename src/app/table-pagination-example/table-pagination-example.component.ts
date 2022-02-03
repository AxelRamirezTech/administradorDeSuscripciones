import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerI } from '../models/customer.inferface';
import { CUSTOMERS } from '../mock/mock-customers';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-table-pagination-example',
  templateUrl: './table-pagination-example.component.html',
  styleUrls: ['./table-pagination-example.component.scss']
})
export class TablePaginationExampleComponent implements AfterViewInit{
  
  CUSTOMERS= CUSTOMERS;
  dataSource = new MatTableDataSource <CustomerI>(CUSTOMERS);
  displayedColumns: string[] = ['id', 'Rut', 'companyRut', 'fullName', 'acciones'];
  

  constructor() {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  
  saveNew(){
      var tempUuid = uuidv4();
      const newCustomer = {uuid:tempUuid ,Rut:'12345', companyRut:'2341234', fullName:'panconqueso'}
      this.CUSTOMERS.push(newCustomer);
      this.dataSource.data = CUSTOMERS
    }

  editCustomer(element: any){

  }

  deleteCustomer(element: CustomerI){

    const index = CUSTOMERS.indexOf(element, 0);
    if (index > -1) {
      CUSTOMERS.splice(index, 1);
    this.dataSource.data = CUSTOMERS
    }

  }

  

  customerDetail(element: any){
    
  }



}


