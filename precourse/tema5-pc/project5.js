//variables globales
//array objetos preguntas
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") },
    { letter: "d", answer: "diarrea", status: 0, question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida") },
    { letter: "e", answer: "ectoplasma", status: 0, question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación") },
    { letter: "f", answer: "facil", status: 0, question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad") },
    { letter: "g", answer: "galaxia", status: 0, question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas") },
    { letter: "h", answer: "harakiri", status: 0, question: ("CON LA H. Suicidio ritual japonés por desentrañamiento") },
    { letter: "i", answer: "iglesia", status: 0, question: ("CON LA I. Templo cristiano") },
    { letter: "j", answer: "jabali", status: 0, question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba") },
    { letter: "k", answer: "kamikaze", status: 0, question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria") },
    { letter: "l", answer: "licantropo", status: 0, question: ("CON LA L. Hombre lobo") },
    { letter: "m", answer: "misantropo", status: 0, question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas") },
    { letter: "n", answer: "necedad", status: 0, question: ("CON LA N. Demostración de poca inteligencia") },
    { letter: "ñ", answer: "señal", status: 0, question: ("CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.") },
    { letter: "o", answer: "orco", status: 0, question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien") },
    { letter: "p", answer: "protoss", status: 0, question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft") },
    { letter: "q", answer: "queso", status: 0, question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "raton", status: 0, question: ("CON LA R. Roedor") },
    { letter: "s", answer: "stackoverflow", status: 0, question: ("CON LA S. Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "terminator", status: 0, question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", status: 0, question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "vikingos", status: 0, question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "sandwich", status: 0, question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso") },
    { letter: "x", answer: "botox", status: 0, question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", status: 0, question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", status: 0, question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") },
]

//array jugadores
var arrayPlayers = []

//booleano seguir jugando
var playAgain = true

//función creadora de nuevos jugadores
function newPlayer (name, correct, miss) {
    this.name = name
    this.correct = correct
    this.miss = miss

    return name
}

//función para comprobar si termina el juego
function checkEndGame(arrayObj) {
    var acc = 0
    for (var i = 0; i < arrayObj.length; i++) {
        if (arrayObj[i].status === 0) {
            acc++
        } else {}
    }

    if (acc === 0) {
        return true
    } else {
        return false
    }
}

//función de desarrollo del juego, le entran como parámetros el array de objetos de las preguntas y el array de los jugadores
function gameFlow (arrayObj, arrayPlayers) {
    var name = prompt("Por favor introduce el nombre del jugador:")
    if (name === null) {
        return false
    }
    var currentPlayer = new newPlayer(name, 0,0)
    console.log(name + ", bienvenido al juego de PASAPALABRA!")
    alert('¿LISTO? ¡EMPEZAMOS!')
    var endFlag = false
    var answer =""
    
    while(endFlag === false) {
            for (var i = 0; i < arrayObj.length; i ++) {
                if (arrayObj[i].status === 0) {
                    answer = prompt(arrayObj[i].question)
                        if (answer === arrayObj[i].answer) {
                            alert("Respuesta correcta! :)")
                            arrayObj[i].status = 1
                            currentPlayer.correct++
                        } else if (answer === "pasapalabra") {
                            alert("Pasapalabra! Pasamos a la siguiente pregunta!")
                        } else if (answer === null){
                            return false
                        } else {
                            alert("Respuesta incorrecta :(")
                            arrayObj[i].status = 2
                            currentPlayer.miss++
                        }
                }                                
            }                    
    endFlag = checkEndGame(arrayObj)
    if (endFlag === false) {
        alert("Has terminado la ronda, volvemos a empezar con las palabras que has pasado.")
    }
    }
    arrayPlayers.push(currentPlayer)

    console.log("FIN DE LA PARTIDA!")
    console.log("Esta es la clasificación actual: ")
    console.log("NAME" + "\t"+"\t"+"\t" + "CORRECT" + "\t"+"\t"+"\t" + "MISS")
    console.log("--------------------------------------")
    
    arrayPlayers.sort(function(a,b){
        return b.correct - a.correct
    })
    
    for (var i = 0; i < arrayPlayers.length; i++) {
        console.log(arrayPlayers[i].name + "\t"+"\t"+"\t" + arrayPlayers[i].correct + "\t"+"\t"+"\t"+"\t" + arrayPlayers[i].miss)
    }

    var playAgain = confirm("Te gustaría volver a jugar?")

    if (playAgain === true) {
        console.clear()
        return true
    } else {
        console.log("Ha sido un placer, vuelve pronto!")
        return false        
    }

}

while (playAgain === true) {
    //Resetear status
    for (var i = 0; i < questions.length; i++) {
        questions[i].status = 0
    }
    playAgain = gameFlow(questions,arrayPlayers)    
}
