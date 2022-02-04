const ID = document.getElementById('faq') //seleciona os elementos pelo ID
const tag = document.getElementsByTagName('img') //seleciona pela tag
const classe = document.getElementsByClassName('.titulo') //seleciona pela classe
const geral = document.querySelector('img') //seletor geral
const todos = document.querySelectorAll('p') //seleciona todos - seletor geral

//selecionar elementos especifico
const grid = document.querySelector('.grid-section')
console.log(grid.baseURI);


//selecionar todas as urls internas
const links= document.querySelectorAll('[href^="#"]')


//array like
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, item, index) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(item) // a array completa
});



