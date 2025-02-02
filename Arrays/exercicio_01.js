//  Utilize o método .reduce() para somar todos os números do array.

const numeros = [10, 20, 30, 40, 50];

const valorTotal = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);



// Use o método .filter() para retornar apenas os números pares de um array.

const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const valorPares = numerosPares.filter(elem => {
  return elem % 2 == 0;
});

console.log(valorPares);

