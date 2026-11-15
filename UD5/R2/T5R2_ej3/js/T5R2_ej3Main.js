(function () {
    const texto = document.getElementById("texto");
    const enlace = document.getElementById("enlace");

    const textoCorto = texto.textContent;
    const resto = " Con él se puede cambiar el contenido de la página, reaccionar a los clics del usuario, validar formularios y mucho más. Hoy en día también se usa en el servidor gracias a Node.js.";

    let completo = false;

    enlace.onclick = function () {
        if (completo === false) {
            texto.textContent = textoCorto + resto;
            enlace.textContent = "Ocultar Artículo";
            completo = true;
        } else {
            texto.textContent = textoCorto;
            enlace.textContent = "Ver Artículo Completo";
            completo = false;
        }
        return false;
    };
})()