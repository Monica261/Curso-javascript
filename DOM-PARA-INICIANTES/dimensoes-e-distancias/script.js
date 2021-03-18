const selecao = document.querySelector('.animais-lista');
const height = selecao.scrollHeight;
const animaisTop = selecao.offsetTop;
console.log(animaisTop);

/////////////////////////////////////

const raposaH2 = document.querySelector('h2');
const h2left = raposaH2.offsetLeft;
console.log(h2left);

/////////////////////////////////////

const rect = raposaH2.getBoundingClientRect();
console.log(rect.top);

if(rect.top < 0){
    console.log('passou do elemento');
}

////////////////////////////////////

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
);

//Verificar tamanho da tela do usuario
if (window.innerWidth < 600) {
    console.log('tela menor que 600px');
}

////////////////////////////////////////

//Verificar o tamanho da tela do usuario, de forma correta
const small = window.matchMedia('(max-width: 600px)').matches;
if(small){
    console.log('Usuario mobile');
}else{
    console.log('Usuario desktop');
}
console.log(small);


/////////////////////////////////////////

//EXERCICIOS

// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector('img');
const distancia = imagem.offsetTop;
console.log(distancia);

// Retorne a soma da largura de todas as imagens
function SomaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imgs)=>{
    soma = soma + imgs.offsetWidth;
});
console.log(soma);
}

window.onload = function(){
    SomaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link)=>{
    const linkWidht = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidht >= 48 && linkHeight >= 48){
        console.log(link, 'Possui boa acessibilidade');
    }else{
        console.log(link, 'Não Possui acessibilidade');
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browser = window.matchMedia('(max-width: 720px)').matches;
const menu = document.querySelector('.menu');

if(browser < 720){
    console.log(menu.classList.add('menu-mobile'));
}
