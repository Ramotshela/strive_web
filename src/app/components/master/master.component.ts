import { Component } from '@angular/core';
import { RolesComponent } from "../roles/roles.component";
import { CommonModule } from '@angular/common';
import { DesignationComponent } from "../designation/designation.component";

@Component({
  selector: 'app-master',
  imports: [RolesComponent, CommonModule, DesignationComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  isActive: boolean = true;
  currentComponent: string = '';
 

  onChange(val:string) {
    this.currentComponent = val;
  }


}
