const controles = document.querySelector('#controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);

const handleStyle = {
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    height(value){
        this.element.style.height = value + 'px';
    }
}

//funcão que verifica mudanças
function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    handleStyle[name](value);
    showCss();
    saveValues(name, value);
}

//exibir o css texto
function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

//salvar no localstorage
function saveValues(name, value){
    localStorage[name] = value;
}

//setar os valores
function setValues(){
    const properties = Object.keys(localStorage);//vai retornar um array com todas as chaves
    properties.forEach((propertie)=>{//pra cada propriedade eu posso definir o valor como está no localstorage
        handleStyle[propertie](localStorage[propertie]);//ativando as propriedades no localstorage
        controles.elements[propertie].value = localStorage[propertie];
    })
    showCss();
}
setValues();