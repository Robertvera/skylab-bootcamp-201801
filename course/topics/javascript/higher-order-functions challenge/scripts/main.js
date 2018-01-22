//Write a high order function that take the array of months and create a new array that contains the same months but with the first letter in upper case.

var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

function monthsToUpperCase(array) {
    var newArray = array.map(function (element) {
        var month = element.split('');
        var fLetter = month[0].toUpperCase();
        month[0] = fLetter;
        return month.join('');
    })
    return newArray;
}

//Write a high order function that take the array of months and create a new array that contains only the months that begin with j.

function onlyJStartingMonths(array) {
    var newArray = array.filter(function (element) {
        var month = element.split('');
        var fLetter = month[0];
        if (month[0] == 'j')
            return month.join('');
    })
    return newArray;
}

//Write a high order function that counts all the vowels of the following text.

// function countVowels(string) {
//     var array = string.split('')
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
//     var count = 0;
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < vowels.length; j++) {
//             if (array[i] === vowels[j])
//                 count++;

//         }
//     }
//     return count;
// }


    var loremIpsum = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.'
    newArray = loremIpsum.split('')
    
    
    var vowelsCount = newArray.reduce(function (acc, char) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) >= 0) {
            var found = char.toLowerCase();
            acc[found] = acc[found] + 1;
            return acc;
        } else {
            return acc;
        }        
    }, {a:0, e:0, i:0, o:0, u:0});

    console.log(vowelsCount);
    console.log(vowelsCount['a']);
    
var numVowels = Object.keys(vowelsCount).reduce(function (acc,v) {
    console.log(vowelsCount['v']);
    return acc + vowelsCount['v'];
},0 );
    console.log(numVowels);





/*var loremIpsum =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.";


 var result = loremIpsum.split("").reduce(function(resultVowel, char) {
   if (["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) >= 0) {
     var vowelLower = char.toLowerCase();
     resultVowel[vowelLower] = resultVowel[vowelLower] + 1;
     return resultVowel;
   } else return resultVowel;
 }, { a: 0, e: 0, i: 0, o: 0, u: 0 });
 console.log(result);*/


//Write a high order function that returns true if all months have five letters or more, and if some month has five letters or more.

function checkMonths(month) {
    return month.length >= 5;
}

console.log(months.some(checkMonths));

console.log(months.every(checkMonths));