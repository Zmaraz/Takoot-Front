import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // use this service to connect to the API

  playQuiz() {
    console.log('the play button was clicked on the GamesComponentHtml');

    // this should create 10 questions from TV category with multiple choice answers API
    return this.http.get('https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple');
  }

}
