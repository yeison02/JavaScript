const map = new Map();
map; // Map({}) (Mapa vacío)
const map2 = new Map([[1, "Uno"]]);
map2; // Map({ 1=>"uno" })
const map3 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]);
map3; // Map({ 1=>"uno", 2=>"dos", 3=>"tres" })

/*
Propiedad o Método	        Descripción
 .size	                    Propiedad que devuelve el número de elementos que tiene el mapa.
 .set(key, value)	        Establece o modifica la clave key con el valor value. Muta
 .has(key)	                Comprueba si key ya existe en el mapa y devuelve si existe o no.
 .get(key)	                Obtiene el valor de la clave key del mapa.
 .delete(key)	            Elimina el elemento con la clave key del mapa. Devuelve si lo eliminó correctamente.
.clear()                    Vacia el mapa completamente
*/

//Propiedad .size

const map4 = new Map();
console.log(map4.size); // 0

const map5 = new Map([
  [1, "uno"],
  [2, "dos"],
]);
console.log(map5.size); // 2

const map6 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]);
console.log(map6.size); // 2 (El 1->"tres" sobreescribe al anterior)

//Establecer elementos (set)

const map7 = new Map();

map7.set(5, "cinco");
map7.set("A", "letra A");
map7.set(5, "5 sobreescrito"); // Sobreescribe al anterior

map7; // Map({ 5=>"cinco sobreescrito", "A"=>"letra A" })

//Comprobar si existten (has)

const map8 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]);

console.log(map8.has(2)); // true
console.log(map8.has(34)); // false
console.log(map8.set(34, "treinta y cuatro")); // se establece al map
console.log(map8.has(34)); // true

//Borrar elementos

const map9 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]);

console.log(map9.delete(3)); // true
console.log(map9); // Map({ 1=>"uno", 2=>"dos"})
console.log(map9.delete(34)); // false

//Vaciar conjunto (clear)

const map10 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]);

map10.clear();
console.log(map10); // Map { }

//Convertir a Arrays

const map11 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]);

console.log(map11.size); // 3 (Contiene 3 elementos)
map.constructor.name; // "Map"
/*const entries = [...structuredClone(map11)];

entries.constructor.name;   // "Array"
console.log(entries); // [[1, "uno"], [2, "dos"], [3, "tres"]]*/

//Que son los weakMap

// Con map

const map12 = new Map([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]); // Ok
const map13 = new Map([[{ id: 1, type: "number" }, "uno"]]); // Ok

// Con weakMap
const map14 = new WeakMap([
  [1, "uno"],
  [2, "dos"],
  [3, "tres"],
]); // ERROR: Uncaught TypeError: Invalid value used in weak map key
const map15 = new WeakMap([[{ id: 1, type: "number" }, "uno"]]); // Ok

/*

Característica	                                  Map	WeakMap	  Object
Se pueden insertar claves repetidas	              ❌	     ❌	    ❌
Se pueden insertar claves con tipos primitivos	  ✅	     ❌	  Sólo string o symbol
Si no se usa el elemento, se elimina del map	  ❌	     ✅	    ❌
Se puede convertir a array (es iterable)	      ✅	     ❌	    ❌ Object.entries(obj)
Pueden colisionar algunas claves *	              ❌	     ❌	    ✅
Las claves garantizan un orden por inserción	  ✅	     ✅	    ❌
Propiedad .size	                                  ✅	     ❌	    ❌ Object.keys(obj).length
Método .set()	                                  ✅	     ✅	    ❌ Se usa asignación por clave
Método .get()	                                  ✅	     ✅	    ❌ Se usa acceso a la clave
Método .has()	                                  ✅	     ✅	    ❌ Object.keys(obj).includes(key)
Método .delete()	                              ✅	     ✅	    ❌
Método .clear()	                                  ✅	     ❌	    ❌

*/
