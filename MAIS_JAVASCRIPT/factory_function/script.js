//Factory function são funcções que retorna obj sem precisar usa a palavra chave New
//pode ser usada sem a palavra new

function createButton(text){
    function element(){//função utilizada como metodo
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        return buttonElement;
    }
    return Object.freeze({//congelar e não permitir que escreva por cima
        element,
        text 
    })
}

const redButton = createButton('oi');
console.log(redButton.element());

redButton.text = 'Comprar';

//Podemos ter metodos e variaveis privadas

function secreto(){
    const nomeSecreto = 'Mônica';//posso usar ela e não expor no return

    return{
        nomeSecreto
    }
}

//Ice Factory
//Object.freeze() //serve para congelar todas as propriedades e objs utilizado no return

//macete pra conseguir usar em uma contructor function o New só se quiser
function Pessoa(nome) {
    if (!(this instanceof Pessoa))// ou (!new.target)
    return new Pessoa(nome);
    this.nome = nome;
  }
  
  Pessoa.prototype.andar = function() {
    return `${this.nome} andou`;
  }
  
  const designer = Pessoa('Mônica');
  
  console.log(designer)