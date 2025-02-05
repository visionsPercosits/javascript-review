const animal = {
  som: null,
}

const cachorro = Object.create(animal);
cachorro['som'] = 'latido';

console.log(cachorro);