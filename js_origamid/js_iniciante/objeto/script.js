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
     }
 }
 console.log(lado.area(4))

 //objetos nativos do js - Math
console.log(Math.max(10, 303, 50, 80, 303.8));

//dot notation get - utilizar ponto para acessar proprioedade
