import { Injectable } from '@angular/core';
import {Pet} from '../models/Pet';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PetService {

  apiUrl = 'https://petshop-ing2018.azurewebsites.net/api/pets/';
  pets: Pet[];
  constructor(private  http: HttpClient,
              private authenticationService: AuthenticationService) {}

  getPets(): Observable<Pet[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Pet[]>(this.apiUrl, httpOptions);
  }

  addPet(pet: Pet): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.post(this.apiUrl, pet, httpOptions);
  }

  getPetById(id: number): Observable<Pet> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.get<Pet>(this.apiUrl + id, httpOptions);
  }

  updatePet(pet: Pet): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.put(this.apiUrl + pet.id, pet, httpOptions);
  }

  deletePet(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    return this.http.delete(this.apiUrl + id, httpOptions);
  }
}
