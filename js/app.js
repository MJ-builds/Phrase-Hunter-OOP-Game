/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
//may need to change variable name later on (maybe just to start)
const startReset = document.getElementById("btn__reset");

//on click, creat a new instance of Game class, and call startGame() method.
startReset.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});

//select all elements with 'key' class (ie all key buttons)
const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener("click", (e) => {
        //call the handleInteraction method to handle keystrokes etc.
      game.handleInteraction(e.target); 
      
    });
  });