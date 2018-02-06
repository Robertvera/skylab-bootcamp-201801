
$(document).ready(function () {
    var $word;
    var $attempts;
    var $underscore;
    var $game;

    $('.play').click(function () {
        $('.play').hide();
        $('.word').show();
    })

    $('#go').click(function (e) {
        e.preventDefault();
        $word = $('#word').val();
        $('.word').hide();
        $('.game').show();
        $attempts = $('#attempts').val();
        $('.game > h2').text('You have ' + $attempts + ' attempts.');

        $game = new Hangman($word, $attempts,winHTML, loseHTML, inGameHTML);

        $('.game > span').html(function () {
            $underscore = Array($word.length).fill('_' + ' ');
            return $underscore;
        })
        console.log($game);

    })

    $('#try').click(function (e) {
        e.preventDefault();
        var $letter = $('#letters').val();
        $('.game > form').trigger('reset');
        $game.tryGame($letter);

    })

    function winHTML() {
        $('.win >h3').html('You have guessed the word! ' + $word);
        $('.game').hide();
        $('.win').show();
    };

    function loseHTML() {
        $('.lose >h3').html('You have not guessed the word. The word was...' + $word);
        $('.game').hide();
        $('.lose').show();
    };

    function inGameHTML() {
            $('.game > span').html($underscore);
            $('.game > h2').text('You have ' + $attempts + ' attempts.');                    
    }


    function Hangman(word, attempts, won, lose, ingame) {

        var w = word.split('');
        var endGame = false;

        function win(charOrWord) {
            console.log('esto es el consolelog',$underscore.join(''),'--->',word);
            if (charOrWord === word || $underscore.join('') === word.toUpperCase())
                return true;
        }

        function gameOver(charOrWord) {
            if (attempts === 0) {
                return true;
            } else if (charOrWord.length > 1 && charOrWord != word) {
                return true;
            }

        }

        this.tryGame = function (charOrWord) {
            if (endGame === false) {
                var check = false;
                for (var i = 0; i < w.length; i++) {
                    if (charOrWord === w[i]) {
                        $underscore[i] = w[i].toUpperCase();
                        check = true;
                    }
                }
                if (check === true) {
                    check = false;
                    if (win(charOrWord)) {
                        endGame = true;
                        return won();


                    } else {
                        // return attempts + ' ' + $underscore.join(' ');
                        return ingame();
                    }
                } else if (win(charOrWord)) {
                    endGame = true;
                    return won();
                } else {
                    attempts--;
                    if (gameOver(charOrWord)) {
                        if (charOrWord.length > 1) {
                            endGame = true;
                            return lose();
                        } else {
                            endGame = true;
                            return lose();
                        }
                    } else {
                        // return attempts + ' ' + $underscore.join(' ');
                        $attempts--;
                        return ingame();
                    }

                }
            } else {
                return 'GAME OVER.'
            }


        }
    }
})