const valor = prompt('Qual a temperatura em Fahrenheit?');

function conversor(valor){
    return (valor - 32) / 1.8;
}

document.write(conversor(valor));
////////////////////////////////////////
function pi(){
    return 3.14;
}

console.log(pi());

////////////////////////////////////////
const Seupeso = prompt('Seu peso?');
const Suaaltura = prompt('Sua altura?')

function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.60);

////////////////////////////////////////
//const cor = prompt('qual minha cor favorita?');
function corFavorita(cor){
    if(cor === 'rosa'){
        return 'não é minha favorita';
    }else if (cor === 'azul'){
        return 'FAVORITA!';
    }else{
        return 'vc não escolheu nenhuma das que eu gosto :('
    }
}
corFavorita('rosa');
///////////////////////////////////////////
function Callback(){
    console.log('Olá Mundo!');
}

window.addEventListener('mousemove', Callback)
/////////////////////////////////////////
const idade = prompt('idade?');
function Terceiraidade(idade){
    console.log(typeof idade);
    if(typeof idade !== 'number'){
        return 'informe a sua idade';
    }else if (idade >= 60){
        return true;
    }else{
        return false;
    }
}

Terceiraidade(60);

/////////////////////////////////////
function faltaVisitar(paisesVisitados){
    const totalPaises = 193;
    const Visitados = 20;
    return `Falta visitar ${totalPaises - Visitados}`;
}
faltaVisitar();
////////////////////////////////////

function dados(){
    var nome1 = 'Mônica';
    var idade = 20;
    function Outrosdados(){
        var faculdade = 'Fatec';
        var comidaFavorita = 'Lanche';
        return `Meus dados: ${nome1} ${idade} ${faculdade} ${comidaFavorita}`;
    }
    return Outrosdados();
}
dados();

//////////////////////////////////
//Exericios

// Crie uma função para verificar se um valor é Truthy

function dado(amendoim){
    return !!amendoim;
}

document.write(dado('eai'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro (lado){
    return lado * 4;
}

document.write(perimetro(4));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
const nome = 'Mônica';
const sobrenome = 'Torres';

function nomes(nome, sobrenome){
    return nome + sobrenome;
}
document.write(nomes(`${nome} ${sobrenome}`));

// Crie uma função que verifica se um número é par
function ParouImpar(n){
    if(n % 2 == 0){
        return 'par';
    }else{
        return 'impar';
    }
}
console.log(ParouImpar(23));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function comida(adoro){
    console.log(typeof adoro)
    if(adoro == 'lanche'){
        return 'favorita amo!';
    }else{
        return 'Não gosto!'
    }   
}
console.log(comida('lanche'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

function Callbackk(){
    console.log('Mônica Nathalia Sousa Torres')
}
window.addEventListener('scroll', Callbackk)

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  console.log(precisoVisitar(20));
  console.log(jaVisitei(20));
////////////////////////////////////

function Inteligente(){
    const smart = document.createElement('div');

    smart.classList.add('smart');
    smart.style.left = Math.random() * 100 + 'vw';
    smart.style.animationDuration = Math.random() * 6 + 's';

    smart.innerText = '😎';

    document.body.appendChild(smart);
    setTimeout(()=>{smart.remove();},5000);
}
setInterval(Inteligente, 300)