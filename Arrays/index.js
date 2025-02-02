// Utilizando filter()

const items = [
  {name: 'Bike', price: 100},
  {name: 'TV', price: 200},
  {name: 'Car', price: 100},
  {name: 'Cellphone', price: 200}
]

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});


// Utilizando map()

const marketPrice = [
  {name: 'Melon', price: 20},
  {name: 'Banana', price: 4},
  {name: 'Candy', price: 6},
  {name: 'Apple', price: 2}
]

const itemsName = marketPrice.map((item) => {
  return item.name;
});

// Utilizando find()

const fruitsPrice = [
  {name: 'Melon', price: 20},
  {name: 'Banana', price: 4},
  {name: 'Candy', price: 6},
  {name: 'Apple', price: 2}
]

const foundItem = fruitsPrice.find(item => {
  return item.name === 'Melon';
});

// Utilizando forEach() (Esse método não retorna nada)


items.forEach(i => {
  console.log(`${i.name}: R$${i.price}`);
});

// Utilizando slice()

const fruits = ['Banana', 'Apple', 'Melon', 'Strawberry'];



const newArr = [20, 30, 40, 20, 10, 40, 50];


const totalSum = newArr.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
});

console.log(`O valor total desse array é ${totalSum}`);

