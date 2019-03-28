import { Component, OnInit } from '@angular/core';
import { QuizScoreService } from '../quiz-score.service';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {

  score: Object;
  
  constructor(private scores: QuizScoreService) { }

  ngOnInit() {
    console.log('in leaderboards()')
    console.log(this.scores);
  }

  getAllScores(){
    console.log('in getAllScores()')
    this.scores.getScore().subscribe(scores =>{
      this.score= scores;
      console.log(this.score);
    })
  }
}
