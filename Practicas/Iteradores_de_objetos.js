/*

Método	                       Descripción
 Object.keys(obj) 	           Itera el obj y devuelve sus propiedades o keys.
 Object.values(obj) 	       Itera el obj y devuelve los valores de sus propiedades.
 Object.entries(obj) 	       Itera el obj y devuelve un array con los pares [key, valor].
 Object.fromEntries(array) 	   Construye un objeto con un array de pares [key, valor].

*/

const persona = {
  name: "yeison",
  life: 99,
  power: 10,
  talk: function () {
    return "Hola!";
  },
};

console.log(Object.keys(persona)); // ["name", "life", "power", "talk"]
console.log(Object.values(persona)); // ["yeison", 99, 10, ƒ]
console.log(Object.entries(persona)); // [["name", "Manz"], ["life", 99], ["power", 10], ["talk", ƒ]]

const animals = ["Gato", "Perro", "Burro", "Gallo", "Raton"];

console.log(Object.keys(animals)); // [0, 1, 2, 3, 4]
console.log(Object.values(animals)); // ["Gato", "Perro", "Burro", "Gallo", "Ratón"]
console.log(Object.entries(animals)); // [[0, "Gato"], [1, "Perro"], [2, "Burro"], [3, "Gallo"], [4, "Ratón"]]

//Cualquier otra estructura se podría utilizar con Object.keys(), Object.values() o Object.entries() pero devolverá un array vacío si no se puede iterar. Por ejemplo:
console.log(Object.keys(new Date())); // []  (Iterar una fecha)
console.log(Object.values(/.+/)); // []  (Iterar una expresión regular)
console.log(Object.entries(true)); // []  (Iterar un booleano)

//Convertir un array a objeto

const keys = ["name", "life", "power", "talk"];
const values = [
  "Manz",
  99,
  10,
  function () {
    return "Hola!";
  },
];

const entrie = [];
for (let i of Object.keys(keys)) {
  // Obtenemos una lista de numeros de 0 al tamaño del array keys
  const key = keys[i];
  const value = values[i];
  entrie.push([key, value]);
}

console.log(Object.fromEntries(entrie)); // {name: 'Manz', life: 99, power: 10, talk: ƒ}

//Otra forma de obtener el mismo resultado utilizando el metodo .map() para simplificar el bucle

const entries = values.map((value, index) => [keys[index], value]);
console.log(Object.fromEntries(entries)); // {name: 'Manz', life: 99, power: 10, talk: ƒ}
