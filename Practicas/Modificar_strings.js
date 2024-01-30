/*

Método	                    Descripción
.toLowerCase()	            Devuelve el string transformado a minúsculas.
.toUpperCase()	            Devuelve el string transformado a mayúsculas.
.padStart(size, text) 	    Devuelve el string rellenando el inicio con text hasta llegar al tamaño size.
.padEnd(size, text) 	    Devuelve el string rellenando el final con text hasta llegar al tamaño size.
.trimStart() 	            Devuelve el string eliminando espacios a la izquierda del texto.
.trimEnd() 	                Devuelve el string eliminando espacios a la derecha del texto.
.trim()	                    Devuelve el string eliminando espacios a la izquierda y derecha del texto.

*/

//Transformar el string en mayusculas y minusculas

const text = "Los gatos dominaran el mundo";
console.log(text.toLowerCase()); // "los gatos dominaran el mundo"
console.log(text.toUpperCase()); // "LOS GATOS DOMINARAN EL MUNDO"

/*
Capitalizar texto
La palabra capitalizar se refiere a transformar a mayúsculas su primer carácter, y en minúsculas el resto del texto. En Javascript, no existe una función .toCapitalize(), pero de necesitarla se podría realizar la siguiente función de ayuda:
*/

const text1 = "Los gatos dominaran el mundo";
const toCapitalize = (text1) => text1[0].toUpperCase() + text1.substring(1);
const toCapitalizeEveryWord = (text1) => {
  return text1
    .split(" ") //Separamos en un array cada palabra
    .map((word) => toCapitalize(word)) // Aplicamos el capitalizar a cada elemento
    .join(" "); // Lo volvemos a unir a un string
};
console.log(toCapitalize(text1)); //"Los gatos dominran el mundo"
console.log(toCapitalizeEveryWord(text1)); // "Los Gatos Dominaran El Mundo"

//Relleno de cadenas

const stringNumber = "15";

console.log(stringNumber.padStart(5, "0")); // "00015"
console.log(stringNumber.padStart(3, "0")); // "015"
console.log(stringNumber.padStart(2, "0")); // "15"
console.log(stringNumber.padEnd(4, "0")); // "1500"
console.log(stringNumber.padEnd(6, "0")); // "150000"

//Eliminar espacios sobrantes

const string = "  ¡Saludad a vuestro nuevo rey gato!  ";
console.log(string.trim()); // "¡Saluda a nuestro nuevo rey gato!"
console.log(string.trimStart()); // "!Saluda a nuestro nuevo rey gato¡  "
console.log(string.trimEnd()); // "  !Saluda a nuestro nuevo rey gato¡"

/* Alternativas para crear strings / Concatenar(unir textos)


Método	                    Descripción
.concat(text1, text2...)	Devuelve el string, unido (concatenado) a las variables text1, text2...
*/

const concat = "Manz";
//Utilizando el metodo concat
console.log(concat.concat("i", "to")); // "Manzito"
console.log(concat.concat(4, 5)); // "Manz45"
console.log(concat.concat(4 + 5)); // "Manz9"

//Utilizando el operador +
console.log(concat + "i" + "to"); // "Manzito"
console.log(concat + 4 + 5); // "Manz45"
console.log(concat + (4 + 5)); // "Manz9"
