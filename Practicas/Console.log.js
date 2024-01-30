//console.log() es una función integrada en JavaScript que se utiliza para imprimir mensajes en la consola del navegador o del editor de código. Se utiliza principalmente para depurar el código y para imprimir valores de variables y mensajes para ayudar en el proceso de desarrollo.

/*
Sintaxis
Para poder mostrar estos mensajes en consola, debes escribir console.log() y dentro de los paréntesis, el mensaje que quieres mostrar.

*/
console.log("Hola Javascript");

//También puedes averiguar el valor de una variable, escribiendo el nombre de la variable dentro de los paréntesis.

let nombre = "Javascript";
console.log(nombre);

//Puedes mostrar un mensaje y el valor de una variable en el mismo console.log().

let name = "Javascript";
console.log("Hola " + name);

//Además, puedes mostrar varios mensajes y valores de variables en el mismo console.log() separándolos por comas.

let lenguaje = "Javascript";
let version = 2023;
console.log(lenguaje, version);

/*
Más métodos de console
Además de console.log(), existen otros métodos que puedes utilizar para imprimir mensajes en la consola. Algunos de ellos son:

console.error(): Imprime un mensaje de error en la consola.
console.warn(): Imprime un mensaje de advertencia en la consola.
console.info(): Imprime un mensaje de información en la consola.
*/

console.error("error");
console.warn("Advertencia");
console.info("Información");
