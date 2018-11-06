import { Injectable } from '@angular/core';
import {Pet} from '../models/Pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  idCounter = 3;
  pets: Pet[];
  constructor() {
    this.pets = [
      {Id: 1, Name: 'Fido', Type: 'Dog', Color: 'Brown', SoldDate: '20-3-2004', PreviousOwner: 'Bob'},
      {Id: 2, Name: 'Meowsy', Type: 'Cat', Color: 'Black', SoldDate: '20-3-2004', PreviousOwner: 'Mary'}
    ];
  }

  getPets(): Pet[] {
  return this.pets;
  }

  addPet(pet: Pet) {
    pet.Id = this.idCounter++;
    this.pets.push(pet);
  }

  getPetById(number: number) {
    return this.pets.find(pet => pet.Id === number);
  }

  updatePet(pet: Pet) {
  const petToUpdate = this.pets.find(p => p.Id === pet.Id);
  const index = this.pets.indexOf(petToUpdate);
  this.pets[index] = pet;
  }

  deletePet(id: number) {
    this.pets = this.pets.filter(pet => pet.Id !== id);
  }
}
