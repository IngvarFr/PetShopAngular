import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {Pet} from '../../shared/models/Pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.pets = this.petService.getPets();
  }

  delete(id: number) {
    this.petService.deletePet(id);
    this.pets = this.petService.getPets();
  }
}
