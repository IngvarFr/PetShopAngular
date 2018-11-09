import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Owner} from '../models/Owner';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  apiUrl = 'https://petshop-ing2018.azurewebsites.net/api/owners/';
  owners: Owner[];
  constructor(private  http: HttpClient) {
  }

  getOwners(): Observable<Owner[]> {
    return this.http.get<Owner[]>(this.apiUrl);
  }

  addOwner(owner: Owner): Observable<any> {
    return this.http.post(this.apiUrl, owner);
  }

  getOwnerById(id: number): Observable<Owner> {
    return this.http.get<Owner>(this.apiUrl + id);
  }

  updateOwner(owner: Owner): Observable<any> {
    return this.http.put(this.apiUrl + owner.id, owner);
  }

  deleteOwner(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }
}
