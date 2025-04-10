import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { IApiResponse, IRole } from '../../model/Interface/role';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-roles',
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss',
})
export class RolesComponent implements OnInit {
  role: IRole[] = [];
  http = inject(HttpClient);
  ngOnInit(): void {
    this.GetAllRoles();
  }

  GetAllRoles() {
    this.http
      .get<IApiResponse>('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: IApiResponse) => {
        this.role = res.data;
        

      });
  }
}
