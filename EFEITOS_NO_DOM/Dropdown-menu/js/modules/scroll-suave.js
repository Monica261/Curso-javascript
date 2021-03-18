export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function HandleLinks(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        //Forma alternativa
        //const topo = section.offsetTop;
        //window.scroll({
        //    top:topo,
        //    behavior:'smooth',
        //});
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', HandleLinks);
    });
}
