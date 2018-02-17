
// Word constructor for managing Word objects

var Word = function () {
    this.randomWord = "";
    //this.letters = [];
    this.randomWordArray = ["dog", "cat", "rat", "hamster", "Snake", "Pig", "fish"];
    this.setRandomWord = function () {
        var ranWord = this.randomWordArray[Math.floor(Math.random() * this.randomWordArray.length)];
        this.randomWord = ranWord.toUpperCase();
    };
}

module.exports = Word;

/* Word.prototype.getLetters = function () {
    for (var i = 0; i < this.randomWord.length; i++) {
        this.letters[i] = "_";
    }
}; */

/* Word.prototype.matchLetters = function (letter) {
    var letterFound = false;
    for (var i = 0; i < this.randomWord.length; i++) {

        if (this.randomWord[i] === letter.toUpperCase()) {
            this.letters[i] = letter.toUpperCase();
            letterFound = true;
        }
    }
    return letterFound;
}; */

