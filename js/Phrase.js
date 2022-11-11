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

  /**
   * checks if passed letter is in phrase
   * @param {string} letter - letter to check
   * @returns bool
   */
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } //else return false; //unsure if necessary
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param {string} letter - letter to display
   */
  showMatchedLetter(letter) {
    // select all elements that have the user selected letter
    const matchedLetter = document.querySelectorAll("." + letter);

    //Remove the hide class and add the show class (which then 'reveals' the correct letter in the square)
    matchedLetter.forEach((ml) => {
      ml.classList.remove("hide"); //utilised for the checkForWin() method (Game.js)
      ml.classList.add("show");
    });
  }
}
