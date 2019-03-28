import { Injectable } from '@angular/core';
import { tap, map, catchError, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment as env } from '../environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly _isAuthenticated = new BehaviorSubject(this.hasToken());
  readonly isAuthenticated$ = this._isAuthenticated.asObservable();


  constructor(private http: HttpClient) { 
    console.log('RegisterService constructed!');
  }

  get isAuthenticated() {
    console.log("insie of get isAuthenticated()")
    return this._isAuthenticated.getValue();
  }

  // setter for isAuthenticated
  set isAuthenticated(value: boolean) {
    console.log("inside of set isAuthenticated()")
    this._isAuthenticated.next(value);
  }

  register(user: User) {

    console.log(user);
    console.log(`Attempting to register user: ${user.username}`);

    let userJson = JSON.stringify(user);
    console.log(userJson);

    this.http.post(env.API_URL + 'users', userJson, {observe: 'response'})
    .subscribe();
      

  }

  private hasToken(): boolean {
    return !!localStorage.getItem('jwt');
  }


}
