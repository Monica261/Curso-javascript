function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(4));

/*----------------------------------------*/
// função descobrir o ano que nasceu
//const ano = prompt('ano que vc nasceu? ')

function idadeCalc(ano){
    return 2022 - ano;
}

//console.log(`Sua idade é: ${idadeCalc(ano)}`)

/*----------------------------------------*/

// funções matematicas
function pi(){
    return 3.14;
}

const numero = prompt('numero para calculo com o pi? ');
const total =  console.log(pi() * numero);

/*----------------------------------------*/

// função calculo imc
const peso = prompt('qual o seu peso? ');
const altura = prompt('qual a sua altura? ');

function imcalc(peso, altura){
    const imc = peso / (altura ** 2)
    return imc
}
imcalc(peso, altura);

console.log(`Seu imc é de: ${imcalc(peso, altura)}`)

/*----------------------------------------*/

//Parenteses executa a função
function corFavorita(cor){
    if (cor === 'azul'){
        return 'céu azul';
    }else if (cor == 'verde'){
        return 'floresta'
    }else{
        return 'precisa escolher azul ou verde'
    }
}

corFavorita('verde');


/*----------------------------------------*/

//Argumentos podem ser funções -> callback são funções que ocorrem após um evento

addEventListener('scroll', function(){
    console.log('oi')
})


