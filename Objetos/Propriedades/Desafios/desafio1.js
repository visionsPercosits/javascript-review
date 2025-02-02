/**
 * Crie um código que remova a propriedade "price" sem alterar diretamente o objeto. 
 * Use delete com colchetes para tornar o código dinâmico!
 */

const product = { name: "Laptop", price: 3000 };
const property = "price";

if (product) {
  delete product[property];
}

console.log(product);