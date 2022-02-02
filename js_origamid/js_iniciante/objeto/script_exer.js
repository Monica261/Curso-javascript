// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const pessoa = {
    nome: 'Mônica',
    sobrenome: 'Torres',
    idade: 22,
    formada: true
}
//console.log(pessoa.nome, pessoa.sobrenome);

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`;
}
console.log(pessoa.nomeCompleto());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco = 3000;
console.log(carro.preco)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  const cachorro = {
      cor: 'preto',
      idade: 10,
      raca: 'labrador',
      homem: function(){
          return 'auau';
      }
  }

console.log(cachorro.homem());