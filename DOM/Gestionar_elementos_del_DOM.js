//Acceder a atributos HTML

const element = document.querySelector("div"); // <div class="container"></div>
element.id = "pages"; // <div id="page" class="container"></div>
element.style = "color: red"; // <div id="page" class="container style="color: red"></div>
element.className = "data"; // <div id="page" class="data"></div>

//Obtener atributos HTML

/*

Métodos                     Descripción
BOOLEAN hasAttributes()	    Indica si el elemento tiene atributos HTML.
BOOLEAN hasAttribute(attr)	Indica si el elemento tiene el atributo HTML attr.
ARRAY getAttributeNames()	Devuelve un ARRAY con los atributos del elemento.
STRING getAttribute(attr)	Devuelve el valor del atributo attr del elemento o  si no existe.
*/

const element = document.querySelector("div");
element.hasAttributes(); // true (tiene 3 atributos)
element.hasAttribute("data-number"); // true (data-number existe)
element.hasAttribute("disabled"); // false (disable no existe)

element.getAttributeNames(); // ["id", "data-number", "class"]
element.getAttribute("id"); // "page"

//Modificar o eliminar atributos HTML

/*

Métodos	Descripción
setAttribute(attr, value)	Añade o cambia el atributo attr al valor value del elemento HTML.
toggleAttribute(attr, force)	Añade atributo attr si no existe, si existe lo elimina.
removeAttribute(attr)	Elimina el atributo attr del elemento HTML.
*/

const elemento = document.querySelector("#pages");

elemento.setAttribute("data-number", "10"); // Cambiar data-number a 10
elemento.removeAttribute("id"); // Eliminar el atributo id
elemento.setAttribute("id", "pages"); // Vuelve a añadirlo

//Caso especial: Atributos boleanos

const buttom = document.querySelector("button");

buttom.setAttribute("disabled", true); // ❌ <button disabled="true">clickme</button>
buttom.disabled = true; // ✅ <button disabled>clickme</button>
buttom.setAttribute("disabled", ""); // ✅ <button disabled>clickme</button>

buttom.toggleAttribute("disabled"); // Como ya existe "disabled" lo elimina
buttom.toggleAttribute("hidden"); // Como no existe "hidden" lo añade
