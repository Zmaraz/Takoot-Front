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
  getQuestion = this.results.generateQuestion;

  constructor(private results: DataService) { }

  ngOnInit() {
    // generate a question should work here
  }

  

}
