import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { GamesService } from '../games.service';
import { Score } from '../models/score';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

// document.getElementById("questionId");
export class QuizComponent implements OnInit {

public scoreNum = 5;

  quizzes: Object;
  userQuizzes: Object;
  score: Score;

  constructor(private results: DataService, private otherResults: GamesService) {
    //let doc = document.getElementById("viewScoreBtn").addEventListener('click', this.getScore);
   
    console.log("this is inside the constructor method in quiz component  " + this.results); 
  }

  correctAnswer() {
    //document.getElementById('score').innerText += " Right! ";
    console.log("right answer! lit! lit! lit!");
    
  }

  wrongAnswer() {
    //document.getElementById('score').innerText = " Wrong! ";
    console.log("WRONGGG!!! silly..")
    this.scoreNum--;
  }
  
  getScore() {
    console.log('potato');
  
  }

  saveScore(){
    console.log(this.scoreNum);
    let quizId: number = 100;
    this.score = new Score(this.scoreNum, quizId)
    this.results.saveScore(this.score)
  }
  
  // trackByWrong(index, item) {
  // let doc = document.getElementById("questionId");
  //   console.log("in trackbyWrong() " + doc);
  //   return item.id;
  // }
  
  ngOnInit() {
    this.results.playQuiz().subscribe(results => {
      var x = 0;
      console.log("x value in quizcomponent.ts : " + x);
      this.quizzes = results;
      console.log(results); 
    });

    // this.otherResults.getQuizzes().subscribe(otherResults => {
    //   this.userQuizzes = otherResults;
    //   console.log(otherResults);
    // });
  }

//^^^ may not need to have a this.otherResults for the user Quizzes; will revisit


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

