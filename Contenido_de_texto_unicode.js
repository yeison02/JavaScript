/*
Carácter	Unicode	  Decimal	Hexadecimal	  Entidad HTML	 Unicode
A	        U+0041	  65	    0x0041	      &#65;	         \u{0041}
M	        U+004d	  77	    0x004d	      &#77;	         \u{004d}
Z	        U+005a	  90	    0x005a	      &#90;	         \u{005a}
z	        U+007a	  122	    0x007a	      &#122;	     \u{007a}



Método	                        Descripción
String \u{NUMBER number}	    Devuelve el carácter unicode representado por el número hexadecimal number.
String.fromCodePoint(number)	Devuelve el carácter representado por el número  number.
NUMBER .codePointAt(pos)	    Devuelve el valor decimal del carácter de la posición pos del texto.
*/

//Codigo unicode de un carácter

const letter = "Manz";

console.log(letter[0]); // "M" (En la posición 0 está la "M")
console.log(letter.codePointAt(0)); // 77 (77 es el número decimal de la "M")
console.log(letter.codePointAt(0).toString(16)); // "4d" (0x004d es el número hexadecimal de la "M")

console.log(letter.codePointAt(3)); // 122
console.log(letter.codePointAt(4)); // undefined (No hay caracter en esta posicion)

/*Emojis (Emoticonos)


Carácter	Unicode	   Decimal	  Hexadecimal	Entidad HTML	Unicode   	Combinación
⚡	       U+26a1	  9889	    0x26a1	       &#9889;	      \u{26a1}	   Es independiente
⛔	       U+26d4	  9940	    0x26d4	       &#9940;	      \u{26d4}	   Es independiente
😀	        U+1f600	   128512	 0x1f600	    &#128512;	   \u{1f600}	\u{D83D}\u{DE00}
🚗	        U+1f697	   128663	 0x1f697	    &#128663;	   \u{1f697}	\u{D83D}\u{DE97}

Emojis Combinados
*/
console.log("👨‍👩‍👧‍👦".length); // 11

const paste = "\u{200d}"; // code point de "pegamento"
console.log("👨‍👩‍👧‍👦".split(paste)); // ["👨", "👩", "👧", "👦"]

console.log(["👨", "👩", "👧", "👦"].join("")); // "👨👩👧👦"
console.log(["👨", "👩", "👧", "👦"].join(paste)); // "👨‍👩‍👧‍👦"
console.log(["👨", "👨", "👧"].join(paste)); // "👨‍👨‍👧"
console.log(["👩", "👩"].join(paste)); // "👩‍👩"
