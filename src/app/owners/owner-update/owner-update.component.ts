import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-owner-update',
  templateUrl: './owner-update.component.html',
  styleUrls: ['./owner-update.component.css']
})
export class OwnerUpdateComponent implements OnInit {
  id: number;
  ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Address : new FormControl(''),
    Email: new FormControl(''),
    PhoneNumber: new FormControl(''),
  });
  constructor(private route: ActivatedRoute,
              private ownerService: OwnerService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerById(this.id).subscribe(ownerFromRest => {
      this.ownerForm.patchValue({
        FirstName: ownerFromRest.firstName,
        LastName: ownerFromRest.lastName,
        Address: ownerFromRest.address,
        Email: ownerFromRest.email,
        PhoneNumber: ownerFromRest.phoneNumber
      });
    });

  }

  updateOwner() {
    const owner = this.ownerForm.value;
    owner.id = this.id;
    this.ownerService.updateOwner(owner).subscribe(message => {
      console.log(message);
      this.router.navigateByUrl('/owners');
    });
  }
}
