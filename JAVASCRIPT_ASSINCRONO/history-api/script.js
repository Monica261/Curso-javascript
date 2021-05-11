console.log(window.history);//mostra por quantos itens já navegamos atraves do
//lenght

//console.log(window.history.back());//ele volta pra pág anterior

//console.log(window.history.forward());

//pushState eu posso colocar algo no estado do History, mudar a minha url
//console.log(window.history.pushState(null, null, 'teste.html'));


//popState fica de olho no botão voltar ou ir pra frente, quando isso ocorrer
//ele é acionado

//se eu não modificar o pushState, o popState não funciona
//window.addEventListener('popstate', ()=>{
//    console.log('teste');
//})

//Fetch e history
const links = document.querySelectorAll('a');

links.forEach(link =>{
    link.addEventListener('click', handleClick)
})

function handleClick(event){
    event.preventDefault();
    fetchPage(event.target.href);
}

async function fetchPage(url){
    const pageResponse = await fetch(url);
    const pageText = await pageResponse.text();
    console.log(pageText);
}
fetchPage();