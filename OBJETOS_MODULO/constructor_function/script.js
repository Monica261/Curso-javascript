//objeto
//const carro = {
//  marca: 'ferrari',
//  preco: 1000000,
//}

//console.log(carro);

//const honda = carro;
//honda.marca = 'civic';
//honda.preco = 5000;

//console.log(honda);

//const fiat = carro;
//fiat.marca = 'uno';
//fiat.preco = 2000;

//console.log(fiat);

//Função construtora
function Carro(){//pascal case -> letra maiuscula
  this.marca = 'bmw';
  this.preco = 10500;
}

const chevrolet = new Carro();//chevrolet é um objeto que vem do construtor Carro
chevrolet.marca = 'camaro';
chevrolet.cor = 'preto';
chevrolet.preco = 80600; 

console.log(chevrolet);

function Celular(coratribuida,marcaatribuida){
  this.marca = 'marcaatribuida';
  this.cor = 'coratribuida';
}

const lg = new Celular();
lg.marca = 'lg';
lg.cor = 'azul';

console.log(lg);

const samsung = new Celular ('samsung', 'rose');
console.log(samsung);

function Televisao(marca,precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const Toshiba = new Televisao('Toshiba', 6000);