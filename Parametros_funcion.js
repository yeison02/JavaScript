/*
Hasta ahora hemos visto como crear funciones y cómo llamarlas. Pero para poder desbloquear todo el potencial de las funciones, necesitamos que puedan recibir parámetros. Esto es, que su comportamiento pueda cambiar según los datos que le pasemos.

Imagina que queremos que nuestra función de saludar, pueda saludar a cualquier persona, no solo a Yeison. Para ello, podemos hacer que la función acepte un parámetro, que será el nombre de la persona a la que queremos saludar.
*/

function saludar(usuario) {
  console.log("Hola " + usuario);
}

//Ahora, cada vez que llamemos a la funcion, podemos pasarle una cadena de texto
saludar("fransisco"); // -> Hola fransisco
saludar("Miguel"); // -> Hola miguel
saludar("Diana"); // -> Hola Diana

/*
Las funciones son la base de la programación y nos permiten crear programas complejos a partir de pequeñas piezas.

Por ejemplo, para crear una calculadora, deberíamos empezar a crear funciones que realicen las operaciones básicas. En este caso necesitaremos parametrizar la función para que acepte los dos números para hacer la operación.

function sumar(a, b) {
*/

function suma(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

// Y ya podriamos usarlas

const resulSuma = suma(2, 5);
console.log(resulSuma); // -> 7

const resulResta = restar(5, 2);
console.log(resulResta); // -> 3

/*
Parámetros y argumentos
En el ejemplo anterior, hemos visto que podemos pasarle valores a la función cuando la llamamos. A estos valores se les llama argumentos. Y a los valores que recibe la función, se les llama parámetros.
*/

// La funcion sumar tiene dos parametros: a y b
function sumar(a, b) {
  return a + b;
}

//Cuando llamamos a la funcion le pasamos dos argumentos: 2 y 3
const resulRestar = sumar(2, 3);

/*
El orden de los parámetros importa
Algo muy importante, y un error muy común al empezar a crear funciones, es olvidar que el orden de los parámetros importa.

Vamos a crear una función que simule un microondas. Le pasaremos el plato, tiempo y potencia. Y nos devolverá el resultado del plato cocinado.
*/

function cocinarMicroondas(plato, tiempo, potencia) {
  if (plato === "🐥" && tiempo === 1 && potencia === 5) {
    return "🍗";
  }
  if (plato === "🥚" && tiempo === 2 && potencia === 3) {
    return "🍳";
  }
  return "❌ Plato no soportado";
}

//Si usamos bien los parametos, la funcion funciona correctamente
const resultado = cocinarMicroondas("🐥", 1, 5);
console.log(resultado); // ->🍗

//Si cmbiamos el orden de los parametos la funcion no funciona
const result = cocinarMicroondas(1, 5, "🐥");
console.log(result); // -> "❌Plato no soportado"

/*
Esto es porque la función espera que el primer parámetro sea el plato, el segundo el tiempo y el tercero la potencia. Si cambiamos el orden, podemos tener comportamientos inesperados o errores.
*/
