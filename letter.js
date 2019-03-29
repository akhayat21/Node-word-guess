function Letter(letter){
    this.stringVal = letter;
    this.guessed = false;

    this.placeholder = function(){
        if(this.guessed){
            return this.stringVal
        } else {
            return "_"
        }
    }

    this.check = function(input){
        if(input == this.stringVal){
            this.guessed = true;
        } else {
            // if input isnt guessed letter
        }
    }
}

module.exports = Letter;