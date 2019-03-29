import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-user-quizzes',
  templateUrl: './user-quizzes.component.html',
  styleUrls: ['./user-quizzes.component.css']
})
export class UserQuizzesComponent implements OnInit {

  userQuizzes: Object;

  constructor(private otherResults: GamesService) { }

  quiz: Quiz;
  
  // public resultList: Object = this.otherResults.getAnswers();

  // getInfo() {

  //   console.log(this.resultList)

  // }

  ngOnInit() {
    this.otherResults.getQuizzes().subscribe(otherResults => {
      this.userQuizzes = otherResults;
      console.log(otherResults);
      //console.log(this.userQuizzes);
      //this.getInfo();
      
      
    });
    //console.log(otherResults[0])
    //this.resultList = this.otherResults.getAnswers;
    //console.log("RESULTS LIST" +this.resultList);
  }

}
