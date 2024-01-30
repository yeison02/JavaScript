//Intercambio de variables

//Sin desestructuracion
let a = 10;
let b = 5;

let aux = a;
a = b;
b = aux;

//Con desestructuracion

let c = 10;
let d = 5;
[c, d] = [d, c];

//Spread (EXPANDIR)

const debug = (param) => console.log(...param);
const array = [1, 2, 3, 4, 5];
debug(array); // 1 2 3 4 5

//Rest (AGRUPAR)

const element = (...param) => console.log(param);
element(1, 2, 3, 4, 5);
console.log(element); // [1, 2, 3, 4, 5]

const elements = [5, 4, 3, 2];
const [first, ...rest] = elements;
console.log(elements); // first = 5, rest = [4, 3, 2]

//Reestructuracion de arrays

const pair = [3, 4];

//Usando desestructuracion + spread
const complete = [1, 2, ...pair, 5];
complete; // [1, 2, 3, 4, 5]

//Sin usar desestructuracion
const completar = [1, 2, pair, 5];
completar; // [1, 2, [3, 4], 5]
