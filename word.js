var Letter = require("./letter.js");

function Word(word){
    this.new = word.split('');    
    this.letterArr = [];
    this.tempArr = [];
    this.placeholderWord = function(){
        for(i=0; i<this.new.length ;i++){
            this.letterArr[i] = new Letter(this.new[i]);
            var temp = this.letterArr[i].placeholder();
            this.tempArr.push(temp);
        }
        return this.tempArr.join(" ")
    }

    this.guessCheck = function(input){
        Letter.check(input);
    }
}

var test = new Word("test");
test.placeholderWord();
console.log(test);

module.exports = Word;