// Dado um array de objetos representando alunos, retorne um novo array contendo apenas os nomes dos alunos utilizando map().

const alunos = [
  { nome: "Ana", idade: 22 },
  { nome: "Bruno", idade: 25 },
  { nome: "Carlos", idade: 20 }
];

const nomeAlunos = alunos.map(name => {
  return name.nome;
});

console.log(nomeAlunos);