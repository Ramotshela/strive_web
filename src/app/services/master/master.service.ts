import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDesignation } from '../../model/Interface/designation';


@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private readonly http: HttpClient) {}
  private readonly url: string =
    'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation';
  public GetAllDesignation() {
    return this.http.get<IDesignation>(this.url);
  }
}
