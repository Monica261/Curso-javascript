const img = document.querySelector('img');

function callback(event){
    console.log(event);
}

//img.addEventListener('click', callback);
///////////////////////////////////////////////////

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
    //console.log(event.currentTarget);//ele me mostra cada linha
    //console.log(event.target);//mostra exatamente onde clicou(nas imgs)
    //console.log(event.type);//mostra o tipo do evento
    console.log(event.path);
}

animaisLista.addEventListener('click', callbackLista);

/////////////////////////////////////////////////////

//event.preventDefault() -> previne o comportamento padrão do evento no browser

const linkexterno = document.querySelector('a[href^="http"]');
//function handleLink(event){
//    event.preventDefault();
//    console.log(event);
//}

//linkexterno.addEventListener('click', handleLink);
/////////////////////////////////////////////////////

//this -> faz referencia ao elemento adicionado

function handleLink(event){
    event.preventDefault();
    console.log(this.getAttribute('href'));
    console.log(event.currentTarget);//this é a mesma coisa que o currentTarget
}

linkexterno.addEventListener('click', handleLink);
/////////////////////////////////////////////////////

//Existem diferentes eventos que podem ser adicionados tanto ao document
//quanto ao window

const h1 = document.querySelector('h1');
function handleclick(event){
    console.log(event.type, event);
}

//h1.addEventListener('click', handleclick);
//h1.addEventListener('mouseenter', handleclick);
//h1.addEventListener('mousemove', handleclick);

//Evento com objeto window:
//window.addEventListener('scroll', handleclick);
//window.addEventListener('resize', handleclick);
//window.addEventListener('keydown', handleclick);

/////////////////////////////////////////////////////
//keyboard -> 

function handleKeyBoard(event){
    if(event.key === 'm'){
        document.body.classList.toggle('monica');
    }else if(event.key === 'a'){
        document.body.classList.toggle('nathalia') && alert('Efeito blur acionado');
    }
}

window.addEventListener('keydown', handleKeyBoard);
/////////////////////////////////////////////////////
//forEach -> seleciona todas as imgs uma de cada vez

const imgs = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img)=>{
    img.addEventListener('click', handleImg);
});


// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function handleClicado(event){
    event.preventDefault();
    links.forEach((a)=>{
        a.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}

links.forEach((a)=>{
    a.addEventListener('click', handleClicado)
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const bodySelecionado = document.querySelectorAll('body *');//-> * seleciona todos os elementos dentro do body

function handleBody(event){
    console.log(event.currentTarget);
}

bodySelecionado.forEach((elemento)=>{
    elemento.addEventListener('click', handleBody);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

//const bodySelecionado = document.querySelectorAll('body *');//-> * seleciona todos os elementos dentro do body

//function handleBody(event){
 //   event.currentTarget.remove();
//}

//bodySelecionado.forEach((elemento)=>{
 //   elemento.addEventListener('click', handleBody);
//})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function clicado(event) {
    if (event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}
window.addEventListener('keydown', clicado);