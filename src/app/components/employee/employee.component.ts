import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../services/Employee/employee.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  imports: [UpperCasePipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  employeeList = signal<any[]>([]);
OnDelete: any;
  ngOnInit(): void {
    this.GetAllEmployee();
  }

  employee = inject(EmployeeService);

  GetAllEmployee() {
    this.employee.GetAllEmployees().subscribe((data) => {
      this.employeeList.set(data);

      console.log('tr', this.employeeList);
    });
  }
}
