var inquirer = require('inquirer');
var Word = require('./Word');


var list = ["dinosaur", "truck", "office", "javascript"];

var select = function() {
    var selection = list[Math.floor(Math.random() * list.length)];
    console.log(selection);
    
}
console.log("DISPLAY TEST" + Word.displayArray);
console.log("display test 2 : " + Word.wordArray);
console.log(Word.hangArray);
console.log("-------------------------");
// console.log(Word.displayArray);
// console.log("------------------");
// console.log(Word.hangArray);

var userGuess = "";
var remaining;
// var totalGuess;


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
    console.log("Welcome. Your word: " + Word.displayArray);
    main();

}

var keepPlaying = function() {
    main();
}

var main = function() {
    if (remaining > 0) {
        inquirer
        .prompt([
        {
            type: "value",
            name: "playerGuess",
            message: "Guess a letter: "
        }
        ])
        .then(function(answer) {
            userGuess = answer.playerGuess;
            console.log("***************USER GUESS")
            console.log(userGuess);
            for (var i=0;i<Word.hangArray.length;i++) {
                if (userGuess == Word.hangArray[i].character) {
                    Word.hangArray[i].guess = true;
                    remaining--;
                    console.log("TEST HANGARRAY: " + Word.hangArray[i].guess);

                    console.log("TEST HANGARRAY: " + Word.hangArray[i].character);
                    console.log("test remaining: " + remaining);
                    Word.createDisplay(Word.hangArray);
                    console.log(" ----------");
                    console.log(Word.hangArray);
                }
            }
            console.log("TEST_TEST");
            console.log(Word.displayArray)
            keepPlaying();
        });
    } else {
        console.log("CONGRATULATIONS! YOU GUESSED ALL THE LETTERS!")
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

