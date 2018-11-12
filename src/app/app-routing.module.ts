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
import {AuthGuard} from './shared/guards/auth.guard';
import {LoginComponent} from './shared/login/login.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pets', component: PetsListComponent, canActivate: [AuthGuard]},
  {path: 'pets/:id', component: PetsDetailsComponent, canActivate: [AuthGuard]},
  {path: 'pet-add', component: PetAddComponent, canActivate: [AuthGuard]},
  {path: 'pet-update/:id', component: PetUpdateComponent, canActivate: [AuthGuard]},
  {path: 'owners', component: OwnersListComponent, canActivate: [AuthGuard]},
  {path: 'owners/:id', component: OwnersDetailsComponent, canActivate: [AuthGuard]},
  {path: 'owner-add', component: OwnerAddComponent, canActivate: [AuthGuard]},
  {path: 'owner-update/:id', component: OwnerUpdateComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
