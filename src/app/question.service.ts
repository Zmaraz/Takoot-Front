import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './models/quiz';
import { environment as env } from '../environments/environment';
import { tap, map, catchError, first } from 'rxjs/operators';
import { Question } from './models/question';
import { Answer } from './models/answer';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { 
    console.log('Question Service constructed! Yay!');
  }

  create(quiz: Quiz) {
    console.log(`Attempting to create quiz: ${quiz.title}`);

    let quizJson = JSON.stringify(quiz);
    console.log(quizJson);

    this.http.post(env.API_URL + 'quiz', quizJson, {observe: 'response'})
    .pipe(map(resp => {
      localStorage.getItem('jwt');
      localStorage.getItem('user');
    })).subscribe(); 
  }

  createQuest(quest: Question) {
    console.log(`Attempting to create a question: ${quest.question}`);

    let questJson = JSON.stringify(quest);
    console.log(questJson);

    this.http.post(env.API_URL + 'question', questJson, {observe: 'response'})
    .pipe(map(resp => {
      localStorage.getItem('jwt');
      localStorage.getItem('user');
    })).subscribe();
  }

  createAns(ans: Answer) {
    console.log(`Attempting to create an answer: ${ans.answer}`);

    let ansJson = JSON.stringify(ans);
    console.log(ansJson);

    this.http.post(env.API_URL + 'answer', ansJson, {observe: 'response'})
    .pipe(map(resp => {
      localStorage.getItem('jwt');
      localStorage.getItem('user');
    })).subscribe();

  }

}
