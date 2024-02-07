//Crear elementos HTML

/*
Métodos	                             Descripción
ELEMENT.createElement(tag, options)	 Crea y devuelve el elemento HTML definido por el  tag.
NODE.createComment(text)	         Crea y devuelve un nodo de comentarios HTML <!-- text -->.
NODE.createTextNode(text)	         Crea y devuelve un nodo HTML con el texto text.
NODE.cloneNode(deep)	             Clona el nodo HTML y devuelve una copia. deep es false por defecto.
BOOLEAN.isConnected	                 Indica si el nodo HTML está insertado en el documento HTML.
*/

//Creando elementos con .createElement()

const div = document.createElement("div"); // Creamos un <div></div>
const span = document.createElement("span"); // Creamos un <span></span>
const img = document.createElement("img"); // Creamos un <img></img>

const comentario = document.createComment("Comentario"); // <!--Comentario-->
const text = document.createTextNode("Hola"); // Nodo de texto: "Hola"

//Metodo .clonNode()

const divs = document.createElement("div");
div.textContent = "Elemento 1";
const div2 = div; // NO se esta haciendo una copia
div.textContent = "Elemento 2";
div.textContent; // "Elemento 2"

const parrafo = document.createElement("p");
parrafo.textContent = "Elemento 1";
const parrafo2 = parrafo.cloneNode(); // Ahora si estamos duplicando
parrafo2.textContent = "Elemento 2";
parrafo.textContent; // "Elemento 1"

//Usando fragmentos

/*

Métodos	                            Descripción
document.createDocumentFragment()	Crea un fragmento aislado (sin padre).
*/

const fragment = document.createDocumentFragment();

for (let i = 0; i < 5000; i++) {
  const div3 = document.createElement("div");
  div3.textContent = `Item número ${i}`;
  fragment.appendChild(div3);
}

document.body.appendChild(fragment);
