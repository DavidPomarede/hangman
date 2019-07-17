var Letter = function(character, guess) {
    this.character = character;
    this.guess = guess;
    this.returnGuessed = function() {
        if (this.guess) {
            console.log(this.character);
            return this.character
        } else {
            console.log("____");
            return "_";
        }
    };
    this.charCheck = function(character) {
        if (character === this.character) {
            console.log("true? " + guess);
            return guess = true;
        } else {
            console.log(guess);
            return guess = false;

        }
    }
};

// var A = new Letter("A", false);
// A.charCheck();
// A.returnGuessed();

module.exports = Letter;