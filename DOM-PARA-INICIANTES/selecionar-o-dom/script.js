const animais = document.getElementById('animais');
console.log(animais.innerText);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

//querySelector retorna o primeiro elemento
const selector = document.querySelector('#contato');
console.log(selector.innerText);

//Retornar link interno
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno.href);

//querySelectorAll retorna todos os seletores
const selecionaTodos = document.querySelectorAll('.animais img');
console.log(selecionaTodos[2]);

//NodeList possui mais metodos
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

//console.log(gridSectionHTML[0]);
//console.log(gridSectionNode[1]);

//querySelector retorna o primeiro elemento
const primeiraUL = document.querySelector('ul');

//primeiraUL.classList.add('grid-section');//add uma classe

//forEach faz um loop
gridSectionNode.forEach(function (item, index){
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

//EXECICIOS

// Retorne no console todas as imagens do site

const retornaImgs = document.querySelectorAll('img');
console.log(retornaImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const ApenasImgs = document.querySelectorAll('img[src^="img/imagem"]');
console.log(ApenasImgs);

// Selecione todos os links internos (onde o href começa com #)

const Todoslinks = document.querySelectorAll('[href^="#"]');
console.log(Todoslinks);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

//outra forma de fazer:
const animaish2 = document.querySelector('.animais-descricao');
const animaisverifica = animais.querySelector('h2');
console.log(animaisverifica);

// Selecione o último p do site
const Ultimop = document.querySelectorAll('p');
console.log(Ultimop[--Ultimop.length]);






