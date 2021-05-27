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
//This é a palavra chave, this faz referencia ao objeto construido a partir do New

class Carro {
    constructor(modelo, background, width, height){
        this.modelo = modelo;
        this.background = background;
        this.width = width;
        this.height = height;
    }
    element(){
        const caracCarro = document.createElement('div');
        caracCarro.innerText = this.modelo;
        caracCarro.style.background = this.background;
        caracCarro.style.width = this.width + 'px';
        caracCarro.style.height = this.height + 'px';
        return caracCarro;
    }
    appendTo(target){//metodo pra colocar no body
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
    static purpleCar(text){//retorna a criação da propria classe,com algo pré passado
        return new Carro(text, 'blue', 90, 70)
    }
}

const carroPurple = Carro.purpleCar('Ford');
console.log(carroPurple);

const ferrari = new Carro('ferrari', 'red', 40, 40);
console.log(ferrari.appendTo('body'))

//Uma propriedade pode ter qualquer valor

class Fruta{
    constructor(options){
        this.options = options;
    }
    static createButton(text, background){
        const btn = document.createElement('button');
        btn.innerText = text;//não usa 'this' pois é um param de dentro da minha função
        btn.style.backgroundColor = background;
        return btn;
    }
}

const uva = new Fruta({
    color: 'purple',
    text: 'uva'
})

const blueButtonStatic = Fruta.createButton('Comprar', 'blue');
console.log(blueButtonStatic);
//Static cria um metodo dentro da função construtora 