// Dado um array com valores repetidos, use o .filter() e .indexOf() para remover duplicatas.

const numeros = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9];

const filteredNumbers = numeros.filter((num, index, array) => {
  return array.indexOf(num) === index;
});

console.log(filteredNumbers);