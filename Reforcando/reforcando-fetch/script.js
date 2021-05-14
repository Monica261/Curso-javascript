//Fetch API permite fazer req HTTP atraves do metodo fetch()

const arq = fetch('./arquivo.txt')
arq.then(resolucao => resolucao.text())
.then(body =>{
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
})
.finally(()=>{
    console.log('acabou')
})

//o Json vai transformar em arquivos de json, me retorna com chave e valor

const cep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(r => r.json())
.then(bodyCep=>{
    //console.log(bodyCep.localidade)
    const end = document.querySelector('.cep')
    end.innerText = (`${bodyCep.localidade} - ${bodyCep.uf}`);
})

//injetando style.css via fetch no body


const estilo = fetch('./style.css')
.then(res => res.text())
.then(styleBody =>{
    const conteudo = document.querySelector('.conteudo');
    const docStyle = document.createElement('style');
    docStyle.innerHTML = styleBody;
    conteudo.appendChild(docStyle);
})

const sobre = fetch('sobre.html')
.then(resp => resp.text())
.then(corpoReq =>{
    console.log(corpoReq)
    const content = document.createElement('div');
    content.innerHTML= corpoReq;
    const titulo = content.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;

})