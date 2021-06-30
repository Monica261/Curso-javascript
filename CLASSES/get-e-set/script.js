const button = {
    get tamanho(){
        return this._numero;
    },
    set tamanho(numero){
        this._numero = numero * 20;
    } 
}

console.log(button.tamanho = 20);

class Button {
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    get element(){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = this.text;
        buttonElement.style.color = this.color;
        return buttonElement;
    }
    set element(text){
        this.text = text;
    }
}

const purpleButton = new Button('Clique', 'purple');
console.log(purpleButton.element);