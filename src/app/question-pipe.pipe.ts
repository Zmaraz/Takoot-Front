import { Pipe, PipeTransform } from '@angular/core';
import { Quote } from '@angular/compiler';

@Pipe({
  name: 'questionPipe'
})
export class QuestionPipePipe implements PipeTransform {

  transform(value: any, args: any ): any {
    console.log('in pipe')
    if(!value) {
      console.log("value is null"); 
      return null;
    }
    
    

    // let i = 0;
    // console.log(i++);
    //console.log(value);
    
    
    
    
    //let words: string[] = value.split(' ');
    let valueString: string  = value;
    console.log(valueString);
    //let i = 0;
      if (valueString.includes('&quot;')) {
        //console.log("in if statement" + valueString);
        //valueString.replace(/'&quot;'/g, '"');
        document.getElementById("questionId").innerHTML = valueString.replace(/'&quot;'/g, '"');;
        console.log(valueString);
        //this.removeQuotes2(valueString);
        //return valueString;
      }

      if (valueString.includes('&#039;')) {
        //console.log("in if statement" + valueString);
        valueString.replace(/"&#039;"/g, "'");
        document.getElementById("questionId").innerHTML = valueString.replace('&#039;', "'");
        console.log(valueString);
        //this.removeQuotes2(valueString);
        //return valueString;
      }


    // for(let i = 0; i < words.length; i++) {
    //   let word = words[i];
      
    //   // if(i >= 0 && this.isQuotes(word)) {
    //   //   words[i] = word;
    //   // } else {
    //   //   words[i] = this.toQuestionPipe(word);
    //   // }

    //   if (i >= 0 && word.includes('&quot;')) {
    //     console.log(word + " includes &quot;")
    //     this.removeQuotes(word);
    //     //word.replace('&quot;', '"');

    //   } 
    // }

    return valueString;
    //return words.join(' ');
    

    
  }
  private removeQuotes2(valueString: string): string {

    //console.log("in if statement if the value contains a &quot; :  ");
        let quoteIndex = valueString.indexOf("&quot;");
        valueString.replace('&quot;', '"');
        // valueString.replace('&quot;', '"');
        // valueString.replace('&quot;', '"');
        // valueString.replace('&quot;', '"');
        // valueString.replace('&quot;', '"');
        // valueString.replace('&quot;', '"');
        console.log("inside removeQuotes2() after changed quotes :  " + valueString.replace('&quot;', '"'));
        //document.getElementById("questionId").innerHTML = valueString;
        let valueS = (<HTMLInputElement>document.getElementById('questionId')).value;
        //console.log("index of the &quot; is :   " + quoteIndex);
        //document.getElementById("questionId").innerHTML = value.replace('&quot;', '"');
        //console.log(value.replace('&quot;', '"'));


        //console.log(value.replace(value.substring(quoteIndex, quoteIndex + 6), '"'));
        console.log("this is valueS :  " + valueS);
        return valueString;
        //return valueString.replace('&quot;', '"');
        //return document.getElementById("questionId").innerHTML = valueString.replace('&quot;', '"');
  }
  

  // private removeQuotes(word: string) {
  //   console.log(" in removeQuotes()");
  //   let quoteIndex = word.indexOf("&quot;");
  //   console.log("index of the &quot; is :   " + quoteIndex);
  //   let remainingWord = word.substring(7);
  //   console.log("this is the remainder of the word that needs to be concat  " + remainingWord);
  //   //console.log(word.replace('&quot;', '"'));
  //   console.log("trying to replace the word using substring  " + word.replace(word.substring(0,6), '"').concat(word.substring(7)));
  //   //document.getElementById("questionId").innerHTML = word.replace('&quot;', '"');
  //   // let quote = ['&quot;'];
  //   //console.log(word + ' ' + quote.includes(word));
  
  // }

  // private toQuestionPipe(word: string): string {
  //   console.log(word);
  //   return (word.substring(0, 6) + word.substring(1, word.length).toLowerCase());
  // }

}
