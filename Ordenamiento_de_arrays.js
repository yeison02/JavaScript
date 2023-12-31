/*
JavaScript proporciona un método incorporado en arrays llamado .sort() para ordenar sus elementos. Por defecto no es muy útil pero puedes personalizar su comportamiento para que ordene los elementos de la manera que necesites.

Ordenamiento básico con sort()
Por defecto, .sort() hace una ordenación un poco extraña:
*/

let numeros = [5, 10, 2, 25, 7];
numeros.sort();
console.table(numeros); // [10, 2, 25, 5, 7]

/*
¿Qué ha pasado? Este comportamiento puede resultar confuso cuando se trabaja con números, ya que .sort() ordenará los números en función de su valor como cadena de texto, no de su valor numérico.

Por suerte, podemos arreglarlo...

Ordenamiento personalizado con sort()
Para personalizar cómo sort() ordena los elementos, puedes pasar una función de comparación como argumento. La función de comparación debe devolver:

Un valor negativo si el primer argumento debe aparecer antes que el segundo.
Un valor positivo si el segundo argumento debe aparecer antes que el primero.
Cero si ambos argumentos son iguales.
Por ejemplo, para ordenar los números de menor a mayor, puedes usar la siguiente función de comparación:
*/

let num = [5, 10, 2, 25, 7];
num.sort(function (a, b) {
  return a - b;
});

console.table(num); //[2, 5, 7, 10, 25]

/*
Para ordenarlos de manera descendente, de mayor a menor, deberías cambiar el orden del return:
*/

let number = [5, 10, 2, 25, 7];
number.sort(function (a, b) {
  return b - a;
});

console.table(number); // [25, 10, 7, 5, 2]

// Puedes usar un arrow fuction para simplificar el codigo

let numero = [5, 10, 2, 25, 7];

numero.sort((a, b) => a - b);

/*
sort() y toSorted()

Como ves, .sort() modifica el array original. Si quieres obtener un array ordenado sin modificar el original, puedes usar el método .toSorted(). Sólo ten en cuenta que, ahora mismo, su soporte en navegadores es limitado .
*/

let numbers = [5, 10, 2, 25, 7];

let numerosOrdenados = numbers.toSorted((a, b) => a - b);

console.table(numerosOrdenados);
console.table(numbers);

/*
También podrías usar el operador de propagación (...) para crear una copia del array original y ordenarla:
*/

let numb = [5, 10, 2, 25, 7];
let copiaNumeros = [...numb];
//Ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b);

console.table(copiaNumeros); // 2, 5, 7, 10, 25]
console.table(numb); // [5, 10, 2, 25, 7]
