import { Component, OnInit } from '@angular/core';
import {EmployeeDTO} from "../dto/employeeDTO";
import {EmployeeService} from "../service/employee.service";
import {DtoService} from "../service/dto.service";

@Component({
  selector: 'app-blocked-employee',
  templateUrl: './blocked-employee.component.html',
  styleUrls: ['./blocked-employee.component.css']
})
export class BlockedEmployeeComponent implements OnInit {

  blockedEmployees :any[] | undefined;
  constructor(private employeeService : EmployeeService , private dtoService: DtoService) { }

  ngOnInit(): void {
    this.getEmployeeByStatus(new EmployeeDTO());
  }

  getEmployeeByStatus(employeeDTO : EmployeeDTO)
  {
    employeeDTO.status = "BLOCKED";
    console.log(employeeDTO);
    this.employeeService.getEmployeeByStatus(employeeDTO).subscribe((employees : EmployeeDTO[])=>
    {
      this.blockedEmployees = employees;
    });
    console.log(this.blockedEmployees);
  }
}
