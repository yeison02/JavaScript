/* Comprobacion en textos

Metodos                        Descripcion
.startsWith(text, from)       Comienza si el texto comienza por text
.endsWith(text, to)           Comprueba si el texto termina por text
.includes(text, from)         Comprueba si el texto contiene el subtexto text
*/

const text = "Manz";

console.log(text.startsWith("M")); // true ("Manz" empieza por "M")
console.log(text.startsWith("a", 1)); // true ("anz" empieza por "a")
console.log(text.endsWith("0")); // false ("Manz" no acaba en "o")
console.log(text.endsWith("n", 3)); // true ("Man" acaba en "n")
console.log(text.includes("an")); // true ("Manz" incluye "an")
console.log(text.includes("M", 1)); // false ("anz" no incluye "M")

/*
Busqueda de cadenas de texto

Metodo                   Descripción
.search(regexp)          Busca un patron que encaje con regexp y devuelve la posición encontrada
.match(regexp)           Idem a la anterior, pero devuelve las coincidencias encontradas
.matchAll(regexp)        Idem a la anterior, pero devuelve in iterador para iterar por cada coincidencia

El método .search() devuelve la posición de la primera ocurrencia. -1 si no se encuentra.
El método .match() devuelve un  con las coincidencias encontradas. null si no se encuentran.
El método .matchAll() devuelve un iterador para poder recorrer las coincidencias encontradas.
*/

const animals = "El gato, el perro y el pato";
const regexp = /.a.o/g;
const result = [...animals.matchAll(regexp)];

console.log(result.length); // 2
console.log(result[0].index); // 3
console.log(result[1].index); // 23

const iterador = animals.matchAll(regexp);
for (let ocurrence of iterador) {
  console.log(ocurrence);
}
// ['gato', index: 3, input: 'El gato, el perro y el pato.', groups: undefined]
// ['pato', index: 23, input: 'El gato, el perro y el pato.', groups: undefined]

console.log(animals.search(regexp)); // 3, porque la primera coincidencia aparaece en la posicion 3 (gato)
console.log(animals.match(regexp)); // ["gato", "pato"] las dos coincidencias encontradas

/*
Reemplazar cadenas de texto


Método	                         Descripción
.replace(text, newText)	         Reemplaza la primera aparición del  text por newText.
.replace(regexp, newText)	     Idem, pero busca a partir de una  en lugar de un .
.replaceAll(text, newText) 	     Reemplaza todas las apariciones del texto text por newText.
.replaceAll(regexp, newText) 	 Idem, pero busca a partir de una  en lugar de un .

Ejemplo utilizando los metodos .replace() y .replaceAll()
*/

const text2 = "Hola gato, ¿eres un perro o eres un pato?";

//Reemplaza la primera ocurrencia
console.log(text2.replace("g", "p")); // "Hola pato, ¿eres un perro o eres un pato?"
console.log(text2.replace("g", "p").replace("o", "a")); // "Hala pato, ¿eres un perro o eres un pato?"

//Reemplaza todas las ocurrencias
console.log(text2.replaceAll("e", "i")); // "Hola gato, ¿iris un pirro o iris un pato?"
console.log(text2.replace(/e/g, "i")); // "Hola gato, ¿iris un pirro o iris un pato?"

//Reemplazar todos los textos (utilizando expresion regular global)

const lenguaje = "Javascript es un gran lenguaje";
console.log(lenguaje.replace(/[aeou]/g, "i")); // 'Jiviscript is in grin lingiiji'

//Funcion para remplazar

const text3 = "Hola gato, ¿eres un perro o eres un pato?";
const repleaceAction = (value) => `=>${value}<`;

console.log(text3.replace(/.a.o/g, repleaceAction)); // "Hola =>gato<=, ¿eres un perro o eres un =>pato<=?"
console.log(text3.replaceAll("un", repleaceAction)); // "Hola gato, ¿eres =>un<= perro o eres =>un<= pato?"
