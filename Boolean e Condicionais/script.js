var condicional = (5 + 5) && (10+10);

if (condicional) {
    //console.log('True', condicional);
}else{
    //console.log('False');
}

//!! transforma o valor em True
//! transforma o valor em False

// || retorna o primeiro verdadeiro


var condicao = (5 + 5) || (5 / 5) || (5 - 5);

if (condicao) {
    //console.log('verdade', condicao);
} else {
    //console.log('falso');
}

//console.log(condicao)
var opcao = 8;
switch (opcao) {
    case 1:
        //console.log('Estude!');
    break;

    case 2:
        //console.log('Trabalhe!');
    break;
            
    case 3:
        //console.log('Ame!');
    break;        

    default:
        //console.log('Se divirta tambem!');
    break;
}

//Exercicio

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaidade = prompt('Qual a idade da Mônica?');
var idadebia = prompt('Qual a idade da Bia?');


if (minhaidade > idadebia) {
    document.write('É maior');
}else if(minhaidade === idadebia){
    document.write('É igual');
} else{
    document.write('É menor');
}

//R: É maior

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
if (expressao) {
    console.log('true', expressao);
}else{
    console.log('false', expressao);
}
//R: 3 true

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';//Truthy
var idade = 28;//Truthy
var possuiDoutorado = false;//Falsy
var empregoFuturo;//Falsy
var dinheiroNaConta = 0;//Falsy

if (dinheiroNaConta) {
    //console.log('true');
} else {
    //console.log('false');
}

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

//console.log(brasil || china); 
if (brasil > china) {
    console.log('Brasil tem mais habitantes');
}else{
    console.log('Brasil tem menos habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  //console.log('Verdadeiro');
} else {
  //console.log('Falso');
}
// R: falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  //console.log('Gato' && 'Cão');
} else {
  //console.log('Falso');
}
//R: Cão