//posso add um evento com uma função anonima que é o callbak
//posso passar a função anonima junto com o evento:
const img = document.querySelector('img');

img.addEventListener('click', function(){
  console.log('oi')
})

//Event, o primeiro parametro do callback é referente a evento
//que ocorreu
//o event possui diversas propriedades e metodos
function callback(event){
  console.log(event.target.alt);
}
img.addEventListener('click', callback);

//Propriedades do event:
const peachesList = document.querySelector('.peaches-list');
  function executarCallback(event){
  const currentTarget = event.currentTarget;//referente ao item que eu selecionei
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;

  console.log(currentTarget, target, type, path);
  }
peachesList.addEventListener('click', executarCallback);

//event.preventDefault() = previne o padrão do evento
//const linkExterno = document.querySelector('a[href^="http"]');

//function clickNoLink(event) {
//  event.preventDefault();
//  console.log(event.currentTarget);
//  console.log(this.getAttribute('href'));//This faz referencia a diferentes objts dependendo do contexto
//}

//linkExterno.addEventListener('click', clickNoLink);

//Diversos eventos diferentes: https://developer.mozilla.org/en-US/docs/Web/Events
//Tipos:
const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);

//quando é window, é um tipo de evento geral
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);

//Keyboard é um ótimo evento para ser usado, pois captura as teclas
function handleKeyboard(event){
  if(event.key === 'a'){
    document.body.classList.toggle('ativo');
  }else{
    console.log('ops...não é essa tecla');
  }
}
window.addEventListener('keydown', handleKeyboard);

//forEach e eventos
const imgs = document.querySelectorAll('img');

function imgSrc(event){
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img)=>{
  img.addEventListener('click', imgSrc);
})

//EXERCICIOS
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksSite = document.querySelectorAll('a[href^="http"]');

function addLinks(event){
  event.preventDefault();
  linksSite.forEach((link)=>{//add classe em um por vez
    link.classList.remove('ative');
  })
  event.currentTarget.classList.add('ative');
}

linksSite.forEach((link)=>{
  link.addEventListener('click', addLinks);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('*');//o * serve para selecionar tudo do site

function handleElements(event){
  event.currentTarget.remove(); //exer 3
}

todosElementos.forEach((elemento)=>{
  elemento.addEventListener('click', handleElements);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function board(event){
  if(event.key === 't'){
    document.body.classList.toggle('fonte');
  }else{
    console.log('use a tecla t')
  }
}
window.addEventListener('keydown', board);