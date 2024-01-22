//Los Set en Javascript son estructuras de datos nativas muy interesantes para representar conjuntos de datos. La característica principal es que los datos insertados no se pueden repetir.

const set = new Set();
set; // Set({}) (Conjunto vacío)
const sett = new Set([5, 6, 7, 8, 9]);
sett; // Set({5, 6, 7, 8, 9})  (Conjunto con 5 elementos)
const seet = new Set([5, 5, 7, 8, 9]);
seet; // Set({5, 7, 8, 9})  (Conjunto con 4 elementos)

/*

Propiedad o Método	            Descripción
 .size	                        Propiedad que devuelve el número de elementos que tiene el conjunto.
 .add(element)	                Añade un elemento al conjunto (si no está repetido) y devuelve el set. Muta
 .has(element)	                Comprueba si element ya existe en el conjunto. Devuelve si existe.
 .delete(element)	            Elimina el element del conjunto. Devuelve si lo eliminó correctamente.
.clear()	                    Vacía el conjunto completo.
*/

//Propiedad .size

const size = new Set();
console.log(size.size); // 0

const element = new Set([5, 6, 7, 8]);
console.log(element.size); // 4

const elementos = new Set([5, 6, 7, 8, 8]);
console.log(elementos.size); // 4 (El 8 sólo se inserta una vez)

//Añadir elementos con .add()

const add = new Set();

add.add(5);
add.add("A");
add.add(5); // No se inserta

console.log(add); // Set({5, "A"})

//Comprobar se existencon .has()

const array = new Set([1, 2, 3]);

console.log(array.has(2)); // true
console.log(array.has(34)); //false
console.log(array.add(34));
console.log(array.has(34)); // true

//Borrar elementos con .delete()

const eliminarElemento = new Set([1, 2, 3, 4]);

console.log(eliminarElemento.delete(1)); // true
console.log(eliminarElemento.delete(4)); // true
console.log(eliminarElemento.delete(5)); // false
console.log(eliminarElemento.add(5));
console.log(eliminarElemento.delete(5)); // true
eliminarElemento; // Set ({2,3})

//Vaciar conjunto con .clear()

const vaciar = new Set([1, 2, 3, 4, 5]);
console.log(vaciar.size); // 5
console.log(vaciar.clear());
vaciar; // Set ({ })
console.log(vaciar.size); // 0

//Convetir a arrays

const seett = new Set([5, "A", [99, 10, 24]]);

console.log(seett.size); // 3 (Contiene 3 elementos)
set.constructor.name; // "Set"
const arrays = [...seett];

arrays.constructor.name; // "Array"
arrays; // [5, "A", [99, 10, 24]]

//Convertir un array en un Set

const convertir = [5, 4, 3, 3, 4];
const consvertirAset = new Set(convertir);
consvertirAset; // Set {5,4,3}

/*Que son los WeakSet
Diferencias con los Set
Los Set son una estructura de datos poco restrictiva, ya que puedes insertar cualquier tipo de elemento. Los WeakSet no permiten insertar datos primitivos:
*/

//Set
const set1 = new Set([1, "A", true]); // Ok
const name = new Set([{ name: "Yeison" }, [2, 30]]); //Ok

//WaekeSet
//const set2 = new WeakSet([1, "A", true]) -> ERROR: Uncaught TypeError: Invalid value used in weak set
const set2 = new WeakSet([{ name: "Yeison" }, [2, 30]]); // 30

/*

Característica	                              Set	   WeakSet
Se pueden insertar elementos repetidos	       ❌	   ❌
Se pueden insertar elementos primitivos	       ✅	   ❌
Si no se usa el elemento, se elimina del set   ❌	   ✅
Se puede convertir a array (es iterable)	   ✅	   ❌
Propiedad .size	                               ✅	   ❌
Método .add()	                               ✅	   ✅
Método .has()	                               ✅	   ✅
Método .delete()	                           ✅	   ✅
Método .clear()	                               ✅	   ❌

*/
