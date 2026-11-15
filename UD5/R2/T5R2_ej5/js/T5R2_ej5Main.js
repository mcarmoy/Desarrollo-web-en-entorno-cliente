(function () {
    const ficheros = document.getElementById("ficheros");
    const adjuntar = document.getElementById("adjuntar");
    const enviar = document.getElementById("enviar");

    adjuntar.onclick = function () {
        const input = document.createElement("input");
        input.type = "file";
        ficheros.appendChild(input);
    };

    enviar.onclick = function () {
        const inputs = ficheros.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].files.length > 0) {
                console.log("Fichero " + (i + 1) + ": " + inputs[i].files[0].name);
            } else {
                console.log("Fichero " + (i + 1) + ": (sin elegir)");
            }
        }
    };
})()