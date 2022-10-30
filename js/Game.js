/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//create the Game class
class Game {
    //Game class parameters (outside of constructor)
    //see Step 3
    missed = 0;
    phrases = [ 
        {phrase: 'Life is like a box of chocolates'},
        {phrase: 'Home is where the heart is'},
        {phrase: 'Fly away chariot'},
        {phrase: 'Gone with the wind'},
        {phrase: 'Seven years in Tibet'}
    
    ];
    activePhrase = null;

    constructor () {
    }
/* Selects random phrase from phrases property
@return {object} Phrase object chosen to be used */ 
getRandomPhrase() {
    const randomPhrase = Math.floor(Math.random()* this.phrases.length);
    const phrase = this.phrases[randomPhrase];
    return phrase;
}

}