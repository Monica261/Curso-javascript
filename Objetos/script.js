//var monica = {
    //idade: 20,
    //profissao: 'programadora',
    //cidade: 'sjc',
   // possuifaculdade: 'true',
//}

//console.log(monica.idade, monica.cidade);
////////////////////////////////////////////////////////

var quadrado = {
    lados: 4,
    area(lado){
       return lado*lado; 
    },
    perimetro(lado){
        return this.lados*lado;// this faz referencia a 'isso' no caso o objeto em si
    },
    oito(lado){
        return 8;
    }
}

console.log(quadrado.lados);
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));
///////////////////////////////////////////////////////////

console.log(Math.random());//metodo
console.log(Math.PI);//propriedade
//console.table(quadrado) organiza o cod em tabela 
///////////////////////////////////////////////////////////

var menu = {
    height:50,
    width:800,
    backgroundColor:'yellow',
    metadeheight(){
       return this.height / 2;
    }
}

var bg = menu.backgroundColor;//get

menu.backgroundColor = '#000';//set

menu.color = 'blue';//posso add ao meu obj

menu.umacor = function() {
    console.log('pink');
}

//menu.hasOwnProperty('color') -> verifica se vc possui essa propriedade,
//dentro do seu código

//'Mônica'.length -> eu conto o total de caracter dentro de uma string
//////////////////////////////////////////////////////////


//EXERCICIOS:

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var eu = {
    nome: 'Mônica',
    sobrenome: 'Torres',
    idade: 20,
    estudante: true,
    pais: 'Brasil',
}

console.log(eu.nome, eu.sobrenome);
// Crie um método no objeto anterior, que mostre o seu nome completo

eu.nomecompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
    valor(){
        return this.preco * 3;
    }
  }

  //carro.preco = 3000; -> resposta do professor
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
  var cachorro = {
      nomecachorro: 'labrador',
      corcachorro: 'preto',
      idadecachorro: 10,
      latir(humano){
          if (humano === 'homem') {
              return 'au au au';
          }else{   
              return 'nada';
          }
      }
  }