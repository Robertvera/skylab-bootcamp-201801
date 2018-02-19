/*
text('something').wrap('$').wrap('[',']').wrap('{','}');
*/

function text(string) {
    function wrap (arg1, arg2) {
        if (arg2 === undefined) {
            arg2 = arg1;
        }
        string = arg1 + string + arg2;

        return this;
    }

    function toString() {
        return string;
    }

    return {
        wrap: wrap,
        toString: toString
    };
}

//Además puedes añadirle todos los métodos de toString

var text;
(function (){
    function wrap(text,before,after) {
        
    }
})