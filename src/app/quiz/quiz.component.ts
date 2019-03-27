import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

// document.getElementById("questionId");
export class QuizComponent implements OnInit {

  quizzes: Object;

  constructor(private results: DataService) { 
    //let doc = document.getElementById("viewScoreBtn").addEventListener('click', this.getScore);
    console.log("this is inside the constructor method in quiz component  " + this.results); 
  }

  correctAnswer() {
    console.log("right answer lit lit lit");
  }

  getScore(results) {
    console.log('potato');
    console.log(results);
  }
  
  // trackByWrong(index, item) {
  // let doc = document.getElementById("questionId");
  //   console.log("in trackbyWrong() " + doc);
  //   return item.id;
  // }
  
  ngOnInit() {
    this.results.playQuiz().subscribe(results => {
      this.quizzes = results;
      console.log(results); 
    });
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

