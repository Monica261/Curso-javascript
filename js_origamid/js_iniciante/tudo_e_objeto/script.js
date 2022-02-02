//tudo é objt e possui metodos e propriedades
const nome = 'Mônica';

console.log(nome.replace('ca', 'que'))
console.log(nome.length)
console.log(nome.charAt(1))
console.log(nome.toUpperCase())


///
const btn = document.querySelector('.btn');
btn.addEventListener('click', eventBtn);

function eventBtn(btn){
    document.body.classList.toggle('ativo');
    
}

eventBtn();


// nomeie 3 propriedades ou métodos de strings
var fruta = 'manga';
console.log(fruta.indexOf('an'))
console.log(fruta.slice(2))
console.log(fruta.toUpperCase())

// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

//https://clipboardjs.com/