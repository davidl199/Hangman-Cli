# Hangman-Cli
This is a hangman game using node.js and the command line.

This project was a exercise in using node.js on the command line to call API's from the bash command line.
It requires the following packages
* inquirer
* mysql

# How the program works

From the command line you can run the app by typing node Main.js

Rules:

1. The game will ask you to guess some pet names in the format of a hangman game.
2. You will have 8 trys to guess the current word
3. If you dont guess the word the game will give you an option to end the game or keep trying to guess words.
4. If you guess the current word it will let you keep going and try another word.
5. The game has a counter for the guesses and will automatically end once the counter reaches 20.

Future Improvements:

1. Make the game end after all the possible words have been gueesed instead of using a counter.
2. Remove a word from the word list each time a user guesses a word. This will keep the user from having to guess the same word more than once and will seem more like a random word generator. Currently the same word could be asked twice or more times in a row.

I maintain this project as a class project and will be added to my portfolio.

