import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { GamesService } from '../games.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  theGames: Object;
  theQuestions: Object;
  theAnswers: Object;
 
  // this is a constructor in TS, that defines a private variable, data, of type DataService
  constructor(private http:HttpClient, private games: GamesService) { }

  ngOnInit() {
    
  }

  

  /*
  
    1. First, I am importing the DataService at the top.
    2. Then I am creating an instance of it through dependency injection within the constructor() function.
    3. Then I call the method with this.data.firstClick() when the user clicks on the button.

  */

 // here, call this method in ngOnInit and parse through it the same way you get questions from the API
 getAllQuizzes() {
  this.games.getQuizzes().subscribe(results => {
    this.theGames = results;
    console.log(results);
  });
}

getAllQuestions() {
  this.games.getQuestions().subscribe(results => {
    this.theQuestions = results;
    console.log(results);
  });
}

getAllAnswers() {
  this.games.getAnswers().subscribe(results => {
    this.theAnswers = results;
    console.log(results);
  });
}

 

}


