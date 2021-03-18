const perimetro = new Function('lado', 'return lado * 4');

//Propriedades
//Function Lenght retorna o total de argumentos da função.
function somar(n1, n2){
    return n1 + n2;
}
console.log(somar.length);

//Function.name retorna uma string com o nome da função.
console.log(somar.name.toUpperCase());

//function.call(this, arg1, arg2, ...) executa a função,
//sendo possível passarmos uma nova referência ao this da mesma
function darOI(nome, idade){
    console.log('Oi para você!' + nome + idade)
}
darOI.call({}, 'Mônica', 21);

//window.marca = 'Ferrari';
//window.ano = 2020;

function Descricaocarro(velocidade){
    console.log(this)
    console.log(this.marca + '' + this.ano + velocidade);
}
Descricaocarro.call({marca: 'Mercedes', ano: 2020}, 1000);//os primeiros são objts novos e o ultimo o parametro da função

//This faz referência ao objeto criado durante a construção do objeto (Constructor Function).
//Podemos trocar a referência do método ao this, utilizando o call().
const carros = ['Ford', 'Toyota', 'Honda'];

carros.forEach.call(carros,(item)=>{
    console.log(item);
})

//EXEMPLO REAL
//O objeto atribuído a lista será o substituído pelo primeiro argumento de call()
function Dom(seletor){
    this.element = document.querySelector(seletor);
}

//Posso fazer com prototype
Dom.prototype.ativo = function(classe){
    console.log(this);
    //this.element.classList.add(classe)
}
const li = {
    element: document.querySelector('li')
}

Dom.prototype.ativo.call(li, 'ativo');

//const ul = new Dom('ul');
//ul.ativo.call(li, 'ativo');
//console.log(ul.element);


//Arrays e Call
const frutas = ['Maça', 'Limão', 'Uva'];

Array.prototype.mostrarThis = function(){
    console.log(this)//o This é a propria Array
}

Array.prototype.pop.call(frutas);//.pop retira o ultimo item do array

//Array Like
const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    lenght: 3
}
//isso é um objt array like, qualquer metodo que seja retornado conseguirei
//interagir com os metodos de prototipo do array
const li1 = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li1, (item) => {
    return item.classList.contains('ativo');//retorna só os meus itens ativos
}); 

console.log(filtro);

console.log(li1);


//Apply vai receber uma lista em um array
const numeros = [50, 33, 80, 12, 29];
console.log(Math.max.apply(null, numeros));//retorna o maior valor do meu array

//Bind retorna uma nova função com o novo contexto do this 
const liBind = document.querySelectorAll('li');

const filtroBind = Array.prototype.filter.bind(liBind, (item) => {
    return item.classList.contains('ativo');//retorna só os meus itens ativos
}); 

console.log(filtroBind());

console.log(liBind);

//Argumentos e Bind
const carro = {
    marca: 'Ford',
    ano: 2018,
    acelerar: function(aceleracao, tempo) {
      return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
    }
}

const honda = {
    marca: 'Honda'
}

const Acelerarhonda = carro.acelerar.bind(honda);

console.log(Acelerarhonda(300,20));

//Argumentos Comuns
function imc(altura,peso){
    return peso / (altura*altura);
}

const imc80 = imc.bind(null, 1.80)
console.log(imc80(70));//21.6

//EXERCICIOS

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');

const total = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)

console.log(total);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function Criarelemento(tag, classe, conteudo){
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) : '';//se a classe não existir, não retorna nada
    conteudo ? elemento.innerHTML = conteudo : null;
    return elemento;
}

console.log(Criarelemento('h2', 'ativa', 'Olá Mundo!'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
   
const h1Titulo = Criarelemento.bind(null, 'h1', 'titulo');
const Curso = h1Titulo('Curso Javascript')
console.log(Curso);