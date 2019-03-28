import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NgIf } from '@angular/common';
import { tap, map, catchError, first } from 'rxjs/operators';

import { environment as env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizScoreService {

  constructor(private http: HttpClient) {

   }

  
  getScore() {
    
    console.log("submit-btn is clicked on the quiz page mhmmmm")
    console.log("getScore() was called mhmmm");
      // posting/sending an HttpResponse back with the endpoint, and credentials
  
      // empty strings represent the jwt and user
  
      // MAKE NOTE, AUTH REPRESENTS THE END POINT... CHECK WITH BACKEND
     return this.http.get(env.API_URL + 'users', {observe: 'response'});
    
  }

}
