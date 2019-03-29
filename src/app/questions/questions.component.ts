import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { QuestionService } from '../question.service';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  // this is for generating a question from the API
  // these need to remain separate!!!!
  question: Object;

  // these are for creating a quiz
  theQuiz: Quiz;
  theQuestion: Question;
  theAnswer: Answer;

  constructor(private results: DataService, private questions:QuestionService) { }

  ngOnInit() {
  }

  // calls the API
  getQuestion() {
    this.results.generateQuestion().subscribe(results => {
      this.question = results;
      console.log(results);
    });
  }

  // creates a Quiz
  createQuiz() {

    let title = (<HTMLInputElement>document.getElementById('quizTitle')).value;
    let dateCreated = String(new Date());
    let dateLastUpdated = dateCreated;
    let categoryId = Number((<HTMLInputElement>document.getElementById('category')).value);
    let difficultyId = Number((<HTMLInputElement>document.getElementById('difficulty')).value);
    let defaultId = 2;

    this.theQuiz = new Quiz (title, dateCreated, dateLastUpdated, categoryId, difficultyId, defaultId);
    console.log(this.theQuiz);

    this.questions.create(this.theQuiz);
    
  }

  // creates a Question
  createQuestion1() {
    let quest = (<HTMLInputElement>document.getElementById('quest1')).value;
    this.theQuestion = new Question(quest);
    console.log(this.theQuestion);
    this.questions.createQuest(this.theQuestion);
  }

  createQuestion2() {
    let quest = (<HTMLInputElement>document.getElementById('quest2')).value;
    this.theQuestion = new Question (quest);
    console.log(this.theQuestion);
    this.questions.createQuest(this.theQuestion);
  }
  createQuestion3() {
    let quest = (<HTMLInputElement>document.getElementById('quest3')).value;
    this.theQuestion = new Question (quest);
    console.log(this.theQuestion);
    this.questions.createQuest(this.theQuestion);
  }
  createQuestion4() {
    let quest = (<HTMLInputElement>document.getElementById('quest4')).value;
    this.theQuestion = new Question (quest);
    console.log(this.theQuestion);
    this.questions.createQuest(this.theQuestion);
  }
  createQuestion5() {
    let quest = (<HTMLInputElement>document.getElementById('quest5')).value;
    this.theQuestion = new Question (quest);
    console.log(this.theQuestion);
    this.questions.createQuest(this.theQuestion);
  }



  //create answers for question 1
  createAnswer1() {
    let correctAns = (<HTMLInputElement>document.getElementById('correct-quest-1')).value;
    this.theAnswer = new Answer (correctAns, 0);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer2() {
    let wrongAns1 = (<HTMLInputElement>document.getElementById('incorrect1-quest-1')).value;
    this.theAnswer = new Answer (wrongAns1, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer3() {
    let wrongAns2 = (<HTMLInputElement>document.getElementById('incorrect2-quest-1')).value;
    this.theAnswer = new Answer (wrongAns2, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer4() {
    let wrongAns3 = (<HTMLInputElement>document.getElementById('incorrect3-quest-1')).value;
    this.theAnswer = new Answer (wrongAns3, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  //create answers for question 2
  createAnswer5() {
    let correctAns = (<HTMLInputElement>document.getElementById('correct-quest-2')).value;
    this.theAnswer = new Answer (correctAns, 0);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer6() {
    let wrongAns1 = (<HTMLInputElement>document.getElementById('incorrect1-quest-2')).value;
    this.theAnswer = new Answer (wrongAns1, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer7() {
    let wrongAns2 = (<HTMLInputElement>document.getElementById('incorrect2-quest-2')).value;
    this.theAnswer = new Answer (wrongAns2, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer8() {
    let wrongAns3 = (<HTMLInputElement>document.getElementById('incorrect3-quest-2')).value;
    this.theAnswer = new Answer (wrongAns3, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }


  //create answers for question 3
  createAnswer9() {
    let correctAns = (<HTMLInputElement>document.getElementById('correct-quest-3')).value;
    this.theAnswer = new Answer (correctAns, 0);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  // testing, these don't work
  createAnswer10() {
    let wrongAns1 = (<HTMLInputElement>document.getElementById('incorrect1-quest-3')).value;
    this.theAnswer = new Answer (wrongAns1, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer11() {
    let wrongAns2 = (<HTMLInputElement>document.getElementById('incorrect2-quest-3')).value;
    this.theAnswer = new Answer (wrongAns2, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer12() {
    let wrongAns3 = (<HTMLInputElement>document.getElementById('incorrect3-quest-3')).value;
    this.theAnswer = new Answer (wrongAns3, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer13() {
    let correctAns = (<HTMLInputElement>document.getElementById('correct-quest-4')).value;
    this.theAnswer = new Answer (correctAns, 0);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer14() {
    let wrongAns1 = (<HTMLInputElement>document.getElementById('incorrect1-quest-4')).value;
    this.theAnswer = new Answer (wrongAns1, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer15() {
    let wrongAns2 = (<HTMLInputElement>document.getElementById('incorrect2-quest-4')).value;
    this.theAnswer = new Answer (wrongAns2, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer16() {
    let wrongAns3 = (<HTMLInputElement>document.getElementById('incorrect3-quest-4')).value;
    this.theAnswer = new Answer (wrongAns3, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  //question 5 answers
  createAnswer17() {
    let correctAns = (<HTMLInputElement>document.getElementById('correct-quest-5')).value;
    this.theAnswer = new Answer (correctAns, 0);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer18() {
    let wrongAns1 = (<HTMLInputElement>document.getElementById('incorrect1-quest-5')).value;
    this.theAnswer = new Answer (wrongAns1, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer19() {
    let wrongAns2 = (<HTMLInputElement>document.getElementById('incorrect2-quest-5')).value;
    this.theAnswer = new Answer (wrongAns2, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

  createAnswer20() {
    let wrongAns3 = (<HTMLInputElement>document.getElementById('incorrect3-quest-5')).value;
    this.theAnswer = new Answer (wrongAns3, 1);
    console.log(this.theQuestion);
    this.questions.createAns(this.theAnswer);
  }

}
