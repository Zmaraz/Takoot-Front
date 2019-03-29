import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quizQuestions'
})
export class QuizQuestionsPipe implements PipeTransform {

  transform(value: any, args?: any): any {


    console.log("fjdsnfjksdfhsjdkf  " + value)

    return null;
  }

}
