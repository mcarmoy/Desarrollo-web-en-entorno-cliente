import TresEnRaya from "./TresEnRaya.js"
import elegirJugada from "./Maquina.js"

(function () {
    const juego = new TresEnRaya();

    while (!juego.estaTerminado()) {
        juego.dibujar();

        if (juego.turno === "X") {
            const fila = prompt("Tu turno (X). Fila (1 a 3):");
            if (fila === null) break;

            const columna = prompt("Tu turno (X). Columna (1 a 3):");
            if (columna === null) break;

            juego.marcar(parseInt(fila), parseInt(columna));
        } else {
            const jugada = elegirJugada(juego);
            console.log("La máquina (O) juega en fila " + jugada[0] + ", columna " + jugada[1]);
            juego.marcar(jugada[0], jugada[1]);
        }
    }

    juego.dibujar();

    if (juego.ganador !== null) {
        console.log("¡Gana " + juego.ganador + "!");
    } else if (juego.estaTerminado()) {
        console.log("Empate: los dos han puesto sus 3 marcas");
    }
})()