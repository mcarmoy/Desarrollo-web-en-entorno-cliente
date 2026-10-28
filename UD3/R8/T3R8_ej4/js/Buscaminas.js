export default class Buscaminas {
    constructor(tiempoLimite) {
        this.tamano = 8;
        this.numMinas = 10;
        this.tiempoLimite = tiempoLimite;   // en segundos
        this.estado = "jugando";            // "jugando", "ganada" o "perdida"

        this.minas = [];       // true si hay mina
        this.vecinas = [];     // número de minas alrededor
        this.visibles = [];    // true si la casilla está descubierta

        for (let f = 0; f < this.tamano; f++) {
            this.minas[f] = [];
            this.vecinas[f] = [];
            this.visibles[f] = [];
            for (let c = 0; c < this.tamano; c++) {
                this.minas[f][c] = false;
                this.vecinas[f][c] = 0;
                this.visibles[f][c] = false;
            }
        }

        // Colocar las 10 minas en casillas distintas
        let colocadas = 0;
        while (colocadas < this.numMinas) {
            const f = Math.floor(Math.random() * this.tamano);
            const c = Math.floor(Math.random() * this.tamano);

            if (!this.minas[f][c]) {
                this.minas[f][c] = true;
                colocadas++;
            }
        }

        // Calcular el número de cada casilla
        for (let f = 0; f < this.tamano; f++) {
            for (let c = 0; c < this.tamano; c++) {
                this.vecinas[f][c] = this.contarVecinas(f, c);
            }
        }

        this.libresPorDescubrir = this.tamano * this.tamano - this.numMinas;
        this.inicio = Date.now();
    }

    // Cuenta las minas de las 8 casillas que rodean a (f, c)
    contarVecinas(f, c) {
        let total = 0;

        for (let df = -1; df <= 1; df++) {
            for (let dc = -1; dc <= 1; dc++) {
                const nf = f + df;
                const nc = c + dc;

                if (df === 0 && dc === 0) {
                    continue;   // la propia casilla no cuenta
                }

                if (nf >= 0 && nf < this.tamano && nc >= 0 && nc < this.tamano) {
                    if (this.minas[nf][nc]) {
                        total++;
                    }
                }
            }
        }

        return total;
    }

    // Descubre una casilla (fila y columna de 1 a 8)
    descubrir(fila, columna) {
        if (this.estado !== "jugando") {
            console.log("La partida ya ha terminado");
            return;
        }

        if ((Date.now() - this.inicio) / 1000 > this.tiempoLimite) {
            this.estado = "perdida";
            console.log("¡Se acabó el tiempo! Has perdido");
            return;
        }

        if (!(fila >= 1 && fila <= this.tamano && columna >= 1 && columna <= this.tamano)) {
            console.log("Casilla no válida");
            return;
        }

        const f = fila - 1;
        const c = columna - 1;

        if (this.visibles[f][c]) {
            console.log("Esa casilla ya está descubierta");
            return;
        }

        if (this.minas[f][c]) {
            this.estado = "perdida";
            console.log("¡BOOM! Había una mina. Has perdido");
            return;
        }

        this.descubrirCasilla(f, c);

        if (this.libresPorDescubrir === 0) {
            this.estado = "ganada";
            console.log("¡Has despejado todas las casillas! Has ganado");
        }
    }

    // Descubre la casilla y, si no tiene número, también sus vecinas (automáticamente)
    descubrirCasilla(f, c) {
        if (f < 0 || f >= this.tamano || c < 0 || c >= this.tamano) {
            return;
        }
        if (this.visibles[f][c]) {
            return;
        }

        this.visibles[f][c] = true;
        this.libresPorDescubrir--;

        if (this.vecinas[f][c] === 0) {
            for (let df = -1; df <= 1; df++) {
                for (let dc = -1; dc <= 1; dc++) {
                    this.descubrirCasilla(f + df, c + dc);
                }
            }
        }
    }

    tiempoRestante() {
        return Math.max(0, Math.round(this.tiempoLimite - (Date.now() - this.inicio) / 1000));
    }

    // # = tapada, . = vacía, número = minas alrededor, * = mina (solo al perder)
    dibujar() {
        let texto = "   1 2 3 4 5 6 7 8\n";

        for (let f = 0; f < this.tamano; f++) {
            texto += (f + 1) + "  ";
            for (let c = 0; c < this.tamano; c++) {
                if (this.visibles[f][c]) {
                    texto += (this.vecinas[f][c] === 0 ? "." : this.vecinas[f][c]) + " ";
                } else if (this.estado === "perdida" && this.minas[f][c]) {
                    texto += "* ";
                } else {
                    texto += "# ";
                }
            }
            texto += "\n";
        }

        console.log(texto + "Tiempo restante: " + this.tiempoRestante() + " s");
    }
}