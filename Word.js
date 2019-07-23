var Letter = require('./Letter');
var displayArray = [];
// var Word = function(selection) {
    // this.selection = selection;
    // this.wordArray = [];
    // this.newArray 
    
    var wordArray = [];
    var hangArray = [];
    var array = function(letter) {
        for (var i = 0; i < letter.length; i += 1) {
            wordArray.push(letter.charAt(i));
        }
    };

    array("more");

    var createLetters = function(input) {
        for (let i = 0; i < input.length; i++) {
            // console.log(input[i]);
            hangArray.push(new Letter(input[i], false));

        }

    }

    createLetters(wordArray);

    hangArray[1].guess = true;
    var createDisplay = function(input) {
        displayArray = [];
        for (let i = 0; i < input.length; i++) {
            if (input[i].guess) {
                // console.log(input[i].character);
                // return input[i].character;
                displayArray.push(input[i].character);
            } 
            else {
                // console.log("TESTING_");
                displayArray.push("_");
                // return "_";
            };
        }
        // console.log(displayArray.join(" "));
    };

    createDisplay(hangArray);




    // console.log(wordArray);
    // console.log(hangArray);



    // this.addWord = function(character) {
        
    // };

    // this.showWord = function() {
    //     var string = "";
    //     for (var i =0; i<this.newLetters.length; i++) {
    //         if ()


    //     }
    // }
// }


module.exports = {
    hangArray: hangArray, 
    displayArray: displayArray,
    createDisplay: createDisplay,

};