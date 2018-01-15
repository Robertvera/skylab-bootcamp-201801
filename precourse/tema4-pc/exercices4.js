//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function myName (name) {
	console.log("Hola " + name)
}

myName("Robert")

//b) Intenta retornar los valores en lugar de usar console.log

function myName (name) {
	return ("Hola " + name)
}

myName("Robert")

//c) Ahora, añade tu edad y concaténala al return

function myMessage (name,age) {
	return ("Hola, soy " + name + " tengo " + age + " años.")
}

myMessage("Robert",32)

//d) Iguala tu función a una variable y ejecútala

var miMensaje = function myMessage (name,age) {
	return ("Hola, soy " + name + " tengo " + age + " años.")
}

miMensaje("Robert",32)

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados Now, try to declare other function and assign it result to other variable called myAge, and try to print the result of both functions in one line.

var miNombre = function myName (name) {
	return ("Hola, soy " + name + ". ")
}

var miEdad = function myAge (age) {
	return ("Tengo " + age + " años.")
}

miNombre("Robert")+miEdad(32)

//e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

var miNombre = function myName (name) {
	return ("Hola, soy " + name + ". ")
}

var miEdad = function myAge (age) {
	return ("Tengo " + age + " años.")
}

var random = Math.random()*10

miNombre("Robert") + (miEdad(32) + random).toString()

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.

//g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas

function info () {
	var miNombre = function myName (name) {
	return ("Hola, soy " + name + ". ")
}

var miEdad = function myAge (age) {
	return ("Tengo " + age + " años.")
}

return miNombre("Robert") + miEdad(32)
}

info()

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()

function info () {
	var miNombre = function myName (name) {
	return ("Hola, soy " + name + ". ")
}

var miEdad = function myAge (age) {
	if (age < 20) {
		return (" y soy muy joven.")	
	} else {
		return (" y ya puedo comprar alcohol en el super.")
	}	
}

var randomNum = Math.random()*50

return miNombre("Robert") + miEdad(randomNum)
}

info()

//j) Al return de la función name(), concaténale otro mensaje

function info () {
	var miNombre = function myName (name) {
	return ("Hola, soy " + name + ". ") + (" aka The Best.")
}

var miEdad = function myAge (age) {
	if (age < 20) {
		return (" y soy muy joven.")	
	} else {
		return (" y ya puedo comprar alcohol en el super.")
	}	
}

var randomNum = Math.random()*50

return miNombre("Robert") + miEdad(randomNum)
}

info()

//k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable

function info () {
	var miNombre = function myName (name) {
	return name + (" aka The Best")
}

var miEdad = function myAge (age) {
	if (age < 20) {
		return (" y soy muy joven.")	
	} else {
		return (" y ya puedo comprar alcohol en el super.")
	}	
}

var randomNum = Math.random()*50

return "Hola, soy " + miNombre("Robert") + miEdad(randomNum)
}

info()

//l) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada

function info (p,o) {
	if (p === "Robert") {
		var miNombre = function myName(name) {
			return "Soy " + name
		}
		var miEdad = function myAge(age) {
		if (age < 20) {
		return (" y soy muy joven.")	
			} else {
		return (" y ya puedo comprar alcohol en el super.")
	}
	}
	return miNombre(p) + miEdad(o)
	} else {
		var miNombre = function myName(name) {
			return "Soy " + name
		}

		return miNombre(p) + ". Un momento... tu no eres Robert!"
	}
}
info("Robert",32)

//m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.

function randNum (){
	return Math.random()*50
}

function info (p,o) {
	if (p === "Robert") {
		var miNombre = function myName(name) {
			return "Soy " + name
		}
		var miEdad = function myAge(age) {
		if (age < 20) {
		return (" y soy muy joven.")	
			} else {
		return (" y ya puedo comprar alcohol en el super.")
	}
	}
	return miNombre(p) + miEdad(o)
	} else {
		var miNombre = function myName(name) {
			return "Soy " + name
		}

		return miNombre(p) + ". Un momento... tu no eres Robert!"
	}
}
info("Robert",randNum())

//n) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.

function randNum (){
	return Math.random()*50
}

function myName(name) {
	return "Soy " + name
}

function myAge(age) {
	if (age < 20) {
		return (" y soy muy joven.")	
			} else {
		return (" y ya puedo comprar alcohol en el super.")
	}
}

function father (name, age) {
	if (name === "Robert") {
		return myName(name) + myAge(age)
	} else {
		return myName(name) + " Un momento...tu no eres Robert!"
	}
	
}

father("Robert",randNum())

//ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.

function randNum (){
	return Math.random()*50
}

function myName(name) {
	return "Soy " + name
}

function myAge(age) {
	if (age < 20) {
		return (" y soy muy joven.")	
			} else {
		return (" y ya puedo comprar alcohol en el super.")
	}
}

function father (name, age) {
	var array =[]
	if (name === "Robert") {
		array.push(myName(name))
		array.push(myAge(age))
		return array
	} else {
		array.push(myName(name))
		array.push((" Un momento... tu no eres Robert!"))
		return array
	}
	
}

father("Robert",randNum())

//o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.

function randNum (){
	return Math.random()*50
}

function myName(name) {
	return "Soy " + name
}

function myAge(age) {
	if (age < 20) {
		return (" y soy muy joven.")	
			} else {
		return (" y ya puedo comprar alcohol en el super.")
	}
}

function father (name, age) {
	var array =[]
	if (name === "Robert") {
		array.push(myName(name))
		array.push(myAge(age))
		return array
	} else {
		array.push(myName(name))
		array.push((" Un momento... tu no eres Robert!"))
		return array
	}
	
}

var arrayFather = father("Robert",randNum())

function grandFather(array) {
	array.push("Hello from the other side...")
	return array
}

grandFather(arrayFather)

/**p) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, 
mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random 
entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.**/

function randNum (){
	return Math.random()*50
}

function randName() {
	var arrayNames = ["Juan", "Robert", "Phillip", "Carles","ZeDong"]

	function shuffle(array) {
  		var currentIndex = array.length, temporaryValue, randomIndex;

  		// While there remain elements to shuffle...
  		while (0 !== currentIndex) {

    	// Pick a remaining element...
    	randomIndex = Math.floor(Math.random() * currentIndex);
    	currentIndex -= 1;

    	// And swap it with the current element.
    	temporaryValue = array[currentIndex];
    	array[currentIndex] = array[randomIndex];
    	array[randomIndex] = temporaryValue;
  	}

  		return array;
}
	arrayNames = shuffle(arrayNames)

	return arrayNames[0]
}

function myName(name) {
	return "Soy " + name
}

function myAge(age) {
	if (age < 20) {
		return ("tengo " + age + " años y soy muy joven.")	
			} else {
		return ("tengo " + age + " años y ya puedo comprar alcohol en el super.")
	}
}

function father (name, age) {
	var array =[]
	if (name === "Robert") {
		array.push(myName(name))
		array.push(myAge(age))
		return array
	} else {
		array.push(myName(name))
		array.push((" Un momento... tu no eres Robert!"))
		return array
	}
	
}

function grandFather(array) {
	array.push("Hello from the other side...")
	return console.log(array)
}

var array1 = grandFather(father(randName(),randNum()))
var array2 = grandFather(father(randName(),randNum()))

if (array1[])
