import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
    console.log("in UserService constructor created()");
  }


  update(user: User) {

    console.log("inside of update service yee");

    let userJson = JSON.stringify(user);
    console.log(userJson);

    

  }


}
