import Buscaminas from "./Buscaminas.js"

(function () {
    const juego = new Buscaminas(300);   // 300 segundos (5 minutos) de tiempo límite

    while (juego.estado === "jugando") {
        juego.dibujar();

        const fila = prompt("Fila a descubrir (1 a 8):");
        if (fila === null) break;

        const columna = prompt("Columna a descubrir (1 a 8):");
        if (columna === null) break;

        juego.descubrir(parseInt(fila), parseInt(columna));
    }

    juego.dibujar();
})()