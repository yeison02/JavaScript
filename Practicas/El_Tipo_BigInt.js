//BigInt es un tipo de dato de Javascript  que nace con la idea de permitir representar valores muy grandes, de una forma relativamente sencilla y compatible con lo que ya existe.

//Para poder realizar operaciones de forma segura cuando tenemos numeros muy grandes podemos utilizar BigInt, que es simplemente colocar una n al final del numero:

const number = 2n ** 53n;

console.log(number);
console.log(number + 1n);
console.log(number + 3n);
console.log(number + 10n);

//Como trabajar con numeros BigInt correctamente

//const number = 5 + 5n;         // ERROR: Cannot mix BigInt and other types, use explicit conversions
const num1 = BigInt(5) + 5n; // 10n (Ok, convierte a BigInt y realiza la operación)
console.log(num1);
const num2 = 5 + Number(5n); // 10 (Ok, convierte a Number y realiza la operación)
console.log(num2);
