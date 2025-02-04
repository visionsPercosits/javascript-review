const pessoa = {
  nome: 'Victor',
  idade: 20,
  cidade: 'Assis'
}

for (i in pessoa) {
  console.log(i + ': ' + pessoa[i]);
}