const html = '<p>Olá galera</p><p>Monicaaa</p>';
const htmlNovo = html.split('p').join('section');
console.log(htmlNovo);

//estudar mais String

//Number é uma construtora de numeros
//verifica se o valor é true ou false:

console.log(Number.isNaN(NaN));//true
console.log(Number.isInteger(23));//true
console.log(Number.isInteger(50.6));//false

//parseFloat e parseiNT
//parseFloat retorna um numero a partir de uma string

console.log(parseFloat('10.75'));
console.log(parseInt('15.30'));//ele corta tudo que é valor decimal

//toFixed arredonda o número com base no total de casas decimais que vc passar

const preco = 2.97;
console.log(preco.toFixed());//3

const ingresso = 24.50;
console.log(ingresso.toFixed());//25

const carro = 28.362;
console.log(+carro.toFixed() + 30);

//toLocaleString recebe dois parametros que é a linguagem e opções

//consigo transformar a moeda
let comida = 50.28;
comida = comida.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(comida);

//Math é um objeto que possui propriedades e metodos

console.log(Math.PI);

//Math propriedades:

//Abs -> transforma o valor negativo em positivo
console.log(Math.abs(-6));

//Ceil -> arredonda o valor pra uma integral, força o arredondamento pra cima
console.log(Math.ceil(5.2));

//flor -> arredonda o valor pra baixo, força
console.log(Math.floor(4.2));

//round arredonda o numero de forma normal
console.log(Math.round(2.2));

//max retorna o numero maior
console.log(Math.max(10, 50, 9, 8, 3));

//min retorna o menor valor
console.log(Math.min(80, 62, 2, 7));

//random retorna um número aleatorio de 0 a 1
console.log(Math.random()* 100);//pego um numero entre 0 e 100

const aleatorio = Math.floor(Math.random() * (50 - 10 + 1)) + 20;//me retorna numeros de 20 a 40
console.log(aleatorio);

//EXERCICIOS

// Retorne um número aleatório
// entre 1050 e 2000
const numAleatorio = Math.floor(Math.random() * (1050 - 2000 + 1) + 1050);
console.log(numAleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const ArrayNum = numeros.split(', ');
const numeroMax = Math.max(...ArrayNum);
console.log(numeroMax);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco){
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPrecos.forEach((preco)=>{
    soma+= limparPreco(preco);
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

limparPreco(listaPrecos[1]);