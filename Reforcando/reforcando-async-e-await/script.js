const doc = fetch('./clientes.json')
    .then(r => r.json())
    .then(body => {
        //console.log(corpo.cliente)
        const paragrafo = document.querySelector('.paragrafo')
        paragrafo.innerText = body.idade;
    })

//função async indica que existirá partes assincronas nela

//o await só vai na frente de partes que retornam promessas
async function puxarDados() {
    try {
        const dadosResponse = await fetch('./dados.json')
        const dadosJSON = await dadosResponse.json();

        console.log(dadosJSON.cor)
        document.body.innerText = dadosJSON.cor;
    }
    catch(erro){
        console.log(erro);
        console.log('ocorreu um erro');
    }
}
puxarDados();

//para lidar com erros pode utilizar o try e o catch

//Iniciar dois recursos de apis diferentes ao mesmo tempo 

async function iniciarSessao(){
    const responseClientes = await fetch('./clientes.json');
    const responseDados = await fetch('./dados.json');

    const dadoJson = await (await responseDados).json();
    const dadoClientes = await (await responseClientes).json();

    console.log(dadoJson, dadoClientes);
}
iniciarSessao();

//o await espera o resultado da promise ocorrer

