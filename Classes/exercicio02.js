class Calculadora {
  somarValores(num) {
    return num.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual;
    }, 0);
  }
}


const calculadora = new Calculadora();

console.log(calculadora.somarValores([10, 20, 30]));