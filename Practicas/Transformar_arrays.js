/*
filter: Un nuevo Array con los elementos que cumplan una condición
El método filter crea un nuevo array con todos los elementos que devuelven true al ejecutar una función que le pasamos como parámetro.

Por ejemplo, podríamos filtrar en un nuevo array todos los números pares de un array de números:
*/

const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (numbers) {
  return numbers % 2 === 0;
});
console.log(evenNumbers); //[2, 4, 6]

// o quedarnos con todas las cadenas de texto que tengan la letra a

const strings = ["hola", "adiós", "casa", "coche", "perro", "gato"];

//en las cadenas de texto podemos usar el método `includes` para saber si una cadena contiene otra:

const stringConA = strings.filter((strings) => strings.includes("a"));
console.log(stringConA); // ['hola', 'adiós', 'casa', 'gato']

/*
map: Un nuevo Array con los elementos transformados
El método map crea un nuevo array de la misma longitud que el original, pero con los elementos transformados por una función que le pasamos como parámetro. Así que la función recibirá cada elemento del array y tendremos que devolver el elemento transformado.

Por ejemplo, podríamos crear un array con el doble de cada número de un array de números:
*/

const numeros = [1, 2, 3];
const dobleNumero = numeros.map((number) => {
  return number * 2;
});

console.log(dobleNumero);

/*
O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:
*/

const string = ["hola", "javascript", "midu", "programación"];

const stringLongitud = string.map((strings) => strings.length);

console.log(stringLongitud); // -> [4, 10, 4, 12]

/*
map + filter: Un nuevo Array con los elementos transformados y filtrados
En JavaScript podemos crear un encadenamiento de métodos. De esta forma, si un método devuelve un array, podemos llamar a otro método sobre ese array sin necesidad de guardarlo en una variable.

Imagina que queremos crear un array con el doble de los números y sólo quedarnos con los que sean mayores que 5. Podríamos hacerlo así:
*/

const numbe = [1, 2, 3, 4, 5, 6, 7];

const dobleYMayor = numbe
  .map((number) => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter((number) => number > 5); // [6, 8, 10, 12, 14]

console.log(dobleYMayor); // [6, 8, 10, 12, 14]

/*
También podríamos hacerlo al revés, primero filtrando y luego transformando. Por ejemplo, filtrar los números pares y luego multiplicarlos por 2:
*/

const num = [1, 2, 3, 4, 5, 6, 7];

const paresPorDos = num
  .filter((numero) => numero % 2 === 0) // [2, 4, 6]
  .map((numero) => numero * 2); // [4, 8, 12]

console.log(paresPorDos); // [4, 8, 12]

/*
reduce: Un único valor a partir de un array

El método reduce es un poco más complejo que los anteriores. Este método te permite crear un único valor a partir de un Array.

Recibe dos parámetros: una función que se ejecutará por cada elemento y un valor inicial, opcional, que será donde podremos acumular los valores.

El primer parámetro de reduce, que es la función que se ejecutará por cada elemento, recibe tres parámetros:

El acumulador: el valor que se va a ir acumulando en cada iteración
El elemento actual: el elemento del Array que estamos iterando en ese momento.
El índice: la posición del elemento actual en el Array.
Y debe devolver el valor que se va a acumular en cada iteración.

Un caso de uso muy típico de reduce es sumar todos los elementos de un Array:
*/

const nume = [1, 2, 3];

const sum = nume.reduce((acumulador, currentnumber) => {
  return acumulador + currentnumber;
}, 0); // el 0 es el valor inicial

console.log(sum);

/*
Vamos a ver qué está pasando en cada iteración:

-Iteración 1: el acumulador vale 0 (ya que 0 es el valor inicial) y el elemento actual vale 1. Así que devolvemos 0 + 1 = 1
-Iteración 2: el acumulador vale 1 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 2. Así que devolvemos 1 + 2 = 3
-Iteración 3: el acumulador vale 3 (el valor que devolvimos en la iteración anterior) y el elemento actual vale 3. Así que devolvemos 3 + 3 = 6

Por lo tanto, el valor final de sum es 6.

¿Recuerdas que hemos visto antes cómo usar map y filter juntos? Pues podrías usar reduce para tener que evitar crear un array intermedio. Por ejemplo, imagina que queremos doblar los números pares y sólo quedarnos con los mayores de 5 (como hicimos en el ejemplo anterior):
*/

const number = [1, 2, 3, 4, 5, 6, 7];

const doubleEvenNumbers = number.reduce((accumulator, currentNumber) => {
  const isEven = currentNumber % 2 === 0;
  const doubled = currentNumber * 2;
  const isGreaterThanFive = doubled > 5;

  // si es par y mayor que 5, lo añadimos al array
  if (isEven && isGreaterThanFive) {
    // para ello devolvemos un nuevo array con el valor actual
    return accumulator.concat(doubled);
  } else {
    // si no, devolvemos lo que ya teníamos
    return accumulator;
  }
}, []); // <- el array vacío es el valor inicial

console.log(doubleEvenNumbers); // [8, 12]

/*
Lo interesante en este caso es que no hemos tenido que crear un array intermedio con map y filter. Hemos ido acumulando los valores que nos interesaban en cada iteración y los que no nos interesaban los hemos descartado devolviendo lo que ya teníamos en el acumulador.

Ten cuidado con reduce. Como puedes ver, su carga cognitiva es mayor que la de map y filter. Así que si puedes usar map y filter para hacer lo mismo, hazlo. Sólo usa reduce cuando no te quede más remedio.
*/
