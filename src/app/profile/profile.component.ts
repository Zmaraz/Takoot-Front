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
    
    console.log(localStorage.getItem('user'));
    //console.log('this is username' + this.user.username);
 
  }

  // turn the 'user' in localStorage to a string array and split up the elements
  public userParse: string[] = (localStorage.getItem('user').split(','));

  // get rid of everything in that element up until what we want in quotes " "
  public userIdParse1: string = this.userParse[0].substring(11);
  public userFnParse1: string = this.userParse[1].substring(13);
  public userLnParse1: string = this.userParse[2].substring(12);
  public userUnParse1: string = this.userParse[3].substring(11);
  public userPwParse1: string = this.userParse[4].substring(11);
  public userEmParse1: string = this.userParse[5].substring(8);

  // get rid of the quotation marks so i can try to create a user object
  public idFinal: string = this.userIdParse1.replace('"', '');
  public fnFinal: string = this.userFnParse1.replace('"', '');
  public fnFinal1: string = this.fnFinal.replace('"', '');
  public lnFinal: string = this.userLnParse1.replace('"', '');
  public lnFinal1: string = this.lnFinal.replace('"', '');
  public unFinal: string = this.userUnParse1.replace('"', '');
  public unFinal1: string = this.unFinal.replace('"', '');
  public pwFinal: string = this.userPwParse1.replace('"', '');
  public pwFinal1: string = this.pwFinal.replace('"', '');
  public emFinal: string = this.userEmParse1.replace('"', '');
  public emFinal1: string = this.emFinal.replace('"', '');
  
  

  ngOnInit() {
    

    // console.log("in ngOnInit in profile" + this.userParse[0]);
    // console.log("in ngOnInit in profile" + this.userParse[1]);
    // console.log("in ngOnInit in profile" + this.userParse[2]);
    // console.log("in ngOnInit in profile" + this.userParse[3]);
    // console.log("in ngOnInit in profile" + this.userParse[4]);
    // console.log("in ngOnInit in profile" + this.userParse[5]);

    //this.user.firstName = userParse[1];

    document.getElementById('idTag').innerHTML = this.idFinal;
    document.getElementById('firstnameTag').innerHTML = this.fnFinal1;
    document.getElementById('lastnameTag').innerHTML = this.lnFinal1;
    document.getElementById('usernameTag').innerHTML = this.unFinal1;
    document.getElementById('passwordTag').innerHTML = this.pwFinal1;
    document.getElementById('emailTag').innerHTML = this.emFinal1;



  }


  update() {
    console.log("in update()");
    this.user = new User (this.fnFinal1, this.lnFinal1, this.unFinal1, this.pwFinal1, this.emFinal);
    
    console.log(this.user);

    this.userService.update(this.user);
    

    //this.userService.update(userFirstname);
  }

}
