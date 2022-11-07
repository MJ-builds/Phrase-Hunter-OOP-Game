/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//create the Phrase class
class Phrase {
  // phrase = this.phrase; //not sure if this is correct

  constructor(phrase) {
    this.phrase = phrase.toLowerCase(); //revisit later
  }

  //method within Phrase
  addPhraseToDisplay() {
    //split the random phrase into a new array 'LetterArray' of letters (of the phrase itself)
    const letterArray = this.phrase.split("");

    //create template literal with opening unordered list tag
    let html = `<ul>`;

    //loop through letters of the letterArray variable just created
    letterArray.forEach((element) => {
      if (element === " ") {
        html += `<li class="space">${element}</li>`;
      } else html += `<li class="hide letter ${element}">${element}</li>`;
    });
//wrap the template literal (once looped through) in closing unordered list tag
    html += `</ul>`;
    return (document.getElementById("phrase").innerHTML = html);
  }
  checkLetter(letter) {
    const letterArray = this.phrase.split(""); //not sure if correct. NB. Check that working
    letterArray.forEach((element) => {
      if (element === letter) {
        console.log("true"); //for testing
        return true;
      } else console.log("false"); //for testing
      return false; //not sure if correct or in right place
    });
  }

  showMatchedLetter(letter) {
    let unhide = document.getElementById("phrase"); //experimental
  }
}
