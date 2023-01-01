import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockedEmployeeComponent } from './blocked-employee/blocked-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { UnblockedEmployeeComponent } from './unblocked-employee/unblocked-employee.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'employeeDetails',
    component: EmployeeDetailsComponent,
  },
  {
    path:'blocked-employees',
    component:BlockedEmployeeComponent
  },
  {
    path:'unblocked-employees',
    component:UnblockedEmployeeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
