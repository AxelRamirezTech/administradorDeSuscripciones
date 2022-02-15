import { Injectable } from '@angular/core';
import { PLANS } from '../mock/mock-plans'; 
import { PlanI } from '../models/customer.inferface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  
  constructor() { }
  plans= [...PLANS];
  targetPlan?=this.plans[0];




  addNewPlanToTable(uuid:string, name:string, price: number, duration:number, createdAt:number, creadtedBy:string){
    const validated= false
    const newPlan = {uuid, name, price, duration, validated, createdAt, creadtedBy}
    this.plans.push(newPlan);
    
  }

  deletePlan(planToDelete:PlanI){
    const index = this.plans.indexOf(planToDelete, 0);
    if (index > -1) {
      this.plans.splice(index, 1);
    }
  }

  setTargetPlan(NewTargetPlan:PlanI){
    this.targetPlan=NewTargetPlan
  }

  editPlan(uuid:string, editedPlan:PlanI){

      const index = this.plans.findIndex(item =>item.uuid === uuid);
      console.log('index a editar',index)
  
      if (index > -1) {
        this.plans[index]= editedPlan

      }
  }





}
