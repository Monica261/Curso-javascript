//Destruturing permite a desestruturação de arrays e objetos
const carro ={
  marca: 'Honda',
  ano: 2021
}

const {marca, ano} = carro;

console.log(marca, ano);

//Destruturing Objects
const cliente = {
  nome: 'Andre',
  compras: {
    digitais: {
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Video JS', 'Video HTML']
    },
    fisicas: {
      cadernos: ['Caderno 1']
    }
  }
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

//const {livros, videos} = cliente.compras.digitais;

//console.log(livros);
//console.log(videos);

//caso eu queira algo que esta no primeiro nivel e no adiante:
const {digitais, fisicas, digitais: {livros, videos}} = cliente.compras;

//Nome das variaveis
//É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:
const aluna = {
  nome: 'Mônica',
  plano: 'Vitalicio'
}

const {nome: nomeAluna, plano: planoAluna} = aluna;

console.log(`Nome: ${nomeAluna}, Plano: ${planoAluna}`);

//Valor inicial
//Caso a propriedade não exista o valor padrão dela será undefined. É possível modificar este valor no momento da desestruturação.
const programador = {
  nome: 'Mônica',
  linguagem: 'JS'
}

const {nome: nomeDev, linguagem: linguagemDev, email = 'test@test.com'} = programador;
console.log(nomeDev, linguagemDev, email);

//Destruturing arrays
//Para desestruturar array's você deve colocar as variáveis entre [] colchetes.
const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira, segunda, terceira] = frutas;

console.log(segunda);

//Declaração de variaveis
//A desestruturação pode servir para declararmos uma sequência de variáveis.

const [primeiro, segundo, terceiro] = ['Item 1', 'Item 2', 'Item 3']; 
console.log(terceiro);

//Argumento desestruturado
//Se uma função espera receber como argumento um objeto, podemos desestruturar ele no momento da declaração.

function handleKeyboard({key, keyCode}){
  console.log(key, keyCode);
}
document.addEventListener('keyup', handleKeyboard);

//EXERCICIOS
// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn);//getComputedStyle são os estilos computados pelo browser
const {background, margin, color} = btnStyles;
console.log(background, margin, color);

// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]
console.log(cursoInativo, cursoAtivo);

// Corrija o erro abaixo
const cachorro = {
  nome: 'Bob',
  raca: 'Labrador',
  cor: 'Amarelo'
}

const {cor: bobCor} = cachorro;
console.log(cachorro)
