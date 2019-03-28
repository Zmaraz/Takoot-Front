import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { Credentials } from '../models/credentials';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // calling the method isAuthenticated$ from the auth service
  isAuthenticated$ = this.authService.isAuthenticated$;

  // creating variable, credentialsIsInvalid of type boolean
  credentialsInvalid: boolean = false;

  // credentials is a Credentials class/object
  credentials: Credentials;

  constructor(private authService: AuthService, private router: Router) {
    console.log('LoginComponent constructed!');
  }

  login(username: string, password: string): void {
    
    // credentials is a new Credentials class/object that takes in username and password
    this.credentials = new Credentials(username, password);

    // use authservice's method to authenticate the credentials we just passed
    this.authService.authenticate(this.credentials);

    // subscribing because it is an observable, it continuously returns objects
    this.isAuthenticated$.subscribe(isAuth => {
      if(isAuth) {
        this.credentialsInvalid = false;
        this.router.navigate(['/dashboard']);
      }
    }, err => {
      this.credentialsInvalid = true;
    });
  }


}
