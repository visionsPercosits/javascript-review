let book = Object.create(Object.prototype);

book = {
  title: 'Money',
  ['sub-title']: 'How to get money'
}


if (book && book['sub-title']) {
  delete book['sub-title'];
}

console.log(book);

