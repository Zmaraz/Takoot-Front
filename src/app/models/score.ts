export class Score {
    score: number;
    quizTitle: string;
    username: string;

    constructor(score: number, quizTitle: string, username: string){
        this.score = score;
        this.quizTitle = quizTitle;
        this.username = username;  
    }
}