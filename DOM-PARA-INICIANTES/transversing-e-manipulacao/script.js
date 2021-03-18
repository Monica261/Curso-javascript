//propriedades outerHTML, innerHTML e innerText
const Menu = document.querySelector('.menu');
//console.log(Menu.innerText);//-> mostra só o texto
//console.log(Menu.innerHTML);//-> mostra com as tags
console.log(Menu.outerHTML);//-> pega tudo de fora

const paragrafo = document.querySelector('h1');
paragrafo.innerHTML = '<i>Olá Mundo!</i>';// Coloca dentro do conteudo que ja existe

// Transversing-> navegar pelo DOM

const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement.parentElement);// pega o pai do pai
console.log(lista.nextElementSibling);// pega o proximo elemento
console.log(lista.previousElementSibling);// pega o anterior
console.log(lista.children[0]);// pega a HTMLCollection dos filhos
console.log(lista.children[lista.children.length - 1]);// pra pegar o ultimo elemento da lista

/*posso selecionar com querySelector tambem*/
console.log(lista.querySelector('li:last-child'));// pega o ultimo da lista

//Element VS Node
//element -> é um tipo de Node, eles são as tags HTML
//node -> o Node pode ser qualquer coisa ex: espaço, comentario e etc

console.log(lista.childNodes);// pega os filhos Nodes da lista
console.log(lista.firstChild );// pega o primeiro filho Node da lista


//Manipulando elemento

const Animais = document.querySelector('.animais');
const Contato = document.querySelector('.contato');
const Titulo = contato.querySelector('.titulo');// seleciona o titulo dentro de contato

console.log(Titulo);

//Mover elemento pra cima da lista

//Animais.appendChild(Titulo);// vai colocar o elemento como o ultimo da lista

const mapa = document.querySelector('.mapa');
Contato.insertBefore(Animais, mapa);// seleciono o pai contato, pego o titulo e movo pra la a parte de animais

Contato.removeChild(Titulo);// remove o titulo de contato
//Contato.replaceChild(lista, Titulo);// substitui titulo por lista

//Novos elementos -> Podemos criar novos elementos com o método

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Mônica Torres';
novoH1.classList.add('titulo');// add classe ao novoH1

mapa.appendChild(novoH1);// inserindo o novoH1 depois do mapa
console.log(novoH1);

//Clonar Elementos -> cloneNode()

const Clonemapa = mapa.cloneNode(true);// clonando o mapa
Animais.appendChild(Clonemapa);// exibindo o mapa clonado, depois de animais

const Clonemenu = document.querySelector('.menu');
const clonado = Clonemenu.cloneNode(true);
clonado.classList.add('monica');

Contato.appendChild(clonado);

//EXERCICIOS

// Duplique o menu e adicione ele em copy
const Menu2 = document.querySelector('.menu');
const Copy = document.querySelector('.copy');

const add = Menu2.cloneNode(true);
Copy.appendChild(add);


// Selecione o primeiro DT da dl de Faq
const Faq = document.querySelector('.faq');
const dt = Faq.querySelector('dt');

// Selecione o DD referente ao primeiro DT
//const dt = document.querySelector('dt');
const primeiroDD = dt.nextElementSibling;
console.log(primeiroDD);

// Substitua o conteúdo html de .faq pelo de .animais

const Animaispega = document.querySelector('.animais');

Faq.innerHTML = Animaispega.innerHTML;



