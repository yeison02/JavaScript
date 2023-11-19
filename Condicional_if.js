/*
El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:
*/
if (condicion) {
  // codigo que se ejecuta si la condicion es verdadera
}

//Comprobar si un usuario es mayor o igual a 18 años

let edad = 18;

if (edad >= 18) {
  console.log("El usuario es mayor de edad");
}

/*
else

Es posible utilizar la palabra clave (else) para ejecutar un bloque de código diferente si la condición es falsa:

*/

const age = 17;

if (age >= 18) {
  console.log("El usuario es mayor de edad");
} else {
  console.log("El usuario es menor de edad");
}

/*
else if
También podemos utilizar la palabra clave else if para comprobar más de una condición:
*/

let edadUsuario = 17;

if (edadUsuario >= 18) {
  console.log("El usuario es mayor de edad");
} else if (edadUsuario >= 16) {
  console.log("Eres casi mayor de edad");
} else {
  console.log("El usuario es menor de edad");
}

/*
Anidación de condicionales
Es posible anidar condicionales dentro de otros condicionales. Por ejemplo:
*/

const eda = 17;
const tieneCarne = true;

if (eda >= 18) {
  if (tieneCarne) {
    console.log("Puedes conducir");
  } else {
    console.log("No puedes conducir");
  }
} else {
  console.log("No puedes conducir");
}

/*En muchas ocasiones vas a querer evitar la anidación innecesaria de condicionales ya que se hacen difíciles de leer y mantener. En estos casos es mejor utilizar operadores lógicos para crear la condición:*/

let ages = 19;
let carnet = true;

if (ages >= 18 && carnet) {
  console.log("Puedes conducir");
} else {
  console.log("NO puedes conducir");
}

/*
Otra técnica muy interesante es la de guardar el resultado de la condición en una variable, para que tus condiciones sean mucho más legibles:
*/

const edades = 19;
const tieneCarnet = true;
const puedeConducir = edades >= 18 && tieneCarnet;

if (puedeConducir) {
  console.log("Puedes conducir");
} else {
  console.log("No puedes conducir");
}
