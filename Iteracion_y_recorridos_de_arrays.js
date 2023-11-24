/*
Ya hemos visto en clases anteriores cómo podemos crear bucles con for y while. Con estas estructuras de control, y una nueva que veremos en este clase, podemos también recorrer cada uno de los elementos de un array.

Además, veremos como los propios arrays tienen un método .forEach que nos permite ejecutar una función para cada uno de los elementos del array.

Bucle while
El bucle while vimos que permitía ejecutar un bloque de código mientras una condición era verdadera. En el caso de la iteración de arrays, la condición generalmente se basa en el índice del elemento.

Podemos, por ejemplo, crear una variable con let para guardar un puntero al índice del elemento que estamos iterando. En cada iteración, podemos incrementar el valor de la variable en 1, para que en la siguiente iteración se imprima el siguiente elemento.
*/

let frutas = ["🍎", "🍌", "🍓"];

let i = 0; // Lo usaremos como indice

while (i < frutas.length) {
  console.log(frutas[i]); // imprime el elemento en la posicion [i]
  i++; // incrementamos el indice en 1 para la siguiente iteracion
}

/*
Bucle for
El bucle for nos permitía ejecutar un bloque de código un número determinado de veces. En el caso de la iteración de arrays, podemos usarlo para recorrer cada uno de los elementos del array, usando la longitud del array como condición.
*/

let fruit = ["🍎", "🍌", "🍓"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]); //imprime el elemto en la posicion [i]
}

/*
También puedes recorrer el array en orden inverso, empezando desde el último elemento hasta el primero, usando i-- en lugar de i++.
*/

let frt = ["🍎", "🍌", "🍓"];

for (let i = frt.length - 1; i >= 0; i--) {
  console.log(frt[i]); //imprime el elemto en la posicion [i]
}

/*
Bucle for...of
Además de while y for, existe otra estructura de control que nos permite iterar sobre los elementos de un array: for...of. Esta estructura de control es más simple que for, ya que no necesitamos crear una variable para guardar el índice del elemento que estamos iterando.

Es mucho más sencilla y fácil de entender:
*/

let fruta = ["🍎", "🍌", "🍓"];
for (let frutas of fruta) {
  console.log(frutas); //impprime el elemento en la posicion i
}
/*
Como ves, hay algunas limitaciones en el uso de for...of. Por ejemplo, no podemos usarlo para recorrer un array en orden inverso y tampoco tenemos acceso al índice del elemento que estamos iterando.

El método array.forEach()
Ya hemos visto en la clase anterior que los arrays tienen métodos que nos permiten realizar operaciones sobre ellos, como añadir elementos o eliminarlos. Pero tiene muchos más métodos que iremos viendo que nos ayuda a trabajar con ellos.

Uno de esos métodos es array.forEach(), que nos permite ejecutar una function para cada uno de los elementos del array. Esta función recibe como parámetros el elemento que se está iterando en ese momento, el índice del elemento y el propio array.
*/

let fts = ["🍎", "🍌", "🍓"];
fts.forEach(function (f, index, originalArra) {
  console.log(f);
});

/*
Usando una arrow function e indicando sólo los parámetros que necesitamos de nuestra función podemos simplificarlo aún más:
*/

let frutast = ["🍎", "🍌", "🍓"];
frutas.forEach((frut) => {
  console.log(frut); //imprime el elemto en la posicion i
});

/*
¿Cuál usar? Depende...
MÉTODO	ACCESO AL ÍNDICE	ACCESO AL VALOR	  PUEDE USAR BREAK	  CONTROL MANUAL DEL ÍNDICE
for	          ✅	                 ✅	             ✅	                   ✅
while	        ✅	                 ✅	             ✅                     ✅
for...of	    ❌	                 ✅	             ✅	                   ❌
forEach	      ✅	                 ✅	             ❌*	                   ❌

-Aunque técnicamente no puedes utilizar la sentencia break para salir de forEach, puedes simular esto lanzando una excepción y capturándola en un bloque try/catch externo. Obviamente es una mala práctica que no te recomiendo.
Cada uno de estos métodos tiene sus propios casos de uso. for y while son más generales y te permiten controlar el índice manualmente, lo que es útil si necesitas saltar a índices específicos, cambiar el orden de iteración o salir del bucle antes de que se complete.

for...of es más fácil de usar cuando solo necesitas los valores de un array y no te importa el índice. Es especialmente útil también cuando estás trabajando con iterables que no son arrays, como las cadenas de caracteres o los conjuntos (sets).

Finalmente, forEach es una forma muy eficiente y legible de iterar sobre un array si no necesitas break y si no necesitas controlar manualmente el índice.
*/
