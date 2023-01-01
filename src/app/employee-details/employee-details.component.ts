import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../service/employee.service';
import {EmployeeDTO} from "../dto/employeeDTO";
import {DtoService} from "../service/dto.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee : any;
  constructor(private activatedRoute:ActivatedRoute , private employeeService : EmployeeService , private dtoService : DtoService) { }

  ngOnInit(): void {
    this.employee =this.getEmployeeById(this.dtoService.getEmployee())
  }
  changeStatus(employeeDTO : EmployeeDTO)
  {
    if (employeeDTO.status == 'UN_BLOCKED')
      this.employeeService.blockEmployee(employeeDTO).subscribe((request: EmployeeDTO) =>{
        this.employee=request;
      });
    else
      this.employeeService.unBlockEmployee(employeeDTO).subscribe((request: EmployeeDTO) =>{
        this.employee=request;
      });
  }
  getEmployeeById(employeeDTO:EmployeeDTO)
  {
    this.employeeService.getEmployeeById(employeeDTO).subscribe((request : EmployeeDTO)=> {
      this.employee = request;
    });
  }

}
