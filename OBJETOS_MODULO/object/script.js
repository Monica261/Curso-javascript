const pessoa = new Object({
    nome: 'Mônica',
});
console.log(pessoa);

//Create Object
const carro = {
    rodas: 4,
    init(valor) {
        this.marca = valor;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}
const chevrolet = Object.create(carro);
chevrolet.init('Chevrolet');

const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar());

//Object assign vc passa um obj alvo
const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    freiar() {
        return 'freiou';
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}

Object.assign(carro, funcaoAutomovel);
console.log(carro);

//Object.defineProperties adiciona ao alvo novas propriedades
const Bike = {
    capacete: true,
}

Object.defineProperties(Bike, {
    rodas: {
        value: 2,
        configurable: false,//impede deletar a mudança de valor
        writable: true,//muda o valor
        enumerable: false,//define se a função é enumeravel ou não
    },
    pedal: {
        value: 1,
    },
})

Bike.rodas = 3;
console.log(Bike);

//Get e Set
const doces = {
    brigadeiro: true,
}

Object.defineProperties(doces, {
    bolo: {
        enumerable: true,
        get() {
            return 2;
        },
        set(valor) {
            this._bolo = valor * 4 + ' Total de massa';
        }
    }
})

console.log(doces);

//Object.getOwnPropertyDescriptors() lista todos os métodos e propriedades de um objeto
const innerHightConfig = Object.getOwnPropertyDescriptor(window, 'innerHight');

Object.getOwnPropertyNames(Array.prototype)

//Object.getPrototypeOf(), retorna o protótipo do objeto
const frutas = ['Banana'];

console.log(Object.getPrototypeOf(frutas));

//Object.is() verifica se os objts são iguais e retorna true ou false
const frutas1 = ['Cajú', 'Manga'];
const frutas2 = ['Cajú', 'Manga'];

console.log(Object.is(frutas1, frutas2));//false

//Object.freeze() congela o objeto e impede qualquer mudança de valor
//Object.seal() previne que vc add novas propriedades mas permite a mudança das anteriores

const carro2 = {
    marca: 'Ford',
    ano: 2018,
}

Object.freeze(carro2);//congelou e não consegue mudar
Object.seal(carro2);//impede que eu mude e não posso mais deletar ex: delete carro.marca;
//Object.preventExtensions() previne que vc add novas propriedades. Mas permite que vc delete antigas.

Object.preventExtensions(carro2);
carro2.portas = 4;

delete carro2.marca;

carro2.marca = 'Toyota'

console.log(Object.isExtensible());
console.log(Object.isFrozen());
console.log(Object.isSealed());

//Propriedades e metodos do prototipo
const frase = 'Isso é uma String';
console.log(frase.constructor);//String

//hasOwnProperty() verificar se ele possui a propriedade
const roupas = ['Blusa', 'Calça'];
console.log(Array.prototype.hasOwnProperty('map'));//true

//isPrototypeOf verificar se é prototipo daquilo
console.log(Array.prototype.isPrototypeOf(roupas)); //true pq o prototype de array é o prototipo frutas

//toString() esse metodo existe nos diferentes tipos de objeto
console.log(roupas.toString());

const somar = function (a, b) {
    return a + b;
}

somar(2, 2);
console.log(somar.toString());//me retorna a String com uma função
console.log(carro2.toString());//me retorna uma String dizendo que isso é um obj

//quero acessar a função direto do objeto, do construtor objeto toString()
console.log(Object.prototype.toString.call(frutas));//me retorna que é um obj do tipo Array
console.log(Object.prototype.toString.call(somar));//me retorna que é um obj do tipo função


//EXERCÍCIOS

// Crie uma função que verifique
// corretamente o tipo de dado
const lugares = function (paises) {
    paises = {
        Italia,
        Alemanhã,
    }
}
console.log((Object.prototype.toString.call(lugares)));
// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 4,
        enumerable: true,
    }
})

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
}
Object.freeze(configuracao)

//console.log(Object.isExtensible(configuracao));

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));
