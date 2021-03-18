const comida = 'lanche';
const bebida = new String('água');

//propriedades com o total de caracteres da String

console.log(comida.length);

const frase = 'Lanche e refrigerante é bom';
console.log(frase[4]);

//retorna o caracter de acordo com o index de (n)

const linguagem = 'JavaScript';
console.log(linguagem.charAt(linguagem.length - 1));//me retorna a ultima letra
console.log(linguagem.charAt);//me retorna a primeira letra

//concatenar string

const fruta = 'laranja';
const frase1 = 'a melhor fruta é ';

const fraseFinal = frase1.concat(fruta, '!!');

//includes procura na string, procura se existe e retorna True ou False

const listaFrutas = 'Manga, laranja, uva';
console.log(listaFrutas.includes(fruta));//true
console.log(fruta.includes(listaFrutas));//false

//termina com e começa com

console.log(fruta.startsWith('la'));//true
console.log(fruta.endsWith('ja'));//true

//retorna o valor de inicio e de final

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'taxa de camisas';

console.log(transacao3.slice(0, 4));
console.log(transacao1.slice(0, -2));

//retorna a posição que está o caracter

console.log(fruta.indexOf('n'));
console.log(fruta.lastIndexOf('j'));//retorna o ultimo

//aumenta o tamanho da String

const preco = 'R$ 99,90';
console.log(preco.padStart(20, '.'));

const listaPrecos = ['R$ 99,90', 'R$ 250,00', 'R$ 20,30'];
listaPrecos.forEach((item) => {
    console.log(item.padStart(10, '.'));
})

//repete o numero de vezes que vc passou

const nome = 'Mônica ';
console.log(nome.repeat(5));

//pode passar dois tipos de valores diferentes

let listaItens = 'Camiseta Boné Tênis Calça Casaco';
listaItens = listaItens.replace(/[ ]+/g, ', ');

//divide a lista e retorna um array

const ArrayLista = listaItens.split(', ');
console.log(ArrayLista);

//divide a lista e retorna um array com HTML

const htmlText = '<p>Olá Mundo</p><p>nunca desistir de mim</p>';
const htmlarray = htmlText.split('p');
const novoHTML = htmlarray.join('section');//uso pra juntar com uma nova tag

console.log(novoHTML);

//colocar o elemento em letra maiuscula ou minuscula

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo2.toLowerCase() === 'feminino');
console.log(sexo3.toUpperCase() === 'FEMININO');

//remove espaços em branco do inicio, do fim ou de ambos

const valorcoxinha = ' R$ 5,00 ';
//valor.trim(); // 'R$ 23.00'
//valor.trimStart(); // 'R$ 23.00   '
//valor.trimEnd(); // '  R$ 23.00'



//EXERCICIOS

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes2 = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento de Cliente',
        valor: 'R$ 49',
    },
];

let taxaTotal = 0;
let Recebimentototal = 0;
transacoes2.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '');//o + na frente de uma string, transforma ela em numero
    if (item.descricao.slice(0, 4) === 'Taxa') {
        taxaTotal = taxaTotal + numeroLimpo;
    }else if(item.descricao.slice(0, 11) === 'Recebimento'){
        Recebimentototal = Recebimentototal + numeroLimpo;
    }
})

console.log(taxaTotal);
console.log(Recebimentototal);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

let listatransportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

listatransportes = listatransportes.replace(/[ ]+/g, ',');

const Arraytransportes = listatransportes.split(';');
console.log(Arraytransportes);

// Substitua todos os span's por a's
const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

const htmlarray2 = html.split('span');
const novoHTML2 = htmlarray2.join('a');
console.log(novoHTML2);

//html = html.split('span').join('a'); -> metodo simples

// Retorne o último caracter da frase
const frase3 = 'Melhor do ano!';
console.log(frase3.charAt(frase3.length - 1));

// Retorne o total de taxas
const transacoes = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes.forEach((item)=>{
    item = item.toLowerCase();
    item = item.trim();
    item = item.slice(0, 4);

    if(item === 'taxa'){
        taxasTotal ++
    }
})

console.log(taxasTotal);



