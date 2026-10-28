export default class Puzzle {
    constructor(dimension) {
        this.dimension = dimension;
        this.movimientos = 0;
        this.tablero = [];

        // Tablero ordenado: 1, 2, 3... y el hueco (0) al final
        let numero = 1;
        for (let f = 0; f < dimension; f++) {
            this.tablero[f] = [];
            for (let c = 0; c < dimension; c++) {
                this.tablero[f][c] = numero++;
            }
        }
        this.filaHueco = dimension - 1;
        this.colHueco = dimension - 1;
        this.tablero[this.filaHueco][this.colHueco] = 0;

        // Se mezcla hasta que el tablero no quede ya resuelto
        do {
            this.mezclar();
        } while (this.estaResuelto());

        this.inicio = Date.now();   // el tiempo empieza a contar al crear el puzzle
    }

    // Mezcla con movimientos válidos al azar, así siempre se puede resolver
    mezclar() {
        const direcciones = ["arriba", "abajo", "izquierda", "derecha"];

        for (let i = 0; i < 200; i++) {
            this.moverHueco(direcciones[Math.floor(Math.random() * 4)]);
        }
    }

    // Mueve el hueco; devuelve false si el movimiento no es válido
    moverHueco(direccion) {
        let f = this.filaHueco;
        let c = this.colHueco;

        if (direccion === "arriba") f--;
        else if (direccion === "abajo") f++;
        else if (direccion === "izquierda") c--;
        else if (direccion === "derecha") c++;
        else return false;

        if (f < 0 || f >= this.dimension || c < 0 || c >= this.dimension) {
            return false;
        }

        this.tablero[this.filaHueco][this.colHueco] = this.tablero[f][c];
        this.tablero[f][c] = 0;
        this.filaHueco = f;
        this.colHueco = c;
        return true;
    }

    // Movimiento del jugador: cuenta los movimientos
    mover(direccion) {
        if (this.moverHueco(direccion)) {
            this.movimientos++;

            if (this.estaResuelto()) {
                const segundos = (Date.now() - this.inicio) / 1000;
                console.log("¡Resuelto en " + this.movimientos + " movimientos y " + segundos + " segundos!");
            }
        } else {
            console.log("Movimiento no válido: " + direccion);
        }
    }

    // Resuelto si está 1, 2, 3... en orden y el hueco al final
    estaResuelto() {
        let esperado = 1;

        for (let f = 0; f < this.dimension; f++) {
            for (let c = 0; c < this.dimension; c++) {
                if (f === this.dimension - 1 && c === this.dimension - 1) {
                    return this.tablero[f][c] === 0;
                }
                if (this.tablero[f][c] !== esperado) {
                    return false;
                }
                esperado++;
            }
        }
    }

    dibujar() {
        let texto = "";

        for (let f = 0; f < this.dimension; f++) {
            for (let c = 0; c < this.dimension; c++) {
                texto += (this.tablero[f][c] === 0 ? "_" : this.tablero[f][c]) + "  ";
            }
            texto += "\n";
        }

        console.log(texto + "Movimientos: " + this.movimientos);
    }
}