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
   userInvalid: boolean = false;
 
   // credentials is a Credentials class/object
   user: User;

   

  constructor(private authService: AuthService, private router: Router) { 
    console.log('ProfileComponent constructed!');
    
    console.log(localStorage.getItem('user').split);
    //console.log('this is username' + this.user.username);
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
    let userParse: string[] = (localStorage.getItem('user').split(','));
    console.log("in ngOnInit in profile" + userParse[0]);
    console.log("in ngOnInit in profile" + userParse[1]);
    console.log("in ngOnInit in profile" + userParse[2]);
    console.log("in ngOnInit in profile" + userParse[3]);
    console.log("in ngOnInit in profile" + userParse[4]);
    console.log("in ngOnInit in profile" + userParse[5]);
    //console.log('this is username' + this.user.username);
    //document.getElementById('idTag').innerHTML = userParse[0];
    document.getElementById('firstnameTag').innerHTML = userParse[1];
    document.getElementById('lastnameTag').innerHTML = userParse[2];
    document.getElementById('usernameTag').innerHTML = userParse[3];
    document.getElementById('passwordTag').innerHTML = userParse[4];
    document.getElementById('emailTag').innerHTML = userParse[5];
  }

}
