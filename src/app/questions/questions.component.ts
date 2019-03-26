import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  question: Object;

  // calling the generateQuestion from the DataService

  constructor(private results: DataService) { }

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

}
