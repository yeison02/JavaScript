/*

Método	                     Descripción
 .reverse() ⚠️	             Invierte el orden de elementos del array.
 .toReversed() ✅	        Devuelve una copia del array, con el orden de los elementos invertido.
 .sort() ⚠️	                 Ordena los elementos del array bajo un criterio de ordenación alfabética.
 .sort(criterio) ⚠️	         Idem, pero bajo un criterio de ordenación indicado por  criterio.
 .toSorted() ✅	            Devuelve una copia del array, con los elementos ordenados.
 .toSorted(criterio) ✅	    Idem, pero ordenado por el criterio establecido por parámetro.
*/

const elements = ["A", "B", "C", "D", "E", "F"];

// Utilizando .reverse()
console.log(elements.reverse());
console.log(elements); // Afecta directamente el array elements

const names = ["Carlos", "Andres", "Daniel", "Edison"];

//Utilizando .sort()
console.log(names.sort());
console.log(names); // Afecta directamente el array names

//Utilizando .sort(criterio) funcion de comparación o de ordenamiento

const numbers = [1, 8, 2, 32, 9, 7, 4];

const alphabeticOrder = (a, b) => a + b;
const naturalOrder = (a, b) => a - b;

const alphaNumbers = numbers.sort(alphabeticOrder);
const naturalNumbers = numbers.sort(naturalOrder);

console.log(alphaNumbers); // [1, 8, 2, 32, 9, 7, 4]
console.log(naturalNumbers); // [1, 2, 4, 7, 8, 9, 32]
