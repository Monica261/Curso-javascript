(
    function () {
        "use strict";

        var cookieAlert = document.querySelector(".cookiealert");
        var acceptCookies = document.querySelector(".acceptcookies");
        var rejectCookies = document.querySelector('.rejectcookies');

        if (!cookieAlert) {
         return;
     }

    cookieAlert.offsetHeight; // Força o navegador a acionar o reflow (https://stackoverflow.com/a/39451131)

    
    // Mostra o alerta se não conseguirmos encontrar o cookie "acceptCookies"
    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }

    if(!getCookie('rejectCookies')){
        cookieAlert.classList.add('show');
    }

    
    // Ao clicar no botão concordar
    
    // cookie para lembrar a escolha do usuário e fechar o banner
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 365);
        cookieAlert.classList.remove("show");


        window.dispatchEvent(new Event("cookieAlertAccept"))
    });

    rejectCookies.addEventListener("click", function () {
        setCookie("rejectCookies", true, 365);
        cookieAlert.classList.remove("show");

        // despachar o evento de aceitação
        window.dispatchEvent(new Event("cookieAlertAccept"))
    });

    // Cookie funções do w3schools
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();
