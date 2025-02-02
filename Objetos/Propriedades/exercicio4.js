// Use o operador delete para remover a propriedade author do objeto book. Depois, tente acessá-la no console para verificar se realmente foi removida.

let book = {
  title: "Clean Code",
  author: "Robert C. Martin"
};


if (book && book['author']) {
  delete book['author'];
}

console.log(book);