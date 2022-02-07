//nova forma, sintaxe curta em relação a function expression
const imagens = document.querySelectorAll('img');

imagens.forEach((item, index)=>{
    item.classList.add('ativo')
    console.log(index, item)
})

//sintaxe diferente caso o argumento seja apenas um

const p = document.querySelectorAll('p');
p.forEach(item =>
    console.log(item)
)