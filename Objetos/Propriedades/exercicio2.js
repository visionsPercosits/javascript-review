// Escreva um código que verifique se a propriedade "year" existe no objeto car. Se ela não existir, exiba "Propriedade não encontrada" no console.

const car = {
  brand: "Toyota",
  model: "Corolla"
};

if (car && car['year']) {
  console.log(car['year']);
} else {
  console.log('Propriedade não encontrada');
}