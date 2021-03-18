//function tempo(mensagem){
//   document.write(mensagem);
//}


//exibir frase até 20
//const contador = setInterval(parar,1000);

//let i = 0;
//function parar(){
//   console.log(`estou no número: ${i++}`);
//   if (i > 20){
//       clearInterval(contador);
//   }
//}

//pergunta e exibe seu nome
//const nome = prompt('Qual o seu nome?');

//function pessoa(nome){
//document.write(nome);
//}

//setTimeout(pessoa, 1000, nome);

///////////////////////////////////////////////////////////////////////////////////

function teste(texto) {
    console.log(texto);
}

//setTimeout(teste, 3000, 'Estudar');

//Loops e setTimeout
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 2000 * i)//add setTimeout de forma instantanea, cada um com um tempo diferente  
}

//This e window -> setTimeout é um metodo do obj Window
const btn = document.querySelector('button');
btn.addEventListener('click', handleClick);

function handleClick() {
    setTimeout(() => {
        this.classList.toggle('ativo');//this está correto, pois estou utilizando uma arrow function
        btn.innerText = 'clicado';
    }, 1000)
}

//setInterval ativa a função de callback a cada tempo
const contador = setInterval(parar, 2000);
let i = 0;
function parar() {
    //document.write(`Passou ${i++}s<br />`)
    if (i > 5) {
        clearInterval(contador);
    }
}

//Clearinterval -> vc pode parar, pra conseguir usar o clearinterval, vc precisa ter colocado o set dentro de uma variavel qualquer
const stop = setInterval(callback, 1000)

let a = 0;
function callback(){
    //console.log(`oi ${a++}`);
    if(a > 7){
        clearInterval(stop);
    }
}

//EXERCICIOS
// Mude a cor da tela para azul e depois para vermelho a cada 2s.
function mudarCor(){
    //document.body.classList.toggle('active');
}
//setInterval(mudarCor, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', handleIniciar);
pausar.addEventListener('click', handlePausar);
pausar.addEventListener('dblclick', handleResetar);

let b = 0
let timer;

function handleIniciar(){
    timer = setInterval(()=>{
        tempo.innerText = b++;
    }, 100)
    iniciar.setAttribute('disabled', '');
}

function handlePausar(){
    clearInterval(timer);
    iniciar.removeAttribute('disabled');
}

function handleResetar(){
    tempo.innerText = 0;
    b = 0;
}