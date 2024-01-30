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

/*
persona[method]() parece un poco raro, pero si lo separas parte por parte, verás que tiene sentido. persona es el objeto. Accedemos a la propiedad method del objeto persona con persona[method]. Y, finalmente, ejecutamos la función con persona[method](). Es decir, estamos ejecutando persona.walk().


Añadir, eliminar y modificar propiedades de un objeto

Igual que podemos acceder a las propiedades de un objeto, podemos añadir nuevas propiedades o modificar las existentes.
*/

const peersona = {
  name: "Dani",
};

peersona.age = 25;
console.log(peersona); // {name: "Dani", age: 25}

/* 
En el código estamos modificando el objeto persona añadiendo la propiedad age con el valor 25.

Fíjate que, al igual que en los Arrays, podemos añadir propiedades a un objeto aunque sea una constante. Esto es porque no estamos reasignando la variable persona, si no que estamos modificando una propiedad interna del objeto.

Eliminar propiedades de un objeto
Para eliminar una propiedad de un objeto usamos la palabra reservada delete.
*/

const ppersona = {
  name: "Dani",
  age: 30,
};

delete ppersona.age;
console.log(ppersona); // -> {name: "Dani"}

//Desestructuracion de objetos

const user = {
  name: "Manz",

  life: 99,
};

const { name, role, life } = user;

console.log({ name, role, life });

/*
//Renombrar propiedades

const {name, role: type, life} = user

console.log({ name, type, life }) -> { name: "Manz", type: "Streamer", life: 99 }

// Establecer un valor por defecto si la propiedad role y life no existen en el objeto user

const { name, role = "normal user", life = 100 } = user;

console.log({ name, role, life }); -> { name: "Manz", role: "normal user", life: 100 }
*/

//Reestructurando nuevos objetos

const usuario = {
  name: "Manz",
  role: "streamer",
  life: 99,
};

const fullUser = {
  ...usuario,
  power: 25,
  life: 50,
};

console.log(fullUser); // {name:"Manz", role: "streamer", life: 50, power: 25}

//Haciendo copias de objetos

const copy = {
  name: "Manz",
  role: "streamer",
  life: 99,
  features: ["learn", "code", "paint"],
};

const fullCopy = {
  ...copy,
  // ...structuredClone(copy) -> Crea una copia del objeto user y no una referencia
  power: 25,
  life: 50,
};

console.log(copy.features); // ["learn", "code", "paint"]
console.log(fullCopy.features); // ["learn", "code", "paint"]

fullCopy.features[0] = "program";

console.log(fullCopy.features); // ["program", "code", "paint"]
console.log(copy.features); // ["program", "code", "paint"]

//Estructuras anidadas

const streamer = {
  name: "Manz",
  role: "streamer",
  attributes: {
    height: 183,
    favColor: "blueviolet",
    hairColor: "black",
  },
};

//Extraemos la propiedad attributes (objeto con 3 propiedades)
const { attributes } = streamer;
console.log(attributes); // { height: 183, favColor: "blueviolet", hairColor: "black"}

//Extraemos la propiedad height (183)

const {
  attributes: { height },
} = streamer;
console.log(height); // 183

//Extraemos la propiedad height (183) y la cambiamos de nombre por size
const {
  attributes: { height: size },
} = streamer;
console.log(size); // 183

//Desestructurracion (rest)

const users = {
  nombre: "Manz",
  role: "streamer",
  life: 99,
};

const { nombre, ...rest } = users;

console.log(users);

//Prametros desestructurados

const userr = {
  name: "Manz",
  role: "streamer",
  life: 99,
};

function show(data) {
  const stars = "⭐".repeat(data.life / 20);
  return `Nombre: ${data.name} (${data.role}) ${stars}`;
}

console.log(show(userr)); // "Nombre: Manz (streamer) ⭐⭐⭐⭐)"

/*
Desestructuramos los parametros de la funcion show() para que sea mas facil de escribir

const user = {
  name: "Manz",
  role: "streamer", 
  life: 99
}

function show({ name, role, life }) {
  const stars = "⭐".repeat(life / 20);
  return `Nombre: ${name} (${role}) ${stars}`;
}

show(user);   // "Nombre: Manz (streamer) ⭐⭐⭐⭐"
*/
