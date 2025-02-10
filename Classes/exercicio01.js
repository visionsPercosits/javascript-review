class Person {
  constructor() {
    this.age = 21,
    this.name = 'Victor'
  }

  #getBirthYear() {
    return 2025 - person.age;
  }

  showBirthYear() {
    return `Minha data de nascimento é 22/02/${this.#getBirthYear()}`; // Passar o parenteses no final.
  }
}

const person = new Person();
console.log(`Meu nome é ${person.name} e possuo ${person.age} anos.`);
console.log(person.showBirthYear());