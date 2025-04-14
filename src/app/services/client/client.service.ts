import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../model/class/client';
import { environment } from '../../../environments/environment.development';
import { IApiResponse } from '../../model/Interface/role';
import { ClientProject } from '../../model/Interface/clientProject';
import { API_Endpoint_Clients } from '../../Shared/Constants/Constants';


@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private readonly http: HttpClient) {}
  GetAllClients() {
    return this.http.get<any>(API_Endpoint_Clients.GetAllClient);
  }
  PostUpdatedClient(clientList: Client) {
    return this.http.post<IApiResponse>(
      environment.API_URL + `/AddUpdateClient`,
      clientList
    );
  }
  GetAllEmployee() {
    return this.http.get<IApiResponse>(environment.API_URL + '/GetAllEmployee');
  }
  DeleteClientById(clientId: number) {
    return this.http.delete<IApiResponse>(
      environment.API_URL + 'DeleteClientByClientId?clientId=' + clientId
    );
  }
  DeleteClientProjectById(id: number) {
    return this.http.delete<IApiResponse>(
      environment.API_URL + '/DeleteProjectByProjectId?projectId='+id
    );
  }
  GetClientById(clientId: number) {
    return this.http.get<IApiResponse>(
      environment.API_URL + 'GetClientByClientId?clientId=' + clientId
    );
  }
  GetAllClientProject() {
      return this.http.get<IApiResponse>(
        environment.API_URL + 'GetAllClientProjects'
      );
  }
  PostClientProject(clientProject:ClientProject) {
    return this.http.post<IApiResponse>(
      environment.API_URL + '/AddUpdateClientProject',clientProject
    );
  }
}
