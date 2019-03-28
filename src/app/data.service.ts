import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // use this service to connect to the API
  // foo({"your": "json", here: 'true'});

  // tv
  playQuiz() {
    console.log('the play button was clicked on the GamesComponentHtml');
    console.log('playQuiz()');

    // this should create 10 questions from TV category with multiple choice answers API
    // return this.http.get('https://reqres.in/api/users');
    return this.http.get('https://opentdb.com/api.php?amount=5&category=14&difficulty=easy&type=multiple');
  }

  //animals
  playQuiz2() {
    console.log('playQuiz2()');
    return this.http.get('https://opentdb.com/api.php?amount=5&category=27&difficulty=medium&type=multiple');

  }

  //sports
  playQuiz3() {
    console.log('playQuiz3()');
    return this.http.get('https://opentdb.com/api.php?amount=5&category=21&difficulty=hard&type=multiple');

  }

  // generates a random question
  // here, we need to get the categpry from the category input field on create a quiz
  // use backtics to insert that value into the API call
  generateQuestion() {
    console.log('generateQuestion()');
    let category = (<HTMLInputElement>document.getElementById('category')).value;
    let categoryForReal = '';
    let difficulty = (<HTMLInputElement>document.getElementById('difficulty')).value;
    let difficultyForReal = '';
    if(category == '1'){
      categoryForReal = '11';
    }
    if(category == '2'){
      categoryForReal = '14';
    }
    if(category == '3'){
      categoryForReal = '27';
    }
    if(category == '4'){
      categoryForReal = '21';
    }
    if(difficulty == '1'){
      difficultyForReal = 'easy';
    }
    if(difficulty == '2'){
      difficultyForReal = 'medium';
    }
    if(difficulty == '3'){
      difficultyForReal = 'hard';
    }

    if(categoryForReal == '' || difficultyForReal == ''){
      return null;
    } else {
      return this.http.get(`https://opentdb.com/api.php?amount=1&category=${categoryForReal}&difficulty=${difficultyForReal}&type=multiple`);
    }
  }

}
