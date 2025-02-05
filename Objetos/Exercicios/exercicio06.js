const biblioteca = [
  {titulo: 'Hábitos Atômicos', autor: 'João'},
  {titulo: 'Mindset', autor: 'Maria'},
  {titulo: '48 leis do poder', autor: 'Jéssica'},
]


biblioteca.listarLivros = function() {
  this.forEach(livro => {
    console.log(livro.titulo);
  });
};

biblioteca.listarLivros();