// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const somentImg = document.querySelectorAll('img[src^="img/imagem"]');
console.log(somentImg);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao h2');
console.log(animaisDescricao.innerHTML)

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');

console.log(ultimoP[ultimoP.length -1]) //tras o ultimo p baseado na quantidade