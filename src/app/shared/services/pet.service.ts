import { Injectable } from '@angular/core';
import {Pet} from '../models/Pet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  apiUrl = 'https://petshop-ing2018.azurewebsites.net/api/pets/';
  pets: Pet[];
  constructor(private  http: HttpClient) {
  }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.apiUrl);
  }

  addPet(pet: Pet): Observable<any> {
    return this.http.post(this.apiUrl, pet);
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<Pet>(this.apiUrl + id);
  }

  updatePet(pet: Pet): Observable<any> {
    return this.http.put(this.apiUrl + pet.id, pet);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }
}
