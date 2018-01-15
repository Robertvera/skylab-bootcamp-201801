function skylabAirlines(){
	function flight (id, from, to, cost, scale) {
		this.id = id;
		this.from = from;
		this.to = to;
		this.cost = cost;
		this.scale = scale;
	}

	var flight00 = new flight(00, "Barcelona", "New York", 700, false);
	var flight01 = new flight(01, "Madrid", "Los Angeles", 1100, true);
	var flight02 = new flight(02, "Barcelona", "Paris", 210, false);
	var flight03 = new flight(03, "Barcelona", "Roma", 150, false);
	var flight04 = new flight(04, "Madrid", "London", 200, false);
	var flight05 = new flight(05, "Barcelona", "Madrid", 90, false);
	var flight06 = new flight(06, "Madrid", "Tokyo", 1500, true);
	var flight07 = new flight(07, "Barcelona", "Shanghai", 800, true);
	var flight08 = new flight(08, "Barcelona", "Sydney", 150, true);
	var flight09 = new flight(09, "Madrid", "Tel-Aviv", 150, false);

	var flights = [flight00, flight01, flight02, flight03, flight04, flight05, flight06, flight07, flight08, flight09]
	var nombre

	function aerolineas () {
		nombre = prompt("Introduzca el nombre del usuario")
		console.log("HOLA "+ nombre + ", BIENVENIDO A AEROLÍNEAS SKYLAB")
		console.log("------A CONTINUACIÓN LOS VUELOS DISPONIBLES PARA EL DÍA DE HOY------")
		for (var i=0; i < flights.length; i++) {
			if (flights[i].scale === true) {
				console.log("El vuelo con origen: " + flights[i].from +", y destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + " € y realiza escala.")
			} else {
				console.log("El vuelo con origen: " + flights[i].from +", y destino: " + flights[i].to + " tiene un coste de " + flights[i].cost + " € y no realiza escala.")
			}
			
		}
	}

	function costeMedio () {
		var acc = 0
		for (var i = 0; i < flights.length; i++) {
			acc += flights[i].cost
		}
		return console.log('El precio medio de los vuelos de hoy es: ' + acc/flights.length + ' €')
	}

	function escalas () {
		var scaleFlights = flights.filter(function(flight){
			return flight.scale === true
		})
		console.log("------VUELOS DE HOY CON ALGUNA ESCALA------")
		for (var i = 0; i < scaleFlights.length; i++) {
			console.log('Vuelo con origen: ' + scaleFlights[i].from + ' y destino a: '+ scaleFlights[i].to)
		}
	}

	function lastFlights () {
		var ultimosVuelos = flights.filter(function(flight){
			return flight.id >= 5
		})
		console.log("------ÚLTIMOS DESTINOS DE HOY------")
		for (var i = 0; i < ultimosVuelos.length; i++) {
			console.log(ultimosVuelos[i].to)
		}

	}

	aerolineas()
	alert('A continuación, se mostrará por pantalla el precio medio de los vuelos de hoy.')
	costeMedio()
	alert('A continuación, se mostrará por pantalla los vuelos de hoy con ESCALAS')
	escalas()
	alert('A continuación, se mostrará por pantalla los últimos destinos del día de hoy')
	lastFlights()

}

skylabAirlines()