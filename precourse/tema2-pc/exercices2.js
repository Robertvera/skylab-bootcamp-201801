//a) Puedes contar cuantas letras tiene tu nombre?

var name = "Robert";

function countCharacters (name) {
	return console.log("My name has " + name.length + " letters");
}

countCharacters(name);

//b) Añade tu apellido e indica en que posición se encuentra

var name = "Robert Vera";

function stringFinder (name) {
	return console.log("My first last name starts on position " + name.indexOf("Vera"));
}

stringFinder(name);

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

var name = "Robert Vera";

function stringFinder (name) {
	return console.log("My name is " + name.slice(0,6));
}

stringFinder(name);

//d) Ahora, solo tu apellido.

var name = "Robert Vera";

function stringFinder (name) {
	return console.log("My surname is " + name.slice(7,11));
}

stringFinder(name);

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

var name = "Robert Vera";

function stringFinder (name) {
	var surname = name.slice(7,11);
	return console.log(name + ", " + surname);
}

stringFinder(name);

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

var name = "Robert Vera";

function stringFinder (name) {
	var politeName = name.replace("Robert","Mr.");
	return console.log("Hello " + politeName);
}

stringFinder(name);

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

var name = "Robert Vera";

function stringFinder (name) {
	var surname = name.slice(7,11);
	var upperCase = surname.toUpperCase();
	return console.log("My last name is " + upperCase);
}

stringFinder(name);

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

var name = "Robert Vera";

function stringFinder (name) {
	var firstName = name.slice(0,6);
	var firstMessage = firstName + " is awesome";
	return console.log(firstMessage);
}

stringFinder(name);

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

var name = "Robert Vera";

function stringFinder (name) {
	var firstLetter = name.charAt(0);
	var secondLetter = name.charAt(7);
	return console.log(firstLetter + secondLetter);
}

stringFinder(name);


//ARRAYS

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

var nameArray = ["R","O","B","E","R","T","V","E","R","A"];

function nameLoop (name) {
	return name.join('/')
}

nameLoop(nameArray);

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

var nameArray = ["R","O","B","E","R","T","V","E","R","A"];

function nameLoop (name) {
	var surname = name.slice(6);
	return surname.join('|');
}

nameLoop(nameArray);

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

var nameArray = ["R","O","B","E","R","T","V","E","R","A"];

function nameLoop (name) {
	name = name.join('')
	name = name.slice(0,6)
	var result = []
	for (var i=0; i < name.length; i++) {
		result.push((i + 1) + "º " + name[i])
	}
	return result.join(', ')
}

nameLoop(nameArray)

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

var nameArray = ["R","O","B","E","R","T","V","E","R","A"];

function nameLoop (name) {
	name = name.join('')
	surname = name.slice(6,10)
	var result = []
	for (var i=0; i < surname.length; i++) {
		result.push((i + 1) + "º " + surname[i])
	}
	return result.join(', ')
}

nameLoop(nameArray)

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

var nameArray = ["R","O","B","E","R","T","V","E","R","A"];

function nameLoop (name) {
	return name[0] + name[6]
}

nameLoop(nameArray)

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.

var nameArray = ["Robert","Vera",32];

function selectPosition (name) {
	return "My name is " + name[0] + " and I'm " + name[2] + " years old."
}

selectPosition (nameArray)

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.

var nameArray = ["Robert","Vera",32];

function addPosition (name) {
	name.push("Barcelona");
	return "City added to array! => " + name;
}

addPosition (nameArray)

//h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.

var nameArray = ["Robert","Vera",32];

function addPosition (name) {
	name.push("Barcelona");
	return "City added to array! => " + name;
}

function deletePosition (name) {
	name.pop("Barcelona");
	return "City deleted! => " + name;
}

addPosition (nameArray)
deletePosition (nameArray)

//j) Ahora, elimina el nombre y asegura los cambios

var nameArray = ["Robert","Vera",32];

function addPosition (name) {
	name.push("Barcelona");
	return "City added to array! => " + name;
}

function deletePosition (name) {
	name.shift;
	return "Name deleted! => " + name;
}

addPosition (nameArray)
deletePosition (nameArray)

//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?

function addPosition (name) {
	nameArray.splice(0,0,"Robert");	
}
addPosition (nameArray;

//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

var numbers = [0,1,2,3,4,5,6,7,8,9,10];

function multiplyNum (element) {
  return element * 2;
}

numbers.map(multiplyNum);


//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

var numbers = [0,1,2,3,4,5,6,7,8,9,10];

function multiplyNum (element) {
	var multiplicador = 3;
  return element * multiplicador;
}

numbers.map(multiplyNum);

//m) Podrías mostrarlos en el orden inverso?

var numbers = [0,1,2,3,4,5,6,7,8,9,10];

function multiplyNum (element) {
	var multiplicador = 3;
  	return element * multiplicador;
}

var numbersx3 = numbers.map(multiplyNum);
numbersx3.sort(function(a,b){return b-a})

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

var name = "Robert Vera"
var letras = name.split("")

function repeatLetters (letters) {
	var count = 0
	for (var i=0; i<letters.lenght;i++) {
		
	}
	
	}


}

//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras

//NUMBERS

//a) Que hora es? Declara la hora como número y devuelvela como String
var hora = 10.45
var horaString = hora.toString()
console.log("It's " + horaString + " in the morning.")

//b) Nono, que hora exactamente? Dime la hora sin minutos
var hora = 10.45
var horaString = hora.toString()
var horaAprox = horaString.slice(0,2)
console.log("It's around " + horaAprox + " in the morning.")

//c) Ahora, declara tu hora y muéstrala redondeada.

var hora = 10.45
var horaRound = Math.round(hora)
var horaString = horaRound.toString()

console.log("It's " + horaString + " in the morning.")

//d) Hagamos una calculadora. Primero, la suma.

var num1 = 9
var num2 = 7

function suma (number1,number2) {
	return number1+number2
}

console.log("The sum of " + num1 + " and " + num2 + " is " + suma(num1,num2))

//d1) Añade la resta...

var num1 = 9
var num2 = 7

function suma (number1,number2) {
	return number1+number2
}

function resta (number1,number2) {
	return number1-number2
}

console.log("The sum and rest of " + num1 + " and " + num2 + " is " + suma(num1,num2) + " and " + resta(num1,num2))

//d2) Y la multiplicación

var num1 = 9
var num2 = 7

function suma (number1,number2) {
	return number1+number2
}

function resta (number1,number2) {
	return number1-number2
}

function multiplicacion (number1,number2) {
	return number1*number2
}

console.log("The sum, rest and multiplication of " + num1 + " and " + num2 + " is " + suma(num1,num2) + ", " + resta(num1,num2) + " and " + multiplicacion(num1,num2))

//d3) Por ultimo, la división

var num1 = 9
var num2 = 7

function suma (number1,number2) {
	return number1+number2
}

function resta (number1,number2) {
	return number1-number2
}

function multiplicacion (number1,number2) {
	return number1*number2
}

function division (number1,number2) {
	return number1/number2
}

console.log("The sum, rest, multiplication and division of " + num1 + " and " + num2 + " is " + suma(num1,num2) + ", " + resta(num1,num2) + ", " + multiplicacion(num1,num2) + " and " + division(num1,num2))

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

console.log(10*"hola")

//e) Podemos controlar este error con un condicional if?

var num1 = 9
var num2 = 7

function suma (number1,number2) {
	return number1+number2
}

function resta (number1,number2) {
	return number1-number2
}

function multiplicacion (number1,number2) {
	return number1*number2
}

function division (number1,number2) {
	return number1/number2
}

if (isNaN(num1) || isNaN(num2) === true) {
	console.log("No se puede multiplicar un string con un número")
} else {
	console.log("The sum, rest, multiplication and division of " + num1 + " and " + num2 + " is " + suma(num1,num2) + ", " + resta(num1,num2) + ", " + multiplicacion(num1,num2) + " and " + division(num1,num2))
}


