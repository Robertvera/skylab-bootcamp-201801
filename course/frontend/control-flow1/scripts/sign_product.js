function sign (num1, num2, num3) {
    if (num1*num2*num3 < 0) {
        return console.log ("The sign is -")
    } else if (num1*num2*num3 == 0) {
        return console.log("No sign, the result is 0")   
    } else {
        return console.log("The sign is +")
    }
}

sign (3,-8,-9)