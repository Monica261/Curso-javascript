// Crie uma função para verificar se um valor é Truthy
function dadoVerifica(dado){
	return !!dado;
}
console.log(dadoVerifica('sf'));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(lados){
	return lados * 4;
}
console.log(perimetro(5));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome1, sobrenome){
	return 'Mônica ' + 'Torres';
}
console.log(nomeCompleto());

// Crie uma função que verifica se um número é par

function verificaParImpar(){
	const numero = 10;
	if(numero%2 == 0){
		return 'par';
	}else if(numero%2 == 1){
		return 'impar';
	}else{
		console.log('insira um numero');
	}
}

console.log(verificaParImpar());


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
const dado = 'adv';
function tipoDado(){
	return typeof dado;
}
console.log(tipoDado());

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
	console.log(nomeCompleto());
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

