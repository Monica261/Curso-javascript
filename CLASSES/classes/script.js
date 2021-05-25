//constructor function é responsavel por criação de objeto
function Button(text, background){
    this.text = text;
    this.background = background;
}

Button.prototype.element = function(){
    const btnelemento = document.createElement('button');
    btnelemento.innerText = this.text;
    btnelemento.style.background = this.background;
    return btnelemento;
    
}

const redButton = new Button('comprar', 'red');
console.log(redButton)

//Classes são syntactical sugar de construtor functions, sintaxe mais limpa

class Carro {
    constructor(modelo, background){
        this.modelo = modelo;
        this.background = background;
    }
    element(){
        const caracCarro = document.createElement('div');
        caracCarro.innerText = this.modelo;
        caracCarro.style.background = this.background;
        return caracCarro;
    }
    appendTo(target){//metodo pra colocar no body
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}

const ferrari = new Carro('ferrari', 'red');
console.log(ferrari.appendTo('body'))

