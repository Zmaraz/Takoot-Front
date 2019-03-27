import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;

  
  
  constructor(private registerService: RegisterService, private router: Router) { 
    console.log('RegisterComponent constructed!');
  }

  register(firstname, lastname, username, password, email) {
    firstname = document.getElementById('fn');
    lastname = document.getElementById('ln');
    username = document.getElementById('username');
    password = document.getElementById('password');
    email = document.getElementById('email');
    // use data binding [()] to retrieve the User id info from the form in the register html
    this.user = new User (firstname, lastname, username, password, email);
    console.log(this.user);

    this.registerService.register(this.user);

  }

  ngOnInit() {
  }

}
