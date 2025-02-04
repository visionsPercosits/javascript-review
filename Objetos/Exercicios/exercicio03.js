const calculadora = {
  num1: 5,
  num2: 10,
  soma: function() {
    return this.num1 + this.num2
  }
}

console.log(calculadora.soma());


// Outro objeto com uma função/método

const multiplicacaoCalc = {
  num1: 20,
  num2: 10,
  multiplicacao: function() {
    return this.num1 * this.num2;
  }
}

console.log(multiplicacaoCalc.multiplicacao());