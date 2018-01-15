
//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

for(var key in avenger) {
  console.log( key );
}

//b) Ahora, crea una función que liste solo los valores de las propiedades.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

for(var key in avenger){
	console.log(avenger[key])
}

//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

avenger.class = "XI"

console.log(avenger.class)

//d) Ahora, elimina la propiedad ID y asegura los cambios.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

delete avenger.id;

if (typeof avenger.id === "undefined") {
	console.log("Does not exist :(")
} else {
	console.log(avenger.id)
}

//e) Añade una nueva propiedad, por ejemplo city y dale un valor.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

avenger.city = "New York"

console.log(avenger)

//e1) Asegura los cambios solo imprimiendo esa nueva propiedad.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

avenger.city = "New York"

console.log(avenger.city)

//f) Lista el numero de propiedades que contiene el objeto.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 ,
    city: "New York"
};
var contador = 0

for(var key in avenger){	
	contador++;
}

console.log("There are " + contador + " info fields.")

//g) Cambia la propiedad name por fullName.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 ,
    city: "New York"
};

delete avenger.name
avenger.fullname = "Tony Stark"

//g1) Asegura los cambios.

var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 ,
    city: "New York"
};

delete avenger.name
avenger.fullname = "Tony Stark"

for(var key in avenger){
	console.log(avenger[key])
}

//h) Lista todas las propiedades del objeto a través de un console.log()

var avenger = { 
    fullname : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city: "New York"
};

console.log("Hi there, my name is " + avenger.fullname + " my class is " + avenger.class + " and my ID: " + avenger.id + ". I live in " + avenger.city + ".")

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...

var avenger = { 
    fullname : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city: "New York"
};

avenger.markAverage = 9.6
avenger.country = "USA"
avenger.job = "Vigilante"
avenger.studies = "Elementary school"

//h2) Asegura los cambios volviendo a listar los valores del objeto

var avenger = { 
    fullname : "Tony Stark", 
    class : "VII", 
    id : 1 ,
    city: "New York"
};

avenger.markAverage = 9.6
avenger.country = "USA"
avenger.job = "Vigilante"
avenger.studies = "Elementary school"

for(var key in avenger){
	console.log(avenger[key])
}

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)

//j) Crea otro objeto y imprime sus propiedades por pantalla.

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var Hulk = new avenger ("Hulk", "IV", "BEI", "Physicist", "Harvard", 9)
console.log(Hulk)

//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. Example of property:

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.description = function(){
        console.log(this.fullName + ", " + this.classRoom + ", " + this.city + ", " + this.job + ", " + this.studies + ", " + this.markAv)
    }
}
var Hulk = new avenger ("Hulk", "IV", "BEI", "Physicist", "Harvard", 9)
Hulk.description()

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados

function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
    this.description = function(){
        console.log(this.fullName + ", " + this.classRoom + ", " + this.city + ", " + this.job + ", " + this.studies + ", " + this.markAv)
    }
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
var Hulk = new avenger ("Hulk Green", "IV", "Beijing", "Physicist", "Harvard", 9)
var Thor = new avenger ("Thor Norse", "XX", "Oslo", "God", "U of Norway", 8.5)

var vigilantes = [tonyStark, Hulk, Thor]

function names () {
    for (var i = 0; i < vigilantes.length; i++) {
        console.log(vigilantes[i].fullName)
    }

}

names()

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.

var vigilantes = [
    { 
        fullName: "Tony Stark", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Engineer", 
        studies: "MIT", 
        markAV: 10 
    }, 
    { 
        fullName: "Hulk Green", 
        classRoom: "IV", 
        city: "Beijing", 
        job: "Physicist", 
        studies: "Harvard", 
        markAV: 9 
    }, 
    { 
        fullName: "Thor Norse", 
        classRoom: "XX", 
        city: "Oslo", 
        job: "God", 
        studies: "U of Norway", 
        markAV: 8.5 
    },
    { 
        fullName: "Bruce Wayne", 
        classRoom: "XIX", 
        city: "Gotham", 
        job: "Richamn", 
        studies: "U of Gotham", 
        markAV: 8 
    }, 
    { 
        fullName: "Peter Parker", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Photographer", 
        studies: "Syracuse U", 
        markAV: 7.5 
    }
    ]
    hash = Object.create(null),
    result = [];

vigilantes.forEach(function (object) {
    if (!hash[object.city]) {
        hash[object.city] = [];
        result.push(hash[object.city]);
    }
    hash[object.city].push(object);
});

for (var i = 0; i < result.length; i++) {
    if (result[i].length >1) {
        console.log(result[i])
        console.log("Hay " + result[i].length + " vigilantes que viven en la misma ciudad.")
    }
}

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.

var vigilantes = [
    { 
        fullName: "Tony Stark", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Engineer", 
        studies: "MIT", 
        markAV: 10 
    }, 
    { 
        fullName: "Hulk Green", 
        classRoom: "IV", 
        city: "Beijing", 
        job: "Physicist", 
        studies: "Harvard", 
        markAV: 9 
    }, 
    { 
        fullName: "Thor Norse", 
        classRoom: "XX", 
        city: "Oslo", 
        job: "God", 
        studies: "U of Norway", 
        markAV: 8.5 
    },
    { 
        fullName: "Bruce Wayne", 
        classRoom: "XIX", 
        city: "Gotham", 
        job: "Richamn", 
        studies: "U of Gotham", 
        markAV: 8 
    }, 
    { 
        fullName: "Peter Parker", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Photographer", 
        studies: "Syracuse U", 
        markAV: 7.5 
    },
    {
        fullName: "Robert Vera", 
        classRoom: "XXX", 
        city: "Barcelona", 
        job: "Developer", 
        studies: "Skylab Coding Academy", 
        markAV: 10   
    }
    ]

var suma = 0

function average () {
    for (var i = 0; i < vigilantes.length; i++) {
        var suma = suma + vigilantes[i].markAV
    }
    var media = suma / vigilantes.length
    return media
}

console.log("La nota media de los vigilantes es: " + average())

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.

var vigilantes = [
    { 
        id: 1,
        fullName: "Tony Stark", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Engineer", 
        studies: "MIT", 
        markAV: 10 
    }, 
    { 
        id: 1,
        fullName: "Hulk Green", 
        classRoom: "IV", 
        city: "Beijing", 
        job: "Physicist", 
        studies: "Harvard", 
        markAV: 9 
    }, 
    { 
        id: 2,
        fullName: "Thor Norse", 
        classRoom: "XX", 
        city: "Oslo", 
        job: "God", 
        studies: "U of Norway", 
        markAV: 8.5 
    },
    { 
        id: 2,
        fullName: "Bruce Wayne", 
        classRoom: "XIX", 
        city: "Gotham", 
        job: "Richamn", 
        studies: "U of Gotham", 
        markAV: 8 
    }, 
    { 
        id: 3,
        fullName: "Peter Parker", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Photographer", 
        studies: "Syracuse U", 
        markAV: 7.5 
    },
    {
        id: 3,
        fullName: "Robert Vera", 
        classRoom: "XXX", 
        city: "Barcelona", 
        job: "Developer", 
        studies: "Skylab Coding Academy", 
        markAV: 10   
    }
    ]

function compare (index) {
    var newArray = vigilantes.filter(function (id) {
  return id.id === index
         })
if (newArray[0].markAV > newArray[1].markAV) {
    return console.log(newArray[0].fullName + " vs " + newArray[1].fullName + " --> " + newArray[0].fullName + " is better!")
}else{
    return console.log(newArray[0].fullName + " vs " + newArray[1].fullName + " --> " + newArray[1].fullName + " is better!")
}
}


compare(1)
compare(2)
compare(3)

//ñ1) Intenta crear las parejas de forma aleatoria.

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

var vigilantes = [
    { 
        id: 0,
        fullName: "Tony Stark", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Engineer", 
        studies: "MIT", 
        markAV: 10 
    }, 
    { 
        id: 0,
        fullName: "Hulk Green", 
        classRoom: "IV", 
        city: "Beijing", 
        job: "Physicist", 
        studies: "Harvard", 
        markAV: 9 
    }, 
    { 
        id: 1,
        fullName: "Thor Norse", 
        classRoom: "XX", 
        city: "Oslo", 
        job: "God", 
        studies: "U of Norway", 
        markAV: 8.5 
    },
    { 
        id: 1,
        fullName: "Bruce Wayne", 
        classRoom: "XIX", 
        city: "Gotham", 
        job: "Richamn", 
        studies: "U of Gotham", 
        markAV: 8 
    }, 
    { 
        id: 2,
        fullName: "Peter Parker", 
        classRoom: "XI", 
        city: "NYC", 
        job: "Photographer", 
        studies: "Syracuse U", 
        markAV: 7.5 
    },
    {
        id: 2,
        fullName: "Robert Vera", 
        classRoom: "XXX", 
        city: "Barcelona", 
        job: "Developer", 
        studies: "Skylab Coding Academy", 
        markAV: 10   
    }
    ]
vigilantes = shuffle(vigilantes);
console.log(vigilantes);

for(var i = 0; i < vigilantes.length-1; i++){
    if(vigilantes[i].markAV > vigilantes[i+1].markAV){
        console.log(vigilantes[i] + ' wins ' + vigilantes[i+1])
    }else{
        console.log(vigilantes[i+1] + ' wins ' +  vigilantes[i])
    }
}