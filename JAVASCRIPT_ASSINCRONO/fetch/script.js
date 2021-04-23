//O fetch faz requisições HTTP em um servidor local
const doc = fetch('./doc.txt');
console.log(doc);//me retorna uma promessa

doc.then(resolucao => {
    //console.log(resolucao.text());//me retorna uma promessa com o conteudo
    return resolucao.text();//exibe em formato de texto o corpo do meu doc.txt
}).then((body)=>{
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerText = body;
})

//Json
//https://viacep.com.br/ws/01001000/json/
const cep = fetch('https://viacep.com.br/ws/12220110/json/');
console.log(cep);

cep.then(resposta => {
    return resposta.json();//me retorna um obj com chave e valor
}).then((body)=>{
    console.log(body.logradouro);//posso selecionar o obj que eu quero que exiba
    const contexto = document.querySelector('.contexto');
    contexto.innerText = body.logradouro;
})

//CSS
const css = fetch('./style.css');
console.log(css);

css.then(r => r.text())
.then(body=>{
    const css = document.querySelector('.css');
    const style = document.createElement('style');
    style.innerHTML =  body;
    css.appendChild(style);//estou injetando o meu estilo
});

//Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e 
//inserir em uma div com o innerHTML. A partir dai podemos manipular esses
//dados como um DOM qualquer.

const sobre = fetch('./sobre.html');
const div = document.createElement('div');

sobre.then(res => res.text())
.then(body=>{
    div.innerHTML = body;
    const titulo = div.querySelector('h1');
    document.querySelector('h1').innerText = titulo.innerText;
    console.log(titulo);
})

//Blob

const imagem = fetch('./imagem.jpg');

imagem.then(resposta => resposta.blob())
.then(body => {
    const blobURL = URL.createObjectURL(body);
    const imgDom = document.querySelector('img');
    imgDom.src =  blobURL;
});

//.clone()

const clonado = fetch('https://viacep.com.br/ws/12220110/json/');

clonado.then(r => {
    const r2 = r.clone();
    r.text().then((text)=>{
        console.log(text);
    })
    r2.json().then((json)=>{
        console.log(json);
    })
})
.then(body=>{
    console.log(body);
})

//status
imagem.then(resposta =>{
    console.log(resposta.status)//200
    console.log(resposta.type)//me retorna o tipo da requisição
    console.log(resposta.url)//me retorna a url
    if(resposta.status === 404){
        console.log('arquivo não encontrado');
    }
})

