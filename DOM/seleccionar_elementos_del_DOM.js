//Metodos tradicionales

/*
Métodos de búsqueda	              Descripción	                                  Si no lo encuentra...
ELEMENT .getElementById(id)	          Busca el elemento HTML por su id.	              Devuelve .
ARRAY .getElementsByClassName(class)	  Busca elementos con la clase class.	          Devuelve [].
ARRAY .getElementsByName(value)	      Busca elementos con el atributo name a value.	  Devuelve [].
ARRAY .getElementsByTagName(tag)	      Busca etiquetas HTML tag.	                      Devuelve [].
*/

//getElementById()
const page = document.getElementById("page"); // <div id="page"></div> (si no lo encuentra devolvera null)

//.getElementsByClassName()
const items = document.getElementsByClassName("item"); // [div, div, div]
console.log(items[0]); // Primer elemento encontrado: <div class="item"></div>
console.log(items.length); // 3

//.getElementsByName
const nickNames = document.getElementsByName("nickname"); // [input]

//.getElementsTagName()
const divs = document.getElementsByTagName("div"); // [div, div, div, div, div, div]

//Metodos modernos

/*

Método de búsqueda	    Descripción	                                                      Si no lo encuentra...
ELEMENT .querySelector(sel)	Busca el primer elemento que coincide con el selector CSS sel.	  Devuelve .
ARRAY .querySelectorAll(sel)	Busca todos los elementos que coinciden con el selector CSS sel.  Devuelve [].
*/

//.querySelector()
//Seleccionando por el id
const pages = document.querySelector("#page"); // <div id="page"></div>
//Seleccionando por el class
const info = document.querySelector(".main .info"); // <div class="info"></div>

//.querySelectorAll()
//Obtiene todos los elementos con la clase "info"
const infos = document.querySelectorAll(".info");
//Obtiene todos los elementoss con atributo "nickname"
const nickname = document.querySelectorAll('[name="nickname"]');
//Obtiene todos los elementos <div> de la pagina HTML
const allDivs = document.querySelectorAll("div");

//Busquedas acotadas
const links = document.querySelectorAll("#menu a");

//NodeList o HTMLCollection
const elements = document.querySelectorAll("div");
console.log(elements.map); // undefined

const elemento = [...document.querySelectorAll("div")]; // Hacemos una desestructuracion de array
console.log(elemento.map); // ƒ map() { [native code] }
