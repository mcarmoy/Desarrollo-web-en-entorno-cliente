(function () {
    const texto = document.getElementById("texto");
    const enlace = document.getElementById("enlace");

    const resto = " Con él se puede cambiar el contenido de la página, reaccionar a los clics del usuario, validar formularios y mucho más. Hoy en día también se usa en el servidor gracias a Node.js.";

    enlace.onclick = function () {
        texto.textContent = texto.textContent + resto;
        enlace.remove();
        return false;
    };
})()