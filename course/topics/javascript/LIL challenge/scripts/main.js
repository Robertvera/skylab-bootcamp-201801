function toNormalCase (string) {
    var array = string.split('');    
    array[0] = array[0].toUpperCase();
    for (var i = 1; i < array.length; i++) {
        if(array[i] <= 'Z' && array[i]>= 'A') {
            array[i] = ' ' + array[i].toLowerCase();
        } else if(array[i] < Infinity && array[i] > -Infinity) {
            array[i] = ' ' + array[i].toLowerCase()
        }
    }
    return array.join('');
}

console.log(toNormalCase('thisIsThe7thTestOfTheFunctionAndShould'));