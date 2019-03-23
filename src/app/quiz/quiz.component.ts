import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.playQuiz().subscribe(data => {
        this.quizzes = data;
        console.log(this.quizzes);
      }
    );
  }

}
