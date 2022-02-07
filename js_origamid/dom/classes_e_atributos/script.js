const menu = document.querySelector('.menu');

menu.classList.add('ativo'); //add uma classe
menu.classList.remove('ativo'); //remove uma classe
menu.classList.toggle('ativo') //add/remove classe
menu.className //string
menu.classList //retorna a lista de classes
menu.classList.replace('ativo', 'inativo'); //troca a classe que esta como 'ativo' para 'inativo'
menu.classList.add('azul', 'rosa'); //possibilidade de acresentar duas classes de uma vez só
menu.classList.contains('menu') //retorna se contem essa classe, true or false


if(menu.classList.contains('azul')){
    console.log('contem classe');
}else{
    console.log('não contem classe');
}

document.title = 'classes e atributos';



//retorna os atributos da classe
const animais = document.querySelector('.animais');
console.log(animais.attributes[0]);


//get e setAttribute
const imagens = document.querySelector('img')

console.log(imagens.getAttribute('alt'))
console.log(imagens.setAttribute('alt', 'é uma raposa'))
console.log(imagens.hasAttribute('alt'))//verifica se possui o atributo, true or false

console.log(imagens.setAttribute('texto', 'raposa ao ar livre'))
console.log(imagens.removeAttribute('texto'))