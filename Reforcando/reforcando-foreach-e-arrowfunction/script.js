//For each como é:

//const paragrafos = document.querySelectorAll('p');
//paragrafos.forEach(function(item){
//    console.log(item.innerText);
//})

////////////////////////////////////////
//Arrow Function como é:

const imgs1 = document.querySelectorAll('img');


imgs1.forEach((item, index)=>{
    console.log(item, index)
});

/////////////////////////////////////////
//Como transformar em array:
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item)=>{
    console.log(item)
});


// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach(function(item){
    console.log(item);
})
// Mostre o texto dos parágrafos no console
//const paragrafos = document.querySelectorAll('p');

//paragrafos.forEach(function(item){
//    console.log(item.innerText);
//})

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++)
});

imgs.forEach(() => i++);



