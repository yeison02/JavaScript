/*
Una función es un bloque de código que realiza una tarea específica cuando se llama. En JavaScript, las funciones se pueden definir de varias maneras, pero la forma más común y básica es mediante la palabra clave function.
*/

function saludar() {
  console.log("Hola Yeison");
}

/*
Como ves, declarar una función consiste de:

-La palabra reservada function que indica que estamos definiendo una función.
-El nombre de la función, en este caso saludar. Normalmente usamos verbos para nombrar funciones, ya que son acciones que realizan.
-Un par de paréntesis () después del nombre. Pueden contener parámetros. En este caso, no tenemos ninguno.
-Un bloque de código entre llaves {}. En este caso, solo tenemos una línea de código, pero podríamos tener muchas más.

Nuestra función ahora mismo no devuelve nada pero cada vez que la llamemos, imprimirá Hola Yeison en la consola.

Las funciones pueden devolver un resultado (un número, una cadena de texto, un booleano...) o puede no devolver nada. En ese caso, la función devuelve undefined.

Para llamar a una función, simplemente escribimos su nombre seguido de paréntesis:
*/

saludar(); //-> Hola Yeison

/*
Devolviendo un resultado
Las funciones pueden devolver un resultado. Para ello, utilizamos la palabra reservada (return) y después el valor que queremos devolver:
*/

function sumar() {
  return 1 + 1;
}

//Ahora cada vez que llamemos a la funcion sumar, nos devolvera el resultado de la suma:

//Podemos guardar el resultado en una variable
const resultado = sumar();

//O ver en consola directamente el resultado
console.log(sumar()); // -> 2

//Recordar, si no utilizamos (return), la funcion nos devolvera undefined.

/*

Una función realmente útil
La función saludar y sumar no parecen muy útiles, pero con lo poco que sabemos ya podemos hacer cosas más productivas. Por ejemplo, podemos crear una función que nos devuelva un número aleatorio del 1 al 10.

Para ello vamos a descubrir Math, un objeto incorporado en JavaScript que tiene propiedades y métodos para constantes y funciones matemáticas. Vamos a ver dos métodos que nos van a ser muy útiles:

-Math.random(): devuelve un número aleatorio entre 0 y 1, con decimales.
-Math.floor(): redondea un número hacia abajo.

Math.random es parecido a console.log, en el sentido que son métodos que JavaScript incorpora de serie y que podemos utilizar en cualquier punto de nuestro programa.

Sabiendo esto, podríamos crear una función que nos devuelva un número aleatorio del 1 al 10:*/

function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random(); // por ejemplo: 0.6803487380457318

  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10; // -> 6.803487380457318

  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied); // -> 6

  // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1; // -> 7

  // devolvemos el resultado
  return result;
}
console.log(getRandomNumber());
