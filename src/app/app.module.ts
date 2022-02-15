import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/*Angular Routing */ 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';



/*Angular Materials */ 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort'; 
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';


import { AddCustumersComponent } from './add-custumers/add-custumers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { AddPlanComponent } from './add-plan-to-table/add-plan.component';
import { TablePlanComponent } from './table-plan/table-plan.component';
import { EditPlansComponent } from './edit-plans/edit-plans.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddPlanToCustomerComponent } from './add-plan-to-customer/add-plan-to-customer.component';
import { TableCustomersComponent } from './table-customers/table-pagination-example.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    TableCustomersComponent,
    AddCustumersComponent,
    EditCustomersComponent,
    AddPlanComponent,
    TablePlanComponent,
    EditPlansComponent,
    CustomerDetailsComponent,
    AddPlanToCustomerComponent,

    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    FormsModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSelectModule,
    MatListModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
