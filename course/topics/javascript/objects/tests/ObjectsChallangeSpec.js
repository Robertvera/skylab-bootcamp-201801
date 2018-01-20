describe('Objects Challange', function () {    
    
});

//Just to get fancier outputs on Jasmine tests
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

var array = [1,2,4,4,65,2,23,34];
    var obj = {car: true, color: 'white'};
    var num = 123;
    var string = 'hello world';
    var boo = true;

function inputOfAnyKindOfDataWhichIsNotAnObjectShouldResultFalse () {
    expect(isObject(array)).toBe(true);
    expect(isObject(obj)).toBe(true);
    expect(isObject(num)).toBe(false);
    expect(isObject(string)).toBe(false);
    expect(isObject(boo)).toBe(false);
    expect(isObject(null)).toBe(false);
}

it(toNormalCase(inputOfAnyKindOfDataWhichIsNotAnObjectShouldResultFalse.name),inputOfAnyKindOfDataWhichIsNotAnObjectShouldResultFalse);