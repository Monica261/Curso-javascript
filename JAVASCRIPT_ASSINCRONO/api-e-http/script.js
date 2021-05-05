//HTTP
fetch('https://pokeapi.co/api/v2/pokemon/1/')
.then(r => r.json())
.then(pokemon =>{
    console.log(pokemon)
})

//url e method
const url = 'https://jsonplaceholder.typicode.com/posts/2';
const options = {
    //method: 'POST',//metodo pode ser PUT, DELETE, POST, GET e HEAD
    method: 'PUT',
    body: '{"title": "JavaScript"}',//é o corpo da postagem, os dados que eu estou enviando
    headers:{//indica o tipo de dado que eu estou enviando pro servidor
        "Content-Type": "application/json; charset=utf-8",
    }
}
fetch(url, options)//aqui eu passo os meus parametros
//.then(response => response.json())
//.then(json => console.log(json))
.then(response =>{
    console.log(response.headers.get('Content-Type'))
})

//headers é forma do servidor mandar informações para o browser e vice e versa

//CORS gerencia como deve ser o compartilhamento de recursos entre diferentes origens
const cors = 'https://www.google.com.br';
fetch(cors)
.then(res => res.text())
.then(text => console.log(text))

//eu consigo passar por cima do CORS utilizando um proxy
const proxy = 'https://cors-anywhere.herokuapp.com/https://www.google.com.br';
fetch(proxy)
.then(res => res.text())
.then(text => console.log(text))
