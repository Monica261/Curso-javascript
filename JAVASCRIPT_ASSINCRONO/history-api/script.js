console.log(window.history);//mostra por quantos itens já navegamos atraves do
//lenght

console.log(window.history.back());//ele volta pra pág anterior

console.log(window.history.forward());//vai pra prox pág

//pushState eu posso colocar algo no estado do History, mudar a minha url
console.log(window.history.pushState(null, null, 'teste.html'));


//popState fica de olho no botão voltar ou ir pra frente, quando isso ocorrer
//ele é acionado

//se eu não modificar o pushState, o popState não funciona
window.addEventListener('popstate', ()=>{
    console.log('teste');
})

//Fetch e history
//deixando a navegação mais fluida sem precisar recarregar
const links = document.querySelectorAll('a');

links.forEach(link =>{
    link.addEventListener('click', handleClick)
})

function handleClick(event){
    event.preventDefault();
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url){
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    replaceContent(pageText);
}
fetchPage();

function replaceContent(newText){
    const newHTML = document.createElement('div');
    newHTML.innerHTML = newText;

    const oldContent = document.querySelector('.content');
    const newContent = newHTML.querySelector('.content');

    oldContent.innerHTML = newContent.innerHTML;
    document.title = newHTML.querySelector('title').innerText;
}

window.addEventListener('popstate',() =>{
    fetchPage(window.location.href)
})