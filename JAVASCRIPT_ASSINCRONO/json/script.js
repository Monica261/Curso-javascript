const dados = fetch('./dado.json');
dados.then(r => r.text())
//.then(json=>{
    //console.log(json[0].aula);//consigo acessar os dados do Json
//    json.forEach(materia=>{
        //console.log(materia.aula)//caso eu queira mostrar todas as aulas
        //console.log(materia)
//    })
//})

//JSON.parse() transforma um texto em obj
.then(jsonText =>{
    const jsonFinal = JSON.parse(jsonText);
    console.log(jsonFinal);
})

//JSON.stringify transforma um objt js em em uma string no formato JSON
const configuracoes = {
    player: 'Google',
    tempo: 25.5,
    aula: "Json"
}

const stringConfig = JSON.stringify(configuracoes);//mandando o objt como uma string
console.log(stringConfig);

//posso armazenar o meu objt no localStorage com stringify
localStorage.config = JSON.stringify(configuracoes);
