import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client/client.service';
import { IEmployee } from '../../model/Interface/employee';
import { CommonModule } from '@angular/common';
import { IApiResponse } from '../../model/Interface/role';
import { ClientProject } from '../../model/Interface/clientProject';
import { Client } from '../../model/class/client';
import { CanComponentDeactivate } from '../../model/CanComponentDeactivate';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.scss',
})
export class ClientProjectComponent implements OnInit, CanComponentDeactivate {
  hasUnsavedChanges = false;
  canDeactivate(): boolean {
    return !this.hasUnsavedChanges || confirm('Discard changes?');
  }

  ngOnInit(): void {
    this.GetAllEmployee();
    this.GetAllClient();
    this.GetClientProject();
    this.clientProjectList();
    this.CheckFormVal();
  }
  clientProjectList = signal<any[]>([]);
  employeeDetails: IEmployee[] = [];
  formVal: ClientProject = new ClientProject();
  clientList: Client[] = [];

  ClientProjectForm = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.maxLength(4),
    ]),
    startDate: new FormControl(new Date('')),
    expectedEndDate: new FormControl(new Date('')),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(new Date()),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(0),
  });

  clientService = inject(ClientService);
  CheckFormVal() {
    this.ClientProjectForm.valueChanges.subscribe(() => {
      this.hasUnsavedChanges = true;
    });

}
  OnDelete(id: number) {
    console.log(id);

    this.clientService.DeleteClientProjectById(id).subscribe((res) => {
      if (res.result) {
        alert('success');
        this.GetClientProject();
      } else {
        alert('error trying to delete');
      }
    });
  }

  OnSaveClient() {
    console.log(this.ClientProjectForm.valid);

    let formval = this.ClientProjectForm.value as ClientProject;
    this.clientService.PostClientProject(formval).subscribe((data) => {
      console.log(data);
    });
  }
  OnReset() {
    this.ClientProjectForm.reset();
  }
  GetClientProject() {
    this.clientService.GetAllClientProject().subscribe((res) => {
      this.clientProjectList.set(res.data);
      console.log(res.data);
    });
  }
  GetAllClient() {
    this.clientService.GetAllClients().subscribe((res) => {
      this.clientList = res.data;
    });
  }

  GetAllEmployee() {
    this.clientService.GetAllEmployee().subscribe((res: IApiResponse) => {
      this.employeeDetails = res.data;

      console.log('data', this.employeeDetails);
    });
  }
}
