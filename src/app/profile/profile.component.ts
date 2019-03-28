import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   // calling the method isAuthenticated$ from the auth service
   isAuthenticated$ = this.authService.isAuthenticated$;

   // creating variable, credentialsIsInvalid of type boolean
   credentialsInvalid: boolean = false;
 
   // credentials is a Credentials class/object
   user: User;

  constructor(private authService: AuthService, private router: Router) { 
    console.log('Profileomponent constructed!');
    this.showProfile;
  }

  showProfile(user: User) {
    console.log('in showProfile()');
    document.getElementById('usernameTag').innerText = this.user.username;
    document.getElementById('firstnameTag').innerText = this.user.firstName;
    document.getElementById('lastnameTag').innerText = this.user.lastName;
    document.getElementById('passwordTag').innerText = this.user.password;
    document.getElementById('emailTag').innerText = this.user.email;
  }

  
  ngOnInit() {
    this.showProfile;
  }

}
