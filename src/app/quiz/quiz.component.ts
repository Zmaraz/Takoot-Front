import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.playQuiz().subscribe(data => {
        this.quiz = data
        console.log(this.quiz);
      }
    );
  }

}
