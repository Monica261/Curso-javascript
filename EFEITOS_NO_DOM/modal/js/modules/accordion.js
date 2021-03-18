export default function initAccordion() {
    const Accordionitem = document.querySelectorAll('[data-anime="accordion"] dt');
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

