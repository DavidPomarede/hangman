var inquirer = require('inquirer');
var chalk = require('chalk');
var Word = require('./Word');
var userGuess = "";
var remaining;
var totalGuess = 15;
var displayArray = [];
var list = ["mysql", "programming", "node", "javascript", "react", "jquery", "hypertext", "refactoring", "mongodb", "variable", "function", "constructor", "module"];
var selection = "";
var newWord = [];

var startGame = function() {
    console.log(chalk.red("Welcome to Node Hangman! Guess the letters in a random word (related to programming)."));
    displayArray = [];
    newWord = [];
    selection = list[Math.floor(Math.random() * list.length)];
    newWord = new Word.Randomword;
    newWord.returnArray(selection);
    remaining = newWord.newWordArray.length;
    main();
}

var keepPlaying = function() {
    main();
}

var playAgainFunc = function () {
    displayArray = [];
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
        console.log(chalk.bold(displayArray.join(' ')));
        
        inquirer
        .prompt([
        {
            type: "value",
            name: "playerGuess",
            message: chalk.blue("Guess a letter: ")
        }
        ])
        .then(function(answer) {
            totalGuess--;
            userGuess = answer.playerGuess;
            displayArray = [];

            for (var i=0;i<newWord.newWordArray.length;i++) {
                if (newWord.newWordArray[i].charCheck(userGuess)) {
                    newWord.newWordArray[i].guess = true;
                    console.log(chalk.greenBright("CORRECT!!"));
                    remaining--;
                    displayArray[i] = newWord.newWordArray[i].character;
                }
            };

            keepPlaying();
        });
    } else if (totalGuess == 0) {
        console.log(chalk.bold("You ran out of Guesses! The word was " + selection.toUpperCase() + "."));
        displayArray = [];
        newWord.newWordArray = [];
        totalGuess = 10;
        playAgainFunc(); 
    } else if (remaining == 0) {
        console.log(chalk.yellowBright("CONGRATULATIONS! YOU GUESSED ALL THE LETTERS!"));
        newWord.newWordArray = [];
        totalGuess = 10;
        playAgainFunc();
    }
}

startGame();