class Pessoa {
  constructor() {
    this.nome = nome,
    this.idade = idade
  }

  get blockNegativeNumber() {
    if (this.idade < 1) {
      return 'Sem números negativos!'
    }
  }
}

const pessoa = new Pessoa('Victor', 20);

pessoa.idade = -2;
console.log(pessoa.idade);