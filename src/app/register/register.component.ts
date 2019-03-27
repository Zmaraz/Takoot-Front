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

  register(firstname: string, lastname: string, username: string, password: string, email: string) {

    this.user = new User (firstname, lastname, username, password, email);
    console.log(this.user);

    this.registerService.register(this.user);

  }

  ngOnInit() {
  }

}
