//Protorype

function Prototipo(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const monica = new Prototipo('Mônica', 20)

console.log(Prototipo.prototype);//retorna o objeto

//Função Prototype

Prototipo.prototype.andar = function(){
    return this.nome + ' Pessoa andou';
}

//Construtores Nativos

const pais = 'Brasil';
const cidade = new String('São Paulo');

pais.charAt;//retorna a primeira letra

String.prototype;//se eu colocar assim no console, consigo vê os 
//metodos que já tem


//É possivel acessar a função do Prototype
const lista = document.querySelectorAll('li');

const listaArray = Array.prototype.slice.call(lista);//transforma em um array
const listaArray2 = Array.from(lista);

//Entenda oq está sendo retornado
 const carro ={
     marca: 'Ford',
     preco: 2000,
     andar(){
         return true;
     }
}

carro //obejto
carro.marca //String
carro.preco //Number
carro.acelerar //function
carro.acelerar() //boolean
carro.marca.charAt //function
carro.marca.charAt(0) //String

