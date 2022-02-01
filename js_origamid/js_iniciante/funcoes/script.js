function areaQuadrado(lado){ //passa os parametros
	return lado * lado;
}
console.log(areaQuadrado(3));

//chamando uma função em uma var
function pi(){
	return 3.14;
}

var total = 5 * pi();
console.log(pi());

//parametros e argumentos
function imc(peso, altura){ //parametros
	const imc = peso / (altura * altura);
	return imc;
}

console.log(`O seu imc é: ${Math.round(imc(72, 1.70))}`); //argumentos

//não precisa exatamente passar argumentos na execução da função
const corFav = prompt('cor favorita? ')

function decisaoCor(corFav){
	if(corFav === 'roxo'){
		return 'gosta de beterraba';
	}else if(corFav === 'azul'){
		return 'gosta do céu';
	}else{
		return 'escolha roxo ou azul';
	}
}
console.log(decisaoCor(corFav));

//argumentos podem ser funções
addEventListener('keypress', function(event){
	console.log(`apertou tecla: ${event.key}`);
})

//valores retornados - o ideal é a função retornar só um tipo de dado
function terceiraIdade(idade){
	if(typeof idade != 'number'){ //typeof verifica o tipo de dado
		return 'informe sua idade'
	}else if(idade >= 60){
		return true;
	}else{
		return false;
	}
}
console.log(terceiraIdade(70));

//escopo - var definidas dentro de um bloco não são vistas fora dele
function paises(visitados){
	var totalPaises = 193;
	return `falta visitar ${totalPaises - visitados} paises`;
}
console.log(paises(20));