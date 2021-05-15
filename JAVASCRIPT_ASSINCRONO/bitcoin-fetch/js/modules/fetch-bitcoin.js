export default function initBitcoinFetch(){
  
}

fetch('https://blockchain.info/ticker')
.then(r => r.json())
.then(json=>{
    console.log(json.BRL.sell);
    const btcPreco = document.querySelector('.btcPreco');
    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
}).catch(erro => {
    console.log(Error(erro));
})