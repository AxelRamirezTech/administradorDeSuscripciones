import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './admin.guard'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCustumersComponent } from './add-custumers/add-custumers.component';
import { EditCustomersComponent } from './edit-customers/edit-customers.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:LoginComponent}, // cambiar despues a component:LoginComponent  DashboardComponent
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AdminGuard]},
  {path:'add-custumers',component:AddCustumersComponent},
  {path:'edit-customers',component:EditCustomersComponent},
  {path:'contact', component:ContactComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
