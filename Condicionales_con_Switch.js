/*
Switch
En JavaScript, la sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de código dependiendo del valor de una expresión. Esta estructura es útil cuando queremos realizar diferentes acciones basadas en una única variable.

Sintaxis
La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido. Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada caso y evitar que se sigan evaluando el resto de casos.


switch (expresion) {
    case valor1:
        codigo a ejecutar si la expresion coincide con el valor 1
        break

    case valor2:
        codigo a ejecutar si la expresion coincide con el valor 1
        break

    case valor3:
        codigo a ejecutar si la expresion coincide con el valor 1
        break
    default:
        codigo a ejecutar si la expresion no coincide con ningun valor
}

La condición de default es opcional. No es obligatorio que la uses si no la necesitas. Es como el else de las condiciones if.

Por ejemplo si queremos mostrar un mensaje diferente dependiendo del día de la semana:
*/

/*const DIA = "lunes";

switch (DIA) {
  case "lunes":
    console.log("Hoy es lunes");
    break;
  default:
    console.log("Hoy no es lunes");
}*/
/*
Vamos a hacer esto un poco más interesante. En JavaScript podemos recuperar la información de la hora y la fecha usando el objeto Date. Este objeto tiene un método llamado getDay() que nos devuelve el día de la semana en formato numérico, siendo 0 el domingo y 6 el sábado.

Igual que console es un objeto. También Date lo es. Un objeto en JavaScript no es muy diferente a un objeto en la vida real. Tiene propiedades y funciones que podemos usar. En este caso, getDay() es una función que nos devuelve el día de la semana.
*/

//segun el dia de la semana, mostramos un mensaje diferente
const dia = new Date().getDay();
switch (dia) {
  case 0:
    console.log("Hoy es domingo");
    break;
  case 1:
    console.log("Hoy es lunes");
    break;
  case 2:
    console.log("Hoy es martes");
    break;
  case 3:
    console.log("Hoy es miercoles");
    break;
  case 4:
    console.log("Hoy es jueves");
    break;
  case 5:
    console.log("Hoy es viernes");
    break;
  default:
    console.log("Se acerca el fin de semana");
}

/*
switch vs if

Muchas veces verás que puedes escribir el mismo código usando switch o if. El ejemplo anterior con un if:
*/

const day = new Date().getDay();
if (day === 0) {
  console.log("Hoy es domingo");
} else if (day === 1) {
  console.log("Hoy es lunes");
} else if (day === 2) {
  console.log("Hoy es martes");
} else if (day === 3) {
  console.log("Hoy es miercoles");
} else if (day === 4) {
  console.log("Hoy es jueves");
} else if (day === 5) {
  console.log("Hoy es viernes");
} else {
  console.log("Se acerca el fin de semana");
}

/*
Agrupando cases

En ocasiones, queremos que varios casos ejecuten el mismo código. En lugar de repetir el mismo código en cada caso, podemos agruparlos usando el mismo case para cada uno de ellos.
*/

const horario = new Date().getDay();
switch (horario) {
  case 0:
  case 6:
    console.log("Hoy es fin de semana");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("A trabajar");
    break;
  case 5:
    console.log("Hoy es viernes");
    break;
}

/*
¡No olvides el break!
Es muy importante que no te olvides de poner el break al final de cada caso. Si no lo pones, se ejecutarán todos los casos que vengan después del que coincide. Por ejemplo:

❌ Este código no es correcto, para que veas qué pasa si no pones break en tus casos
*/

const di = new Date().getDay();

switch (di) {
  case 0:
    console.log("¡Hoy es domingo! 😴");
  case 1:
    console.log("¡Nooo, es lunes! 😢");
  case 2:
    console.log("¡Hoy es martes! 🥵");
  case 3:
    console.log("¡Hoy es miércoles! 🤓");
  default:
    console.log("Se acerca el fin de! 🚀");
}

/*
El patrón switch(true)
Existe un patrón que se usa a veces con switch que es switch(true). Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

Por ejemplo:
*/

let edad = 25;

switch (true) {
  case edad >= 18 && edad < 25:
    console.log("Eres mayor de edad y eres joven");
    break;
  case edad >= 25 && edad < 40:
    console.log("Eres mayor de edad y estás en plena madurez");
    break;
  case edad >= 40:
    console.log("Eres mayor de edad y estás en la mejor edad");
    break;
  default:
    console.log("Eres menor de edad");
}
