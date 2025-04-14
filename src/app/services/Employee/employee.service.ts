import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_Endpoint_Employees } from '../../Shared/Constants/Constants';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private readonly httpClient: HttpClient) {}
  public GetAllEmployees() {
    return this.httpClient.get<any>(API_Endpoint_Employees.GetAllEmployees);
  }
}
