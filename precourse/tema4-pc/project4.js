function arrayGenerator () {
	var numbers = []	
		for (var i = 1; i < 100; i++) {
			numbers.push(i)
		}
		return numbers
}

var numbers = arrayGenerator()

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

numbers = shuffle(numbers);
var arrayCarton = []
for (var i = 0; i <= 15; i++) {	
	arrayCarton.push(numbers[i])	
}

function cartonGenerator (array) {
	var carton = [
	{
		pos1: array[0],
		pos2: array[1],
		pos3: array[2],
		pos4: array[3]
	},
	{
		pos1: array[4],
		pos2: array[5],
		pos3: array[6],
		pos4: array[7]
	},
	{
		pos1: array[8],
		pos2: array[9],
		pos3: array[10],
		pos4: array[11]
	},
	{
		pos1: array[12],
		pos2: array[13],
		pos3: array[14],
		pos4: array[15]
	}
	]
	return carton

}

var carton = cartonGenerator(arrayCarton)


function printCarton (array) {
	console.log("-----------------")
		for (var i = 0; i < array.length; i++) {
		console.log(array[i].pos1 + " - " + array[i].pos2 + " - " + array[i].pos3 + " - " + array[i].pos4)
	}
	console.log("-----------------")
}


function checkNumber (array,number) {
	for (var i = 0; i < array.length; i++) {
		if (number === array[i].pos1) {
			array[i].pos1 = "X"
			alert("Enhorabuena! tienes el " + number + "!!")			
		} else if (number === array[i].pos2) {
			array[i].pos2 = "X"
			alert("Enhorabuena! tienes el " + number + "!!")			
		} else if (number === array[i].pos3) {
			array[i].pos3 = "X"
			alert("Enhorabuena! tienes el " + number + "!!")						
		} else if (number === array[i].pos4){
			array[i].pos4 = "X"
			alert("Enhorabuena! tienes el " + number + "!!")			
		}
			
	} 
	return array
}

function checkLine (array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].pos1 === "X" && array[i].pos2  === "X" && array[i].pos3 === "X" && array[i].pos4 === "X") {
			return true
		} else {
			
		}		
	}
	if(array[0].pos1 === "X" && array[1].pos1 === "X" && array[2].pos1 === "X" && array[3].pos1 === "X") {
		return true
	} else if (array[0].pos2 === "X" && array[1].pos2 === "X" && array[2].pos2 === "X" && array[3].pos2 === "X") {
		return true
	} else if (array[0].pos3 === "X" && array[1].pos3 === "X" && array[2].pos3 === "X" && array[3].pos3 === "X") {
		return true
	} else if (array[0].pos4 === "X" && array[1].pos4 === "X" && array[2].pos4 === "X" && array[3].pos4 === "X") {
		return true
	} else {

	}
	
	return false
}

function checkBingo(array) {
	if(array[0].pos1 === "X" && array[1].pos1 === "X" && array[2].pos1 === "X" && array[3].pos1 === "X" && array[0].pos2 === "X" && array[1].pos2 === "X" && array[2].pos2 === "X" && array[3].pos2 === "X" && array[0].pos3 === "X" && array[1].pos3 === "X" && array[2].pos3 === "X" && array[3].pos3 === "X" && array[0].pos4 === "X" && array[1].pos4 === "X" && array[2].pos4 === "X" && array[3].pos4 === "X") {
		return true
	} else {
		return false
	}
}

function gameFlow(arrayCarton, arrayNumbers) {
	arrayNumbers = shuffle(arrayNumbers)
	var nombre = prompt("Introduce el nombre del jugador.")

	console.log("Bienvenido " + nombre + "!! Preparado para jugar? este es tu cartón: ")

	printCarton(arrayCarton)
	var stopGame = checkBingo(arrayCarton)
	var acc = 0
	var line = false
	while (stopGame === false) {
		alert("Ha salidoooo...el " + arrayNumbers[acc] + "!!")
		arrayCarton = checkNumber(arrayCarton, arrayNumbers[acc])

		if(checkLine(arrayCarton) === true && line === false){
			alert("LINEA!!")
			line = true
		} else if (line === false) {
			console.log("No hay linea, seguimos...")
		}
		if(checkBingo(arrayCarton) === true){
			alert("B I N G O")
		} else {
			console.log("No hay bingo, seguimos...")
		}
		console.log("Así está tu cartón ahora!")
		printCarton(arrayCarton)
		checkLine(arrayCarton)		
		stopGame = checkBingo(arrayCarton)
		
		acc++

	}
	console.log("El juego ha durado " + acc + " rondas.")

	var playAgain = confirm("Te gustaría volver a jugar?")

	if (playAgain === true) {
		console.clear()
		return true
	} else {
		console.log("Ha sido un placer, vuelve pronto!")
		return false		
	}

	}

	var jugarAgain = true

	while (jugarAgain === true) {
	numbers = shuffle(numbers);
	var arrayCarton = []
	for (var i = 0; i <= 15; i++) {	
		arrayCarton.push(numbers[i])	
	}

	function cartonGenerator (array) {
		var carton = [
		{
			pos1: array[0],
			pos2: array[1],
			pos3: array[2],
			pos4: array[3]
		},
		{
			pos1: array[4],
			pos2: array[5],
			pos3: array[6],
			pos4: array[7]
		},
		{
			pos1: array[8],
			pos2: array[9],
			pos3: array[10],
			pos4: array[11]
		},
		{
			pos1: array[12],
			pos2: array[13],
			pos3: array[14],
			pos4: array[15]
		}
		]
		return carton

	}

	var carton = cartonGenerator(arrayCarton)
		jugarAgain = gameFlow(carton, numbers)
}