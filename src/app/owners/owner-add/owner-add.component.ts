import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-owner-add',
  templateUrl: './owner-add.component.html',
  styleUrls: ['./owner-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  ownerForm = new FormGroup({
    FirstName: new FormControl(''),
    LastName: new FormControl(''),
    Address : new FormControl(''),
    Email: new FormControl(''),
    PhoneNumber: new FormControl('')
  });

  constructor(private ownerService: OwnerService,
              private router: Router) { }

  ngOnInit() {
  }

  addOwner() {
    this.ownerService.addOwner(this.ownerForm.value).subscribe(message => {
      console.log(message);
      this.router.navigateByUrl('/owners');
    });
  }

}
