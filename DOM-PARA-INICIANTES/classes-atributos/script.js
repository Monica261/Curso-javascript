const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'teste');//->adiciona classe 
menu.classList.remove('teste');//->remove classe
menu.classList.toggle('azul');//->dependendo ele pode tanto remover quanto add

if(menu.classList.contains('azul')){
  menu.classList.add('possui-azul');
}else{
  console.log(alert('Não possui azul'));//ou menu.classList.add('nao-possui-azul');
}

console.log(menu.classList);
//////////////////////////////////////

//Como as pessoas faziam antigamente

menu.className = 'ativo';
//menu.className = += ' ativo'; -> se eu quiser add a class sem remover a que ja existe
console.log(menu);

/////////////////////////////////////
//outro tipo de item

const selectanimals = document.querySelector('.animais');
console.log(selectanimals.attributes['data-texto']);

/////////////////////////////////////

const imagem = document.querySelector('img');
const imgsrc = imagem.getAttribute('alt');//get pega o atributo

imagem.setAttribute('alt', 'é uma raposa')//set muda o atributo
console.log(imgsrc);

//////////////////////////////////////

const Possui = imagem.hasAttribute('alt');//verifica se possui um determinado atributo
console.log(Possui);

/////////////////////////////////////
//propriedades e methodos, algumas são Read Only

const carro = {
   portas: 4,
   andar:function(km){
      console.log(`Andou ${km}`);
   }
}

////////////////////////////////////
//EXERCICIOS:

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item)=>{
   item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item)=>{
   item.classList.remove('ativo');
});
// Verifique se as imagens possuem o atributo alt

const verifica = document.querySelectorAll('img');
 verifica.forEach((img)=>{
   console.log(img.hasAttribute('alt'));
 });

// Modifique o href do link externo no menu

const modifica = document.querySelector('a[href^="http"]');
modifica.setAttribute('href', 'https://www.midiasim.com.br/');

console.log(modifica);

////////////////////////////////////////////////