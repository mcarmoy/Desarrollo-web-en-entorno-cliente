(function () {
    const tabla = document.getElementById("tablero");
    const mensaje = document.getElementById("mensaje");
    const celdas = [];
    const tablero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0]; // 0 = hueco

    // Dos posiciones son adyacentes si están en la misma fila o columna y a distancia 1
    function sonAdyacentes(a, b) {
        const filaA = Math.floor(a / 4);
        const colA = a % 4;
        const filaB = Math.floor(b / 4);
        const colB = b % 4;
        return Math.abs(filaA - filaB) + Math.abs(colA - colB) === 1;
    }

    function intercambiar(a, b) {
        const aux = tablero[a];
        tablero[a] = tablero[b];
        tablero[b] = aux;
    }

    function estaResuelto() {
        for (let i = 0; i < 15; i++) {
            if (tablero[i] !== i + 1) {
                return false;
            }
        }
        return true;
    }

    function dibujar() {
        for (let i = 0; i < 16; i++) {
            if (tablero[i] === 0) {
                celdas[i].style.backgroundImage = "none";
            } else {
                // La ficha n corresponde al trozo n-1 de la imagen
                const trozo = tablero[i] - 1;
                const filaTrozo = Math.floor(trozo / 4);
                const colTrozo = trozo % 4;
                celdas[i].style.backgroundImage = "url(./img/imagen.png)";
                celdas[i].style.backgroundPosition = (-colTrozo * 60) + "px " + (-filaTrozo * 60) + "px";
            }
        }
    }

    // Se mezcla haciendo movimientos válidos al azar (así siempre tiene solución)
    function mezclar() {
        do {
            for (let k = 0; k < 200; k++) {
                const hueco = tablero.indexOf(0);
                let i = Math.floor(Math.random() * 16);
                while (!sonAdyacentes(i, hueco)) {
                    i = Math.floor(Math.random() * 16);
                }
                intercambiar(i, hueco);
            }
        } while (estaResuelto());
    }

    function clicar(i) {
        if (estaResuelto()) {
            return;
        }
        const hueco = tablero.indexOf(0);
        if (sonAdyacentes(i, hueco)) {
            intercambiar(i, hueco);
            dibujar();
            if (estaResuelto()) {
                mensaje.textContent = "¡Resuelto!";
            }
        }
    }

    // Crear la tabla 4x4
    for (let i = 0; i < 4; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < 4; j++) {
            const posicion = i * 4 + j;
            const celda = document.createElement("td");
            celda.onclick = function () {
                clicar(posicion);
            };
            celdas.push(celda);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }

    mezclar();
    dibujar();
})()