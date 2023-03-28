
interface Prototype {
  clone(): Prototype;
}

class Persona implements Prototype {
  constructor(public name: string, public age: number) {}

  clone() {
    return Object.create(this);
  }
}

const person1 = new Persona('Sett', 19);
const person2 = person1.clone();