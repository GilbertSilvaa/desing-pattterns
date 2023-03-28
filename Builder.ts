
/* deve ser ultilizados em classes com muitos parametros no construtor 
e muita instâncias de outras classes. */

interface Builder { // contrato
  reset(): void;
  setName(data: string): this;
  setAge(data: number): this;
}

class Person {
  public name: string;
  public age: number;
}

class PersonBuilder implements Builder {
  private person = new Person();

  reset() {
    this.person = new Person();
  }
  
  setName(name: string) {
    this.person.name = name;
    return this;
  }

  setAge(age: number) {
    this.person.age = age;
    return this;
  }

  getResult() {
    return this.person;
  }
}

const personBuilder = new PersonBuilder();
const personOne = personBuilder.setName('Sett').setAge(19).getResult();
