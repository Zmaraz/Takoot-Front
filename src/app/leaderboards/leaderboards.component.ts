import { Component, OnInit } from '@angular/core';
import { QuizScoreService } from '../quiz-score.service';
import { Score } from '../models/score';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent implements OnInit {

  score: Score;
  results: Object;
  
  constructor(private scores: QuizScoreService) { }

  ngOnInit() {
    console.log('in leaderboards()')
    this.getAllScores();
  }

  getAllScores(){
    console.log('in getAllScores()')
    this.scores.getScore().subscribe(scores =>{
      this.results= scores["body"];
      console.log(this.results);
    })
  }
}
