//Add e removendo a classe '.ativo' de cada section 
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo');//define que o primeiro item aparece assim que carrega a pag

if(tabMenu.length && tabContent.length){//verifica se a class tabMenu e tabContent existe 
    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        });
        tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    });
}