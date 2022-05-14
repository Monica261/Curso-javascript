//width e height
const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight)//maximo de altura que tem com o scroll
console.log(`Altura total: ${listaAnimais.scrollHeight}`)//pega altura como um todo
console.log(listaAnimais.offsetHeight)//maximo de altura que tem com o scroll

//distancia entre o topo do elemento e o topo da pagina
const section = document.querySelector('.menu');

console.log(section.offsetTop)

//distancia entre o canto esquerdo da pagina e o canto esquerdo do elemento
console.log(section.offsetLeft);

//getBoundingClientRect() - retorna todas as propriedades de distancia e dimensao
const rect = section.getBoundingClientRect();
console.log(rect)

console.log(rect.top) //distancia do elemento selecionado

//window - para saber a respeito das dimensões da tela do usuario
console.log(window.innerHeight) //height da janela
console.log(window.innerWidth) //width da janela
console.log(window.outerWidth)

console.log(
    window.pageXOffset, //distancia total do scroll vertical
    window.pageYOffset //distancia total do scroll horizontal
)

if(window.innerHeight > 600){
    console.log('tela maior');
}else{
    console.log('tela menor');
}

//match media - utiliza um media-querie como no css para verificar a largura do browser
const tela = window.matchMedia('(max-width: 600px)');

if(tela.matches){
    console.log('tela menor que 600px')
}else{
    console.log('tela maior que 600px')
}