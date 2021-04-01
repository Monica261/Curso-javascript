const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    color(value){
        this.element.style.color = value;
    },
    height(value){
        this.element.style.height = value + 'px';
    },
    width(value){
        this.element.style.width = value + 'px';
    },
    border(value){
        this.element.style.border = value;
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px';
    },
    texto(value){
        this.element.innerText = value;
    },
    fontFamily(value){
        this.element.style.fontFamily = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem';
    },
    textTransform(value){
        this.element.style.textTransform = value;
    },
    fontWeight(value){
        this.element.style.fontWeight = value;
    }
}

function handleChange(event){
    const name = event.target.name;//pega o nome do campo
    const value = event.target.value;//pega o valor do campo

    handleStyle[name](value);//ativando a minha função
    saveValue(name, value);//ativando a função 
    showCSS();//ativando a minha function
}
controles.addEventListener('change', handleChange);

function showCSS(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

//Salvar o estilo do btn no localStorage:
function saveValue(name, value){
    localStorage[name] = value;
}

//Função para setar os valores
function setValue(){
    const properties = Object.keys(localStorage);//vai retornar um obj com todas as chaves
    properties.forEach((propertie)=>{
        handleStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie];//pega todas as propriedades do meu controle e me retorna uma por uma
    })
    showCSS();
}
setValue();

