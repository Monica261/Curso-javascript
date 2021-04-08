const promessa = new Promise((resolve, reject) => {
    let condicao = prompt('idade?');
    if (condicao >= 18) {
        resolve('Maior de idade!');
    } else {
        reject(Error('Menor de idade!'));
    }
});



//o then espera a promessa ser resolvida pra ser ativado
promessa.then(resolucao => console.log(resolucao));
