const carros = ['Ferrari', 'Ford', 'Camaro'];
carros.forEach((item, index, array)=>{
  array[index] = 'Olá'
  console.log(item.toUpperCase(), index, array);
})

// Arrow Function

const li = document.querySelectorAll('li');

li.forEach((item, index) => {item.classList.add('ativa' + index)});

li.forEach((item)=>{
  item.classList.add('ativa');
})

//Modificar um array original
const comidas = ['lanche', 'pizza', 'refrigerante'];

comidas.forEach((item, index, array) => {
  array[index] = 'comidas ' + item;
});
console.log(comidas);

//[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(),
//porém ao invés de retornar undefined, retorna uma
//nova array com valores atualizados de acordo com o return de cada iteração.

const roupas = ['chinelo', 'blusa', 'short'];

const novaArray = roupas.map((item, index, array)=>{
  return item.toUpperCase();
})

console.log(novaArray);

//Uma Arrow Function de linha única
//e sem chaves irá retornar o valor após a fat arrow =>

const numero = [10, 20, 30, 40, 50];
const numerosX2 = numero.map(n => n*2);
console.log(numerosX2);

//Map com objetos 
//Map pode ser muito útil para interagirmos com uma
//array de objetos, onde desejamos isolar um valor único de cada objeto.

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min);
console.log(tempoAulas);

function Nomeaula(aula){
  return aula.nome;
}

const arrayNomeaulas = aulas.map(Nomeaula);
console.log(arrayNomeaulas);

//pegar uma variavel e atribuir uma função pra ela:
const nomeAulas = aula => aula.nome;
const arrayaula = aulas.map(nomeAulas);
console.log(arrayaula);

//[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array.
//Um valor especial existe nessa função de callback, ele é chamado de acumulador,
//mas é na verdade apenas o retorno da iteração anterior.

const semana = [10, 25, 30];

const reduceSemana = semana.reduce((acumulador, item)=>{
  console.log(acumulador, item)
  return acumulador + item;
}, 0)
console.log(reduceSemana);

//Maior valor com Reduce

const numeros = [10, 25, 60, 5, 35, 10];

const maiorNumero = numeros.reduce((anterior, atual)=>{
  if(anterior > atual){
    return anterior;
  }else{
    return atual;
  }
})

console.log(maiorNumero);

//Podemos retornar outros valores

const aulas1 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas1 = aulas1.reduce((acumulador, atual, index)=>{
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

console.log(listaAulas1);

//Existe também o método [].reduceRight(), a diferença é que este começa a
//iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

const cores = ['amarelo ', 'rosa ', 'nude '];

const coresRight = cores.reduceRight((acc, cores)=> acc + '' + cores);
console.log(coresRight);

//[].some(), se pelo menos um return da iteração for truthy, ele retorna true.

const temcores = cores.some((cores)=>{
  return cores === 'rosa ';
});
console.log(temcores);//true

function maiorque100(numero){
  return numero > 100;
}
const numeros1 = [0, 20, 200, 50, 90];
const Temmaior = numeros1.some(maiorque100);
console.log(Temmaior);//true

//[].every(), se todos os returns das iterações forem truthy,
//o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const numeros2 = [100, 60, 200, 50, 24];

const maiorque3 = numeros2.every(n => n > 3);
console.log(maiorque3);//true

//[].find(), retorna o valor atual da primeira iteração que retornar um valor truthy.
//Já o [].findIndex(), ao invés de retornar o valor, retorna o index deste valor na array.

const pessoas = ['Pedro', 'Maria', 'João'];
const Busca = pessoas.findIndex((pessoas)=>{
  return pessoas === 'João';
})
console.log(`Index: ${Busca}`);// retorna a posição do index, ou seja 2

const indexRoupas = roupas.find(item =>{
  return item;
})
console.log(indexRoupas);

//[].filter(), retorna uma array com
//a lista de valores que durante a sua iteração retornaram um valor truthy.

const arrayLimpa = roupas.filter((roupas)=>{
  return roupas;
})
console.log(arrayLimpa);

const conteudo = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
const ArrayConteudo = conteudo.filter((item)=>{
  return item;
})
console.log(ArrayConteudo);

//Filter em objeto

const aulas3 = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const aulasMaioresque15min = aulas.filter((aulas3)=>{
  return aulas3.min >= 15
}) 
console.log(aulasMaioresque15min);

//EXERCICIOS

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

console.log(arrayCursos);

const objetoCursos = arrayCursos.map((curso)=>{
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.aulas').innerText;
  const horas = curso.querySelector('.horas').innerText;
  return{
    titulo,
    descricao,
    aulas,
    horas,
  }
})
console.log(objetoCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros4 = [3, 44, 333, 23, 122, 322, 33];
const maioresque100 = numeros4.filter(n => n > 100);

console.log(maioresque100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const tembaixo = instrumentos.some((instrumentos)=>{
  return instrumentos === 'Baixo';
});
console.log(tembaixo);//true

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  },
  {
    item: 'Hamburguer',
    preco: 'R$ 10,00'
  }
]

const Valortotal = compras.reduce((acumulador, item)=>{
  const precoLimpo = +item.preco.replace('R$ ', '').replace(',', '.');

  return acumulador + precoLimpo;
}, 0)

console.log(Valortotal);
