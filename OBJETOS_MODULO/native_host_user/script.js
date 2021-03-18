//Construtores de objetos nativos
//Object
//String
//Array
//Function

//NodeList é um obejto do Host, ou seja, do Browser

//Objetos do Host:
//NodeList
//HTMLColection
//Element

//Obejct do Usuario
const Pessoa = {
    nome: 'Mônica'
}

//Verificar se existe

console.log(typeof Array.from !== 'undefined'); //verificar se é diferente de undefined

if(typeof Array.from !== 'undefined'){
    console.log('Existe');
}else{
    console.log('Não Existe');
}

//EXERCICIOS
// Liste 5 objetos nativos
Object
String
Array
Function
Number
Math

// Liste 5 objetos do browser
Window
history
document
HTMLCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox
if(typeof document.webkitHidden !== 'undefined'){
    console.log('Existe');
}else{
    console.log('Não Existe');
}