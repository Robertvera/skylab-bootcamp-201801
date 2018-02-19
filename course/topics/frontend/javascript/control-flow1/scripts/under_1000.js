function oddEven (a) {
    var sum = 0;
    while (a--) {
        if (a%3 == 0) {
            sum += a
        } else if(a%5 == 0) {
            sum += a
        }
    }
    return sum
}

console.log("Should return a sum of all 3 and 5 multiples: " + oddEven(1000))