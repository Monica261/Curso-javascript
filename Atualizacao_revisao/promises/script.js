//Promise é uma função construtora de promessa, pode ser tanto
//resolvida como rejeitada

const promesa = new Promise((resolve, reject) => {
  let condicao = false;
  if (condicao) {
    resolve('Tudo certo!');
  } else {
    reject(Error('Ocorreu um erro'));
  }
});
console.log(promesa);

//promesa idade
//const promesaAge = new Promise((resolve, reject) => {
//let idade = prompt('Maior de 18 anos?');
//if (idade === 'sim') {
//  resolve('maior de idade!');
//} else {
//  reject(Error('menor de idade'));
//}
//});
//console.log(promesaAge);

//O poder da promesa esta no then, quando a promesa for resolvida
//o then ativa:

//pode utilizar um encadeamento de then
const retorno = promesa
  .then((resolucao) => {
    resolucao.profissao = 'desenvolvedora';
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    //catch serve para quando a promise for rejeitada
    console.log(rejeitada);
  })
  .finally(() => {
    console.log('Acabou');
  });
console.log(retorno);

//Promisse.all é um obj que consigo passar dentro uma array
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuario logado');
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados');
  }, 1500);
});

const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((resolucao) => {
  console.log(resolucao);
});
