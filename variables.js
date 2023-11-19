//Variable let

let numero;
numero = 1;
numero + 1; // 1 + 1

// Tambien se puede reasignarle un valor a la variable

numero = 5;
numero + 1; // 5 + 1

//Si no se guarda el valor de esta nueva operacion el valor de la variable numero seguira siento 5

numero = 5;
numero + 1; // 5 + 1
numero + 1; // 5 + 1

//El valor de una variable puede ser cualquier tipo de dato, como un string o un booleano

let welcomeText = "Hola";
let isCool = true;


//Variable const: Son variables que no pueden ser reasignadas

const PI = 3.1415

//Si se intenta reasignar el valor de una constante se obtendra un error

PI = 3 // TypeError: Assignment to constant variable

//Como no se pueden reasignar, las constantes siempre deben ser inicializadas con algún valor. Esto es otra diferencia respecto a let, que no es necesario inicializarla con un valor.

let numer //✅
const RADIUS //❌

//Las constantes son muy utiles para almacenar valores que no vayan a cambiar. Siempre que se pueda preocurar usar constantes para que el codigo sea más predecible.



//Variable var: Hoy en dia no es recomendable usar var ya que tienen comportamientos extraños que pueden causar errores en el codigo


//Es importante tener en cuenta que los nombres de las variables son sensibles a las mayúsculas y minúsculas, lo que significa que miVariable y mivariable son dos variables diferentes en JavaScript.

let miVariiable = 1
let mivariable = 2
miVariiable + mivariable // 1 + 2

//También es importante que los nombres de las variables sean descriptivos. Por ejemplo, si queremos almacenar el nombre de un usuario, podemos llamar a la variable userName. De esta forma, cuando leamos el código, sabremos que la variable contiene el nombre de un usuario.

let n = "Yeison" //❌
let userName = "Juan" //✅