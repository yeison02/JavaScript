//Extender una clase

//Clase padre
class Forma {
  constructor() {
    console.log("Soy una forma geometrica");
  }
}

//Clase hija
class Cuadrado extends Forma {
  constructor() {
    super();
    console.log("Soy un cuadrado.");
  }
}

const c1 = new Cuadrado();
//Soy una forma geometrica
//Soy un cuadrado

//El metodo super()

class Figura {
  type = "geometrica";
  color = "naranja";

  constructor() {
    console.log("Constructor padre finalizado");
  }
  show() {
    console.log(`Soy una forma ${this.type} de color ${this.color}`);
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangulo extends Figura {
  type = "Triangular";
  constructor() {
    super();
    console.log("Constructor hijo finalizado");
  }
}

const c2 = new Triangulo();
console.log(c2.show()); // Soy una forma triangular de color naranja

const c3 = new Triangulo();
c3.setColor("amarillo");
console.log(c3.show()); // Soy una forma triangular de color amarillo

//Acceder a metodos del padre

class Padre {
  soloPadre() {
    console.log("Tarea en el padre...");
  }
  padreHijo() {
    console.log("Tarea en el padre...");
  }
  sobreHijo() {
    console.log("Tarea en el padre...");
  }
}

class Hijo extends Padre {
  padreHijo() {
    super.padreHijo();
    console.log("Tarea en el hijo...");
  }
  soloHijo() {
    "Tarea en el hijo...";
  }
  sobreHijo() {
    "Tarea en el hijo...";
  }
}
