//const Dom = {
//  seletor: 'li',
// element(){
//  return document.querySelector(this.seletor);

// },
// ativar(){
//   const elementoSelecionado = this.element();
//   elementoSelecionado.classList.add('ativar');
//  }
//}

//se eu quiser ativar o ul

//Dom.seletor = 'ul',
//Dom.ativar();

//transformar em função construtora
//function Dom(seletor) {
//  this.element = function(){
//   return document.querySelector(seletor);

// },
// this.ativar = function(){
//   const elementoSelecionado = this.element();
//   elementoSelecionado.classList.add('ativar');
//}
//}

//const li = new Dom('li');

//const Lastli = new Dom ('li:last-child');
//Lastli.ativar();


// Transforme o objeto abaixo em uma Constructor Function
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function () {
    console.log(this.nome + ' andou');
  }
}


// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos
const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor) {
  const elementList = document.querySelectorAll(seletor);
  this.element = elementList;
  this.addClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function (classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }

}

const listaitens = new Dom('li');
listaitens.addClass('ativar');