(function () {
    window.onload = function () {
        const canvas = document.getElementById("canvas");
        const borrarTodo = document.getElementById("borrarTodo");

        // Crear la tabla de 100x100
        for (let i = 0; i < 100; i++) {
            const fila = document.createElement("tr");
            for (let j = 0; j < 100; j++) {
                fila.appendChild(document.createElement("td"));
            }
            canvas.appendChild(fila);
        }

        // Pintar o borrar al mover el ratón
        canvas.onmousemove = function (evento) {
            const celda = evento.target;
            if (celda.tagName === "TD") {
                if (evento.buttons === 2) {
                    celda.style.backgroundColor = "";
                } else if (evento.ctrlKey) {
                    celda.style.backgroundColor = "red";
                } else if (evento.shiftKey) {
                    celda.style.backgroundColor = "blue";
                }
            }
        };

        // Que no salga el menú del botón derecho
        canvas.oncontextmenu = function () {
            return false;
        };

        // Borrar todo el canvas
        borrarTodo.onclick = function () {
            const celdas = canvas.getElementsByTagName("td");
            for (let i = 0; i < celdas.length; i++) {
                celdas[i].style.backgroundColor = "";
            }
        };
    };
})()