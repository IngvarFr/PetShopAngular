import { Component, OnInit } from '@angular/core';
import {Owner} from '../../shared/models/Owner';
import {OwnerService} from '../../shared/services/owner.service';

@Component({
  selector: 'app-owners-list',
  templateUrl: './owners-list.component.html',
  styleUrls: ['./owners-list.component.css']
})
export class OwnersListComponent implements OnInit {

  owners: Owner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit() {
    this.refresh();
  }

  delete(id: number) {
    this.ownerService.deleteOwner(id).subscribe(message => {
      console.log('Deleted owner: ' + message);
      this.refresh();
    });
  }

  refresh() {
    this.ownerService.getOwners().subscribe(listOfPets => {
      this.owners = listOfPets;
    });
  }
}
