import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService) { }


  ngOnInit() {
  }


  logout() {
    this.auth.logout();
  }

}
