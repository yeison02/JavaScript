//Posicines y substrings -> Obtener indices o fragmentos de textos

//Acceder a una posicion utilizando .charAT() y el operador []

const names = "Manz";

console.log(names[0]); // M
console.log(names[1]); // a
console.log(names[2]); // n
console.log(names[3]); // z
console.log(names[4]); // undefined

console.log(names.charAt(0)); // M
console.log(names.charAt(1)); // a
console.log(names.charAt(2)); // n
console.log(names.charAt(3)); // z
console.log(names.charAt(4)); // " "

// Utilizando el metodo indexOf()

const phrase = "LenguajeJS, página de Javascript";

console.log(phrase.indexOf("n")); // 2
console.log(phrase.indexOf("n", 3)); // 16
console.log(phrase.indexOf("n", 17)); // -1

//Posicion desde el final utilizando lastIndexOf()

const text = "LenguajeJS, página de Javascript";

console.log(text.lastIndexOf("n")); //16
console.log(text.lastIndexOf("n", 3)); //2
console.log(text.lastIndexOf("n", 1)); //-1

//Obtener Substrings
//Repetir cadena de texto utilizando el metodo .repeat(n veces)

const eat = "Jamon";

console.log(eat.repeat(4)); //"JamonJamonJamonJamon"
console.log(eat.repeat(1)); //"Jamon"
console.log(eat.repeat(0)); //""
//console.log(eat.repeat(-1)) "ERROR ❌ (Valor nrgativo)"

//Obtener fragmentos de texto utilizando los metodos .substring() y substr()

const palabra = "Submarino";

console.log(palabra.substring(3)); // "marino" (desde la posicion 3 en adelante)
console.log(palabra.substring(-3)); // "Submarino"
console.log(palabra.substring(3, 5)); // "ma" (desde la posicion 3 hasta la 5)
console.log(palabra.substr(3)); // "marino" (desde la posicion 3 en adelante)
console.log(palabra.substr(3, 5)); // "marin" (desde la posicion 3 hasta la posicion 3+5)
console.log(palabra.substr(-3)); // "ino" (desde la posicion 3 desde el final en adelante)
console.log(palabra.substr(-3, 2)); // "in" (desde la posicion 3desde el final hasta 2 posiciones mas)

/*Dividir un texto en partes (array)

Metodo                    Descripción
.split(text)	          Separa el texto en varias partes, usando string text como separador.
.split(text, limit)	      Idem, pero crea como máximo number limit fragmentos.
.split(regexp)	          Separa el texto usando la  regexp como separador.
.split(regexp, limit)	  Idem, pero crea como máximo number limit fragmentos.*/

let num = "88.14.44.123";
console.log(num.split(".")); // ["88", "14", "44", "123"] (4 elementos)

let num2 = "1.2.3.4.5";
console.log(num2.split(".")); // ["1", "2", "3", "4", "5"] (5 elementos)

let string = "Hola a todos";
console.log(string.split(" ")); // ["Hola", "a", "todos"] (3 elementos)

let mayus = "A,B,C,D,E";
console.log(mayus.split(",", 3)); //["A", "B", "C"] (Limitando a los 3 primeros elementos)

let code = "Codigo";
console.log(code.split("")); // ["C", "o", "d", "i", "g", "o"] (6 elementos)

//Separa tanto por punto como por coma

let num3 = "88.14,44.123";
console.log(num.split(/[.,]/)); // ["88", "14", "44", "123"] (4 elementos)
