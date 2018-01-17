num = 16

function oddEven (a) {
    while (a--) {
        if (a%2 == 0) {
            console.log(a + " is even");
        } else {
            console.log(a + " is odd");
        }
    }
}

oddEven(num)