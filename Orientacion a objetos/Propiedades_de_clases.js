class Personaje {
  name; // Propiedad sin definir
  type = "Player"; // Propiedad definida
  lifes = 5; // Propiedad definida con 5 vidas restantes
  energy = 10; // Popiedad definida con 10 puntos de energia
}

class Personajes {
  constructor() {
    this.name;
    this.type = "Player";
    this.lifes = 5;
    this.energy = 10;
  }
}

class Players {
  name; // Propiedad sin definir
  type = "Player"; // Propiedad definida
  lifes = 5; // Propiedad definida con 5 vidas restantes
  energy = 10; // Popiedad definida con 10 puntos de energia

  constructor(name) {
    this.name = name; //Modificamos el valor de la propiedad name
    console.log(`¡Bienvenido/a, ${this.name}!`); // Accedemos al valor actual de la propiedad name
  }
}

const mario = new Players("Mario"); // '¡Bienvenido/a, Mario!'

/*Visibilidad de propiedades

Nombre	                Sintaxis	              Descripción
Propiedad pública	    name o this.name	      Se puede acceder a la propiedad desde dentro y fuera de la clase.
Propiedad privada	    #name o this.#name	      Se puede acceder a la propiedad sólo desde dentro de la clase.
*/

//Propiedades Publicas

class Publica {
  name;
  energy = 10;

  constructor(name) {
    this.name = name;
  }
}

const luigi = new Publica("Luigi"); // { name: "Luigi", energy: 10 }
console.log(luigi.name); // "Luigi" (Se puede acceder desde fuera)
luigi.name = "Evil luigi";
console.log(luigi.name); // "Evil luigi" (Se a modificado desde fuera)

//Propiedades privadas

class Private {
  #name;
  energy = 10;
  constructor(name) {
    this.#name = name;
  }
}
const nombre = new Private("Mario"); // { name: "Mario", energy: 10 }

//Es incorrecto, el nombre correcto de la propiedad es #name
console.log(nombre.name); // undefined

/* Los dos siguientes dan el mismo error (no se puede acceder a la propiedad privada)
Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
console.log(nombre.#name)
nombre.#name = "Evil mario"
*/

//Lo siguiente funcionara, pero a creado otra propiedad "name" que no es la misma que "#name"
nombre.name = "Evil mario";

//Ambitos de propiedad de clase
class jugador {
  constructor() {
    const name = "Manz";
    console.log("Constructor: " + name);
  }
  method() {
    console.log("Metodo: " + name);
  }
}

const c = new jugador(); // "Constructor: Manz"

console.log(c.name); //Undefined
console.log(c.method); // Método: '

//Propiedades computadas, propiedad get (getters)

class Getter {
  name;
  energy;
  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }
  get status() {
    return "🔋".repeat(this.energy);
  }
}

const nombress = new Getter("Mario");
console.log(nombress.energy); // 10
console.log(nombress.status); // "🔋🔋🔋🔋🔋🔋🔋🔋🔋🔋"

//Propiedad set (setters)

class Setters {
  name;
  energy;
  constructor(name, energy = 10) {
    this.name = name;
    this.energy = energy;
  }

  get status() {
    return "⭐".repeat(this.energy);
  }

  set status(stars) {
    this.energy = stars.length;
  }
}

const set = new Setters("Mario");
console.log(set.energy); // 10
set.status = "⭐⭐⭐";
console.log(set.energy); // 3
console.log(set.status); // '⭐⭐⭐
