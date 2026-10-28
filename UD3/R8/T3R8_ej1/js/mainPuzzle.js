import Puzzle from "./Puzzle.js"

(function () {
    const puzzle = new Puzzle(3);

    while (!puzzle.estaResuelto()) {
        puzzle.dibujar();

        const direccion = prompt("Mueve el hueco: arriba, abajo, izquierda o derecha (Cancelar para salir)");

        if (direccion === null) {
            break;
        }

        puzzle.mover(direccion.toLowerCase());
    }

    puzzle.dibujar();
})()