/*

Forma	                       Descripción
export ...	                   Declara un elemento o dato, a la vez que lo añade al módulo de exportación.
export { name }	               Añade el elemento name al módulo de exportación.
export { name as newName }	   Añade el elemento name al módulo de exportación con el nombre newName.
export { n1, n2, n3... }	   Añade los elementos indicados ( n1 , n2 , n3 ...) al módulo de exportación.
export * from "./file.js"	   Añade todos los elementos del módulo de file.js al módulo de exportación.
export default ...	           Declara un elemento y lo añade como módulo de exportación por defecto.
*/

//Declaracion y exportación

export let number = 42; // Se añade la variable number al modulo
export const hello = () => "Hello"; // Se añade la funcion hello al modulo
export class CodeBlock {} // Se añade la calse vacia CodeBlock al modulo

//Exportacion post-declaracion

let num = 42;
const hola = () => "Hola";
const adios = () => "Adios";
class Animals {}

export { num }; // Se crea el modulo y se añade num
export { hola, adios as bye }; // Se añade saludar y despedir al modulo
export { hola as greet }; // Se añade otro nombre al modulo

/*
Otra forma de hacerlo es englobando todo lo que queremos exportar en un unico export

export {
num,
hola,
adios,
adios as bye,
hola as greet
}

*/

//Exportacion externa

// CASO 1: Exporta todo lo exportado en el fichero Exportar_modulos.js (abs, min, max, random)
export * from "./Expotar_modulos";

//CASO 2: Exporta todo lo exportado en el fichero Exportar_modulos.js en un objeto con nombre
export const numero = 42;
export * as contact from "./Expotar_modulos";

//Exportacion por defecto

export const numbers = 42; // Declaracion y exportacion
const name = "Manz";
export default name; // Exportacion por defecto
