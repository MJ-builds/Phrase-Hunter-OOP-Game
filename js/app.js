/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//TESTING
const game = new Game();

const logPhrase = (phrase) => {

    console.log(`Phrase - phrase:`, phrase.phrase);

};

logPhrase(game.getRandomPhrase());
