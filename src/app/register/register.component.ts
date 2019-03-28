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



  register() {
    // firstname = document.getElementById('fn').value;
    // firstname = this.fn;
    let firstname = (<HTMLInputElement>document.getElementById('fn')).value;
    let lastname = (<HTMLInputElement>document.getElementById('ln')).value;
    let username = (<HTMLInputElement>document.getElementById('username')).value;
    let password = (<HTMLInputElement>document.getElementById('password')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    // use data binding [()] to retrieve the User id info from the form in the register html
    this.user = new User (firstname, lastname, username, password, email);
    console.log(this.user);

    this.registerService.register(this.user);

  }

  ngOnInit() {
  }

}
