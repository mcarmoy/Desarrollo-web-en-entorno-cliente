// Devuelve [fila, columna] (de 1 a 3) donde debe jugar la máquina
export default function elegirJugada(juego) {
    const yo = juego.turno;
    const rival = (yo === "X") ? "O" : "X";

    // 1. Si puedo ganar, gano. 2. Si el rival puede ganar, lo bloqueo.
    const prioridades = [yo, rival];

    for (let p = 0; p < prioridades.length; p++) {
        for (let f = 0; f < 3; f++) {
            for (let c = 0; c < 3; c++) {
                if (juego.tablero[f][c] === "") {
                    juego.tablero[f][c] = prioridades[p];       // pruebo la jugada
                    const gana = juego.hayTresEnLinea(prioridades[p]);
                    juego.tablero[f][c] = "";                   // la deshago

                    if (gana) {
                        return [f + 1, c + 1];
                    }
                }
            }
        }
    }

    // 3. Centro, 4. esquinas, 5. el resto
    const preferidas = [[1, 1], [0, 0], [0, 2], [2, 0], [2, 2], [0, 1], [1, 0], [1, 2], [2, 1]];

    for (let i = 0; i < preferidas.length; i++) {
        const f = preferidas[i][0];
        const c = preferidas[i][1];

        if (juego.tablero[f][c] === "") {
            return [f + 1, c + 1];
        }
    }
}