import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.css']
})
export class PetUpdateComponent implements OnInit {
  id: number;
  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Color : new FormControl(''),
    SoldDate: new FormControl(''),
    PreviousOwner: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private petService: PetService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    const pet = this.petService.getPetById(this.id);
    this.petForm.patchValue({
      Name: pet.Name,
      Type: pet.Type,
      Color: pet.Color,
      SoldDate: pet.SoldDate,
      PreviousOwner: pet.PreviousOwner
    });
  }

  updatePet() {
    const pet = this.petForm.value;
    pet.Id = this.id;
    this.petService.updatePet(pet);
    alert('Pet updated');
    this.router.navigateByUrl('/pets');
  }
}
