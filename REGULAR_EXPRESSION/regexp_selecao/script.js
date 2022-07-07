const frase = 'JavaScript';
const regexp = /J/;

const novafrase = frase.replace(regexp, 'B');
console.log(novafrase);

//Literal
const code = /Java/;
console.log('JavaScript'.replace(code, 'Type'));

//Character class -> seleciona um ou outro
const caracter = /[ai]/gi;
console.log('JavaScript'.replace(regexp, 'u'));