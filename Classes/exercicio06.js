class Carro {
  constructor(marca, modelo) {
    this._marca = marca,
    this._modelo = modelo,
    this._velocidade = 0
  }

  acelerar(velocidade) {
    let velocidadeAtual = this._velocidade += velocidade;
    console.log(`Velocidade aumentada para ${velocidadeAtual}`);
  }

  frear(velocidade) {
    let velocidadeAtual = this._velocidade -= velocidade;
    console.log(`Velocidade reduzida para ${velocidadeAtual}`);
  }


  get velocidade() {
    if(this._velocidade > 200) {
      this._velocidade = 200;
    }
    
    return `${this._velocidade}km/h`;
  }
}

const c = new Carro('Ford', 'Mustang');


c.acelerar(200);
c.acelerar(200);
console.log(c.velocidade);