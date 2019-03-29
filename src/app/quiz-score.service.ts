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
      
     return this.http.get(env.API_URL + 'high-score', {observe: 'response'});
    
  }

}
