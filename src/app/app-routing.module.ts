import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {PetsListComponent} from './pets/pets-list/pets-list.component';
import {PetsDetailsComponent} from './pets/pets-details/pets-details.component';
import {PetAddComponent} from './pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './pets/pet-update/pet-update.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'pets', component: PetsListComponent},
  {path: 'pets/:id', component: PetsDetailsComponent},
  {path: 'pet-add', component: PetAddComponent},
  {path: 'pet-update/:id', component: PetUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
