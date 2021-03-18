var frutas = ['Banana', 'Maça', 'Manga'];

console.log(frutas[2]);

var ultimoitem = frutas.pop();// remove o ultimo item do array
console.log(ultimoitem);

var additem = frutas.push('chocolate');// add items ao array
console.log(additem);

////////////////////////////////////////////////////////////////////

for (var numero = 0; numero <= 10; numero++){
    console.log(numero);
}

//se vc não colocar o incremento 'numero++' ele entra em loop infinito

var i = 0;
while (i <= 100){
    console.log(i);
    i = i + 5;//vai pulando de 5 em 5
}

//////////////////////////////////////////////////////////////////

//For loop

var comidas = ['pizza', 'lanche', 'pastel', 'refrigerante'];

for(var item = 0; item < comidas.length; item++){
  console.log(comidas[item]);
   if (comidas[item] === 'lanche') {
        break; 
   }
}

/////////////////////////////////////////////////////////////////

//forEach

var lugares =['Tokyo', 'Itália', 'Sjc', 'SP'];

lugares.forEach(function(lugares, index) {
    console.log(lugares, index)
});

/////////////////////////////////////////////////////////////////

//EXERCICIOS:

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var copaBrasil = [1959, 1962, 1970, 1994, 2002];
console.log(copaBrasil);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
var ano = [1959, 1962, 1970, 1994, 2002];

for(var item = 0; item < ano.length; item++){
    console.log(`O brasil ganhou a copa de ${ano[item]}`);
}


// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if (frutas[i] === 'Pera'){
        break;
    }
}


// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];


var ultimo = frutas[frutas.length - 1]//puxo o ultimo item do array
console.log(ultimo);


