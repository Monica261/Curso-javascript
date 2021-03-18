//'use strict' -> me mostra o erro no cód

//Variáveis declaradas no escopo pai da função,
//conseguem ser acessadas pelas funções.
var carro = 'Cadilac';

function meucarro() {
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
}

meucarro();
/////////////////////////////////////////////////////////////

 let estudando = true;
 if(true){
     console.log(estudando);
 }

/////////////////////////////////////////////////////////////

const data ={
    dia: 26,
    mes: 'novembro',
    ano: 1999
}

console.log(data.dia = 27);

////////////////////////////////////////////////////////////////

//EXERCICIOS

// Por qual motivo o código abaixo retorna com erros?

    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;

 document.write(`${cor} ${marca} ${portas}`);
  
  // Como corrigir o erro abaixo?
  const dois = 2;

  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  