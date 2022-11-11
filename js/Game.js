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

  /**
   * checks for winning move
   * @returns {boolean} True if game has been won; false if game wasn't won
   */
  /* use the class name 'hide' to ascertain whether player has won. If there is no 'hide' class,
it means player has essentially won (see showMatchedLetter()) re removing hide if letter found */
  checkForWin() {
    if (document.getElementsByClassName("hide").length == 0) {
      return true;
    } else return false;
  }

  /* when removeLife is called, liveHeart.png is replaced with lostHeart.png in 
    element position 0 (this.missed = 0)(with class name 'tries'). Variable 'missed' at the same time 
    increments by 1. When removeLife is then called again, variable missed (counter) also then acts 
    as the index number for the class 'tries' element position. Then, if missed = 5, call gameOver() method */
  /**
   * increases the value of the missed property
   * removes a life from the scoreboard
   * checks if player has remaining lives and ends game if player is out of said lives
   */
  removeLife() {
    const missedHearts = document
      .getElementsByClassName("tries")
      [this.missed].getElementsByTagName("img")[0];
    missedHearts.src = "images/lostHeart.png";
    this.missed += 1;

    //figure out where this comes into play within the method itself.
    if (this.missed == 5) {
      this.gameOver();
    }
  }
  /**
   * displays game over message
   * @param {boolean} gameWon - whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    const winLoseMessage = document.getElementById("game-over-message");

    overlay.style.display = "block";

    //taking out the if(this.missed < 5) as conditional and rather checking gameWon param for true or false
    if (gameWon) {
      winLoseMessage.innerHTML = "Well done, you've won!";
      overlay.className = "win";
    } else if (!gameWon) {
      //doubt this else if is necessary...potentially remove.
      winLoseMessage.innerHTML = "Sorry, you've lost! Try again!";
      overlay.className = "lose";
    }
  }
  /**
   * handles onscreen keyboard button clicks
   * @param {HTMLButtonElement} button - the clicked button element
   */
  handleInteraction(button) {
    const checker = this.activePhrase.checkLetter(button); //maybe change checker variable name...
    if (checker) {
      this.activePhrase.showMatchedLetter(button);
      this.checkForWin();
      if(this.checkForWin() == true)
      {
        const gameWon = true;
        this.gameOver(gameWon);
      }
    } else if (!checker) {
      this.removeLife();
    }
  }
}
