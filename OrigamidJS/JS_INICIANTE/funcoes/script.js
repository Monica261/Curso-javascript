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