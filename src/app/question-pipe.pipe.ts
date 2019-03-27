import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

@Pipe({
  name: 'questionPipe'
})
export class QuestionPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('in pipe')
    if(!value) {
      console.log("value is null"); 
      return null;
    }
  
    // for (let i = 0; i < 11; i++)
    //   if (value.includes('&quot;')) {
    //     this.removeQuotes2(value, i);
    //   }
    
    
    let words: string[] = value.split(' ');

    for(let i = 0; i < words.length; i++) {
      let word = words[i];
      
      // if(i >= 0 && this.isQuotes(word)) {
      //   words[i] = word;
      // } else {
      //   words[i] = this.toQuestionPipe(word);
      // }

      if (i >= 0 && word.includes('&quot;')) {
        console.log(word + " includes &quot;")
        this.removeQuotes(word);
        //word.replace('&quot;', '"');

      } 
    }

    return words.join(' ');
  }

  private removeQuotes2(value: string, i: number): string {

    console.log("in if statement if the value contains a &quot; :  ");
        let quoteIndex = value.indexOf("&quot;");
        console.log("index of the &quot; is :   " + quoteIndex);
        //document.getElementById("questionId").innerHTML = value.replace('&quot;', '"');
        //console.log(value.replace('&quot;', '"'));

        //console.log(value.replace(value.substring(quoteIndex, quoteIndex + 6), '"'));
        console.log(value);
        return document.getElementById("questionId").innerHTML = value.replace('&quot;', '"');
        //return document.getElementsByTagName("P")[i].innerHTML = value.replace('&quot;', '"');
  }

  private removeQuotes(word: string) {
    console.log(" in removeQuotes()");
    let quoteIndex = word.indexOf("&quot;");
    console.log("index of the &quot; is :   " + quoteIndex);
    let remainingWord = word.substring(7);
    console.log("this is the remainder of the word that needs to be concat  " + remainingWord);
    //console.log(word.replace('&quot;', '"'));
    console.log("trying to replace the word using substring  " + word.replace(word.substring(0,6), '"').concat(word.substring(7)));
    //document.getElementById("questionId").innerHTML = word.replace('&quot;', '"');
    // let quote = ['&quot;'];
    //console.log(word + ' ' + quote.includes(word));
  
  }

  private toQuestionPipe(word: string): string {
    console.log(word);
    return (word.substring(0, 6) + word.substring(1, word.length).toLowerCase());
  }

}
