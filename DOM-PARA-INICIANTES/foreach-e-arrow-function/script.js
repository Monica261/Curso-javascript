//const imgs = document.querySelectorAll('img');
//console.log(imgs);

//let i = 0;
//imgs.forEach(function(item, index, array){
 //   console.log(item, index, array);
//});

////////////////////////////////////////

const elemento = document.getElementsByClassName('animais');
//const pega = Array.from(elemento);

//pega.forEach(function (item) {
 //   console.log(item);
//});

///////////////////////////////////////

//const imgs = document.querySelectorAll('img');

//imgs.forEach((item, index) => {
//    console.log(item, index)
//});

///////////////////////////////////////
//const select = document.querySelectorAll('p');
//let i = 0;

//select.forEach((item)=>{
//    console.log(i++)
//});

/////////////////////////////////////////

//const h1s = document.querySelectorAll('h1');
//let i = 0;

//h1s.forEach((item)=>{
//    console.log(i++)
//});

/////////////////////////////////////////

//EXERCICIOS:

// Mostre no console cada parágrado do site
const paragrafosCada = document.querySelectorAll('p');

paragrafosCada.forEach((item)=>{
   console.log(item);
});

// Mostre o texto dos parágrafos no console
const paragrafosSite = document.querySelectorAll('p');

paragrafosSite.forEach((item)=>{
   console.log(item.innerText);
});


// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
    console.log(i++);
});

imgs.forEach(() => i++);

