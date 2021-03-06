import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap, map, catchError, first } from 'rxjs/operators';

import { environment as env } from '../environments/environment';
import { Credentials } from './models/credentials';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // defining these properties/fields as private and final
  private readonly _isAuthenticated = new BehaviorSubject(this.hasToken());
  readonly isAuthenticated$ = this._isAuthenticated.asObservable();

  // creating a private constructor, http, of type HttpClient
  constructor(private http: HttpClient) {
    console.log('AuthService constructed!');
  }


  // getter for isAuthenticated
  get isAuthenticated() {
    console.log("insie of get isAuthenticated()")
    return this._isAuthenticated.getValue();
  }

  // setter for isAuthenticated
  set isAuthenticated(value: boolean) {
    console.log("inside of set isAuthenticated()")
    this._isAuthenticated.next(value);
  }

  // creating authenticate method that takes in credentials
  authenticate(credentials: Credentials) {
    
    this.logout(); // resetting the credentials by loging out the current user, whoever that may be
    console.log(credentials);
    console.log(`Attempting to login user: ${credentials.username}`);
    let credentialsJson = JSON.stringify(credentials); //stringify the credentials so make them readable JSON format
    console.log(credentialsJson);
    // posting/sending an HttpResponse back with the endpoint, and credentials

    // empty strings represent the jwt and user

    // MAKE NOTE, AUTH REPRESENTS THE END POINT... CHECK WITH BACKEND
    console.log("line 50 inside of auth.service before we set the jwt to localstorage")
    this.http.post(env.API_URL + 'auth', credentialsJson, {observe: 'response'})
      .pipe(map(resp => {
        localStorage.setItem('jwt', resp.headers.get('Authorization'));
        console.log(localStorage.getItem('jwt'));
        localStorage.setItem('user', JSON.stringify(resp.body));
        console.log('user');
        console.log(localStorage.getItem('user'));
        this.isAuthenticated = true;
      })).subscribe();
  }


  // logout method will remove the JWT's from the associated user in local storage
  logout() {
    if(localStorage.getItem('user') || localStorage.getItem('jwt')) {
      console.log('Logging out current user');
      localStorage.removeItem('user');
      localStorage.removeItem('jwt');
    }
    this.isAuthenticated = false;
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('jwt');
  }

}
