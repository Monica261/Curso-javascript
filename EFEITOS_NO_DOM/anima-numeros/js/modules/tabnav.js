//Add e removendo a classe '.ativo' de cada section 
export default function initTabNav() {//isola em uma função
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add('ativo');//define que o primeiro item aparece assim que carrega a pag

    if (tabMenu.length && tabContent.length) {//verifica se a class tabMenu e tabContent existe 
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            tabContent[index].classList.add('ativo', direcao);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            })
        });
    }
}
