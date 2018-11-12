import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  errormessage = '';

  constructor(private authService: AuthenticationService, private router: Router) { }

  login() {
    this.loading = true;
    this.authService.login(this.model.username, this.model.password )
      .subscribe(
        success => {
          this.router.navigateByUrl('');
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        }
      );
  }

  ngOnInit() {
    this.authService.logout();
  }

}
