//Iterable são obj que possuem o metodo (Symbol.iterator)
//Exs iteraveis: Array, String, NodeList
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso é JavaScript';

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => console.log(response));

//é importante saber se é iteravel ou não pois pode usar o for..of
for(const fruta of frutas){
  console.log(fruta);
}
//para frase:
for(const char of frase){
  console.log(char);
}

const buttons = document.querySelectorAll('button');
for(const btn of buttons){
  btn.style.color = 'blue';
}

console.log(...buttons);

//existe uma forma de fazer um loop com um obj não iteravel
//que é o for...in, serve para um obj qualquer

const carro = {
  marca: 'Toyota',
  ano: 2021
}

Object.defineProperties(carro,{
  rodas:{
    value: 4,
    enumerable: true,//puxa apenas quando está 'true'
  }
})

for(const key in carro){
  console.log(carro[key]);
}

//Posso usar o for..in em uma array
for(const f in frutas){
  console.log(frutas[f])
}

//me retornar propriedade e valor:
const btnUnico = document.querySelector('button');
const btnStyles = getComputedStyle(btnUnico);

//for(const style in btnStyles) {
 // console.log(`${style}: ${btnStyles[style]}`);
//}

//EXERCICIOS
// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lista = document.querySelectorAll('li');
for(const li of lista){
  li.classList.add('ativo');
  console.log(li);
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(const windowKey in window){
  console.log(`${windowKey}: ${window[windowKey]}`);
}