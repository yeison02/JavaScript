//El operador typeof devuelve una cadena de texto que indica el tipo de un operando. Puede ser usado con cualquier tipo de operando, incluyendo variables y literales.

const MAGIC_NUMBER = 7;
typeof MAGIC_NUMBER; // "number"

//Tambien se puede usar directamente con los valores que se quieran comprobar

typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 42; // "number"
typeof "Hola mundo"; // "string"

//Existe, sin embargo, un valor especial en JavaScript, null, que es considerado un bug en el lenguaje. El operador typeof devuelve "object" cuando se usa con null:

typeof null; // "object"

//Usando con operadores de comparación

//El operador typeof es muy útil cuando se usa con operadores de comparación. Por ejemplo, para comprobar si una variable es del tipo que esperamos:

const ages = 42;
typeof ages === "number"; // true

//Una vez que tenemos expresiones lógicas, podemos empezar a encadenar operadores lógicos para comprobar múltiples condiciones:

const age = 42;
typeof age === "number" && age > 18; // true
