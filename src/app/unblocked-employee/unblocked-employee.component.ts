import { Component, OnInit } from '@angular/core';
import {EmployeeDTO} from "../dto/employeeDTO";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-unblocked-employee',
  templateUrl: './unblocked-employee.component.html',
  styleUrls: ['./unblocked-employee.component.css']
})
export class UnblockedEmployeeComponent implements OnInit {
  unBlockedEmployees :any[] | undefined;


  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeByStatus(new EmployeeDTO());
  }

  getEmployeeByStatus(employeeDTO : EmployeeDTO)
  {
    employeeDTO.status = "UN_BLOCKED";
    this.employeeService.getEmployeeByStatus(employeeDTO).subscribe((employees : EmployeeDTO[])=>
    {
      this.unBlockedEmployees = employees;
    });
  }

}
