var inquirer = require('inquirer');
var Word = require('./Word');
// var Letter = require('./Letter');


// var list = ["dinosaur", "truck", "office", "javascript"];

// var select = function() {
//     var selection = list[Math.floor(Math.random() * list.length)];
//     console.log(selection);
    
// }
// console.log("DISPLAY TEST" + Word.displayArray);
// console.log("display test 2 : " + Word.wordArray);
// console.log(Word.hangArray);
// console.log("-------------------------");
// console.log(Word.displayArray);
// console.log("------------------");
// console.log(Word.hangArray);

var userGuess = "";
var remaining;
var totalGuess = 15;


var displayArray = [];


// var wordArray = [];
// var hangArray = [];

// var letterSelect;

// var selection = "";

var throughputIn = Word.throughput;

var list = ["mysql", "programming", "node", "javascript", "react", "jquery", "hypertext", "refactoring", "mongodb", "variable", "function", "constructor", "module"];



// var startOver = function() {
//     for (var j = 0; j<Word.hangArray.length; j++) {
//         if (Word.hangArray[j].guess == false) {
//             main();
//             console.log("test " + Word.hangArray[j]);
//         };
//     }
// }
var selection = "";

var newWord = [];

var startGame = function() {
    // totalGuess = 10;

    displayArray = [];
    newWord = [];
    selection = list[Math.floor(Math.random() * list.length)];
    newWord = new Word.Randomword;
    newWord.returnArray(selection);

    remaining = newWord.newWordArray.length;
    // remaining = Word.hangArray.length;
    // console.log("Welcome. Your word to guess: \n");
    // console.log(Word.displayArray.join(' '));
    // for (var i=0;i<Word.hangArray.length;i++) {
    //         Word.hangArray[i].guess = false;
    // }
            // Word.wordArray = [];
            // Word.displayArray = [];
            // Word.hangArray = [];
            // Word.selection = "";
            // Word.letterSelect = [];




    main();

}

var keepPlaying = function() {
    main();
}

var playAgainFunc = function () {
    displayArray = [];
    // Word.wordArray = [];
    // Word.array = [];
    // Word.hangArray = [];
    // Word.wordArray = [];
    inquirer
    .prompt([
    {
        type: "value",
        name: "playAgain",
        message: "Would you like to play again (y/n)?"
    }
    ])
    .then(function(answer) {
        if (answer.playAgain.toLowerCase() == "y") {
            // Word.wordArray = [];
            // Word.displayArray = [];
            // Word.hangArray = [];
            // Word.selection = "";
            // Word.letterSelect = [];
            // Word.reset();
            // Word.random();

            // Word.array(Word.selection);
            // console.log("1: " + Word.array(Word.selection));
            // Word.createLetters(Word.wordArray);
            // console.log("2: " + Word.createLetters(Word.wordArray));
            // Word.createDisplay(Word.hangArray);
            // console.log("3: " + Word.createDisplay(Word.hangArray));
            // console.log("display array: " + Word.displayArray);
            // Word.array = [];
            // for (var i = 0; i<Word.hangArray.length;i++) {
            //     Word.hangArray[i].guess = false;
            // };
            // Word.displayArray = [];
            // Word.startAgain();
            startGame();
            
        } else {
            return;
        }
    });
};


var main = function() {
    if ((remaining > 0) && (totalGuess > 0)) {

        displayArray = [];
        for (let i = 0; i < newWord.newWordArray.length; i++) {
            displayArray.push(newWord.newWordArray[i].returnGuessed());
        };
        console.log("displayArray: "  + displayArray.join(' '));
        inquirer
        .prompt([
        {
            type: "value",
            name: "playerGuess",
            message: "Guess a letter: "
        }
        ])
        .then(function(answer) {
            totalGuess--;
            userGuess = answer.playerGuess;
            // console.log("***************USER GUESS")
            // console.log(userGuess);

            displayArray = [];
            for (var i=0;i<newWord.newWordArray.length;i++) {
                if (newWord.newWordArray[i].charCheck(userGuess)) {
                    newWord.newWordArray[i].guess = true;
                    console.log("CORRECT!!");
                    remaining--;
                    // console.log("TEST HANGARRAY: " + Word.hangArray[i].guess);

                    // console.log("TEST HANGARRAY: " + Word.hangArray[i].character);
                    // console.log("test remaining: " + remaining);
                    // Word.createDisplay(Word.hangArray);
                    displayArray[i] = newWord.newWordArray[i].character;
                    // console.log(" ----------");
                    // console.log(Word.hangArray);
                }
            }
            // console.log("TEST_TEST");

            // console.log("test6: " + displayArray.join(''));
            keepPlaying();
        });
    } else if (totalGuess == 0) {
        console.log("You ran out of Guesses!");
        displayArray = [];
        newWord.newWordArray = [];
        totalGuess = 10;
        playAgainFunc(); 
    } else if (remaining == 0) {
        console.log("CONGRATULATIONS! YOU GUESSED ALL THE LETTERS!");
        newWord.newWordArray = [];
        totalGuess = 10;
        playAgainFunc();
    }
}






// for (var j = 0; j<Word.hangArray.length; j++) {
//     if (Word.hangArray[j].guess = false) {
//         main();
//         // return Word.hangArray;
//         console.log("test " + Word.hangArray[j]);
//     };
// }

startGame();

