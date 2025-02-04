const car = {
  marca: 'BMW',
  modelo: 320
}

car['ano'] = 2000;

console.log(car);

delete car['modelo'];

console.log(car);