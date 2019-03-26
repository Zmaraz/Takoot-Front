import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionPipe'
})
export class QuestionPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
