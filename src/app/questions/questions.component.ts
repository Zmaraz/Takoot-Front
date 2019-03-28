import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuestionService } from '../question.service';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question: Object;
  theQuiz: Quiz;

  // calling the generateQuestion from the DataService

  constructor(private results: DataService, private questions:QuestionService) { }

  ngOnInit() {
    // generate a question should work here
    // this.results.generateQuestion;
  }

  getQuestion() {
    this.results.generateQuestion().subscribe(results => {
      this.question = results;
      console.log(results);
    });
  }

  createQuiz(title, dateCreated, dateLastUpdated, categoryId, difficultyId, defaultId) {

    title = (<HTMLInputElement>document.getElementById('quizTitle')).value;
    dateCreated = new Date();
    dateLastUpdated = dateCreated;

    // var opt = sel.options[sel.selectedIndex];
    // will come back to parse through and get the value that user clicked
    categoryId = (<HTMLInputElement>document.getElementById('category')).value;

    // will come back to parse through and get the value that user clicked
    difficultyId = (<HTMLInputElement>document.getElementById('difficulty')).value;

    defaultId = 2;

    this.theQuiz = new Quiz (title, dateCreated, dateLastUpdated, categoryId, difficultyId, defaultId);
    console.log(this.theQuiz);

    this.questions.create(this.theQuiz);
  }


}
