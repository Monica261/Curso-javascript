//var estudante = false;
//var programadora = 5;

//    if(!estudante){
//        document.write('sim, sou estudante!');
//    } else if(!!programadora){
//        document.write('talvez uma hacker ;)');
//    } else{
//        document.write('não sou estudante :(');
//    }

//! transforma o sim em não e vice e versa, inverte o valor.
//!! nega o valor, imprimindo false

//var x = 'Ester é linda';

//document.write(x === 'Ester é linda');

//var condicional = (10 - 5) && (5 + 5);
//if(condicional){
//    console.log('verdadeiro');
//}else{
//    console.log('falso');
//}

// operador || retorna sempre o verdadeiro

var conta = (5 - 5) || (10 + 5) || (10 - 8);
console.log(conta);

const favorita = 'rosa';

switch(favorita){
    case 'azul':
        document.write('verde');
    break;

    case 'rosa':
        document.write('preto');
    break;

    case 'amarelo':
        document.write('roxo');
    break;

    default:
        document.write('vc não escolheu porra nenhuma');
    break;    
}