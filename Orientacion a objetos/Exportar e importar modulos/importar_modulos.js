//Importacion de modulos

/*

Forma	                                          Descripción
import { nombre } from "./file.js"	              Importa el elemento nombre de file.js.
import { nombre as newName } from "./file.js"	  Importa el elemento nombre de file.js como newName.
import { n1, n2... } from "./file.js"	          Importa los elementos indicados desde file.js.
import nombre from "./file.js"	                  Importa el elemento por defecto de file.js como nombre.
import * as name from "./file.js"	              Importa todos los elementos de file.js en el objeto name.
import "./file.js"	                              Ejecuta el código de file.js. No importa ningún elemento.
import { name } from "https://web.com/file.js"	  Descarga el fichero e importa el elemento name de su módulo.
*/

//Importacion con nombre
import { nombre } from "./Expotar_modulos";
import { number, element } from "./Expotar_modulos";
import { brand as brandName } from "./Expotar_modulos";

//Importacion por defecto
import nombre from "./math.js";

//Importacion masiva
import * as module from "./Expotar_modulos";

//Importacion de codigo
import "./Expotar_modulos";

//Importaciones remotas
import { ceil } from "https://unpkg.com/lodash-es@4.17.21/lodash.js";

//Metadatos de modulos

//main.js
import module from "./module.js";

//module.js
console.log(import.meta); // { url: "https://dominio.com/module.js" }

/*Bare imports

"./math.js":               El fichero math.js en la carpeta actual.
"../math.js":              El fichero math.js en la carpeta padre.
"/math.js":                El fichero math.js en la raíz del proyecto.
"https://web.com/math.js": El fichero math.js está alojado en una web.
"howler":                  Nombre de una carpeta o paquete -> bare import
*/

import { Howler, Howl } from "howler"; // Bare import
