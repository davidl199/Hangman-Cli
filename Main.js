// dependency for inquirer npm package
var inquirer = require("inquirer");
// dependency for Word and Letter constructors
var Word = require("./Word.js");
var Letter = require("./Letter.js");

// variable we will use to count how many times our questions have been asked
var count = 0;

//var wordArray = [];
//var answerArr = [];
//var randomWord = "";
//var randomWordArray = ["java", "ruby", "swift", "python", "php", "mysql", "javascript", "csharp"];
//var randomWordArray = ["dog", "cat", "rat"];

console.log("\nHangman -- Guess some Pets!");
var myWord = new Word();
myWord.setRandomWord();
//myWord.getLetters();

var myLetter = new Letter(myWord.randomWord);
myLetter.getLetters();

var askQuestion = function () {

  //Get word
  //var currentWord = new Word()

  if (count < 20) {

    //show word with blanks
    //Word.ShowLetters();
    //console.log("\n" + answerArr.join(" ") + "\n");

    //console.log("\n" + myWord.letters.join(" ") + "\n");
    console.log("\n" + myLetter.letters.join(" ") + "\n");

    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter!"
      }
    ]).then(function (answers) {


      //var letterFound = myWord.matchLetters(answers.letter);
      var letterFound = myLetter.matchLetters(answers.letter);

      //if (randomWord === answerArr.join('')) {
      //if (myWord.randomWord === myWord.letters.join('')) {
      if (myWord.randomWord === myLetter.letters.join('')) {
        console.log("\nCORRECT!")
        //console.log("\n" + myWord.letters.join(" ") + "\n");
        console.log("\n" + myLetter.letters.join(" ") + "\n");
        console.log("YOU WON!");
        //GetWord();
        //myWord = new Word();
        myWord.setRandomWord();
        //myWord.getLetters();
        myLetter.randomWord = myWord.randomWord;
        myLetter.getLetters();
        //count = 10;
      }
      else if (letterFound) {
        console.log("\nCORRECT!")
      }
      else {
        console.log("\nINCORRECT!");
      }

      //if not update guesses left and print guesses left
      //Word.ShowLetters();

      //if guesses left is 0 then end game

      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });

  }
  else {
    /* for (var x = 0; x < letterArray.length; x++) {
        console.log("let: " + letterArray[x]); */
    console.log("\nGame Over!")
    //}
  }
};

// call askQuestion to run our code
//GetWord();
askQuestion();

/* function MatchLetters(letter) {
  var letterFound = false;
  for (var i = 0; i < randomWord.length; i++) {

    if (randomWord[i] === letter.toUpperCase()) {
      answerArr[i] = letter.toUpperCase();
      letterFound = true;
    }
  }
  return letterFound;
} */

/* function GetWord() {
  randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];
  randomWord = randomWord.toUpperCase();
  answerArr = [];

  for (var i = 0; i < randomWord.length; i++) {
    answerArr[i] = "_";
  }
} */
