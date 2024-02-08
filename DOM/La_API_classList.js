//La propiedad .className
/*
Propiedad	        Descripción
String .className	Acceso directo al valor del atributo HTML class. También se puede asignar.
Objetc .classList	Objeto especial para manejar clases CSS. Contiene métodos y propiedades de ayuda.
*/
const div = document.querySelector("element");
//Obtener clases CSS
div.className; // "element shine dark-theme"
div.getAttribute("class"); // "element shine dark-theme"

//Modificar clases CSS
div.className = "element shine light-theme";
div.setAttribute("class", "element shine light-theme");

//La propiedad .classList
/*
Método	                            Descripción
Obtener información
ARRAY .classList	                Devuelve la lista de clases del elemento HTML.
NUMBER .classList.length	        Devuelve el número de clases del elemento HTML.
STRING .classList.item(n)	        Devuelve la clase número n del elemento HTML.  si no existe.
BOOLEAN .classList.contains(clase)	Indica si la clase existe en el elemento HTML.
Acciones sobre clases
.classList.add(c1, c2, ...)	Añade las clases c1, c2... al elemento HTML.
.classList.remove(c1, c2, ...)	Elimina las clases c1, c2... del elemento HTML.
BOOLEAN .classList.toggle(clase)	Si la clase no existe, la añade. Si no, la elimina.
BOOLEAN .classList.toggle(clase, expr)	Si expr es true, añade la clase. Si es false, la elimina.
BOOLEAN .classList.replace(old, new)	Reemplaza la clase old por la clase new.
*/

//Acceder a clases CSS
const element = document.querySelector("#page");
element.classList; // ["info", "data", "dark"] (DOMTokenList)
element.classList.value; // "info data dark" (String)
element.classList.length; // 3

//Convertirlas a Array
Array.from(element.classList); // ["info", "data", "dark"] (Array)

//Consultarlas
element.classList.item(0); // "Info"
element.classList.item(1); // "data"
element.classList.item(2); // "dark"
element.classList.item(3); // "null"

//Añadir y eliminar clases CSS
const removeAdd = document.querySelector("page");
//Añadir clases
removeAdd.classList.add("uno", "dos"); // ["info", "data", "dark", "uno", "dos"]

//Eliminar clases
removeAdd.classList.remove("uno", "dos"); // ["info", "data", "dark"]

//Comprobar si existen clases
const contain = document.querySelector("#page");
contain.classList; // ["info", "data", "dark"]
contain.classList.contains("info"); // Devuelve `true` (existe esa clase)
contain.classList.contains("warning"); // Devuelve `false` (no existe esa clase)

//Conmutar a alternar clases CSS con .classList.toggle()
const toggle = document.querySelector("#page");
toggle.classList; // ["info", "data", "dark"]
toggle.classList.toggle("Info"); // Como "info" existe, lo elimina y devuelve "false"

toggle.classList.toggle("info"); // Como "info  existe lo añade y devuelve "true
toggle.classList; // ["info", "data", "dark"]

//Reemplazar una clase
const replace = document.querySelector("#page");
replace.classList; // ["info", "data", "dark"]
replace.classList.replace("dark", "light"); // Devualve true se hizo el cambio
replace.classList.replace("warning", "error"); // Devuelve flase porque no existe warning
