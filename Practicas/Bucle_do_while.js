/*
Aunque no es muy famoso ni muy utilizado, en JavaScript existe un bucle que se ejecuta al menos una vez, y luego se repite mientras se cumpla una condición. Este bucle se llama do while y tiene la siguiente sintaxis:

do {
  // código que se ejecuta al menos una vez
} while (condición);

confirm
La función confirm muestra un cuadro de diálogo con dos botones: "Aceptar" y "Cancelar". Si el usuario pulsa "Aceptar", la función devuelve true. Si pulsa "Cancelar", devuelve false.
*/
let respuesta = confirm("¿Te gusta JavaScript?");
console.log(respuesta);

/*
Usando do while
Vamos a hacer un programa que saldrá de un bucle do while cuando el usuario pulse "Cancelar" en el cuadro de diálogo que muestra la función confirm.
*/

let answer;
do {
  answer = confirm("¿Te gusta javascript?");
} while (answer);
/*
Si el usuario pulsa "Aceptar", la variable respuesta valdrá true y el bucle se repetirá. Si el usuario pulsa "Cancelar", la variable respuesta valdrá false y el bucle se detendrá.
*/
