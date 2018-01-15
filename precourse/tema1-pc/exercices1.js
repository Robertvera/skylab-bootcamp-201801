//a) Declara tu nombre y muéstralo por consola:
var name = "Robert";
function showMyName (name) {
	console.log(name);
}
showMyName(name);

//b) Declara tu edad y muéstralo por consola:
var age = 32;
function showMyAge (age) {
	console.log(age);
}
showMyAge(age);

//c) Declara tu nombre, tu apellido y tu edad en un array en diferentes posiciones y muéstrala por consola:
var info =["Robert","Vera",32];
function showMyInfo (info) {
	console.log(info);
}
showMyInfo(info);

//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
var data ={name: "Robert", age: 32};
function showMyData (data) {
	console.log(data);
}
showMyData(data);

//e) Ahora utiliza el array que has creado anteriormente para recorrerlo y mostrar una a una todas las posiciones del array.
var info =["Robert","Vera",32];
function showMyInfo (info) {
	for(var i=0; i<3; i++){
		console.log(info[i]);	
	}	
}
showMyInfo(info);

//f) Crea una estructura condicional que imprima el número mayor entre dos números.
var a = 23;
var b = 34;
function biggerNumber (number1, number2) {
	if (number1 < number2) {
		console.log(number2)
	} else {
		console.log(number1)
	}
}
biggerNumber (a,b);

//f1) Crea otra condicion else if para contemplar la posibilidad de que los dos números sean iguales:
var a = 23;
var b = 34;
function biggerNumber (number1, number2) {
	if (number1 < number2) {
		console.log(number2)
	} else if (number1 = number2){
		console.log('The numbers are equal');
	} else {
		console.log(number1)
	}
}
biggerNumber (a,b);


//g) Crea una array de 5 numeros, y recorrela, mostrando además un mensaje cuando, esté a la mitad, muestre un mensaje 'We are in the middle of loop'.

var fiveNumbers = [1, 2, 3, 4, 5];
function readArray (number) {
	for(var i=0; i<5; i++){
		console.log(number[i]);
		if (i===2) {
			console.log('We are in the middle of loop');
		} else {
		}
	}
}
readArray(fiveNumbers);

//g1) Declara tu nombre y tu edad dos variables y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error

var myName = "Robert";
var myAge = 32;
function checkData (name, age) {
	if (name != "Robert" || age != 32) {
		console.log("this is not you!");
	} else {
		console.log("Hi! Glad to see you again!");
	}
}
checkData(myName, myAge);

//g2) Crea una array, introduce los datos anteriores y unos cuantos más de forma que al recorrer la array, muestre un mensaje cuando encuentre tus datos.

var myList = ["Josep", 31, "Robert", 32, "Joan", 40];
var myName = "Robert";
var myAge = 32
function dataFinder (data) {
	for (var i=0; i<myList.length; i++) {
		if(data[i]=== "Robert" || data[i]=== 32) {
			console.log("We found your data: " + data[i]);
		} else {

		}
	}
}
dataFinder(myList);

