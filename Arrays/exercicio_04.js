// Arredondando números em um array usando Math.pow() e arrays

const input = [1, 2, 3, 4, 5];

const arrNumbers = input.map((input) => {
  return Math.pow(input, 2);
});

console.log(arrNumbers);
