//Metodos e propriedades array - w3schools.com/js/js_array_methods.asp

const frutas = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(frutas.reverse())


for(var numero = 1; numero < 10; numero++){
    console.log(numero)
}

//break - condição de parada em loops
for(var item = 0; item < frutas.length; item++){
    console.log(frutas[item])
    if(frutas[item] === 'Lemon'){
        break;
    }
}

//forEach
frutas.forEach((item)=>{
    console.log(`${item}`)
})