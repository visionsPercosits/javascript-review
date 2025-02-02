const person = {
  name: 'Victor',
  lastName: 'Silva',
  age: 20,
  isEmployed: true,
  ['class']: 'Classe A',
  drinkWater: function(){
    console.log(`${this.name} está bebendo água.`)
  },
  eatFood: () => {
    console.log('Victor está comendo batatas fritas.')
  }
}


const newValue = 'age';

const target = person[newValue]; // Equivalente a person.age, pois ele está procurando por uma propriedade acessível
console.log(target);
