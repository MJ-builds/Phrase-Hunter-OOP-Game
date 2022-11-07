/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//create the Game class
class Game {
  constructor() {
    //Game class parameters
    this.missed = 0;
    this.phrases = [
      "Pacific Ocean",
      "India",
      "Canada",
      "Brazil",
      "South Africa",
      "New Delhi",
    ];
    this.activePhrase = null;
  }
  /* Selects random phrase from phrases property
@return {object} Phrase object chosen to be used */
  getRandomPhrase() {
    //think about shortening this to one variable and line of code
    const randomPhrase = Math.floor(Math.random() * this.phrases.length);
    const phrase = this.phrases[randomPhrase];
    return phrase;
  }
  startGame() {
    //hide the start screen overlay (div element with id of 'overlay')
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";

    //create new instance of Phrase class and set it to this.activePhrase (null becomes a random phrase)
    this.activePhrase = new Phrase(this.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }
  checkForWin() {
    if (document.getElementsByClassName("hide").length == 0) {
      return true;
    } else return false;
  }

  removeLife() {

    /* when removeLife is called, liveHeart.png is replaced with lostHeart.png in 
    element position 0 (this.missed = 0)(with class name 'tries'). Variable 'missed' at the same time 
    increments by 1. When removeLife is then called again, variable missed (counter) also then acts 
    as the index number for the class 'tries' element position */
    const missedHearts = document.getElementsByClassName('tries')[this.missed].getElementsByTagName('img')[0];
    missedHearts.src="images/lostHeart.png";    
    this.missed +=1;

    //may need to add the gameover method trigger here, which triggers after 5 missed guesses
  }

}
