export default function InitAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');

    if (sections.length) {
        const Windowmetade = window.innerHeight * 0.6;

        function Animascroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const Sectionvisible = sectionTop - Windowmetade < 0;
                if (Sectionvisible) {
                    section.classList.add('ativo');
                } else if(section.classList.contains('ativo')){
                    section.classList.remove('ativo');
                }
            })
        }

        Animascroll();

        window.addEventListener('scroll', Animascroll);
    }
}
