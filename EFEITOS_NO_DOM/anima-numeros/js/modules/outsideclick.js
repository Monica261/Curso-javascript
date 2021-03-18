export default function outsideClick(element, events, callback) {
    const html = document.documentElement;//estou selecionando meu HTML
    const outside = 'data-outside';

    if (!element.hasAttribute(outside)) {//se não tem o atributo eu quero que add, se tiver eu quero que não
        events.forEach(userEvent => {
            setTimeout(()=> html.addEventListener(userEvent, handleOutsideClick));
        })
        element.setAttribute(outside, '');//indicar que já cliquei
    }
    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            })//remover o evento
            callback();
        }
    }
}