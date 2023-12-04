/*
Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.

Por ejemplo, si pensamos en una persona, podemos definir sus propiedades como su nombre, su edad, su altura, su peso, etc. Y sus métodos como caminar, correr, saltar, etc.


Declaración y asignación de objetos

Para declarar un objeto usamos las llaves {} y dentro las propiedades y métodos separados por comas ,. Cada propiedad o método se define con una clave y un valor separados por dos puntos :.

Por ejemplo, vamos a crear un objeto que represente a una persona:
*/

const persona = {
  name: "Daniel",
  age: 23,
  isWorking: true,
};

//Las propiedades y métodos de un objeto pueden ser de cualquier tipo de JavaScript, incluso otros objetos o arrays.

const personas = {
  name: "Rubiela",
  age: 45,
  isWorking: false,
  family: ["Meguel", "Maria"], //Array
  address: {
    //Otro objeto
    street: "Calle de las primaveras",
    number: 25,
    city: "Colombia",
  },
};

//Y, claro, como hemos comentado antes, también podemos tener funciones. Cuando una función es parte de un objeto se le llama método.

const person = {
  name: "Yeison",
  age: 25,
  isWorking: true,
  family: ["Diana", "Jessica", "Mery"],
  address: {
    street: "Jordan",
    number: 8,
    city: "Colombia",
  },
  walk: function () {
    // Método
    console.log("Estoy cominando");
  },
};

/*Acceder a propiedades y métodos de un objeto

Para acceder a las propiedades y métodos de un objeto usamos el punto . y el nombre de la propiedad o método.
*/

const persn = {
  name: "Dani",
};

console.log(persn.name); // Dani

/*
Si intentamos acceder a una propiedad o método que no existe, nos devolverá undefined. 
 */

const pers = {
  name: "Diana",
};
console.log(pers.fullName); // Undefined

/*
Puedes usar variables para acceder a las propiedades y métodos de un objeto. Para ello, tienes que usar la notificación por corchetes [].
*/

const personass = {
  name: "Juan",
};
let property = "name";
console.log(personass[property]); // Juan

/*
También necesitas usar los corchetes si la clave de la propiedad o método tiene espacios o caracteres especiales.
*/

const perrsona = {
  "full name": "Dani",
};

console.log(perrsona["full name"]); // Dani

/*No puedes hacer esto ❌

perrsona.full name


Siempre que puedas, evita usar espacios o caracteres especiales en las claves de las propiedades y métodos de un objeto. Aunque se puede, es más complicado de leer y de escribir.

Igual que las propiedades, puedes acceder a los métodos de un objeto usando cualquiera de las dos formas anteriormente comentadas:
*/

const personna = {
  name: "Dani",
  walk: function () {
    console.log("Estoy caminando");
  },
};

console.log(personna.walk()); //Estoy caminando

let metodo = "walk";
console.log(personna[metodo]()); //Estoy caminando
