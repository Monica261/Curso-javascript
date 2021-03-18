var numero = 25;

numero += 10;// numero = numero + 10;
console.log(numero);

/////////////////////////////////////////////////

//var idade = prompt('idade?'); -> caso eu queira pegar a idade do usuario

var idade = 20;
var diabetes = true;

var podebeber;
podebeber = (idade >= 18 && diabetes) ? 'pode beber' : 'não pode';// ou podebeber = (idade >= 18 && diabetes) ? true : false;

console.log(podebeber);

//EXERCICIOS:

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;

scroll += 500;
console.log(scroll);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;
darCredito = (possuiCarro && possuiCasa)? 'pode dar' : 'não pode';

console.log(darCredito);