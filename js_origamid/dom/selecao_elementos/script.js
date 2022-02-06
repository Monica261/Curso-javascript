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

//htmlcollection e nodelist
const gridSectionHTML  = document.getElementsByClassName('grid-section');
const gridSectionNODE = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML[0])
console.log(gridSectionNODE[0])

//transformando em array like
gridSectionNODE.forEach(function(item, index){
  console.log(index, item)
})

//tranforma tudo que é array like em array
const arrayGrid = Array.from(gridSectionHTML);

//após transformar oq era array like em array eu posso usar o forEach
arrayGrid.forEach(function(item){
  console.log(item)
})

//array like
const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function(gridItem, item, index) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(item) // a array completa
});



