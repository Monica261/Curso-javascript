//forEach e arrow function são novas formas de criar funções com o ES6

//forEach é um metodo de array
const title = document.querySelectorAll('h1');
title.forEach(function(index, item, array){
  console.log(index, item, array);
})

//caso não possua o array like, basta transformar:
const imgs = document.querySelectorAll('img');
const imgsArrays = Array.from(imgs);//transformei em array

console.log(imgs);//NodeList
console.log(imgsArrays);//Array

imgsArrays.forEach(function(item){
  console.log(item);
})

//ArrowFunction
//sintaxe curta em relação a function expression
//basta remover a palavra 'function' e add a fat arrow =>

const p = document.querySelectorAll('p');
p.forEach((item)=>{
  console.log(item);
})

//const imgs = document.querySelectorAll('img');

// argumento único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos argumentos precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem argumentos precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

//EXERCICIOS
// Mostre no console cada parágrado do site
const paragrafos1 = document.querySelectorAll('p');
paragrafos1.forEach((item)=>{
  console.log(item);
})

// Mostre o texto dos parágrafos no console
const paragrafos = document.querySelectorAll('p');
paragrafos.forEach((item)=>{
  console.log(item.innerText);
})

// Como corrigir os erros abaixo:
const imges = document.querySelectorAll('img');

imges.forEach((item, index) => {
  console.log(item, index)
})

let a = 0;
imges.forEach(()=>{
 console.log(a++)
});

imges.forEach(() => a++);

