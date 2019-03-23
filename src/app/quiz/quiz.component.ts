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
    })
  }
  //tv
  // playQuiz() {
  //   this.results.playQuiz().subscribe(results => {
  //     this.quizzes = results;
  //   })
  // }

  // //animals
  // playQuiz2() {
  //   this.results.playQuiz2().subscribe(results => {
  //     this.quizzes = results;
  //   })
  // }
  
  // //sports
  // playQuiz3() {
  //   this.results.playQuiz3().subscribe(results => {
  //     this.quizzes = results;
  //   })
  // }

}

