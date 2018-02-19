function Hangman(word, attempts) {

    var w = word.split('');
    var underscore = new Array(w.length);
    var endGame = false;

    for (var i = 0; i < underscore.length; i++)
        underscore[i] = '_';

    function win(charOrWord) {
        if (charOrWord === word || underscore.join('') === word)
            return true;
    }

    function gameOver(charOrWord) {
        if (attempts === 0) {
            return true;
        } else if (charOrWord.length > 1 && charOrWord != word){
            return true;
        }
        
    }

    this.try = function (charOrWord) {
        if (endGame === false) {
            var check = false;
            for (var i = 0; i < w.length; i++) {
                if (charOrWord === w[i]) {
                    underscore[i] = w[i].toUpperCase();
                    check = true;
                }
            }
            if (check === true) {
                check = false;
                if (win(charOrWord)) {
                    endGame = true;
                    return 'You have guessed the word, well done!';
                } else {
                    return attempts +' '+ underscore.join(' ');
                }
            } else if (win(charOrWord)) {
                endGame = true;
                return 'You have guessed the word, well done!';
            } else {
                attempts--;
                if (gameOver(charOrWord)){
                    if(charOrWord.length > 1) {
                        endGame = true;
                        return 'Sorry, you have not guessed... the correct word is HELLO.';                    
                    } else {
                        endGame = true;
                        return 'Sorry, you have not guessed... the correct word is HELLO.';
                    }
                } else {
                    return attempts +' '+ underscore.join(' ');
                }
                
            }
        } else {
            return 'GAME OVER.'
        }
       

    }
}



//var game = new Hangman('hello', 10);
//console.log(game.try('i'));
//console.log(game.try('t'));
//console.log(game.try('e'));
//console.log(game.try('z'));
//console.log(game.try('z'));
//console.log(game.try('z'));
//console.log(game.try('z'));
//console.log(game.try('vaca'));
//console.log(game.try('z'));
//console.log(game.try('z'));


//console.log(game.try('perro'));
//console.log(game.try('r'));
//console.log(game.try('e'));
//console.log(game.try('o'));