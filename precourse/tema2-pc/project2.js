var num1 = ""
var num2 = ""

function calculator (number1,number2) {
	var suma = number1+number2
	var resta = number1-number2
	var multiplicacion = number1*number2
	var division = number1/number2
	var resultados = [suma,resta,multiplicacion,division]
	return resultados
}

function redondearDecimales(numero, decimales) {
    numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');
    if (numeroRegexp.test(numero)) {
        return Number(parseInt(numero).toFixed(decimales));
    } else {
        return Number(parseInt(numero).toFixed(decimales)) === 0 ? 0 : numero;
    }
}

if (typeof num1 === "undefined") {
	var raiz = Math.sqrt(num2)
	console.log("::::::CALCULADORA:::::::")
	console.log("El resultado de la raíz cuadrada de " + num2 + " es " + redondearDecimales(raiz,3))
} else if (typeof num2 === "undefined") {
	var raiz = Math.sqrt(num1)
	console.log("::::::CALCULADORA:::::::")
	console.log("El resultado de la raíz cuadrada de " + num1 + " es " + redondearDecimales(raiz,3))
} else if (typeof num1 || typeof num2 != 'number') {
	console.log("::::::CALCULADORA:::::::")
	console.log("No se puede operar con algo que no es un número, por favor revisa la introducción de datos")
} else {
	var calculadora = calculator(num1,num2)
	console.log("::::::CALCULADORA:::::::")
	console.log("La suma de " + num1 + " y " + num2 + " es: " + redondearDecimales(calculadora[0],3))
	console.log("La resta de " + num1 + " y " + num2 + " es: " + redondearDecimales(calculadora[1],3))
	console.log("La multiplicación de " + num1 + " y " + num2 + " es: " + redondearDecimales(calculadora[2],3))
	if (num2 === 0){
		console.log("No se puede dividir por cero.")
	} else {
		console.log("La división de " + num1 + " y " + num2 + " es: " + redondearDecimales(calculadora[3],3))
	}	
}

calculator (num1,num2)