class Person {
  constructor(name, age) {
    this.name = name,
    this._age = age
  }

  set age(value) {
    if(value < 12) {
      console.log('Usuário é menor de idade [Acesso bloqueado]');
      return;
    } 

    this._age = value;
  }

  get age() {
    return this._age;
  }
}


const person = new Person('Victor', 12);
person.age = 10;

console.log(person);

