import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  quiz: Object;

  // this is a constructor in TS, that defines a private variable, data, of type DataService
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.playQuiz().subscribe(data => {
        this.quiz = data
        console.log(this.quiz);
      }
    );
  }

  /*
  
    1. First, I am importing the DataService at the top.
    2. Then I am creating an instance of it through dependency injection within the constructor() function.
    3. Then I call the method with this.data.firstClick() when the user clicks on the button.

  */


 

}


