//EXERCICIOS

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCEP = document.querySelector('.resultadoCEP');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
    event.preventDefault();
    const cep = inputCep.value;
    buscaCEP(cep);
}

function buscaCEP(CEP) {
    const api = fetch(`https://viacep.com.br/ws/${CEP}/json/`);
    api.then(r => r.text())
        .then(body => {
            resultadoCEP.innerText = body;
        })
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const bitcoin = document.querySelector('.bitcoin');

function fetchBTC(){
    const btc = fetch('https://blockchain.info/ticker');
    btc.then(response => response.json())
    .then(btc =>{
        bitcoin.innerText = ('R$ ' + btc.BRL.buy).replace('.', ',');
    })
}

//setInterval(fetchBTC, 500);//depois de X nºs de requisições a API pode te bloquear

fetchBTC();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const paragrafo = document.querySelector('.piada');
const btnproxima = document.querySelector('.proxima');
const imgPiada = document.querySelector('.img-piada');

btnproxima.addEventListener('click', piadaNext);

function piadaNext(value) {
    const piada = fetch('https://api.chucknorris.io/jokes/random');
    piada.then(r => r.json())
        .then(piada => {
            paragrafo.innerText = piada.value;
        })

}
piadaNext();

//Consumindo API do Kenye West para gerar as melhores frases do maior 
//contemporaneo da atualidade https://api.kanye.rest/
const frase = document.querySelector('.frase');
const proximaFrase = document.querySelector('.proximaFrase');

proximaFrase.addEventListener('click', filosofou);

function filosofou(quote){
    const kenye = fetch('https://api.kanye.rest/');
    kenye.then(f => f.json())
    .then(filosofia=>{
        frase.innerText = filosofia.quote;
    })
}
filosofou();

//reforçando Blob
const imagem = fetch('./imagem.jpg');
imagem.then(r => r.blob())
    .then(body => {
        const blobURL = URL.createObjectURL(body);//cria uma url com a imagem
        const img = document.querySelector('img');//seleciono a img no meu index.html
        img.src = blobURL;
        console.log(blobURL);
    })

//reforçando Clone
const link = fetch('https://viacep.com.br/ws/12220110/json/');
link.then(r => {
    const r2 = r.clone()
    r.text().then((text) => {
        console.log(text);
    });
    r2.json().then((json) => {
        console.log(json);
    });

})
    .then(body => {

    })