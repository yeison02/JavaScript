/*

Propiedades	                  Descripción
STRING .nodeName	          Devuelve el nombre del nodo (etiqueta si es un elemento HTML). Sólo lectura.
Contenido de texto
STRING .textContent	          Devuelve el contenido de texto del elemento. Se puede asignar para modificar.
STRING .innerText	          Versión no estándar de .textContent de Internet Explorer con diferencias. Evitar.
STRING .outerText	          Versión no estándar de .textContent/.outerHTML de Internet Explorer. Evitar.
Contenido HTML
STRING .innerHTML	          Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar.
STRING .outerHTML	          Idem a .innerHTML pero incluyendo el HTML del propio elemento HTML.
.setHTML(htmlCode, options)	  Método que inserta HTML, pero sanitizando la entrada de datos.
*/

//La propiedad .textContent
const element = document.querySelector("message");
element.textContent; // "Mi nombre es Yeison"
element.textContent = "Hola a todos";
element.textContent; // "Hola a todos"

//Las propiedades .innerText y .outerText
const container = document.querySelector(".container");
container.innerText;
//Hola a todos
//
//Me llamo Yeison
//
//Más información

//La propiedad .innerHTML
//Diferencia entre .textContent y .innerHTML
const diferencia = document.querySelector(".message");
diferencia.textContent; // Mi nombre es Yeison
diferencia.innerHTML; // Mi nombre es <stron>Yeison</stron>

element.innerHTML = "<strong>Importante</strong>"; // Se lee "Importante" (en negrita)
element.textContent = "<strong>Importante</strong>"; // Se lee "<strong>Importante</strong>"

//Parseo de marcado HTML
const div = document.createElement("div");
div.innerHTML = "</strong>Yeison";
div.innerHTML; // <strong>Yeison</strong>

//La propiedad .outerHTML
const data = document.querySelector(".data");
data.innerHTML = "<h1>Tema 1</h1>";

data.textContent; // "Tema 1"
data.innerHTML; // <h1>Tema 1</h1>
data.outerHTML; // "<div class="data"><h1>Tema 1</h1></div>"

//El metodo .setHTML()
const contenedor = document.querySelector(".container");
const unsafe_html = "<strong onmouseover='alert(\"hello\")'>Hello</strong>";

contenedor.innerHTML = unsafe_html; // Introduce literalmente el código HTML
contenedor.setHTML(unsafe_html); // Introduce "<strong>Hello</strong>"
