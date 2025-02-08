// Dado um array de objetos representando itens de um carrinho de compras, calcule o valor total da compra utilizando reduce().

const carrinho = [
  { item: "Notebook", preco: 3000 },
  { item: "Mouse", preco: 150 },
  { item: "Teclado", preco: 350 }
];


const totalCompra = carrinho.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual.preco;
},0);

console.log(totalCompra);