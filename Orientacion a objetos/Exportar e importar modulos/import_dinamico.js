// Import estatico vs dinamico

import { name } from "./module.js"; // Importacion estatica

import("./module.js") //Importacion dinamica
  .then((data) => {
    /* ... */
  });

/*
Diferencias
Los import estáticos son muy útiles, pero tienen algunas desventajas si se presentan ciertos casos específicos. Los más frecuentes suelen ser los siguientes:

Queremos importar un módulo si se cumple una determinada condición
Queremos importar un módulo interpolando variables o constantes
Queremos importar un módulo dentro de un ámbito específico
Queremos importar un módulo desde un script normal (sin type="module")
Queremos importar un fichero javascript (sin módulo) y ejecutarlo bajo demanda

En cada uno de estos casos, no se puede utilizar el import estático, pero si el import dinámico:
*/

//Opcion 1: Se carga function.js si se cumple la condicion
if (number > 42) import("./function.js").then((module) => module.func());

//Opcion 2: Se carga function.js intterpolando la constante
const filename = "functions";
import(`./${filename}.js`).then((module) => module.func());

//Opcion 3: Se carga aditional.js solo si el usuario hace click en el boton
const button = document.querySelector("button.info");
button.addEventListener("Click", () => import("aditional.js"), { once: true });
