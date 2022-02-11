import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PlanI } from '../models/customer.inferface';
import { v4 as uuidv4 } from 'uuid';
import { PlanService } from '../services/plan.service';
import { MatDialog } from '@angular/material/dialog';
import { EditPlansComponent } from '../edit-plans/edit-plans.component';

import { AddPlanComponent } from '../add-plan-to-table/add-plan.component'; 
import { firstValueFrom } from 'rxjs';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table-plan',
  templateUrl: './table-plan.component.html',
  styleUrls: ['./table-plan.component.scss']
})
export class TablePlanComponent implements AfterViewInit {


  plans= [...this.plansSvc.plans];
  dataSource = new MatTableDataSource <PlanI>(this.plans); 
  displayedColumns: string[] = ['id', 'name', 'price', 'duration', 'validated', 'created', 'manage'];



  

  constructor(private plansSvc:PlanService, private dialog:MatDialog) {
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit( ) {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  AddPlans(){
    const addDialog=this.dialog.open(AddPlanComponent)
    firstValueFrom(addDialog.afterClosed()).then(value=>{
      if (value){
        this.plansSvc.addNewPlanToTable(uuidv4(),value.name, value.price, value.duration, value.createdAt, value.creadtedBy);
        this.refresh()
      }
    })
  }
  


  editPlans(targetPlan: PlanI){
    const editDialog=this.dialog.open(EditPlansComponent,{data:targetPlan})
    firstValueFrom(editDialog.afterClosed()).then(value=>{
      if (value){
        this.plansSvc.editPlan(value.uuid,value);
        this.refresh()
      }
    })
  }

  deletePlans(planToDelete: PlanI){
    this.plansSvc.deletePlan(planToDelete)
    this.dataSource.data=this.plans
    this.refresh()
  }


  log(){
    console.log(this.plansSvc.plans)
  }

  refresh(){
    this.dataSource.data=this.plansSvc.plans
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
