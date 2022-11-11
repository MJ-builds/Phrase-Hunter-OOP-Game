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
    //testing - ultimately i think we should return only the actual key but following guide for now.
      //console.log(e.target.outerHTML) //testing only
      /*again, not sure if this is correct - issue could sit 
      with method. Easy to amend if needed down the line */
      game.handleInteraction(e.target); 
      
    });
  });