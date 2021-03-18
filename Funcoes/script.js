function areaquadrado(lado) {
    return lado * lado;
}

//console.log(areaquadrado(5));
/////////////////////////////////////////////////////////////////////

function pi() {
    return 3.14;
}

var total = 5 * pi();

//console.log(pi());
///////////////////////////////////////////////////////////////////////

function imc(massa, altura){
    var imc = massa / (altura * altura);
    return imc;
}

//console.log(imc(67, 1.7));
///////////////////////////////////////////////////////////////////////


function corfavorita(cor) {
    if (cor === 'azul') {
        return 'Minha cor favorita!';
    }else if (cor === 'rosa'){
        return 'Gosto dessa cor';
    }else{
        return 'Não gosto dessa';
    }
}

///////////////////////////////////////////////////////////////////////

//addEventListener('click', function () {
    //document.write('Olá Mundo!');
//})

function mostrar() {
    //document.write('Olá mundo!');
}

addEventListener('click', mostrar);

/////////////////////////////////////////////////////////////////////////

function imc2(massa, altura) {
    const imc = massa / (altura ** 2);
    //console.log(imc);
}

imc2(50, 1.60);// retorna o imc
//console.log(imc2(50, 1.55));// retorna o imc e undefined

/////////////////////////////////////////////////////////////////////////


function terceiraidade(idade) {
    //console.log(typeof idade);
    if (typeof idade !== 'number') {
        return 'por favor preencha um número';
    }else if (idade >= 60) {
        return true;
    }else{
        return false;
    }
}

//console.log(terceiraidade('oi'));

///////////////////////////////////////////////////////////////////////
//var cidades = 5570;

//function faltavisitar(visitados) {
    //return `Faltam visitar ${cidades - visitados} cidades no Brasil`;
//}

//console.log(cidades);

///////////////////////////////////////////////////////////////////////


function dados() {
    var idade = 20;
    //var nome = 'Mônica';

function outrosdados() {
    var profissao = 'estudante';
    var endereco = 'sjc';
    return `${idade}, ${nome}, ${endereco}, ${profissao}`;
    }
    return outrosdados();
}

//console.log(dados());

/////////////////////////////////////////////////////////////////////////


//EXECICIOS:

// Crie uma função para verificar se um valor é Truthy

function valor(preco) {
    if (preco === 60) {
        return true;
    }else{
        return false;
    }
}

console.log(valor (60));// R: Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function matematica(lado) {
    return lado * 4;
}


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome



function nomecompleto(nome, sobrenome) {
    return nome + sobrenome;
}

console.log(nomecompleto('Mônica ', 'Torres'));// R: Mônica Torres

// Crie uma função que verifica se um número é par

function isEven(numero) {
    var modulo = numero % 2;
    if(modulo === 0){
        return true;
    }else{
        return false;
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function estado(nome2) {
    return typeof nome2;
}

console.log(estado('São Paulo'));// R: String

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
    console.log('Mônica Nathalia Sousa Torres');
})



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
///////////////////////////////////////////////////

