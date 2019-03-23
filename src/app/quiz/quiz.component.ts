import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Object;

  constructor(private results: DataService) { }

  ngOnInit() {
    this.results.playQuiz().subscribe(results => {
        this.quizzes = results;
        console.log(this.quizzes);
      }
    );
  }

}
