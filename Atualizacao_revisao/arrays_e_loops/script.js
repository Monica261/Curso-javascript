//Array é um grupo de valores relacionados
//conseguimos guardar diferentes valores em uma única var
var frutas = ['melancia', 'manga', 'banana', 'pera'];
console.log(frutas[0]);//me retorna a fruta que está nessa posição

//O que mais utilizamos é metodos de um array
console.log(frutas.pop());//remove o ultimo item e retorna ele
console.log(frutas.push('maça'));//posso add um item e ele será add no final do array

console.log(frutas.length);//posso verificar quantos itens tem no array

//For Loop
//o loop é um jeito de fazer algo repetidamente 

    //defini nº      condição     incremento
for (let numero = 0; numero <= 10; numero ++){
  console.log(numero);
}

//o loop são sempre 3 partes: incio, condição e incremento

//Arrays e Loops
var carros = ['ferrari', 'bmw', 'mercedes', 'chevrolet', 'fiat'];
for (let item = 0; carros.length; item++){
  console.log(carros[item]);
  if(carros[item] === 'mercedes'){
    break;//posso usar a palavra break para parar o loop
  }
}

//ForEach é um metodo de array, é uma forma mais simples para loop
frutas.forEach((item, index)=>{
  console.log(item, index);
})

//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = ['1959', '1962', '1970', '1994', '2002'];
copa.forEach((item)=>{
  console.log(`O brasil ganhou a copa de ${item}`);
});

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas1 = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (let item = 0; frutas1.length; item++){
  console.log(frutas1[item]);
  if(frutas1[item] === 'Pera'){
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas1(frutas1.length - 1);
