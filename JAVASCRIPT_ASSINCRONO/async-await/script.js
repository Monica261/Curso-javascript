//Async eu consigo indicar que a minha função terá partes assincronas

//Await eu uso sempre que eu tiver uma promesa e quiser esperar ela ocorrer
//ele só vai na frente de partes que retornam promesas

async function puxarDados() {
    try {
        const responseDados = await fetch('./dados.json');
        const responseJSON = await responseDados.json();

        document.body.innerText = responseJSON.aula;
    }
    catch(erro){
        console.log(erro);
        console.log(Error('Ocorreu um erro'));//tratar o erro
    }
}

puxarDados();

//pra lidar com erros nós usamos o try e o catch

//com o Await nós conseguimos iniciar dois recursos ao mesmo tempo de APIS diferentes

async function dadosAsync(){
    const resDados = fetch('./dados.json');
    const resClientes = fetch('./clientes.json');

    const jsonDados = await (await resDados).json();
    const jsonClientes = await (await resClientes).json();

    console.log(jsonDados, jsonClientes);
}
dadosAsync();

//O await espera uma promesa ocorrer
async function espera(){
    await new Promise(resolve => {
        setTimeout(()=>{
            console.log('depois de 1s')
            resolve();
        }, 1000)
    })
    console.log('acabou');
}
espera();