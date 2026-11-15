(function () {
    window.onload = function () {
        const canvas = document.getElementById("canvas");

        // Crear la tabla de 100x100
        for (let i = 0; i < 100; i++) {
            const fila = document.createElement("tr");
            for (let j = 0; j < 100; j++) {
                fila.appendChild(document.createElement("td"));
            }
            canvas.appendChild(fila);
        }

        // Pintar al mover el ratón
        canvas.onmousemove = function (evento) {
            const celda = evento.target;
            if (celda.tagName === "TD") {
                if (evento.ctrlKey) {
                    celda.style.backgroundColor = "red";
                } else if (evento.shiftKey) {
                    celda.style.backgroundColor = "blue";
                }
            }
        };
    };
})()