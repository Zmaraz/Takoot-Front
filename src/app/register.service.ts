import { Injectable } from '@angular/core';
import { tap, map, catchError, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { 
    console.log('RegisterService constructed!');
  }

  register(user: User) {

    console.log(user);
    console.log(`Attempting to register user: ${user.username}`);

    let userJson = JSON.stringify(user);
    console.log(userJson);

    this.http.post(env.API_URL + 'users', userJson, {observe: 'response'})
    .pipe(map(resp => {
      

    }))

  }



}
