import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  // this gets all the quizzes from the DB and actually works
  getQuizzes() {
    console.log('inside of getAllQuizzes');
    return this.http.get(env.API_URL + 'quiz');
  }

  getQuestions() {
    console.log('inside of getAllQuestions');
    return this.http.get(env.API_URL + 'question');
  }

  getAnswers() {
    console.log('inside of getAllAnswers');
    return this.http.get(env.API_URL + 'answer');
  }
}
