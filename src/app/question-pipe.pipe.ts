import { Pipe, PipeTransform } from '@angular/core';

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
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

  private isQuotes(word: string): boolean {
    let prepositions = ['"', 'the', 'a', 'for', 'over', 'by', 'in', 'with', 'through'];
    console.log(word + ' ' + prepositions.includes(word.toLowerCase()));
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return (word.substring(0, 1).toUpperCase() + word.substring(1, word.length).toLowerCase());
  }

}
