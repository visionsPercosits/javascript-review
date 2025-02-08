// Dado um array de produtos com nome e preço, retorne apenas os produtos que custam menos de R$ 50,00 utilizando o método filter()

const produtos = [
  { nome: "Camiseta", preco: 29.9 },
  { nome: "Tênis", preco: 149.9 },
  { nome: "Boné", preco: 39.9 },
  { nome: "Calça", preco: 99.9 }
];

const produtosFiltrados = produtos.filter(product => {
  return product.preco < 50;
});

console.log(produtosFiltrados);