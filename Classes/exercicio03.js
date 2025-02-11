class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this._idade = idade;  
  }                      
  /*
      Deixando a propriedade privada, (Caso eu queira que o usuário digite o valor dessa propriedade e passe pelo getter
      É necessário deixar ela privada utilizando _ assim ela irá passar pela verificação do setter e getter primeiro.
  */


  get idade() {
    return this._idade;
  }

  set idade(value) {
    if (value < 0) {
      console.log('Idade inválida.');
    }    
  }
}

const pessoa = new Pessoa('Victor', 25);

pessoa.idade = -2;

console.log(pessoa.idade);