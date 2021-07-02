//Quando declaro como function expression o código tem 
//que ir após ela para funcionar
const somar = function(a, b){
	return a + b;
}

document.write(somar(2, 2))

//é comum ver essa function utilizando arrow function
const multiplicar = (a, b) => a * b;
console.log(multiplicar(3, 2));

//sempre que eu declarar uma função ela vai entrar como
//metodo do objt window
//isso pode dar conflito com algum metodo já existente
function dividir(a, b){
	return a / b;
}
console.log(dividir(6, 2));

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));//99.99

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(()=>{//isola do window
	const fruta = 'uva';
    console.log(fruta);//uva
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

//essa função recebe um retorno que é ativado nela
active(function(){
	console.log('oi')
})

