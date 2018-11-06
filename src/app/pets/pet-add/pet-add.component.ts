import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.css']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    Name: new FormControl(''),
    Type: new FormControl(''),
    Color : new FormControl(''),
    SoldDate: new FormControl(''),
    PreviousOwner: new FormControl('')
  });

  constructor(private petService: PetService,
              private router: Router) { }

  ngOnInit() {
  }

  addPet() {
  this.petService.addPet(this.petForm.getRawValue());
  this.petForm.reset();
  alert('Pet added');
  this.router.navigateByUrl('/pets');
  }
}
