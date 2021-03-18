const comidas = ['x-bacon','coca','batata'];

const ultimoItem = comidas.pop(); //pega o ultimo item

comidas.push('chocolate'); //add item na lista

//For Loop
for(var numero = 0; numero <= 10; numero++){
    console.log(numero);
}

//Arrays e Loop
var estacao = ['versão','primavera','outono','inverno']
for(var i = 0; i < estacao.length; i++){
    console.log(estacao[i]);
    if(estacao[i] === 'outono'){
        break;
    }
}

const roupas = ['sapato', 'saia', 'blusa', 'chinelo'];
roupas.forEach((item)=>{
    console.log(`${item} parabéns pela compra!`)
});

//EXERCICIOS

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

const anosGanhou = ['1959', '1962', '1970', '1994', '2002'];
console.log(anosGanhou);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

anosGanhou.forEach((item)=>{
    console.log(`O brasil ganhou a copa de ${item}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    if(frutas[i] === 'Pera'){
        break;
    }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimo = frutas[frutas.length - 1]
console.log(ultimo);
