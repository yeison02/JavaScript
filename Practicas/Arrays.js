/*
Declaración y asignación de arrays
Para declarar un array usamos los corchetes [] y dentro los elementos de la colección separados por comas ,.

Por ejemplo, para crear una colección de números del 1 al 5:
*/
/*[1, 2, 3, 4, 5][
  //Los elementos de un array pueden ser de cualquier tipo, incluso otro array
  (1, 2, 3, 4, [5, 6, 7, 8, 9])
][
  //Y, aunque no siempre sea recomendable, púedes mezclar tipos de datos dentro
  ("Uno", 2, true, null, undefined)
];

//Para asignar un array a una variable, lo hacemos igual que con los otros tipos de datos
const number = [1, 2, 3, 4];
let names = ["Juan", "Miguel", "Sanchez"];*/

/*
Acceso a los elementos de un array
Para acceder a los elementos de un array usamos los corchetes [] y dentro el índice del elemento que queremos acceder. Los índices empiezan en 0.
*/

const num = [1, 2, 3, 4, 5];
console.log(num[0]); // -> 1
console.log(num[2]); // -> 3

/*El índice es la posición del elemento dentro del array. El primer elemento tiene índice 0, el segundo índice 1, el tercero índice 2...

Si intentamos acceder a un elemento que no existe, nos devolverá undefined.
*/

console.log(num[10]); // -> undefined

//Puedes usar variables para acceder a los elementos de un array
const numb = [1, 2, 3, 4, 5];
let index = 2;
console.log(num[index]);

/*
Modificar elementos de un array
Igual que podemos acceder a los elementos de un array, podemos modificarlos.
*/

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 10;
numbers[2] = 30;
console.log(numbers);

/*¿Cómo es que pese a que hemos indicado que es una constante const podemos modificar el Array? Aunque hay una explicación mucho más larga, que veremos más adelante, la respuesta corta es que const sólo impide que se reasigne el valor de la variable, no que se modifique el valor en sí.*/

//Metodo .with

const letters = ["a", "b", "c"];

console.log((letters[1] = "Z")); // Devuelve "Z" y modifica letters a ["a", "Z", "c"]
console.log((letters[3] = "D")); // Devuelve "D" y modifica letters a ["a", "Z", "c", "D"]
console.log((letters[5] = "A")); // Devuelve "A" y modifica letters a ["a", "Z", "c", "D", undefined, "A"]
console.log(letters);

//El Metodo .at() permite valores negativos meidante los cuales se pueden obtener los elementos en orden inverso

const letras = ["a", "b", "c"];
console.log(letras.at(0)); // "a"
console.log(letras.at(1)); // "b"
console.log(letras.at(3)); // "undefined"
console.log(letras.at(-1)); // "c"
console.log(letras.at(-2)); // "b"

// El ejemplo anterior pero utilizando los []

const a = ["a", "b", "c"];
const lastItem = a.length - 1;

console.log(a[lastItem]); // "c"

//Alternativas para crear arrays

const text = "12345";
const letter = Array.from(text);
console.log(letter); // ["1", "2", "3", "4", "5"]
const leter = [...text];
console.log(leter); // ["1", "2", "3", "4", "5"]

// De forma opcional, Array.from(obj) puede recibir un parámetro adicional: una función que actuará de forma idéntica a una función map().

const numm = "12345";
const numberss = Array.from(text, (number) => Number(number));
console.log(numberss); // [1, 2, 3, 4, 5]
const nuumber = Array.from(text, Number);
console.log(nuumber); // [1, 2, 3, 4, 5]

//Equivalente a los dos anteriores
const useMap = [...text].map(Number);
console.log(useMap); // [1, 2, 3, 4, 5]

//Concatenar arrays

const elements = [1, 2, 3];
elements.push(4, 5, 6);
console.log(elements); // Devuelve 6. Ahora elements = [1, 2, 3, 4, 5, 6]
elements.push([7, 8, 9]);
console.log(elements); // Devuelve 7. Ahora elements = [1, 2, 3, 4, 5, 6, [7, 8, 9]]

//El mismo ejemplo pero con el metodo .concat()
const firstPart = [1, 2, 3];
const secondPart = [4, 5, 6];

console.log(firstPart.concat(firstPart)); // Devuelve [1, 2, 3, 1, 2, 3]
console.log(firstPart.concat(secondPart)); // Devuelve [1, 2, 3, 4, 5, 6]

//Se pueden pasar elementos sueltos
console.log(firstPart.concat(4, 5, 6));

//Se pueden concatenar multiples arrays e incluso mezclarlos con elementos sueltos
console.log(firstPart.concat(firstPart, secondPart)); // Devuelve [1, 2, 3, 1, 2, 3, 4, 5, 6, 7]

//Separar y unir strings

const abecedario = ["a", "b", "c"];

//Une los elementos del array por e separador indicado
console.log(abecedario.join("->")); // Devuelve 'a->b->c'
console.log(abecedario.join(".")); // Devuelve 'a.b.c'

//Separta elementos del string por el separador indicado
console.log("a.b.c".split(".")); // Devuelve ['a', 'b', 'c']
console.log("5-4-3-2-1".split("-")); // Devuelve ['5', '4', '3', '2', '1']
