import TresEnRaya from "./TresEnRaya.js"

(function () {
    const juego = new TresEnRaya();

    while (!juego.estaTerminado()) {
        juego.dibujar();

        const fila = prompt("Turno de " + juego.turno + ". Fila (1 a 3):");
        if (fila === null) break;

        const columna = prompt("Turno de " + juego.turno + ". Columna (1 a 3):");
        if (columna === null) break;

        juego.marcar(parseInt(fila), parseInt(columna));
    }

    juego.dibujar();

    if (juego.ganador !== null) {
        console.log("¡Gana " + juego.ganador + "!");
    } else if (juego.estaTerminado()) {
        console.log("Empate: los dos han puesto sus 3 marcas");
    }
})()