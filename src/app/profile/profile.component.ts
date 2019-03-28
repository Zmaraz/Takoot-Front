import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   // calling the method isAuthenticated$ from the auth service
  //isAuthenticated$ = this.userService.isAuthenticated$;

   // creating variable, credentialsIsInvalid of type boolean
   userInvalid: boolean = false;
 
   // credentials is a Credentials class/object
   user: User;

   

  constructor(private userService: UserService, private router: Router) { 
    console.log('ProfileComponent constructed!');
    
    console.log(localStorage.getItem('user').split);
    //console.log('this is username' + this.user.username);
 
  }

  ngOnInit() {
    let userParse: string[] = (localStorage.getItem('user').split(','));
    // console.log("in ngOnInit in profile" + userParse[0]);
    // console.log("in ngOnInit in profile" + userParse[1]);
    // console.log("in ngOnInit in profile" + userParse[2]);
    // console.log("in ngOnInit in profile" + userParse[3]);
    // console.log("in ngOnInit in profile" + userParse[4]);
    // console.log("in ngOnInit in profile" + userParse[5]);

    //this.user.firstName = userParse[1];
    
    document.getElementById('firstnameTag').innerHTML = userParse[1];
    document.getElementById('lastnameTag').innerHTML = userParse[2];
    document.getElementById('usernameTag').innerHTML = userParse[3];
    document.getElementById('passwordTag').innerHTML = userParse[4];
    document.getElementById('emailTag').innerHTML = userParse[5];
  }


  update() {
    console.log("in update()");
    let userParse: string[] = (localStorage.getItem('user').split(','));
    //console.log(userP);
    let userFirstname = userParse[1];
    userFirstname = (<HTMLInputElement>document.getElementById('firstnameTag')).value;
    
    this.user.firstName = userFirstname;
    //let userFirstname = userParse[1];
    let userLastname = userParse[2]
    let userPassword = userParse[4]
    let userEmail = userParse[5]

    console.log(this.user.firstName);

    //this.userService.update(userFirstname);
  }

}
