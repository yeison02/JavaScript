/*
Metodos para pasar un JSON a un Object y viceversa

Método	                                     Descripción
🔨 Parseo (De string a objeto)
JSON.parse(str)	                             Convierte el texto  str (si es un JSON válido) a un objeto y lo devuelve.
🆎 Convertir a texto (De objeto a string)
JSON.stringify(obj)	                         Convierte un objeto  obj a su representación JSON y la devuelve.
JSON.stringify(obj, props)	                 Idem al anterior, pero filtra y mantiene solo las propiedades del array props.
JSON.stringify(obj, props, spaces)	         Idem al anterior, pero indenta el JSON a  spaces espacios.

*/

//Comvertir JSON a objeto

const json = `{
    "name": "Manz",
    "life": 99
}`;

const user = JSON.parse(json);
console.log(user.name); // "Manz"
console.log(user.life); // 99

//Convertir un objeto a JSON

const name = {
  name: "Manz",
  life: 99,
  talk: function () {
    return "Hola";
  },
};

console.log(JSON.stringify(name)); // '{"name":"Manz","life":99}'

const usuario = {
  name: "Manz",
  life: 99,
  power: 10,
};

console.log(JSON.stringify(usuario, ["life"])); // '{"life":99}'
console.log(JSON.stringify(usuario, ["name", "power"])); // '{"name":"Manz","power":10}'
console.log(JSON.stringify(usuario, [])); // '{}'
console.log(JSON.stringify(usuario, null)); // '{"name":"Manz","life":99,"power":10}'

const users = {
  name: "Manz",
  life: 99,
};

console.log(JSON.stringify(users, null, 2));
// {
//   "name": "Manz",
//   "life": 99
// }

console.log(JSON.stringify(users, null, 4));
// {
//     "name": "Manz",
//     "life": 99
// }

console.log(JSON.stringify(users, ["name"], 1));
// {
//  "name": "Manz"
// }
