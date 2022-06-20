class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const newString = string.split(" ");
    let newWords = [];
    //console.log(newString)
    newString.forEach((word) => {
      //console.log(word)
      if (
        word != "the" &&
        word != "a" &&
        word != "an" &&
        word != "but" &&
        word != "of" &&
        word != "and" &&
        word != "for" &&
        word != "at" &&
        word != "by" &&
        word != "from"
      ) {
        
        newWords.push(word.charAt(0).toUpperCase() + word.slice(1));
      }

      //console.log(newWord)
    });
    //console.log(newWords)
    let newSentence = newWords.join(" ");
    return newSentence;
  }
  // static titleize(string){
  //   const newString = string.split(" ");
  //   newString.forEach(word => {
  //     if (word !='the' && word != 'a' && word != 'an' && word != 'but' && word != 'of' && word != 'and' && word != 'for' && word != 'at' && word != 'by' && word !='from'){
  //       word.charAt(0).toUpperCase() + word.slice(1).join(',', ' ');
  //     }
  //   });
  // }
}
