//Write a JavaScript function to check whether an `input` is an array or not.

function isArray(a) {
    return Array.isArray(a);
}

console.log("should return true if the input is an array: " + isArray([1, 2, 3, "hello"]));

//Write a simple JavaScript program to join all elements of the following array into a string.

var beatles = ['John', 'George', 'Ringo', 'Paul'];

function joinArray(a) {
    return a.join(',');
}

console.log("should return the words in the array in a single string: ", joinArray(beatles));

//Write a JavaScript function to clone an array.

function cloneArray(a) {
    var clonedArray = a.map(function (x) {
        return x;
    })
    return clonedArray;
}

console.log("should return the [1,2,3,4] array cloned: ", cloneArray([1, 2, 3, 4]))
console.log("should return the [1,2,[4,0]] array cloned: ", cloneArray([1, 2, [4, 0]]))

//Write a JavaScript function to find the difference of two arrays.

function difference(a, b) {
    var differencesA = a.filter(x => !b.includes(x));
    var differencesB = b.filter(x => !a.includes(x));
    var differences = differencesA.concat(differencesB)
    return differences
}

console.log("The different elements between [1,2,3,4] and [2,3,5] are: ", difference([1, 2, 3, 4], [2, 3, 5]))
console.log("The different elements between [1, 2, 3] and [100, 2, 1, 10] should be [3, 10, 100]: ", difference([1, 2, 3], [100, 2, 1, 10]));
console.log("The different elements between [1, 2, 3, 4, 5] and [1, [2], [3, [[4]]],[5,6]] should be [6]: ", difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log("The different elements between [1, 2, 3] and [100, 2, 1, 10] should be [3, 10, 100]: ", difference([1, 2, 3], [100, 2, 1, 10]));

//Write a JavaScript program to compute the sum and product of an array of integers.

function sumAndProduct(a) {
    var sum = 0;
    var product = 1;
    for (var i = 0; i < a.length; i++) {
        sum += a[i];
        product *= a[i];
    }
    var arraySP = [sum, product];
    return arraySP;
}
console.log('array elements sum: ', sumAndProduct([1, 2, 3, 4])[0], '\narray elements product: ', sumAndProduct([1, 2, 3, 4])[1]);


//Write a JavaScript program to add items in an blank array and display the items.

var array = [];

function addItems(a) {
    array.push(a);
    return array
}
addItems("hola"), addItems(33), addItems("adiós")

console.log(array);

/*Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

    Test Data :
    console.log(array_range(1, 4)); 
    [1, 2, 3, 4]
    console.log(array_range(-6, 4));
    [-6, -5, -4, -3]*/

function arrayRange(s, l) {
    var array = [];
    array.push(s);
    var acc = s;
    for (var i = 0; i < l - 1; i++) {
        acc++
        array.push(acc);
    }
    return array;
}
console.log(arrayRange(1, 4))
console.log(arrayRange(-6, 4))

/*Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

    Test Data : 
    console.log(last([7, 9, 0, -2])); 
    console.log(last([7, 9, 0, -2],3)); 
    console.log(last([7, 9, 0, -2],6));
    Expected Output : 
    -2 
    [9, 0, -2] 
    [7, 9, 0, -2]*/

function lastItem(arr, n) {
    if (n == undefined) {
        return arr.pop();
    } else {
        return arr.slice(- n);
    }
}

console.log('Tiene que dar -2 --> ', lastItem([7, 9, 0, -2]));
console.log('Tiene que dar [9, 0, -2]  --> ', lastItem([7, 9, 0, -2], 3));
console.log('Tiene que dar [7,9, 0, -2]  --> ', lastItem([7, 9, 0, -2], 6));

/*Write a JavaScript program to sort the items of an array.

Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8*/

var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function sortArray(a) {
    a.sort(function (a, b) {
        return a - b;
    });
    return a;
}

console.log('Debería salir: -4,1,2,3,5,6,7,8*/ ---> ', sortArray(arr1));

//Write a JavaScript function to get a random item from an array.

function getRandom(a) {
    var i = Math.floor(Math.random() * a.length);
    return a[i];
}

console.log('Devuelve una posición aleatoria del array = [1,33,2,5,7,4,3] ---> ', getRandom([1, 33, 2, 5, 7, 4, 3]));

//Write a JavaScript program to find duplicate values in a JavaScript array.

function duplicate(a) {
    var dup = [];
    a.sort(function (a, b) { return a - b });
    for (var i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1]) {
            if (dup.indexOf(a[i]) == -1) {
                dup.push(a[i]);
            }
        }
    }


    return dup;
}


console.log('Los duplicados del array [1,1,2,3,5,4,3,1,5] debería ser [1,3,5] --> ', duplicate([1, 1, 2, 3, 5, 4, 3, 1, 5]));

/*Write a JavaScript function to merge two arrays and removes all duplicates elements.

    Test data :
    var array1 = [1, 2, 3]; 
    var array2 = [2, 30, 1]; 
    console.log(merge_array(array1, array2));
    [3, 2, 30, 1]*/

function mergeArrays(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    var dup = [];
    newArray.sort(function (a, b) { return a - b });
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] != newArray[i + 1]) {
            dup.push(newArray[i]);
        }
    }
    return dup;
}

console.log('El resultado debe ser [3,2,30,1] --->  ', mergeArrays([1, 2, 3], [2, 30, 1]))


//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function separateEven(n) {
    var nString = n.toString().split('')
    var dashArray = [];
    for (var i = 0; i < nString.length; i++) {
        if (nString[i] % 2 == 0 && nString[i + 1] % 2 == 0) {
            dashArray.push(nString[i]);
            dashArray.push('-');
        } else {
            dashArray.push(nString[i]);
        }
    }
    var dashString = dashArray.join('').toString();
    return dashString;
}

console.log('The result of 25468 debe ser 254-6-8--->  ', separateEven(25468))
console.log('The result of 8376493234 debe ser 8376-493234--->  ', separateEven(8376493234))
console.log('The result of 24680248 debe ser 2-4-6-8-0-2-4-8--->  ', separateEven(24680248))

/*Write a JavaScript program to find the most frequent item of an array.

    Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    Sample Output : a ( 5 times ) */


