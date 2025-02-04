let book = Object.create(Object.prototype);

book = {
  title: 'Money',
  ['sub-title']: 'How to get money'
}


if (book && book['sub-title']) {
  delete book['sub-title'];
}

console.log(book);

// Verificando propriedades (Métodos nativos)

console.log("toString" in book);
console.log(['title'] in book);

console.log(book.hasOwnProperty(['title']));

console.log(book.propertyIsEnumerable(['title']));


// Enumerando propriedades

for (p in book) {
  if(!book.propertyIsEnumerable(p)) {
    continue;
  }
  console.log(p);
}