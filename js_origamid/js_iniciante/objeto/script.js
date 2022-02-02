const pessoa = {
    nome: 'Mônica',
    idade: 22,
    formada: true
}
console.table(pessoa);

//metodos - propriedade que possui uma funçãoo no local do valor
 const lado = {
     lados: 4,
     area: function(lados){
        return lados * 4;
     },
     perimetro: function(lado){
         return this.lados * lado; //this faz referencia ao objeto
     }
 }
 console.log(lado.area(4))

 //objetos nativos do js - Math
console.log(Math.max(10, 303, 50, 80, 303.8));

//dot notation get - utilizar ponto para acessar proprioedade
var menu = {
    with: 800,
    height: 50,
    backgroundColor: '#84E'
}
 
menu.backgroundColor = '#000'; //posso mudar o valor

menu.esconder = function(){ //add metodos no objeto
    console.log('Escondi');
}

menu.padding = '2px 3px';

var bg = menu.backgroundColor;

//verificar se existe uma propriedade
console.log(menu.hasOwnProperty('with'));//true
console.log(menu.hasOwnProperty('color'));//false