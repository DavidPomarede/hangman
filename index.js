var inquirer = require('inquirer');
var Word = require('./Word');
var Letter = require('./Letter');


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
var totalGuess = 10;


// var startOver = function() {
//     for (var j = 0; j<Word.hangArray.length; j++) {
//         if (Word.hangArray[j].guess == false) {
//             main();
//             console.log("test " + Word.hangArray[j]);
//         };
//     }
// }

var startGame = function() {
    // totalGuess = 10;
    remaining = Word.hangArray.length;
    console.log("Welcome. Your word to guess: \n");
    console.log(Word.displayArray.join(' '));
    for (var i=0;i<Word.hangArray.length;i++) {
            Word.hangArray[i].guess = false;
    }
            // Word.wordArray = [];
            // Word.displayArray = [];
            // Word.hangArray = [];
            // Word.selection = "";
            // Word.letterSelect = [];



    Word.startAgain();
    main();

}

var keepPlaying = function() {
    main();
}

var playAgainFunc = function () {
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
            Word.startAgain();
            startGame();
            
        } else {
            return;
        }
    });
};


var main = function() {
    if ((remaining > 0) && (totalGuess > 0)) {
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
            for (var i=0;i<Word.hangArray.length;i++) {
                if (Word.hangArray[i].charCheck(userGuess)) {
                    Word.hangArray[i].guess = true;
                    remaining--;
                    // console.log("TEST HANGARRAY: " + Word.hangArray[i].guess);

                    // console.log("TEST HANGARRAY: " + Word.hangArray[i].character);
                    // console.log("test remaining: " + remaining);
                    // Word.createDisplay(Word.hangArray);
                    Word.displayArray[i] = Word.hangArray[i].character;
                    // console.log(" ----------");
                    // console.log(Word.hangArray);
                }
            }
            // console.log("TEST_TEST");
            console.log(Word.displayArray.join(' '));
            keepPlaying();
        });
    } else if (totalGuess == 0) {
        console.log("You ran out of Guesses!");
        totalGuess = 10;
        playAgainFunc(); 
    } else {
        console.log("CONGRATULATIONS! YOU GUESSED ALL THE LETTERS!");
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

