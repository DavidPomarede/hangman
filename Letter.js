var Letter = function(character, guess) {
    this.character = character;
    this.guess = guess;
    this.returnGuessed = function() {
        if (this.guess) {
            return this.character
        } else {
            return "_";
        }
    };
    this.charCheck = function(character) {
        if (character === this.character) {
            return guess = true;
        } else {
            return guess = false;
        }
    }
};

module.exports = Letter;