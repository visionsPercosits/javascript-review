const livro = {
  titulo: 'Money',
  autor: 'J.R.R Kelvin',
  paginas: 200
}

for (i in livro) {
  if(livro && livro.propertyIsEnumerable['titulo']) {
    console.log(i);
  } else {
    console.log(`${i}: ${livro[i]}`);
  }
}