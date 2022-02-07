// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu');

menu.forEach((item)=>{
    item.classList.add('ativo')
    console.log(item)
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item)=>{
    item.classList.remove('ativo');
})


// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('imagem');

imagens.forEach((img)=>{
    const possuiAtributo = img.hasAttribute('alt')
    console.log(possuiAtributo)
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('[href^="https://"]')

linkExterno.setAttribute('href','https://www.g1.com.br')

console.log(linkExterno)
