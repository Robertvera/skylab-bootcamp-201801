function pattern (a, length) {
    var array = []
    for (var i = 0; i < length; i++) {
        array.push(a)
        console.log(array.toString())
    }
}

console.log(''+pattern ('*',5)) 