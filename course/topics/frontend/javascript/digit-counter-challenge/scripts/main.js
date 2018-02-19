function digitCount (number, digit) {
    var array = number.toString();    
    var acc = 0;
    for (var i = 0; i < array.length; i++) {
        if (digit == array[i])
            acc++;
    }
    return acc;
}

console.log ('digit 0 repeated ' + digitCount(98769300, 0) + ' times in 98769300')
console.log ('digit 9 repeated ' + digitCount(9900999023423, 9) + ' times in 9900999023423')
console.log ('digit 2 repeated ' + digitCount(2536228324, 2) + ' times in 2536228324')


//EJEMPLO RECURSIVIDAD

function reverseString(str) {
    if (str ==='') {
        return'';
    } else {
        return reverseString (str.slice(1)) + str.charAt(0);
    }
}

console.log(reverseString("hello"))