var inquirer = require('inquirer');
var Word = require('./Word');


var list = ["dinosaur", "truck", "office", "javascript"];

var select = function() {
    var selection = list[Math.floor(Math.random() * list.length)];
    console.log(selection);
    
}

var userGuess = "";
var remaining = 9;

var main = function() {
    inquirer
    .prompt([
    {
        name: "playerGuess",
        message: "Guess a letter: "
    }
    ])
    .then(function(answer) {
        userGuess = answer;
        remaining--;

    });
}