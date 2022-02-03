//window - faz parte do DOM, é um objt que possui metodos e parametros
console.log(window.innerHeight)

console.log(window.innerWidth)

//window e document são os objts principais do DOM

const btn = document.querySelector('button');

function handleMouse(){
    document.body.classList.toggle('ativo')
}

btn.addEventListener('mouseover', handleMouse);
handleMouse()



// Retorne o url da página atual utilizando o objeto window
console.log(window.location);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiro = document.querySelector('.ativo');
console.log(primeiro)

// Retorne a linguagem do navegador
console.log(navigator.language);

if(navigator.language === 'pt-BR'){
    document.title = 'navegador Chrome'
}

// Retorne a largura da janela 
console.log(`A largura é: ${window.innerWidth}`)

////CONSUMINDO API
const btnDT = document.querySelector('.btnDT')
function handleClickbtn(){
    fetch('https://api.adviceslip.com/advice')//api conselhos
    .then(response => response.json())
    .then(conselho =>{
        const p = document.querySelector('p');
        document.querySelector('p').innerText = `${conselho.slip.id} - ${conselho.slip.advice}`
    })
}
handleClickbtn();

btnDT.addEventListener('click', handleClickbtn);

////////////////////////
const nome = prompt('nome');//api probabilidade atraves do nome

fetch(`https://api.nationalize.io/?name=${nome}`)
.then(r => r.json())
.then(pessoa =>{
    console.log(pessoa.name, pessoa.country[0].country_id, Math.round(pessoa.country[0].probability))
})
