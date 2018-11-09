import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Owner} from '../../shared/models/Owner';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-owners-details',
  templateUrl: './owners-details.component.html',
  styleUrls: ['./owners-details.component.css']
})
export class OwnersDetailsComponent implements OnInit {

  owner: Owner;
  id: number = +this.route.snapshot.paramMap.get('id');
  constructor(
    private ownerService: OwnerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerById(id).subscribe(owner => {
      this.owner = owner;
    });

  }
}
