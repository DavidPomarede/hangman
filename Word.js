var Letter = require('./Letter');
var displayArray = [];
// var Word = function(selection) {
    // this.selection = selection;
    // this.wordArray = [];
    // this.newArray 
    
    var wordArray = [];
    var hangArray = [];

    var letterSelect;

    var selection = "";



    var list = ["dinosaur", "truck", "office", "javascript"];

    // var reset = function() {
    //     wordArray = [];
    //     hangArray = [];
    //     displayArray = [];
    //     selection = "";
    // };



    var createDisplay = function(input) {
        displayArray = [];
        for (var i = 0; i<input.length; i++) {
            input[i].guess = false;
        };
        for (let i = 0; i < input.length; i++) {
            // if (input[i].guess) {
                // console.log(input[i].character);
                // return input[i].character;
                displayArray.push(input[i].returnGuessed());
            // } 
            // else {
            //     // console.log("TESTING_");
            //     displayArray.push("_");
            //     // return "_";
            // };
        }
        // console.log("testing3: " + displayArray);
        return displayArray;
    };





    var createLetters = function(input) {
        hangArray = [];
        for (let i = 0; i < input.length; i++) {
            // console.log(input[i]);
            letterSelect = new Letter(input[i], false);
            hangArray.push(letterSelect);
        }
        // createDisplay(hangArray);
        // console.log("testing2: " + hangArray);
        // console.log("testing2 cont: " + hangArray[1].guess);
        return hangArray;
    };







    var array = function(letter) {
        wordArray = [];
        for (let i = 0; i < letter.length; i += 1) {
            wordArray.push(letter.charAt(i));
        }
        // createLetters(wordArray);

    // console.log("testing testing testing" + wordArray);
    return wordArray;

    };



    var random = function() {
        // reset();
        wordArray = [];
        hangArray = [];
        displayArray = [];
        selection = "";

        selection = list[Math.floor(Math.random() * list.length)];
        // console.log(selection);  
        // array(selection);      
        return selection;
    };


    var startAgain = function() {
        wordArray = [];
        for (var i = 0; i<hangArray.length;i++) {
            hangArray[i].guess = false;
        };
        displayArray = [];
        selection = "";
        letterSelect = {};
        random();
        array(selection);
        createLetters(wordArray);
        createDisplay(hangArray);
    };


        startAgain();











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
    wordArray: wordArray,
    random: random,
    array: array,
    createLetters: createLetters,
    createDisplay: createDisplay,
    selection: selection,
    // reset: reset,
    letterSelect: letterSelect,
    startAgain: startAgain,

};