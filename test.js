
var inquirer = require("inquirer");

// variable we will use to count how many times our questions have been asked
var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "Enter a letter?"
      }
    ]).then(function(answers) {

      console.log(answers.name);
      if(answers.name === 'z'){
        EndGame();
        return;
      }
      // add one to count to increment our recursive loop by one
      
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All the words have been gueesed, Great Job!");
  }
};

// call askquestion to run our code
askQuestion();

function EndGame() {
  inquirer
    .prompt({
      name: "end",
      type: "rawlist",
      message: "Would you like to End the game?",
      choices: ["Y", "N"]
    })
    .then(function(answer) {
      if (answer.end.toUpperCase() === "Y") {
        console.log("Thanks for Playing");
      }
      else {
        count = 0;
        askQuestion();
      }
    });
}