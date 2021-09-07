//Parametros
function perimetro(lado, totalLados = 4){//com ES6 eu posso definir aqui
  return lado * totalLados;
}

console.log(perimetro(4));

//Arguments
//é uma palavra chave que retorna um obj que se parece com uma array
//como todos os arugumentos que passei na função

function velocidade(tempo, altura){
  const argArray = Array.from(arguments);
  argArray.forEach((arg)=>{
    console.log(arg);
  })
  console.log(argArray);
  return tempo * altura;
}
console.log(velocidade(10, 5));

//Parametro rest
//É possível declararmos uma parâmetro utilizando ... na frente do mesmo. Assim todos os argumentos que passarmos na ativação da função, ficarão dentro do parâmetro. Só pode ter um rest por função.

function anunciarGanhadores(premio, ...ganhadores){
  ganhadores.forEach((ganhador)=>{
    console.log(`${ganhador} ganhou um ${premio}`)
  })
}

const ganhadores = ['Carla', 'Pedro', 'Marta'];
anunciarGanhadores('Carro', ...ganhadores);

//Operador Spread
//Assim como o rest, o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.

const frutas1 = ['banana', 'uva', 'morango'];
const legumes = ['cenoura', 'batata'];

const comidas1 = [...frutas1, 'Pizza', ...legumes]
console.log(comidas1);

const todosNumeros = [3,4,6,1,28,20,7,2];
const numeroMax = Math.max(...todosNumeros)
console.log(numeroMax);

//Transformar em Array
const btns = document.querySelectorAll('button');
const btnsArray = [...btns];

const frase = 'Isso é JavaScript';
const fraseArray = [...frase];

//EXERCICIOS
// Reescreva a função utilizando
// valores iniciais de parâmetros com ES6
function createButton(background = 'blue', color = 'red') {
  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;
} 

const redButton = createButton('black', 'tomato');

// Utilize o método push para inserir as frutas ao final de comidas.
const frutas = ['Banana', 'Uva', 'Morango'];
const comidas = ['Pizza', 'Batata'];
comidas.push(...frutas);
console.log(comidas);
