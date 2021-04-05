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