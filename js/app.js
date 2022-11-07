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
