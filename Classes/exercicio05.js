class Produto {
  constructor(nome, preco) {
    this._nome = nome,
    this._preco = preco
  }

  set preco(value) {
    if(value < 0) {
      value = 0;
      console.log('Valor negativo/inválido. Tente novamente.');
    }

    this._preco = value;
  }

  get preco() {
    return `${this._preco}R$`;
  }
}

const produto = new Produto('iPhone', 1500);

produto.preco = -100;
produto.preco = 500;
console.log(produto.preco);

