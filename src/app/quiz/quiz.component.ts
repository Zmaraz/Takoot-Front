import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuizScoreService } from '../quiz-score.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Object;
  scores: Object;

  // score represents the values that should show when the user clicks the submit button
  // for now, show the correct answer and the answer that the user chose
  constructor(private results: DataService, private score: QuizScoreService) { }

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

