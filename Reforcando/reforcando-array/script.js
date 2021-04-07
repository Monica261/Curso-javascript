const carros = new Array('Ford', 'Mustang', 'Lamborgini');
carros[3] = 'Ferrari';//add o item na posição que eu escolhi

//propriedades da array
console.log(carros.length);//me retorna o tamanho da array


//O Array From tranforma o obj que se parece com uma, em uma array
const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

console.log(arrayLi);

//Para transformar o obj em array eu preciso ter a propriedade Lenght

const nomes = {
    0: 'Mônica',
    1: 'Nathalia',
    2: 'Teste',
    length: 3
}

const objarray = Array.from(nomes);
console.log(objarray);

//isArray verifica se é um array ou não
console.log(Array.isArray(objarray));//true

//ARRAY.OF(), ARRAY() E NEW ARRAY()
//Verifica se o valor passado é uma array e retorna um valor booleano.
//A palavra chave new não é necessária para utilizar o construtor Array.

console.log(Array.of('oi', 'tchau', 50));


//lenght
const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length);//me retorna 3 pois essa outra array conta como item
console.log(frutas[0].length);//retorna o nº de letras que tem em Banana
console.log(frutas[2][0].length);//retorna o nº de letras do primeiro item do segundo array

//metodos modificadores, modificam a array original

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos.sort());//organiza a tabela por ordem alfa

const idades = [32,21,33,43,1,12,8];
console.log(idades.sort());//alinha a ordem do caracter

//unshit add elementos no inicio do array
//push add no final da array
const carros1 = ['Ford', 'Fiat', 'VW'];
console.log(carros1.unshift('Honda', 'Kia')); // 5
console.log(carros1.push('BMW', 'F1')); // 5

//shift tira o primeiro item da array e retorna ele
//pop remove o ultimo item da array e retorna ele

console.log(carros1.pop());//F1
console.log(carros1.shift());//honda

//reverse inverte a ordem da array
console.log(carros1.reverse());