export class Answer {
    answerId: number;
    answer: string;
    answerValue: number; 

    constructor(answer: string, answerValue: number) {
        this.answer = answer;
        this.answerValue = answerValue;
    }
}