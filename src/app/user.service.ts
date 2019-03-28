import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../environments/environment';
import { tap, map, catchError, first } from 'rxjs/operators';

import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) {
    console.log("in UserService constructor created()");
  }


  update(updatedUser: User) {

    console.log("inside of update service yee");

    let updatedUserJson = JSON.stringify(updatedUser);
    console.log(updatedUserJson);

    this.http.patch(env.API_URL + 'users', updatedUserJson, {observe: 'response'})
    .pipe(map(resp => {
      localStorage.setItem('jwt', resp.headers.get('Authorization'));
      //localStorage.getItem('jwt');
      //localStorage.getItem('user');
      localStorage.setItem('user', JSON.stringify(resp.body));
        //console.log('user');

    })).subscribe();

  }


  private hasToken(): boolean {
    return !!localStorage.getItem('jwt');
  }

}
