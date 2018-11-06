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
    this.refresh();
  }

  delete(id: number) {
    this.petService.deletePet(id).subscribe(message => {
      console.log('Deleted pet: ' + message);
      this.refresh();
    });
  }

  refresh() {
    this.petService.getPets().subscribe(listOfPets => {
      this.pets = listOfPets;
    });
  }
}
