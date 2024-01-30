//Copia por valor, se realiza a los tipos de datos mas basicos, es decir, los tipos de datos primitivos, number, string, boolena, etc.

let valorOriginal = 42;
//creamos una copia del valor de valorOriginal
let copia = valorOriginal;

console.log(valorOriginal); //42
console.log(copia); //42

//Alteramos el valor de copy

copia = 55;

console.log(valorOriginal); //42
console.log(copia); //55

//Copia por referecia, se realiza en estructuras de datos mas complejos como los arrays y los objects, esta informacion no se copía por valor

const origibnalValue = {
  name: "ManzDev",
};

//creamos una SUPUESTA copia del valor original
let copy = origibnalValue;

console.log(origibnalValue); // { name: "ManzDev" }
console.log(copy); // { name: "ManzDev" }

//Alteramos el valor de copy
copy.name = "Niv3k_el_pato";

console.log(copy); // { name: "Niv3k_el_pato" }
console.log(origibnalValue); // { name: "Niv3k_el_pato" }

/*Clonando variables o constantes

🎈 Clonación superficial (Shallow clone): Se llama así cuando realizamos una clonación de una estructura de datos y sólo se copia su primer nivel, mientras que segundo y niveles más profundos, se crean referencias.

🧨 Clonación profunda (Deep clone): Se llama así cuando realizamos una clonación de una estructura de datos a todos sus niveles.*/

const data = {
  name: "ManzDev", // Se clona en superficial y en profundidad
  tired: false, // Se clona en superficial y en profundidad
  likes: ["css", "javascript", "html", "vue"], // Sólo en profundidad
  numbers: [4, 8, 15, 16, 23, 42], // Sólo en profundidad
};

//Clonando elementos en JavaScript

//Clonacion superficial

// ❌ Esto no realiza una clonación, es una referencia al original
const copy = data;

// ❌ Sólo superficial (Hay que crear objeto con el mismo tipo
const copy = {};
Object.assign(copy, data);

// ❌ Sólo superficial
const copy = { ...data };

//Clonacion profunda

// ✅ El truco de JSON funciona, ❌ pero estamos limitados a los tipos de JSON
const string = JSON.stringify(data);
const copy = JSON.parse(string);

// ✅ Con Lodash, ten en cuenta que necesitaremos descargar/parsear librería externa
import { cloneDeep } from "lodash-es";
const copy = cloneDeep(data);

// ✅ Con structuredClone, ciertos tipos (funciones, DOM) devuelven excepción
const copy = structuredClone(data);
