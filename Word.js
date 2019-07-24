var Letter = require('./Letter');
// var displayArray = [];
// var Word = function(selection) {
    // this.selection = selection;
    // this.wordArray = [];
    // this.newArray 
    
    // var wordArray = [];
    // var hangArray = [];

    // var letterSelect;

    // var selection = "";



    // var list = ["dinosaur", "truck", "office", "javascript"];

    // var reset = function() {
    //     wordArray = [];
    //     hangArray = [];
    //     displayArray = [];
    //     selection = "";
    // };




    // var createDisplay = function(input) {
    //     displayArray = [];
    //     for (var i = 0; i<input.length; i++) {
    //         input[i].guess = false;
    //     };
    //     for (let i = 0; i < input.length; i++) {
            // if (input[i].guess) {
                // console.log(input[i].character);
                // return input[i].character;
                // displayArray.push(input[i].returnGuessed());
            // } 
            // else {
            //     // console.log("TESTING_");
            //     displayArray.push("_");
            //     // return "_";
            // };
        // }
        // console.log("testing3: " + displayArray);

    // };





    // var createLetters = function(input) {
    //     hangArray = [];
    //     for (let i = 0; i < input.length; i++) {
    //         // console.log(input[i]);
    //         letterSelect = new Letter(input[i], false);
    //         hangArray.push(letterSelect);
    //     }
        // createDisplay(hangArray);
        // console.log("testing2: " + hangArray);
        // console.log("testing2 cont: " + hangArray[1].guess);

    // };







    // var array = function(letter) {
    //     wordArray = [];
    //     for (let i = 0; i < letter.length; i += 1) {
    //         wordArray.push(letter.charAt(i));
    //     }
        // createLetters(wordArray);

    // console.log("testing testing testing" + wordArray);


    // };
    // var displayArray = [];       
    // var wordArray = [];
    var hangArray = [];
    var throughput = [];

    var Randomword = function(bla) {
        // reset();
        // wordArray = [];
        // hangArray = [];
        // displayArray = [];
        // selection = "";
        // var displayArray = [];       
        // var wordArray = [];
        // var hangArray = [];

        // hangArray = [];
        this.newWordArray = [];
        this.returnArray = function(input) {
            this.newWordArray = [];
            var letterSelect;
            var selection = "";
            var wordArray = [];
            for (let i = 0; i < input.length; i += 1) {
                wordArray.push(input.charAt(i));
            }
            // console.log("wordArray: " + wordArray);
            hangArray = [];
            for (let i = 0; i < wordArray.length; i++) {
                // console.log(input[i]);
                letterSelect = new Letter(wordArray[i], false);
                hangArray.push(letterSelect);
            }
            this.newWordArray = hangArray;

            // console.log("testing4: " + this.newWordArray);
        };

        // selection = input[Math.floor(Math.random() * input.length)];
        // console.log("selection: " + selection);
        // for (let i = 0; i < selection.length; i += 1) {
        //     wordArray.push(selection.charAt(i));
        // }
        // console.log("wordArray: " + wordArray);

        // for (let i = 0; i < wordArray.length; i++) {
        //     // console.log(input[i]);
        //     letterSelect = new Letter(wordArray[i], false);
        //     hangArray.push(letterSelect);
        // }
        // console.log("hangArray: " + hangArray);
        // // for (var i = 0; i < hangArray.length; i++) {
        // //     hangArray[i].guess = false;
        // // };
        // throughput = hangArray;

        // for (let i = 0; i < hangArray.length; i++) {
        //         displayArray.push(hangArray[i].returnGuessed());
        // }
        // console.log("displayArray: " + displayArray);

    };


    // var startAgain = function() {
    //     wordArray = [];
    //     for (var i = 0; i<hangArray.length;i++) {
    //         hangArray[i].guess = false;
    //     };
    //     displayArray = [];
    //     selection = "";
    //     letterSelect = {};
    //     random();
    //     // array(selection);
    //     // createLetters(wordArray);
    //     createDisplay(hangArray);
    // };


        // startAgain();


    // random(list);








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
    // displayArray: displayArray,
    // wordArray: wordArray,
    Randomword: Randomword,
    throughput: throughput,
    // array: array,
    // createLetters: createLetters,
    // createDisplay: createDisplay,
    // selection: selection,
    // reset: reset,
    // letterSelect: letterSelect,
    // startAgain: startAgain,

};