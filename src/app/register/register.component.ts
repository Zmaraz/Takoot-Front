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

//   <form (submit)="onSubmit()">
//    <input [(ngModel)]="playerName">
// </form>



  register(firstname, lastname, username, password, email) {
    // firstname = document.getElementById('fn').value;
    // firstname = this.fn;
    firstname = (<HTMLInputElement>document.getElementById('fn')).value;
    lastname = (<HTMLInputElement>document.getElementById('ln')).value;
    username = (<HTMLInputElement>document.getElementById('username')).value;
    password = (<HTMLInputElement>document.getElementById('password')).value;
    email = (<HTMLInputElement>document.getElementById('email')).value;
    // use data binding [()] to retrieve the User id info from the form in the register html
    this.user = new User (firstname, lastname, username, password, email);
    console.log(this.user);

    this.registerService.register(this.user);

  }

  ngOnInit() {
  }

}
