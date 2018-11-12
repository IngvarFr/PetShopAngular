import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetsDetailsComponent } from './pets/pets-details/pets-details.component';
import { PetAddComponent } from './pets/pet-add/pet-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PetUpdateComponent } from './pets/pet-update/pet-update.component';
import {HttpClientModule} from '@angular/common/http';
import { OwnersListComponent } from './owners/owners-list/owners-list.component';
import { OwnersDetailsComponent } from './owners/owners-details/owners-details.component';
import { OwnerAddComponent } from './owners/owner-add/owner-add.component';
import { OwnerUpdateComponent } from './owners/owner-update/owner-update.component';
import { LoginComponent } from './shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    PetsListComponent,
    PetsDetailsComponent,
    PetAddComponent,
    PetUpdateComponent,
    OwnersListComponent,
    OwnersDetailsComponent,
    OwnerAddComponent,
    OwnerUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
