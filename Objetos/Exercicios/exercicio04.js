const usuario = {
  nome: 'victor@email',
  senha: '420vicT'
}

if (usuario.hasOwnProperty(['senha'])) {
  console.log(usuario['senha']);
}

