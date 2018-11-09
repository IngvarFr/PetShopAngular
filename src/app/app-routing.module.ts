import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetsListComponent} from './pets/pets-list/pets-list.component';
import {PetsDetailsComponent} from './pets/pets-details/pets-details.component';
import {PetAddComponent} from './pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './pets/pet-update/pet-update.component';
import {OwnersListComponent} from './owners/owners-list/owners-list.component';
import {OwnersDetailsComponent} from './owners/owners-details/owners-details.component';
import {OwnerAddComponent} from './owners/owner-add/owner-add.component';
import {OwnerUpdateComponent} from './owners/owner-update/owner-update.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'pets', component: PetsListComponent},
  {path: 'pets/:id', component: PetsDetailsComponent},
  {path: 'pet-add', component: PetAddComponent},
  {path: 'pet-update/:id', component: PetUpdateComponent},
  {path: 'owners', component: OwnersListComponent},
  {path: 'owners/:id', component: OwnersDetailsComponent},
  {path: 'owner-add', component: OwnerAddComponent},
  {path: 'owner-update/:id', component: OwnerUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
