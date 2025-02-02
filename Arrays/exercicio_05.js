// Crie uma função chamada somaArray que receba um array de números como parâmetro e retorne a soma de todos os elementos.

const somaArray = arr => {
  return arr.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }, 0);
};

const arr = [10, 20, 30, 40, 50];

console.log(somaArray(arr));