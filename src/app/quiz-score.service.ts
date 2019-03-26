import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizScoreService {

  constructor() { }

  getScore() {
    console.log("submit-btn is clicked on the quiz page mhmmmm")
    console.log("getScore() was called mhmmm");
    
  }

}
