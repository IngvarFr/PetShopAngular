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
    PreviousOwner: new FormControl(''),
    Price: new FormControl('')
  });
  constructor(private route: ActivatedRoute,
              private petService: PetService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPetById(this.id).subscribe(petFromRest => {
      this.petForm.patchValue({
        Name: petFromRest.name,
        Type: petFromRest.type,
        Color: petFromRest.color,
        SoldDate: petFromRest.soldDate,
        PreviousOwner: petFromRest.previousOwner,
        Price: petFromRest.price
      });
    });

  }

  updatePet() {
    const pet = this.petForm.value;
    pet.id = this.id;
    this.petService.updatePet(pet).subscribe(message => {
      console.log(message);
      this.router.navigateByUrl('/pets');
    });
  }
}
