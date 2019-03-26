import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

@Pipe({
  name: 'questionPipe'
})
export class QuestionPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('in pipe')
    if(!value) return null;
    
    let words: string[] = value.split(' ');

    for(let i = 0; i < words.length; i++) {
      let word = words[i];
      
      if(i > 0 && this.isQuotes(word)) {
        words[i] = word;
      } else {
        words[i] = this.toQuestionPipe(word);
      }
    }

    return words.join(' ');
  }

  private isQuotes(word: string): boolean {
    let quote = ['&quot;'];
    console.log(word + ' ' + quote.includes(word));
    return quote.includes(word.toLowerCase());
  }

  private toQuestionPipe(word: string): string {
    console.log(word);
    return (word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase());
  }

}
