import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-user-quizzes',
  templateUrl: './user-quizzes.component.html',
  styleUrls: ['./user-quizzes.component.css']
})
export class UserQuizzesComponent implements OnInit {

  userQuizzes: Object;

  constructor(private otherResults: GamesService) { }

  ngOnInit() {
    this.otherResults.getQuizzes().subscribe(otherResults => {
      this.userQuizzes = otherResults;
      console.log(otherResults);
    });
  }

}
