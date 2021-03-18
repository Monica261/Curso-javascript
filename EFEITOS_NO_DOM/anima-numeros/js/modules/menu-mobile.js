import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
    const menuButton = document.querySelector('[data-menu="button"]');
    const menuLista = document.querySelector('[data-menu="lista"]');
    const eventos = ['click', 'touchstart'];

    if (menuButton) {
        function openMenu(event) {
            menuLista.classList.add('ativo');
            menuButton.classList.add('ativo');
            outsideClick(menuLista, eventos, () => {
                menuLista.classList.remove('ativo');
                menuButton.classList.remove('ativo');
            });
        }

        eventos.forEach(evento => menuButton.addEventListener(evento, openMenu));
    }
}



