//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2.

function showNums(){
    var nums = [1,2,3,4,5,6,7,8,9]
    var pairs = []
    for(var i = 0; i < nums.length; i++){        
        pairs.push(nums[i]*2)
    }    
    return pairs
}

for (var i = 0; i < showNums().length-1; i++){
	console.log((i+1) + "ª pareja " + showNums()[i] + " - " + showNums()[i+1])	
}

//a1) La funcion debería aceptar la array a tratar como argumento.

var nums = [1,2,3,4,5,6,7,8,9]

function showNums(array){    
    var pairs = []
    for(var i = 0; i < array.length; i++){        
        pairs.push(array[i]*2)
    }    
    return pairs
}

for (var i = 0; i < showNums(nums).length-1; i++){
	console.log((i+1) + "ª pareja " + showNums(nums)[i] + " - " + showNums(nums)[i+1])	
}

//a2) Pasa también el numero a multiplicar a la función como argumento

var nums = [1,2,3,4,5,6,7,8,9]
var multiplicador = 2

function showNums(array, numero){    
    var pairs = []
    for(var i = 0; i < array.length; i++){        
        pairs.push(array[i]*numero)
    }
    console.log("El multiplicador escogido es el " + numero)    
	for (var i = 0; i < pairs.length-1; i++){
		console.log((i+1) + "ª pareja " + pairs[i] + " - " + pairs[i+1])
	}
}
showNums(nums,multiplicador)

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

var nums = [1,2,3,4,5,6,7,8,9]
var multiplicador = 2
var delimitador = 3

function showNums(array, numero, limite){    
    var pairs = []
    for(var i = 0; i < array.length; i++){        
        pairs.push(array[i]*numero)
    }
    console.log("El multiplicador escogido es el " + numero)    
    console.log("Se mostrarán las " + limite + " primeras parejas")
	for (var i = 0; i < limite; i++){
		console.log((i+1) + "ª pareja " + pairs[i] + " - " + pairs[i+1])
	}
}

showNums(nums,multiplicador,delimitador)

//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

function fibonacci(numeroSeries) {
	var num1 = 0
	var num2 = 1
	var num3
 
	console.log(num1 + "")
	console.log(num2 + "")
 
	for(var i = 3; i <= numeroSeries; i++) {
		num3 = num1 + num2
		num1 = num2
		num2 = num3
		console.log(num3 + " ")
	}
}

fibonacci(10)

//b2) Puedes añadir además, la posición de cada resultado?

function fibonacci(numeroSeries) {
	var num1 = 0
	var num2 = 1
	var num3
 
	console.log("Posición " + num1 + " --> " + num1 + "")
	console.log("Posición " + num2 + " --> " + num2 + "")
 
	for(var i = 3; i <= numeroSeries; i++) {
		num3 = num1 + num2
		num1 = num2
		num2 = num3
		console.log("Posición " + (i-1) + " --> " + num3 + "")
	}
}

fibonacci(50)

//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.

function fibonacci(numeroSeries) {
	var serieFibo = [0,1]

	var num1 = 0
	var num2 = 1
	var num3
 
	console.log("Posición " + num1 + " --> " + num1 + "")
	console.log("Posición " + num2 + " --> " + num2 + "")
 
	for(var i = 3; i <= numeroSeries; i++) {
		serieFibo.push(0)
		serieFibo[i-1] = serieFibo[0] + serieFibo[1]
		serieFibo[0] = serieFibo[1]
		serieFibo[1] = serieFibo[i-1]
		console.log("Posición " + (i-1) + " --> " + serieFibo[i-1] + "")
	}
}

fibonacci(50)

//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.

function fibonacci(numeroSeries) {
	var serieFibo = [0,1]
 
	for(var i = 3; i <= numeroSeries; i++) {		
		serieFibo.push(0)
		serieFibo[i-1] = serieFibo[0] + serieFibo[1]
		serieFibo[0] = serieFibo[1]
		serieFibo[1] = serieFibo[i-1]		
	}
	serieFibo[0] = 0
	serieFibo[1] = 1
	return serieFibo
}

fibonacci(10)

//b5) Ahora, muestra los resultados en forma piramidal:

function fib(numMax){	
    var fibArray = [0]
    console.log(fibArray)
    fibArray.push(1)
    console.log(fibArray)
    for(i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j
        fibArray.push(x)
        console.log(fibArray)
    }
    for(var i = 0; i < numMax; i++){       
        fibArray.pop()
        console.log(fibArray)
    }    
    fibArray.pop()
    console.log(fibArray)
    fibArray.pop()
    console.log(fibArray)
    
}

fib(10)

//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código

var code = 3491

function codeScript (code) {
	var stringCode = code.toString()
	var firstPos = stringCode.charAt(1)
	var secondPos = stringCode.charAt(2)
	var thirdPos = stringCode.charAt(3)
	var fourthPos = stringCode.charAt(0)

	var newCode = firstPos + secondPos + thirdPos + fourthPos

	return parseInt(newCode)

}

code = codeScript(code)

console.log("El nuevo código es " + code)

//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

var code1 = 3498
var code2 = 4532

function codeScript (code1,code2) {
	
	var codeArray = [code1,code2]
	
	var newCodeArray = codeArray.map(function(code){
		var stringCode = code.toString()
		var firstPos = stringCode.charAt(1)
		var secondPos = stringCode.charAt(2)
		var thirdPos = stringCode.charAt(3)
		var fourthPos = stringCode.charAt(0)

		var newCode = firstPos + secondPos + thirdPos + fourthPos

		return parseInt(newCode)	
	})
	
	return newCodeArray

}

var codeArray = codeScript(code1,code2)

code1 = codeArray[0]
code2 = codeArray[1]

console.log("Los nuevos códigos son: " + code1 + " y " + code2)

//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)

var code = 3496

function codeScript (code) {
	var stringCode = code.toString()
	var firstPos = stringCode.charAt(1)
	var secondPos = stringCode.charAt(2)
	var thirdPos = stringCode.charAt(3)
	var fourthPos = stringCode.charAt(0)

	var newCode = firstPos + secondPos + thirdPos + fourthPos
	newCode = parseInt(newCode).toString().split("")

	for (var i = 0; i < newCode.length; i++) {
		if (newCode[i] === "1") {
				newCode[i] = newCode[i] * Math.floor((Math.random() * 9) + 1)
			} else if (newCode[i] === "2") {
				newCode[i] = newCode[i] * Math.floor((Math.random() * 4) + 1)
			} else if (newCode[i] === "3") {
				newCode[i] = newCode[i] * Math.floor((Math.random() * 3) + 1)
			} else if (newCode[i] === "4") {
				newCode[i] = newCode[i] * Math.floor((Math.random() * 2) + 1)
			} else if (newCode[i] > "5") {
				newCode[i] = newCode[i] * 1
			}
	}	
			
	return newCode

}

code = codeScript(code).toString().replace(/,/g,"")

console.log(code)

//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.

var code = 3496

function codeScript (code) {
	var stringCode = code.toString()
	var firstPos = stringCode.charAt(1)
	var secondPos = stringCode.charAt(2)
	var thirdPos = stringCode.charAt(3)
	var fourthPos = stringCode.charAt(0)

	var newCode = firstPos + secondPos + thirdPos + fourthPos
	newCode = parseInt(newCode).toString().split("")

	for (var i = 0; i < newCode.length; i++) {
		if (newCode[i] === "1") {
				newCode[i] = newCode[i] * 4
			} else if (newCode[i] === "2") {
				newCode[i] = newCode[i] * 1
			} else if (newCode[i] === "3") {
				newCode[i] = newCode[i] * 2
			} else if (newCode[i] === "4") {
				newCode[i] = newCode[i] * 2
			} else if (newCode[i] > "5") {
				newCode[i] = newCode[i] * 1
			}
	}	
			
	return newCode

}

code = codeScript(code).toString().replace(/,/g,"")

console.log(code)

function decrypter (code) {
	var stringCode = code.toString()	
	var firstPos = stringCode.charAt(3)
	var secondPos = stringCode.charAt(0)
	var thirdPos = stringCode.charAt(1)
	var fourthPos = stringCode.charAt(2)

	var newCode = firstPos + secondPos + thirdPos + fourthPos

}

//c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' '],    
}

var message = ('NOT PENNYS BOAT')

function codeScript(string,object){
	var array = string.split("")	
	var keys = Object.keys(object)
	var code = []

	for (var i = 0; i < string.length;i++) {
		if (array[i] === 'A' || array[i] === 'K' || array[i] === 'T' || array[i] === 'F' || array[i] === 'O' || array[i] === 'Y') {
			code.push(0)
		} else if (array[i] === 'B' || array[i] === 'L' || array[i] === 'U' || array[i] === 'G' || array[i] === 'P' || array[i] === 'Z') {
			code.push(1)
		} else if (array[i] === 'C' || array[i] === 'M' || array[i] === 'V' || array[i] === 'H' || array[i] === 'Q' || array[i] === '.') {
			code.push(2)
		} else if (array[i] === 'D' || array[i] === 'N' || array[i] === 'W' || array[i] === 'I' || array[i] === 'R' || array[i] === ',') {
			code.push(3)
		} else if (array[i] === 'E' || array[i] === 'Ñ' || array[i] === 'X' || array[i] === 'J' || array[i] === 'S' || array[i] === ' ') {
			code.push(4)
		} else {

		}
	}

		return code
	}

var code = codeScript(message,dictionary).toString().replace(/,/g,'')

console.log('This is your coded message: ' + code)

//d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

var string = "SKYLAB"

function romana (string) {

	var part1 = string.substring(0,3)
	var part2 = string.substring(3,6)
	var romanaArray = []

	for (var i = 0 ; i < part1.length ; i++) {
		romanaArray.push(part1.charAt(i))
		romanaArray.push(part2.charAt(i))
	}


	return romanaArray.toString().replace(/,/g,'')
}

console.log(romana(string))

//d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

var string = "SKYLAB"

function romana (string) {

	var part1 = string.substring(0,3)
	var part2 = string.substring(3,6)
	var romanaArray = []

	for (var i = 0 ; i < part1.length ; i++) {
		romanaArray.push(part1.charAt(i))
		romanaArray.push(part2.charAt(i))
	}


	return romanaArray.toString().replace(/,/g,'')
}

var romanaString = romana(string)

console.log(romanaString)

function decrypt (string) {
	var part1 = []
	var part2 = []
	for (var i = 0 ; i < string.length; i = i+2) {
		part1.push(string.charAt(i))
	}
	for (var i = 1 ; i < string.length; i = i+2) {
		part2.push(string.charAt(i))
	}
	originalString = part1.join() + part2.join()

	return originalString.replace(/,/g,'')
}


console.log(decrypt(romanaString))

//d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

var string = "SKYLAB"

function romanaEncryptation (string) {

function encrypt (string) {

	var part1 = string.substring(0,3)
	var part2 = string.substring(3,6)
	var romanaArray = []

	for (var i = 0 ; i < part1.length ; i++) {
		romanaArray.push(part1.charAt(i))
		romanaArray.push(part2.charAt(i))
	}


	return romanaArray.toString().replace(/,/g,'')
}

var romanaString = encrypt(string)

console.log(romanaString)


function decrypt (stringRoman) {
	var part1 = []
	var part2 = []
	for (var i = 0 ; i < stringRoman.length; i = i+2) {
		part1.push(stringRoman.charAt(i))
	}
	for (var i = 1 ; i < stringRoman.length; i = i+2) {
		part2.push(stringRoman.charAt(i))
	}
	originalString = part1.join() + part2.join()

	return originalString.replace(/,/g,'')
}


console.log(decrypt(romanaString))


}

romanaEncryptation(string)

//d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

var string = "SKYLABCODERS"

function romanaEncryptation (string) {

	function encrypt (string) {

		var part1 = string.substring(0,string.length/2)
		var part2 = string.substring(string.length/2,string.length)
		var romanaArray = []

		for (var i = 0 ; i < part1.length ; i++) {
			romanaArray.push(part1.charAt(i))
			romanaArray.push(part2.charAt(i))
		}


		return romanaArray.toString().replace(/,/g,'')
	}

	var romanaString = encrypt(string)

	console.log(romanaString)


	function decrypt (stringRoman) {
		var part1 = []
		var part2 = []
		for (var i = 0 ; i < stringRoman.length; i = i+2) {
			part1.push(stringRoman.charAt(i))
		}
		for (var i = 1 ; i < stringRoman.length; i = i+2) {
			part2.push(stringRoman.charAt(i))
		}
		originalString = part1.join() + part2.join()

		return originalString.replace(/,/g,'')
	}


	console.log(decrypt(romanaString))


}

romanaEncryptation(string)

//e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

function toEnglish (number){
	numberArray = number.toString().split('')
	var units = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	if(numberArray.length === 1){
		return units[parseInt(numberArray)]
	} else if (number > 9 && number < 20){
		return teens[parseInt(numberArray[1])]
	} else if (number > 19 && number < 100) {
		return tens[parseInt(numberArray[0])] + '-' + units[parseInt(numberArray[1])]
	}
}

console.log(toEnglish(1))

//e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

function toEnglish (number){
	numberArray = number.toString().split('')
	var units = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	if(numberArray.length === 1){
		return console.log(units[parseInt(numberArray)] + ', ' + units[parseInt(numberArray)] + '/' + number)
	} else if (number > 9 && number < 20){
		return console.log(teens[parseInt(numberArray[1])] + ', ' + teens[0] + ' + ' + units[parseInt(numberArray[1])] + ' / ' +(numberArray[0]*10).toString() + ' + ' + numberArray[1].toString())
	} else if (number > 19 && number < 100) {
		return console.log(tens[parseInt(numberArray[0])] + '-' + units[parseInt(numberArray[1])] + ', ' + tens[parseInt(numberArray[0])] + ' + ' + units[parseInt(numberArray[1])] + ' / ' + (numberArray[0]*10).toString() + ' + ' + numberArray[1].toString())
	}
}

console.log(toEnglish(23))

//e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

function toEnglish (number){
	numberArray = number.toString().split('')
	var units = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
	var tens = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
	var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
	var hundred = 'hundred'
	if(numberArray.length === 1){
		return console.log(units[parseInt(numberArray)] + ', ' + units[parseInt(numberArray)] + '/' + number)
	} else if (number > 9 && number < 20){
		return console.log(teens[parseInt(numberArray[1])] + ', ' + teens[0] + ' + ' + units[parseInt(numberArray[1])] + ' / ' +(numberArray[0]*10).toString() + ' + ' + numberArray[1].toString())
	} else if (number > 19 && number < 100) {
		return console.log(tens[parseInt(numberArray[0])] + '-' + units[parseInt(numberArray[1])] + ', ' + tens[parseInt(numberArray[0])] + ' + ' + units[parseInt(numberArray[1])] + ' / ' + (numberArray[0]*10).toString() + ' + ' + numberArray[1].toString())
	} else if (number > 99 && number < 1000) {
		if (numberArray[1] === 1) {
			return console.log(units[parseInt(numberArray[0])] + ' hundred ' + teens[parseInt(numberArray[2])]  )
		} else {
			return console.log(units[parseInt(numberArray[0])] + ' hundred ' + tens[parseInt(numberArray[1])] + '-' + units[parseInt(numberArray[2])] + ', ' + units[parseInt(numberArray[0])] + '+' + hundred + '+' + tens[parseInt(numberArray[1])] + '+' + units[parseInt(numberArray[2])] + ' / ' + (numberArray[0]*100).toString() + ' + ' + (numberArray[1]*10).toString() + ' + ' + numberArray[2].toString()) 
		}
		
	}
}

toEnglish(777)

//f) Recibiendo el siguiente texto por parámetro a tu función... :

var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function changes (string) {
	var oldWord = ['.',',','dolor','Lorem','labor','consequatur','ipsum']
	var newWord = [',',' ','potato', 'Tomato','cucumber','garlic','onion']
	for (var i = 0; i < oldWord.length ; i++) {
		string = string.replaceAll(oldWord[i],newWord[i])

	}

	return string
}

console.log(changes(string))

//f1) Añade una funcionalidad que cuente cuantos cambios/coincidencias ha encontrado de cada palabra, y te los muestre de una forma amigable para el usuario

var string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."

String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 

function count(string,char) {
 var re = new RegExp(char,"gi");
 return string.match(re).length;
}

function changes (string) {
	var oldWord = ['.',',','dolor','Lorem','labor','consequatur','ipsum']
	var newWord = [',',' ','potato', 'Tomato','cucumber','garlic','onion']	
	for (var i = 0; i < oldWord.length ; i++) {
		console.log("Se han encontrado " + count(string,oldWord[i].toString()) + " coincidencias de la palabra: " + '-' + oldWord[i] + '-')
		string = string.replaceAll(oldWord[i],newWord[i])
	}

	return string
}

console.log(changes(string))