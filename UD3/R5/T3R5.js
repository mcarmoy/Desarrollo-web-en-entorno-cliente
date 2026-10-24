// Crea un mapa del tesoro aleatorio de filas x columnas (entre 5 y 9)
function creaMapaTesoro(filas, columnas) {
    // Cada pista usa 2 dígitos (fila y columna), así que el máximo es 9x9
    if (!(filas >= 5 && filas <= 9 && columnas >= 5 && columnas <= 9)) {
        return null;
    }

    // 1. Matriz vacía
    const mapa = [];
    for (let f = 0; f < filas; f++) {
        mapa[f] = [];
        for (let c = 0; c < columnas; c++) {
            mapa[f][c] = 0;
        }
    }

    // 2. Camino de celdas distintas que empieza en (1,1) y acaba en el tesoro
    const totalCeldas = filas * columnas;
    const longitud = 3 + Math.floor(Math.random() * (totalCeldas - 2));
    const camino = [[1, 1]];

    while (camino.length < longitud) {
        const f = Math.floor(Math.random() * filas) + 1;
        const c = Math.floor(Math.random() * columnas) + 1;

        if (!camino.some(p => p[0] === f && p[1] === c)) {
            camino.push([f, c]);
        }
    }

    // 3. Cada celda del camino apunta a la siguiente
    for (let i = 0; i < camino.length - 1; i++) {
        const actual = camino[i];
        const siguiente = camino[i + 1];
        mapa[actual[0] - 1][actual[1] - 1] = siguiente[0] * 10 + siguiente[1];
    }

    // 4. La última celda es el tesoro: su valor son sus propias coordenadas
    const tesoro = camino[camino.length - 1];
    mapa[tesoro[0] - 1][tesoro[1] - 1] = tesoro[0] * 10 + tesoro[1];

    // 5. Las celdas que quedan son pistas falsas (nunca apuntan a sí mismas)
    for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
            if (mapa[f][c] === 0) {
                let vf;
                let vc;
                do {
                    vf = Math.floor(Math.random() * filas) + 1;
                    vc = Math.floor(Math.random() * columnas) + 1;
                } while (vf === f + 1 && vc === c + 1);

                mapa[f][c] = vf * 10 + vc;
            }
        }
    }

    return mapa;
}

// Sigue las pistas desde (1,1) y devuelve las celdas visitadas (null si no hay tesoro)
function buscaTesoro(mapa) {
    const visitadas = [];
    let fila = 1;
    let columna = 1;

    for (let pasos = 0; pasos < mapa.length * mapa[0].length; pasos++) {
        const valor = mapa[fila - 1][columna - 1];
        visitadas.push("Celda (" + fila + "," + columna + ") → pista " + valor);

        if (valor === fila * 10 + columna) {
            return visitadas;
        }

        fila = Math.floor(valor / 10);
        columna = valor % 10;
    }

    return null;
}