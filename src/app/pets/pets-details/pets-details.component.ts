import { Component, OnInit } from '@angular/core';
import {Pet} from '../../shared/models/Pet';
import {PetService} from '../../shared/services/pet.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.css']
})
export class PetsDetailsComponent implements OnInit {
  pet: Pet;
  id: number = +this.route.snapshot.paramMap.get('id');
  constructor(
    private petService: PetService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pet = this.petService.getPetById(id);
  }

}
