var Letter = require('./Letter');
var hangArray = [];

var Randomword = function() {
    this.newWordArray = [];
    this.returnArray = function(input) {
        this.newWordArray = [];
        var letterSelect;
        var wordArray = [];
        for (let i = 0; i < input.length; i += 1) {
            wordArray.push(input.charAt(i));
        }
        hangArray = [];
        for (let i = 0; i < wordArray.length; i++) {
            letterSelect = new Letter(wordArray[i], false);
            hangArray.push(letterSelect);
        }
        this.newWordArray = hangArray;
    };
};

module.exports = {
    Randomword: Randomword,
};