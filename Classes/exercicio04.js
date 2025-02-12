class ContaBancaria {
  constructor(saldo, titular) {
    this._saldo = saldo,
    this.titular = titular
  }

  depositar(value) {
    this._saldo += value;
  }

  sacar(valor) {
    if (valor > this._saldo) {
      console.log('Saldo insuficiente.');
    }

    this._saldo = valor;
  } 

  get valor() {
    return this._saldo;
  }
}


const conta = new ContaBancaria(500, 'Victor');


conta.depositar(100);
console.log(conta);

