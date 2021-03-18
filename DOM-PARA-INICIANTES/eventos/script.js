const imagem = document.querySelector('img');

function callback(){
   console.log('clicou!');
}

imagem.addEventListener('click', callback);

/////////////////////////////////////////////////

function callback(event){
   console.log(event);
}

imagem.addEventListener('click', callback);

/////////////////////////////////////////////////

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event){
   console.log(event.currentTarget);
   console.log(event.target);//-> é exatamente onde vc clicou em cima
   console.log(event.type);
   console.log(event.path);
}

animaisLista.addEventListener('click', callbackLista)
console.log(animaisLista);

////////////////////////////////////////////////
//preventDefault -> preve o padrão do elemento
const Linkexterno = document.querySelector('a[href^="https"]');

function linkfora(){
   event.preventDefault();
   console.log(this);//-> this faz referencia ao addeventlistener
}

Linkexterno.addEventListener('click', linkfora);

////////////////////////////////////////////////

const h1 = document.querySelector('h1');
function handleEvent(event){
   console.log(event.type, event);
}

//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

////////////////////////////////////////////////
//Evento com Window
window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
//clicar no teclado
window.addEventListener('keydown', handleEvent); 

////////////////////////////////////////////////
//Verificar qual tecla foi clicada e add evento ao body

function handlekey(event){
   if(event.key === 'm'){
      document.body.classList.toggle('Monica');
   }else if(event.key === 'p'){
      document.body.classList.toggle('pink');
   }
}

window.addEventListener('keydown', handlekey);

///////////////////////////////////////////////
//Foreach em eventos 

const imgs = document.querySelectorAll('img');

function handleImg(event){
   console.log(event.target.getAttribute('src'));//->pego o atributo src da img
}

imgs.forEach((img)=>{
   img.addEventListener('click', handleImg);
})

/////////////////////////////////////////////
//EXERCICIOS

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