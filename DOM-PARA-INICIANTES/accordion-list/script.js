//Add e removendo a classe '.ativo' de cada section 
function initTabNav() {//isola em uma função
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
    tabContent[0].classList.add('ativo');//define que o primeiro item aparece assim que carrega a pag

    if (tabMenu.length && tabContent.length) {//verifica se a class tabMenu e tabContent existe 
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
}
initTabNav();


function initAccordion() {
    const Accordionitem = document.querySelectorAll('.js-accordion dt');
    const ClassAtivo = 'ativo';//coloco a classe dentro de uma const

    if (Accordionitem.length) {
        Accordionitem[0].classList.add(ClassAtivo);//o primeiro começa aberto
        Accordionitem[0].nextElementSibling.classList.add(ClassAtivo);//o primeiro começa aberto


        function activeAccordion() {
            this.classList.toggle(ClassAtivo);
            this.nextElementSibling.classList.toggle(ClassAtivo);
        }
        Accordionitem.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

initAccordion();