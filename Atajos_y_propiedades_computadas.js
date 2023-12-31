/*
Atajos para trabajar con objetos

Trabajar con objetos es muy común en JavaScript. En esta clase vamos a ver algunos atajos que nos permiten trabajar con ellos de forma más cómoda, tanto a la hora de crearlos como a la hora de recuperar sus propiedades.

Atajo al crear un objeto

Imagina que quieres crear un objeto y que algunas de sus propiedades usen como valor algunas variables que ya tenemos.
*/

const name = "Spidey";
const univers = 42;

const sipderman = {
  name: name,
  univers: univers,
  powers: ["web", "invisibility", "spider-sense"],
};

/*
En este caso, podemos usar un atajo para crear el objeto. Si la propiedad y la variable tienen el mismo nombre, podemos omitir el valor y dejar solo el nombre de la propiedad.
*/

const names = "Spidey";
const univer = 42;

const sipdermans = {
  name, // automaticamentte asigna el valor de la variable names
  univer, // automaticamentte asigna el valor de la variable univer
  powers: ["web", "invisibility", "spider-sense"],
};

/*
Fíjate que si tuvieramos poderes fuera del objeto, podríamos crear el objeto en la misma línea:
*/

const nombre = "Spidey";
const universo = 42;
const poderes = ["web", "invisibility", "spider-sense"];

const spiderma = { name, universo, poderes };

/*
Destructuración: el atajo al recuperar propiedades

En la anterior clase hemos visto que para recuperar una propiedad de un objeto podemos usar la notación de corchetes o la notación de punto:

const spiderman = {
*/

const heroe = {
  name: "Thor",
  unive: 18,
  powers: ["web", "invisibility", "spider-sense"],
};

console.log(heroe.name); // Thor
console.log(heroe["name"]); // Thor

/*
A veces queremos recuperar el valor de la propiedad y guardarlo en una variable, para usarlo más adelante. Haríamos algo así:

const universe = spiderman.universe
*/

const universos = heroe.unive;
console.log(universos); // 18

const poder = heroe["powers"][0];
console.log(poder); // web

/*
spiderman['powers'][1] de nuevo puede parecer un poco confuso, pero hay que separarlo en partes. spiderman es el objeto. Accedemos a la propiedad powers y como es un array, podemos acceder a su segundo elemento con [1]. Y ahí está el valor que queremos: invisibility.

A la hora de acceder a las propiedades existe un atajo llamado desestructuración (o destructuring en inglés) muy interesante que nos permite recuperar el valor de una propiedad y guardarlo en una variable de una.

Lo importante es que tengamos en cuenta que la variable que se creará tendrá el mismo nombre que la propiedad que estamos recuperando.
*/

const { unive } = heroe;
console.log(unive); // 18

/*
Además, puedes recuperar tantas propiedades como quieras, separándolas por comas.


const { unive, name, powers} = heroe
console.log(unive) // 18
console.log(name) // Thor
console.log(powers) // ["web", "invisibility", "spider-sense"]


Renombrar variables y valores por defecto

Si quieres que la variable que se crea tenga un nombre diferente al de la propiedad, puedes hacerlo así:
*/

const { unive: universeNumber } = heroe;
console.log(universeNumber); // 18

/*
Lo que estamos haciendo es recuperar la propiedad universe pero crear la constante con el nombre universeNumber.

Si la propiedad no existe, podemos asignarle un valor por defecto:
*/

const { isAvenger = false } = heroe;
console.log(isAvenger); // false

/*
El objeto que hemos creado antes no tenía la propiedad isAvenger, pero al recuperarla le hemos asignado un valor por defecto de false. Si no le hubiéramos asignado un valor por defecto, la variable isAvenger sería undefined.

Así que si recuperamos una propiedad que no existe, la variable que se creará tendrá el valor por defecto que le hayamos asignado. Y lo hacemos usando el operador =.

Esto es muy útil, por ejemplo, para recuperar opciones o configuración del usuario que quizás no ha definido todos los valores pero tenemos claro qué comportamiento queremos que tenga nuestra aplicación por defecto.

Objetos anidados y atajo
Ya sabemos que podemos tener un objeto dentro de un objeto:
*/

const person = {
  name: "Yeison",
  age: 25,
  isWorking: true,
  address: {
    street: "Jordan",
    number: 8,
    city: "Colombia",
  },
};

/*
Para acceder a las propiedades de un objeto anidado, podemos usar la notación de corchetes o la notación de punto:
*/

console.log(person.address.street); // "Jordan"
console.log(person["address"]["street"]); // "Jordan"

/*
Si queremos recuperar la propiedad street del objeto address y guardarla en una variable, podemos hacerlo así:
*/

const { address } = person;
const { street } = address;
console.log(street); // jordan

/*
Pero también podemos hacerlo en una sola línea:


const { address: {street}} = person ✅
console.log(street) -> "Jordan"

Lo que estamos haciendo es: del objeto spiderman extrae la propiedad partner, y de esta, extrae la propiedad name. Como resultado sólo crearemos la variable name con el valor 'Mary Jane'.
*/
