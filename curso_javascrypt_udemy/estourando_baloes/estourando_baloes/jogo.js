var timerId = null; //variavel que armazena a chamada da função timeout


function iniciaJogo(){
	
	var url = window.location.search;

	var nivel_jogo = url.replace('?', '');

	alert('nivel do jogo: ' + nivel_jogo);

	var tempo_segundos = 0;

	if (nivel_jogo == 1 ) {//1 fácil -> 120segundos
		tempo_segundos = 120;
	}

	if (nivel_jogo == 2) {//2 normal -> 60segundos
		tempo_segundos = 60;
	}

	if (nivel_jogo == 3) {//3 dificl -> 30segundos
		tempo_segundos = 30;
	}

	//inserindo segundo no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidade de balões
	var qtde_baloes = 80;

	cria_baloes(qtde_baloes);

	//imprimir quantidade de balões inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;

	contagem_tempo(tempo_segundos + 1)
}

function contagem_tempo(segundos){

	segundos = segundos - 1;

	if (segundos == -1) {
		clearTimeout(timerId);//para a execução da função do setTimeout
		game_over();
		return false;//ou return alert('Acabou');
	}

	document.getElementById('cronometro').innerHTML = segundos;

	timerId = setTimeout("contagem_tempo("+segundos+")", 1000);

}

function game_over(){
	alert('Fim de jogo, você não estourou todos os balões!');
}

function cria_baloes(qtde_baloes){
	for(var i = 1; i <= qtde_baloes; i++){
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';
		balao.id = 'b'+i;
		balao.onclick = function(){estourar(this);};

		document.getElementById('cenario').appendChild(balao);
	}
}

function estourar(e){

	var id_balao = e.id;

	document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png'

	pontuacao (-1);
}

function pontuacao(acao){

	var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
	var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

	baloes_inteiros = parseInt(baloes_inteiros);
	baloes_estourados = parseInt(baloes_estourados);

	baloes_inteiros = baloes_inteiros + acao;
	baloes_estourados = baloes_estourados - acao;

	document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
	document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

	situacao_jogo(baloes_inteiros);
	placar(baloes_estourados);
}

function situacao_jogo(baloes_inteiros){
	if (baloes_inteiros == 0) {
		alert('Ufa, até que enfim você venceu');
		parar_jogo();
	}
}

function placar(baloes_estourados){
	if (baloes_estourados == baloes_estourados){
		document.getElementById('placar').innerHTML = baloes_estourados;
	}	
}


function parar_jogo(){
	clearTimeout(timerId);
}