//Arrays armazenam uma coleção de elementos

const instrumento = ['piano', 'violino', 'ukelele'];
const preco = [49, 50, 36, 24];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

//Construção de array

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[2] = 'Ford';//substitui oq está na posição 2
carros[7] = 'Ferrari';//posso add itens a tal posição

console.log(carros.length);//me retorna o tamanho da array

//ArrayFrom transforma um objeto que se parece com uma array em uma array real

const li = document.querySelectorAll('li');

const Arrayli = Array.from(li); //tranformou em array
console.log(Arrayli);

//Transformando objeto em array:

const comida = {
    0: 'Lanche',
    1: 'Açai',
    2: 'Pizza',
    length: 3,
}

const comidaLi = Array.from(comida);

//Verificar se é um array ou não com isArray

console.log(Array.isArray(comida));//false
console.log(Array.isArray(Arrayli));//true

//Formas de criar um array

console.log(Array.of('test', 'test2'));

//Propriedades e metodos do Prototype

const frutas = ['Banana', 'Perâ', ['Uva Roxa', 'Manga']];
console.log(frutas.length);//3 é o lenght total do array

console.log(frutas[0].length);//6 é o lenght da string Banana

console.log(frutas[2][0].length);//8 é o lenght da string Uva Roxa

//Metodos Modificadores

const instrumentos3 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos3.sort();//organiza por ordem alfabetica

const idades = [32,21,33,43,1,12,8];
idades.sort();//organiza por caracter

console.log(idades); // [1, 12, 21, 32, 33, 43, 8]
console.log(instrumentos3);

//Unshift adiciona elementos ao início da array e retorna o length da mesma.
//[].push() adiciona elementos ao final da array e retorna o length da mesma.

const carros2 = ['Ford', 'kia', 'bmw'];
carros2.unshift('Fiat', 'Mustang');
carros2.push('Camaro', 'GM');

console.log(carros2);

//[].shift() remove o primeiro elemento da array e retorna o mesmo.
//[].pop() remove o último elemento da array e retorna o mesmo.

console.log(carros2.pop());//removeu o GM de dentro do array e retornou ele
console.log(carros2.shift());//removeu o Fiat de dentro do array e retornou ele
console.log(carros2);

//[].reverse() inverte os itens da array e retorna a nova array.

console.log(carros2.reverse()); 

//splice insere no array os valores que vc passar a partir do index

console.log(carros2.splice(2, 1, 'Ferrari', 'fusca'));
console.log(carros2);

//[].COPYWITHIN() a partir do alvo, ele irá copiar a array começando do
//inicio até o final e vai preencher a mesma com essa cópia. 

console.log(['item 1', 'item 2', 'item 3', 'item 4',].copyWithin(2, 0, 2));
console.log(['item 7', 'item 5', 'item 3', 'item 4',].copyWithin(-1));

//[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

console.log(['um', 'dois', 'três', 'quatro'].fill('Manga', 1));//comece a partir do item 1

//[].concat() irá concatenar a array com o valor passado.
//Os métodos abaixo não modificam a array original, apenas retornam uma array modificada.

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
console.log(transporte1.concat(transporte2, 'Aeronave', 'Jato'));

//[].includes(valor) verifica se a array possui o valor e retorna true ou false.
//[].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.
//Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
console.log(linguagens.includes('java'));//false
console.log(linguagens.includes('js'));//true
console.log(linguagens.indexOf('css'));//1

//[].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro,
//este será utilizado durante a junção de cada item da array.

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

console.log(htmlString);

//[].slice(inicio, final) retorna os itens da array
//começando pelo início e indo até o valor de final.

console.log(linguagens.slice(3));
console.log(linguagens.slice(1, 4));

//é comum usar o Slice para clonar a array em uma variavel

const cloneLinguagem = linguagens.slice();
console.log(cloneLinguagem);



//EXERCICIOS

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array
const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();
comidas.push('Arroz');
comidas.unshift('Peixe', 'Batata');


console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort());
console.log(estudantes.reverse());
console.log(estudantes.includes('Joana'));//true
console.log(estudantes.includes('Juliana'));//false

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split('section').join('ul');
html = html.split('div').join('li');
console.log(html);

const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

var carrosOriginal = carros3.slice();
console.log(carrosOriginal)

console.log(carros3.pop());
console.log(carros3);