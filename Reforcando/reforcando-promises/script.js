const promessa = new Promise(function(resolve, reject){
    const condicao = prompt('maior de 18? Responda com TRUE or False');
    if(condicao === 'true' || condicao === 'TRUE'){
        resolve('Maior de idade!');
    }else{
        reject(Error('vc é menor de idade!'));
    }
});

console.log(promessa);

//then() é um metodo ativado somente quando a Promise for resolvida
promessa.then((resolucao)=>{
    console.log(resolucao)//retorna o valor do meu resolve 'Maior de idade'
})