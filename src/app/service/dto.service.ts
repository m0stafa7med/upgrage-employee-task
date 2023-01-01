import { Injectable } from '@angular/core';
import {EmployeeDTO} from "../dto/employeeDTO";

@Injectable({
  providedIn: 'root'
})
export class DtoService {

  employee!: EmployeeDTO;
  constructor() { }

  setEmployee(employee : EmployeeDTO)
  {
    this.employee =employee;
    console.log(employee);
  }

  getEmployee()
  {
    return this.employee;
  }

}
