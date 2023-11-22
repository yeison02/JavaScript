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
