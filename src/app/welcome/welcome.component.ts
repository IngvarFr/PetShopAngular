import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'PetShop';
  user: any;
  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('currentUser') != null) {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

}
