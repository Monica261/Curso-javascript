//CONSTRUCTOR FUNCTION:

function Button(text, background){
	this.text = text;
    this.background = background;
}

Button.prototype.element = function(){
	const buttonElement = document.createElement('button');
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    return buttonElement;
}

//CLASS:
//window.onload = () => {//para que o erro de appendChild não ocorra mais
class Button{
	constructor(text, background){
    	this.text = text;
        this.background = background;
    }
    element(){
   	const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.background = this.background;
        return buttonElement;
    }
    appendTo(target){//injetar no body o element
   	const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element());
        return targetElement;
    }
}


//const blueButton = new Button('Clique', 'blue');//essa const é um obj
//console.log(blueButton.appendTo('body'));
//}

//class é considerado uma syntetical sugar

//PROPRIEDADES:
//eu posso passar as opções direto

class Button{
	constructor(options){
    	this.options = options;
    }
}

const optionsPink = {
	backgroundColor: 'pink',
    text: 'Comprar',
    color: 'white'
}

const pinkButton = new Button(optionsPink);

//STATIC



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
