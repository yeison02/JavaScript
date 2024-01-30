/*
La recursividad es una técnica de programación que consiste en que una función se llame a sí misma.

Pero claro, si una función se llama a sí misma, ¿cuándo termina? ¿cómo se evita que se llame infinitamente? Con una condición base.

Ejemplo de recursividad
Vamos a crear una función que cuente desde un número hasta cero.
 */

function cuentaAtras(numero) {
  //Condicion base: si el numero es menor a 0 entonces salimpos de la funcion
  if (numero < 0) {
    return;
  }
  //Si el numero es mayor o igual a 0, lo mostramos
  console.log(numero);

  //Y llamamos a la funcion con el numero anterior
  cuentaAtras(numero - 1);
}

//si llamamos a la funcion con el numero 3 el resultado sera:

cuentaAtras(3);
/*
-> 3
-> 2
-> 1
-> 0
*/

/*
La ejecución la veríamos así:

cuentaAtras(3) -> (muestra 3)
               \ 
          cuentaAtras(2) -> (muestra 2)
                       \
                  cuentaAtras(1) -> (muestra 1)
                               \
                          cuentaAtras(0) -> (muestra 0)
                                        \
                                   cuentaAtras(-1) -> salida


¡Cuidado! Si no ponemos la condición base, la función se llamará infinitamente y el navegador se quedará bloqueado. Cuando hacemos recursividad SIEMPRE hay que tener una condición que haga que la función salga de sí misma.

Usando recursividad y devolviendo un valor
La recursividad se usa muchas veces para solucionar algoritmos. Por ejemplo, vamos a crear una función que calcule el factorial de un número.

El factorial de un número es el resultado de multiplicar ese número por todos los anteriores hasta llegar a 1. Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120
*/

function factorial(n) {
  //Condicon base: si el  numero es 0 o 1, devolvemos 1 y no llamamos a la funcion
  if (n === 0 || n === 1) {
    return 1;
    //si el numero es mayor que uno llamamos a la funcion
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6

/*factorial(3) --------------------------> 6
        \ 
  3 * factorial(2) ---------------> 6
          \
    2 * factorial(1) -----------> 2
            \
      1 * factorial(0) -------> 1*/

function suma(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n + suma(n - 1);
  }
}

console.log(suma(3));

//Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6
function fibonaci(n) {
  if (n === 0 || n === 1) {
    n + fibonaci(n + 1);
  }
}
console.log(fibonaci(3));
