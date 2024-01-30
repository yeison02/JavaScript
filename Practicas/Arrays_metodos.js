/*
Los arrays de JavaScript tienen una serie de métodos y propiedades que nos permiten trabajar con ellos de forma sencilla.

Un método es una función que se ejecuta sobre un objeto. Una propiedad es una variable que pertenece a un objeto. En este caso, el objeto es un array.

La longitud de un array
Puedes conocer la longitud de una colección de elementos usando la propiedad .length:Los arrays de JavaScript tienen una serie de métodos y propiedades que nos permiten trabajar con ellos de forma sencilla.

Un método es una función que se ejecuta sobre un objeto. Una propiedad es una variable que pertenece a un objeto. En este caso, el objeto es un array.

La longitud de un array
Puedes conocer la longitud de una colección de elementos usando la propiedad .length:
*/

const frutas = ["Mango", "Fresa", "Lulo", "Manzana"];
console.log(frutas.length); // -> 4

//Tambien puedes cortat su longitud asignando un nuevo valor a la propiedad .lenght

frutas.length = 2;
console.log(frutas); // -> ["Mango", "Fresa"]
console.log(frutas.length); // -> 2

/*
Cuando trabajamos con colecciones de elementos, vamos a querer hacer cosas con ellos. Por ejemplo: añadir un elemento, eliminarlo, buscarlo, etc. Para ello, los arrays tienen una serie de métodos que nos permiten hacer estas operaciones:

.push()
El método .push() nos permite añadir un elemento al final de un array:
*/
const fruit = ["Platano", "Fresa"];
fruit.push = "Manzana";
console.log(fruit); // ["Platano","Fresa","Manzana"]

//Ademas, el metodo .push() devuelve la nueva longitud del array

const fru = ["Platano", "Mora"];
console.log(fru.length); // 2

const nuevaLongitud = fru.push("Manzana");
console.log(nuevaLongitud); // 3
console.log(fru); // ["Platano","Mora","Manzana"]

/*
.pop()
El método .pop() elimina y devuelve el último elemento de un array:
*/

const frut = ["mango", "fresa", "Naranja"];
const ultimaFruta = frut.pop();

console.log(frut); // ["mango","fresa"]
console.log(ultimaFruta); // naranja

/*.shift()
El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último:*/

const fruta = ["plátano", "fresa", "naranja"];
const primeraFruta = fruta.shift();

console.log(fruta); // ["fresa", "naranja"]
console.log(primeraFruta); // "plátano"

/*.unshift()
El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:*/

const fruits = ["plátano", "fresa", "naranja"];
fruits.unshift("manzana");

console.log(fruits); // ["manzana", "plátano", "fresa", "naranja"]

/*
Concatenar arrays
Podemos concatenar dos arrays usando el método concat().
 */

const number = [1, 2, 3];
const number2 = [4, 5];

const allNumber = number.concat(number2);
console.log(allNumber);

/*
Otra forma de concatenar arrays es usando el operador ... (spread operator). Este operador propaga los elementos de un array. Así que podríamos hacer lo siguiente:
*/
const numbers = [1, 2, 3];
const numbers2 = [4, 5];

//                    1, 2, 3        4, 5
const allNumbers = [...numbers, ...numbers2];

console.log(allNumbers); // [1, 2, 3, 4, 5]
