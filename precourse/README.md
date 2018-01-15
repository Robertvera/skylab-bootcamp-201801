# QUÉ HE APRENDIDO EN EL PRECURSO SKYLAB

## TEMA 0: INTRODUCCIÓN JAVASCRIPT

En este tema hemos aprendido funciones y herramientas básicas de Javascript, como por ejemplo:

* **console.log()**: nos permite imprimir por consola un mensaje y/o resultado.
```javascript
var name = "Robert";
function showMyName (name) {
	console.log(name);
}
showMyName(name);
```
* **Declaraciones de variables**: aprendemos a declarar variables.
```javascript
var name = "Robert";
````
* **Loops**: nos permite usar una misma función para un mismo elemento. Muy útil para recorrer Arrays (matrices de variables).
```javascript
var info =["Robert","Vera",32];
function showMyInfo (info) {
	for(var i=0; i<3; i++){
		console.log(info[i]);	
	}	
}
````
* **Condicionales**: a través de comandos if y else nos permite ejecutar partes de código dependiendo de si cumple X requisitos.
```javascript
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
````
[EJERCICIOS TEMA 0](/Users/Robert/skylab/precourse/tema1-pc/exercices1.js)

## TEMA 1: MÉTODOS JAVASCRIPT

En este tema he aprendido a estructurar el código en métodos y funciones, transformando las variables y consiguiendo el output deseado. Usando métodos hemos aprendido por ejemplo a:

* **Strings**: Contar carácteres, recorrer strings, modificar strings.
```javascript
var name = "Robert";

function countCharacters (name) {
	return console.log("My name has " + name.length + " letters");
}
```
```javascript
var name = "Robert Vera";

function stringFinder (name) {
	return console.log("My name is " + name.slice(0,6));
}
```
```javascript
function stringFinder (name) {
	var politeName = name.replace("Robert","Mr.");
	return console.log("Hello " + politeName);
}
```
* **Arrays**: Crear arrays, recorrer arrays, modificar arrays:

```javascript
var nameArray = ["R","O","B","E","R","T","V","E","R","A"];

function nameLoop (name) {
	return name.join('/')
}
````
```javascript
var nameArray = ["Robert","Vera",32];

function addPosition (name) {
	name.push("Barcelona");
	return "City added to array! => " + name;
}
````
```javascript
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
```
* **Numeros**: trabajar con numeros y strings y distintos tipos de variables.

```javascript
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
````

Por último hemos desarrollado una calculadora simple por consola. Con este proyecto he descubierto que se pueden aprovechar muchas funciones ya existentes por internet y que otros usuarios ya han desarrollado antes.

[PROYECTO CALCULADORA](/Users/Robert/skylab/precourse/tema2-pc/project2.js)

