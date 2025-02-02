// Dado um array de nomes, utilize o método .map() para transformar todos os nomes em maiúsculas.

const nomes = ["ana", "Carlos", "maria", "José"];

const nomesMaiusculos = nomes.map(nome => {
  const primeiraLetra = nome[0].toUpperCase() + String(nome).slice(1);

  return primeiraLetra;
});

console.log(nomesMaiusculos);