//a promise é uma função construtora então precisamos do New pra iniciar
//uma promise pode ser tanto resolvida quanto rejeitada
//a promessa faz sentido quando vc usa um código assincrono dentro dela
const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        setTimeout(()=>{
            resolve({nome: 'Mônica', idade:21});
        }, 1000)
    } else {
        reject(Error('Um erro ocorreu na promessa'));
    }
});

//console.log(promessa);

//o then espera a promessa ser resolvida pra ser ativado
//promessa.then(resolucao => console.log(resolucao));

//é comum um encadeamento de then()
const retorno = promessa
.then(resolucao=>{
    console.log(resolucao);//nome: 'Mônica', idade:21
    resolucao.profissao = 'Programadora';
    return resolucao;
})
.then(resolucao=>{
    console.log(resolucao);
})
.catch(rejeitada=>{
    console.log(rejeitada);//o catch() serve pra quando a promise for rejeitada, caso a condição fosse false ia mostrar rejeitada no console
})//com o catch() mostra o erro que vc ta trabalhando
.finally(()=>{//o finally não recebe valor
    console.log('Acabou!');
})//finally() executa assim que a promise acabar independente do resultado

console.log(retorno);

//Promise.all vc consegue passar dentro dele um array com diferentes promessas
//retorna assim que todas as promessas forem resolvidas ou rejeitadas
const login = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('Login efetuado');
    }, 1000)
});
const dados = new Promise(resolve=>{
    setTimeout(()=>{
        resolve('Dados coletados');
    }, 1000)
})

const carregouTudo = Promise.all([login, dados]);
console.log(carregouTudo);

carregouTudo.then(resolvido=>{
    console.log(resolvido);
})

//race() tem a sintaxe parecida com a do all() mas ela espera qualquer um ser resolvido
const carregouTudo1 = Promise.race([login, dados]);
console.log(carregouTudo1);

carregouTudo1.then(resolvido=>{
    console.log(resolvido);
})
