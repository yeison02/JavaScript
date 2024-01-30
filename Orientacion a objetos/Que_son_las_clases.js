// Declaracion de una clase (de momento, vacia)
class Animal {}

//Crear (insttanciar) un objeto basada en una clase
const pato = new Animal();

/*

Elemento	               Descripción	
Propiedad	               Variable que existe dentro de una clase. Puede ser pública o privada.	
Propiedad pública	       Propiedad a la que se puede acceder desde fuera de la clase.
Propiedad privada 	       Propiedad a la que no se puede acceder desde fuera de la clase.
Propiedad computada	       Función para acceder a una propiedad con modificaciones (getter/setter).
Método	                   Función que existe dentro de una clase. Puede ser pública o privada.	
Método público	           Método que se puede ejecutar desde dentro y fuera de la clase.
Método privado 	           Método que sólo se puede ejecutar desde dentro de la clase.
Constructor	               Método especial que se ejecuta automáticamente cuando se crea una instancia.
Método estático	           Método que se ejecuta directamente desde la clase, no desde la instancia.
Inicializador estático 	   Bloque de código que se ejecuta al definir la clase, sin necesidad de instancia.
*/

class Animals {
  //Propiedades
  name = "Garfield";
  type = "cat";

  //Metodos
  hablar() {
    return "Odio los lunes";
  }
}

class Cars {
  name; // Propiedad (variable de clase sin valor definido)

  constructor(name) {
    this.name = name; // Hacemos referencia a la propiedad name del objeto instanciado
  }
}

function hello() {
  return this;
}

hello(); // Window
const objetc = { hello }; // Mmetemos la funcion dentro de objeto
console.log(objetc.hello() === objetc); // true

//Clases con ficheros externos

//Animal.js
export class Animal {
  //Contenido de la clase
}

//index.js
import { Animal } from "./Animal.js";

const perro = new Animal();
