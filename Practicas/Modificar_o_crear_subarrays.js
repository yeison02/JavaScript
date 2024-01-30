/*

Método	                                      Descripción
 .slice(start, end) ✅	                    Devuelve los elementos desde la posición start hasta end (excluído).
 .splice(start, size) ⚠️	                 Devuelve los size siguientes elementos desde la posición start.
 .splice(start, size, e1, e2...) ⚠️	         Idem. Además, luego inserta e1, e2... en la posición start.
 .toSpliced(start, size)  ✅	                Idem a splice(start, size), pero sin mutar el array original.
 .toSpliced(st, sz, e1, e2...)  ✅	        Idem a splice(st, sz, e1, e2..), pero sin mutar el array original.
 .copyWithin(pos, start, end)  ⚠️	         Muta el array, cambiando en pos y copiando desde start a end.
 .fill(element, start, end)  ⚠️	             Cambia los elementos del  por element desde start hasta end.
 .with(index, item)  ✅	                    Devuelve una copia del original, con el elemento index modificado.
*/

//Crear fragmentos con .slice()

const letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(3)); // ["d", "e"]
console.log(letters.slice(0, 2)); // ["a", "b"]
console.log(letters.slice(4, 5)); // ["e"]
console.log(letters.slice(2, 5)); // ["c", "d", "e"]
console.log(letters.slice(-2)); // ["d", "e"]
console.log(letters); // ["a", "b", "c", "d", "e"] el array no se modifica

//Crear fragmentos con .splice() modifica el array original / .toSpliced() el array original no cambia

const letter = ["a", "b", "c", "d", "e"];

console.log(letter.splice(0, 2)); // Crea y devuelve ["a", "b"]
console.log(letter); // Altera el array original: ["c", "d", "e"]

const lette = ["a", "b", "c", "d", "e"];

console.log(lette.splice(2, 1)); // Crea y devuelve ["c"]
console.log(lette); // Altera el array original ["a", "b", "d", "e"]

//Insertar elementos en una posicion concreta del array utilizando .slice() y .concat()

const number = [1, 2, 3, 8, 9, 10];
const middlePart = [4, 5, 6, 7];

const firsPart = number.slice(0, 3);
console.log(firsPart); // [1, 2, 3]
const lastPart = number.slice(3, 6);
console.log(lastPart); // [8, 9, 10]

console.log(firsPart.concat(middlePart, lastPart)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(number); // [1, 2, 3, 8, 9, 10] (numbers no ha mutado)

//Insertar elementos en una posicion concreta del array utilizando .splice() y desestructuracion

const numbers = [1, 2, 3, 8, 9, 10];
const middleParts = [4, 5, 6, 7];

console.log(numbers.splice(3, 0, ...middleParts)); // [] (Elementos eliminados, en este caso, ninguno)
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (numbers ha mutado)

//Repetir fragmentos con .copyWithin()

const abc = ["a", "b", "c", "d", "e", "f"];

//Estos metodos modifican el array original

console.log(abc.copyWithin(3, 0, 3)); // ["a", "b", "c", "a", "b", "c"]
console.log(abc.copyWithin(3, 1)); // ["a", "b", "c", "b", "c", "a"]
console.log(abc.copyWithin(4, 0, 1)); // ["a", "b", "c", "b", "a", "a"]

//Reducir el tamaño de un array

//Mediante .slice()
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const newNums = nums.slice(0, 4);

console.log(newNums); // [1, 2, 3, 4], nums no cambia

//Mediante .length
const num = [1, 2, 3, 4, 5, 6, 7, 8];
num.length = 4;

console.log(num); // [1, 2, 3, 4], num cambia

//Rellenar un array con .fill() / Altera el array

const cba = ["a", "b", "c", "d", "e", "f"];

//Estos metodos modifican el array

console.log(cba.fill("Z", 0, 5)); // ["Z", "Z", "Z", "Z", "Z", "f"]
console.log(cba.fill("AA", 0, 2)); // ["AA", "AA", "Z", "Z", "Z", "f"]
console.log(cba.fill(1)); // [1, 1, 1, 1, 1]
console.log(new Array(5).fill(5)); // [5, 5, 5, 5, 5]

//El metodo .map() NO mutan el array original

const elements = [1, 2, undefined, undefined, 5];

console.log(elements.fill(10)); // [10, 10, 10, 10, 10] muta el array original
console.log(elements.map((element) => 10)); // [10, 10, 10, 10, 10] Sin mutar el array original

const element = [1, 2, undefined, undefined, 5];
console.log(element.fill(10, 2, 4)); // [1, 2, 10, 10, 5]
console.log(element.map((elements) => (!elements ? 10 : elements))); // [1, 2, 10, 10, 5] Sin mutar el array original
