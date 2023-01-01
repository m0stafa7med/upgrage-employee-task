import { Component, OnInit } from '@angular/core';
import { EmployeeDTO } from '../dto/employeeDTO';
import { EmployeeService } from '../service/employee.service';
import {DtoService} from "../service/dto.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees!: any[] ;
  employee !:EmployeeDTO;
  constructor(private employeeService : EmployeeService, private dtoService :DtoService) {

  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployee(employee:EmployeeDTO)
  {
    this.dtoService.setEmployee(employee);
    this.employee = employee;
  }
  getEmployeeList()
  {
    this.employeeService.getEmployeeList().subscribe((employees : EmployeeDTO[])=>
    {
      this.employees = employees;
    });
  }



}
