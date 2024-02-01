//Forma corta (Recomendado)
class Animal {
  hablar() {
    return "Cuak";
  }
}

//Forma larga

class Animals {
  hablar = function () {
    return "Cuak";
  };
}

//Creacion de una instancia u objeto (pato)
const pato = new Animal();
console.log(pato.hablar()); // "Cuak"

//Creacion de otra instancia u objeto (donald)
const donald = new Animal();
console.log(donald.hablar()); // "Cuak"

//Constructor de clase

class Animales {
  constructor() {
    console.log("Ha nacido un pato. 🦆");
  }

  hablar() {
    return "Cuak";
  }
}

const animal = new Animales(); // "Ha nacido un pato. 🦆" (Se ha ejecutado implicitamente el constructor)
console.log(animal.hablar()); // "Cuak" (Se ha ejecutado explicitamente el metodo hablar)

//¿Que es un metodo estatico?

class Animalitos {
  static despedirse() {
    return "Adios";
  }
  hablar() {
    return "Cuak";
  }
}

console.log(Animalitos.despedirse()); // "Adios" (Metodo estatico, no requiere instancia)
//console.log(Animalitos.hablar()) // Animalitos.hablar is not a function

const instancia = new Animalitos(); // Creamos una instancia
//console.log(instancia.despedirse()) // Uncaught TypeError: instancia.despedirce is not a function
console.log(instancia.hablar()); // "Cuak" (Metodo NO estatico, requiere instancia)

//Inicializacion estatica

class Bloque {
  static {
    console.log("Bloque inicializado");
  }

  constructor() {
    console.log("Constructor ejecutado");
  }
}
// Aqui nos aparece "Bloque inicializado"

const constructor = new Bloque(); // Tras el new Bloque(), aparece "Constructor ejecutado"

/*Visibilidad de metodos


Nombre	             Sintaxis	              Descripción
Método público	     name() o this.name()	  Se puede acceder al método desde dentro y fuera de la clase.
Método privado	     #name() o this.#name()	  Se puede acceder al método sólo desde dentro de la clase.
*/

//Metodos Publicos

class Personaje {
  name = "Mario";

  constructor() {
    this.hablar();
  }

  hablar() {
    console.log("It's me, Mario!");
  }
}

const mario = new Personaje(); // "It's me, Mario!" (se ha accedido a hablar() desde dentro de la clase)
console.log(mario.hablar()); // "It's me, Mario!" (se ha accedido a hablar() desde fuera de la clase)

//Metodos Privados

class Personajes {
  name = "Mario";
  constructor() {
    this.#hablar();
  }
  #hablar() {
    console.log("It's me, Mario!");
  }
}

const private = new Personajes(); // "It's me, Mario!" (se ha accedido a #hablar() desde dentro de la clase)

// Da error, no se permite acceder a un método privado desde fuera de la clase
//private.#hablar() // Uncaught SyntaxError: Private field '#hablar' must be declared in an enclosing class

// Da error, el método hablar() no existe, ya que el nombre del método es #hablar()
// private.hablar() // Uncaught TypeError: mario.hablar is not a function
