function toNormalCase (string) {
    var array = string.split('');    
    for (var i = 0; i < array.length; i++) {
        if(array[i] <= 'Z' && array[i]>= 'A') {
            array[i] = ' ' + array[i].toLowerCase();
        }
    }
    return array.join('');
}

console.log(toNormalCase('buenosDiasPorLaMañana'));