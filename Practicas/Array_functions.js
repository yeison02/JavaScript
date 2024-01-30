/*

Método	                        Descripción
 .forEach(ƒ)	                Ejecuta la función definida en ƒ por cada uno de los elementos del array.
Comprobaciones
 .every(ƒ)	                    Comprueba si todos los elementos del array cumplen la condición de ƒ.
 .some(ƒ)	                    Comprueba si al menos un elemento del array cumple la condición de ƒ.
Transformadores y filtros
 .map(ƒ)	                    Construye un array con lo que devuelve ƒ por cada elemento del array.
 .filter(ƒ)	                    Filtra un array y se queda sólo con los elementos que cumplen la condición de ƒ.
 .flat(level)	                Aplana el array al nivel level indicado.
 .flatMap(ƒ)	                Aplana cada elemento del array, transformándolo según ƒ. Equivale a .map().flat(1).
Búsquedas
 .findIndex(ƒ) 	                Devuelve la posición del elemento que cumple la condición de ƒ.
 .find(ƒ) 	                    Devuelve el elemento que cumple la condición de ƒ.
 .findLastIndex(ƒ)	            Idem a findIndex(), pero empezando a buscar desde el último elemento al primero.
 .findLast(ƒ)	                Idem a find(), pero empezando a buscar desde el último elemento al primero.
Acumuladores
 .reduce(ƒ, initial)	        Ejecuta ƒ con cada elemento (de izq a der), acumulando el resultado.
 .reduceRight(ƒ, initial)       Idem al anterior, pero en orden de derecha a izquierda.
*/

//Bucles .forEach()
const letters = ["a", "b", "c", "d"];

letters.forEach((element) => console.log(element)); // Devuelve 'a' / 'b' / 'c' / 'd'
letters.forEach((element, index) => console.log(element, index)); // Devuelve 'a' 0 / 'b' 1 / 'c' 2 / 'd' 3
letters.forEach((element, index, array) => console.log(array[0])); // Devuelve 'a' / 'a' / 'a' / 'a'

//Metodo .every() (TODOS)

const letter = ["a", "b", "c", "d"];
console.log(letter.every((letters) => letters.length === 1)); // true

//Metodo .some() (AL MENOS UNO)

const letras = ["a", "bb", "c", "d"];
console.log(letras.some((letra) => letra.length === 2)); // true

//Metodo .map (TRANSFORMADOR)
const names = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nameSize = names.map((name) => name.length);

console.log(nameSize); // Devuelve [3, 5, 5, 9, 9]

//Metodo .filter() (FILTRO)
const name = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const filteredName = name.filter((names) => names.startsWith("P"));
console.log(filteredName); // Devuelve ['Pablo', 'Pedro', 'Pancracio']

//Metodo .flatMap() (APLANAR)
const values = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
console.log(values.flat(0)); // [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
console.log(values.flat(1)); // [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
console.log(values.flat(2)); // [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];

const value = [10, 15, 20, [25, 30], 35, [40, 45, [50, 55], 60]];
console.log(
  values.flatMap((element) => (Array.isArray(element) ? element.length : 1))
); // [1, 1, 1, 2, 1, 4]

//Busquedas .find() y .findIndex()
const nombres = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
console.log(nombres.find((name) => name.length === 5)); // "Pablo"
console.log(nombres.findIndex((name) => name.length === 5)); // 1

//Metodo .reduce() (ACUMULADORES)
const numbers = [95, 5, 25, 10, 25];
numbers.reduce((first, second) => {
  console.log(`F=${first} S=${second}`);
  return first + second;
});

// F=95  S=5    (1ª iteración: elemento 1: 95 + elemento 2: 5) = 100
// F=100 S=25   (2ª iteración: 100 + elemento 3: 25) = 125
// F=125 S=10   (3ª iteración: 125 + elemento 4: 10) = 135
// F=135 S=25   (4ª iteración: 135 + elemento 5: 25) = 160

// Finalmente, devuelve 160

//Metodo .reduceRight() (HACIA IZQUIERDA)
const number = [95, 5, 25, 10, 25];
console.log(number.reduce((first, second) => first - second)); // 95 - 5 - 25 - 10 - 25. Devuelve 30
console.log(number.reduceRight((first, second) => first - second)); // 25 - 10 - 25 - 5 - 95. Devuelve -110
