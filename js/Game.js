/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//create the Game class
class Game {
  constructor() {
    //Game class parameters
    this.missed = 0;
    this.phrases = [
      "A piece of cake",
      "Call it a day",
      "Once in a blue moon",
      "The best of both worlds",
      "A blessing in disguise"  
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
  gameReset() {
    //reset game elements at the same time (from prior instances)
    //Needs to be streamlined/improved. prototyped for now
    const chosen = document.querySelectorAll(".chosen");
    const wrong = document.querySelectorAll(".wrong");
    const tries = document.querySelectorAll("img[alt='Heart Icon']");
    const overlay = document.getElementById("overlay");
    const title = document.getElementById("title_status");
    document.getElementById("btn__reset").innerHTML = 'Play Again';
    overlay.className = "start";
    title.className = "title";

    for (let i = 0; i < tries.length; i++) {
      tries[i].src = "images/liveHeart.png";
    }

    //helper function
    function forEachHelper(element, toRemove, elementLooped = "element") {
      element.forEach((elementlooped) => {
        elementlooped.classList.remove(toRemove);
        elementlooped.classList.add("key");
        elementlooped.disabled = false;
      });
    }
    forEachHelper(chosen, "chosen");
    forEachHelper(wrong, "wrong");
  }

  /*method that hides the start screen overlay, sets the activePhrase property to a random phrase,
    and calls the addPhraseToDisplay() method on the activePhrase property */
  startGame() {
    this.gameReset();

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
  removeLife() {
    if(!this.checkForWin() && this.missed <=5 ) {
    const missedHearts = document
      .getElementsByClassName("tries")
      [this.missed].getElementsByTagName("img")[0];
    missedHearts.src = "images/lostHeart.png";
    this.missed += 1;
    //figure out where this comes into play within the method itself.
    if (this.missed == 5) {
        this.missed = 0;
      this.gameOver();
    }
  }
}
  /**
   * displays game over message
   * @param {boolean} gameWon - whether or not the user won the game
   */
  gameOver(gameWon) {
    const overlay = document.getElementById("overlay");
    const winLoseMessage = document.getElementById("game-over-message");
    const title = document.getElementById("title_status");
    overlay.style.display = "flex";

    function winLose(message, cName) {
      winLoseMessage.innerHTML = message;
      overlay.className = cName;
    }
    //taking out the if(this.missed < 5) as conditional and rather checking gameWon param for true or false
    if (gameWon) {
      winLose("Well done, you've won!", "win");
      title.className = "title_win";
    } else if (!gameWon) {
      winLose("Sorry, you've lost!", "lose");
      title.className = "title_lose";
    }
  }
  /**
   * handles onscreen keyboard button clicks
   * @param {HTMLButtonElement} button - the clicked button element
   */
  //CLEAN THIS UP...
  handleInteraction(button) {
    const checker = this.activePhrase.checkLetter(button.innerHTML);
    if (checker) {
      //if checkletter method call = true, call showMatchedLetter method
      this.activePhrase.showMatchedLetter(button.innerHTML);
      //checks if the player has revealed all of the letters in the active phrase
      this.checkForWin();
      /* if the phrase includes the guessed letter, the 'chosen' CSS class is added 
      and selected button is disabled */
      button.className = "chosen";
      button.disabled = true;

      //if checkForWin method is true (see logic in method itself), gameWon = true and game is won.
      if (this.checkForWin() == true) {
        const gameWon = true;
        this.gameOver(gameWon);
      }
    } else if (!checker) {
      //if checkletter method call = false, call removelife method
      this.removeLife();
      /* if the phrase does not include the guessed letter, the 'wrong' CSS class is added 
      and selected button is disabled */
      button.className = "wrong";
      button.disabled = true;
    }
  }
}
