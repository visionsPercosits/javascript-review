const pessoa = {
  nome: 'Victor',
  sobrenome: 'Augusto',

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },

  set nomeCompleto(value) {
    const parts = value.split(' ');
    this.nome = parts[0];
    this.sobrenome = parts[1];
  }
}


console.log(pessoa.nomeCompleto);
console.log(parts);