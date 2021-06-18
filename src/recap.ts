const myName = 'nicolas';
const myage = 12;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(4, 5);

class Person {
  constructor(public edad: number, public nombre: string) {
    // this.edad = edad;
    // this.nombre = nombre;
  }

  public getsumary(): string {
    return `my name is ${this.nombre}`;
  }
}

const giovany = new Person(25, 'giovany');
giovany.getsumary();
