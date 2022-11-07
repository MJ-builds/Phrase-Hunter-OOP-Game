/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

//create the Phrase class
class Phrase {

// phrase = this.phrase; //not sure if this is correct

    constructor (phrase) {
        
        this.phrase = phrase.toLowerCase(); //revisit later
    }

    //method within Phrase
    addPhraseToDisplay() {

        const letterArray = this.phrase.split(''); //not sure if correct. NB. Check that working
        //console.log(phraseLetters); for testing
        let html = `<ul>`;

letterArray.forEach(element => {
    if(element ===" ") {
        html += `<li class="space">${element}</li>`;
    }
    else html += `<li class="hide letter ${element}">${element}</li>`
});
    //console.log(html); for testing
    html += `</ul>`;
    return document.getElementById('phrase').innerHTML = html;

    }
checkLetter(letter) {

    const letterArray = this.phrase.split(''); //not sure if correct. NB. Check that working
    letterArray.forEach(element => {
        if(element === letter) {
            console.log('true'); //for testing
            return true;
        }
        else 
        console.log('false'); //for testing
        return false; //not sure if correct or in right place
    });
}

showMatchedLetter(letter) {
    let unhide = document.getElementById('phrase'); //experimental
}

}
