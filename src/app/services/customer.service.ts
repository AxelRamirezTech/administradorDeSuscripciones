import { Injectable } from '@angular/core';
import { CUSTOMERS } from '../mock/mock-customers';
import { CustomerI } from '../models/customer.inferface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }
  customers= [...CUSTOMERS];
  targetCustomer?=this.customers[0];



  addNewCustomer(uuid:string, Rut:string, companyRut:string, fullName:string){
    const enabled= false
    const newCustomer = {uuid, Rut, companyRut, fullName, enabled}
    this.customers.push(newCustomer);
    console.log(newCustomer)
  }

  deleteCustomer(customerToDelete:CustomerI){
    const index = this.customers.indexOf(customerToDelete, 0);
    if (index > -1) {
      this.customers.splice(index, 1);
    }
  }

  setTargetCustomer(NewTargetCustomer:CustomerI){
    this.targetCustomer=NewTargetCustomer
  }

  editCustomer(uuid:string, customer:CustomerI){

      const index = this.customers.findIndex(item =>item.uuid === uuid);
      console.log('index a editar',index)
  
      if (index > -1) {
        this.customers[index]= customer

      }
  }

  addPlan(customer:CustomerI){

  }

  viewCustomerDetails(customer:CustomerI){
    
  }


}
