/*
 El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple una determinada condición
*/

/*
SINTAXIS
La sintaxis del bucle while es similar a la de un condicional if. La única diferencia es que, en lugar de ejecutar el código una sola vez, se ejecuta mientras se cumpla la condición.


while (condicion) {
codigo a ejecutarse mientras se cumpla la condicion
}

El bucle comienza evaluando la condición dentro de los paréntesis. Si la condición es true, se ejecuta el código dentro de las llaves.

Después de ejecutar el código, la condición se evalúa de nuevo, y si sigue siendo verdadera, el código dentro de las llaves se ejecuta de nuevo. Este proceso se repite hasta que la condición se evalúa como falsa.

Ten en cuenta que, si la condición es falsa desde el principio, el código dentro de las llaves nunca se ejecutará.
*/

//Iniciar la variable fuera del bucle
let cuentaAtras = 10;

//mienras que la cuenta sea mayor que 0
while (cuentaAtras > 0) {
  //mostramos el valor de la cuenta atras en cada iteracion
  console.log(cuentaAtras);
  //restamos 1 a la cuenta atras
  cuentaAtras = cuentaAtras - 1;
}

console.log("despegue 🚀");

/*
Los bucles while son muy potentes, pero también pueden ser peligrosos. Si la condición nunca se evalúa como falsa, el bucle se ejecutará infinitamente.

Saliendo de un bucle con break
Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break. Cuando el intérprete de JavaScript encuentra la palabra break, sale del bucle y continúa ejecutando el código que haya después.
*/

let cuentaRegresiva = 10;
while (cuentaRegresiva > 0) {
  console.log(cuentaRegresiva);
  cuentaRegresiva = cuentaRegresiva - 1;
  //si la cuenta regresiva es igual a 5, salimos del bucle
  if (cuentaRegresiva === 5) {
    break; // salir del bucle
  }
}

/*
Saltando una iteración con continue
Igual que tenemos la posibilidad de "romper" el bucle con break, también podemos saltarnos una iteración con continue. Cuando el intérprete de JavaScript encuentra la palabra continue, salta a la siguiente iteración del bucle.
*/

let conteo = 10;
while (conteo > 0) {
  conteo = conteo - 1;
  //si el conteo es un numero par
  if (conteo % 2 === 0) {
    continue; // saltamos a la siguiente iteracion
  }
  console.log(conteo);
}

/*
Anidación de bucles
Podemos anidar bucles dentro de otros bucles. Imagina que en nuestra cuenta atrás para el cohete, tenemos que revisar que 3 cosas están en sus parámetros: el oxígeno, el combustible y la temperatura.
*/

const NUMERO_REVISIONES = 3;
let cuenAtras = 10;
//mientras la cuenta atras sea mayor a 0
while (cuenAtras > 0) {
  //mostramos el valor de cuenta atras
  console.log(cuenAtras);
  //creamos una variable para contar las revisiones realizadas y la inicializamos en 0
  let revisionesRealizadas = 0;
  //hasta que noo hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    //y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1;
    console.log(revisionesRealizadas + " revisiones realizadas");
  }
  cuenAtras = cuenAtras - 1;
}
