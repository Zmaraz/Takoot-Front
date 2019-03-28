import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

    console.log("UpdateProfileCOmponent constructed..");

  }

  user

  ngOnInit() {
  }

  updateUser() {
    console.log("inside updateUser() in update-profile");

    let firstname = (<HTMLInputElement>document.getElementById('fn')).value;
    let lastname = (<HTMLInputElement>document.getElementById('ln')).value;
    let username = (<HTMLInputElement>document.getElementById('username')).value;
    let password = (<HTMLInputElement>document.getElementById('password')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;

    

    this.user = new User (firstname, lastname, username, password, email);

    console.log(this.user);

  }

}
