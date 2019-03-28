import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuestionService } from '../question.service';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  // this is for generating a question from the API
  // these need to remain separate!!!!
  question: Object;

  // these are for creating a quiz
  theQuiz: Quiz;
  theQuestion: Question;
  theAnswer: Object;

  constructor(private results: DataService, private questions:QuestionService) { }

  ngOnInit() {
  }

  // calls the API
  getQuestion() {
    this.results.generateQuestion().subscribe(results => {
      this.question = results;
      console.log(results);
    });
  }

  // creates a Quiz
  createQuiz(title, dateCreated, dateLastUpdated, categoryId, difficultyId, defaultId) {

    // this part of the function, sends the Quiz
    title = (<HTMLInputElement>document.getElementById('quizTitle')).value;
    dateCreated = new Date();
    dateLastUpdated = dateCreated;
    categoryId = (<HTMLInputElement>document.getElementById('category')).value;
    difficultyId = (<HTMLInputElement>document.getElementById('difficulty')).value;
    defaultId = 2;

    this.theQuiz = new Quiz (title, dateCreated, dateLastUpdated, categoryId, difficultyId, defaultId);
    console.log(this.theQuiz);

    this.questions.create(this.theQuiz);
    
  }

  // creates a Question
  createQuestion1(quest) {
    quest = (<HTMLInputElement>document.getElementById('quest1')).value;
    this.theQuestion = new Question(quest);
    console.log(this.theQuestion);
    this.questions.createQuest(this.theQuestion);
  }

  createQuestion2(quest) {
    quest = (<HTMLInputElement>document.getElementById('quest2')).value;
    this.theQuestion = new Question (quest);
    console.log(this.theQuestion);
    this.questions.createQuest(this.theQuestion);
  }

}
