import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDTO } from '../dto/employeeDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly URL: string = 'http://localhost:9090/employee';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization :'my-auth-token'
    }),
  };
  constructor(private http : HttpClient) { }

  getEmployeeList() {
    return this.http.get<EmployeeDTO[]>(`${this.URL}/fetchAll`, {});
  }

  getEmployeeById(employeeDTO: EmployeeDTO) {
    return this.http.post<EmployeeDTO>(`${this.URL}/fetchById`, employeeDTO);
  }

  blockEmployee(employeeDTO: EmployeeDTO) {
    return this.http.post<EmployeeDTO>(`${this.URL}/blockEmployee`, employeeDTO);
  }

  unBlockEmployee(employeeDTO: EmployeeDTO)
  {
    return this.http.post<EmployeeDTO>(`${this.URL}/unBlockEmployee`,employeeDTO)
  }

  getEmployeeByStatus(employeeDTO: EmployeeDTO)
  {
    return this.http.post<EmployeeDTO[]>(`${this.URL}/getEmployeeByStatus`,employeeDTO)
  }

}
