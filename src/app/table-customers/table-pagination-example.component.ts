import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerI } from '../models/customer.inferface';
import { v4 as uuidv4 } from 'uuid';
import { CustomerService } from '../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomersComponent } from '../edit-customers/edit-customers.component';
import { AddCustumersComponent } from '../add-custumers/add-custumers.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { AddPlanToCustomerComponent } from '../add-plan-to-customer/add-plan-to-customer.component';
import { firstValueFrom } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.scss']
})
export class TableCustomersComponent implements AfterViewInit{
  
  
  customers= [...this.customersSvc.customers];
  dataSource = new MatTableDataSource <CustomerI>(this.customers); 
  displayedColumns: string[] = ['id', 'Rut', 'companyRut', 'fullName', 'enabled', 'suscripcion/plan', 'manage'];
  

  constructor(private customersSvc:CustomerService, private dialog:MatDialog) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit( ) {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  AddCustumers(){
    const addDialog=this.dialog.open(AddCustumersComponent)
    firstValueFrom(addDialog.afterClosed()).then(value=>{
      if (value){
        this.customersSvc.addNewCustomer(uuidv4(),value.Rut,value.companyRut,value.fullName);
        this.refresh()
      }
    })
  }
  


  editCustomer(targetCustomer: CustomerI){
    const editDialog=this.dialog.open(EditCustomersComponent,{data:targetCustomer})
    firstValueFrom(editDialog.afterClosed()).then(value=>{
      if (value){
        this.customersSvc.editCustomer(value.uuid,value);
        this.refresh()
      }
    })
  }
//
  viewCustomerSubsAndPlans(targetCustomer: CustomerI){
    const detailsDialog=this.dialog.open(CustomerDetailsComponent,{data:targetCustomer})
    detailsDialog.afterClosed()
  }


  addPlanToCustomer(targetCustomer: CustomerI){
    const detailsDialog=this.dialog.open(AddPlanToCustomerComponent,{data:targetCustomer})
    detailsDialog.afterClosed()

  }


  deleteCustomer(customerToDelete: CustomerI){
    this.customersSvc.deleteCustomer(customerToDelete)
    this.dataSource.data=this.customers
    this.refresh()
  }


  log(){
    console.log(this.customersSvc.customers)
  }

  refresh(){
    this.dataSource.data=this.customersSvc.customers
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}


