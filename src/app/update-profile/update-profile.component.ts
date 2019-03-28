import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {

    console.log("UpdateProfileCOmponent constructed..");

  }

  ngOnInit() {
  }

  update() {

  }

}
