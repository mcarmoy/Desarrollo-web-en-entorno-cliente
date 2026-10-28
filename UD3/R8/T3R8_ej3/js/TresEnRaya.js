export default class TresEnRaya {
    constructor() {
        this.tablero = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        this.turno = "X";
        this.marcas = 0;
        this.ganador = null;
    }

    // Marca una casilla (fila y columna de 1 a 3) con la ficha del turno
    marcar(fila, columna) {
        if (this.estaTerminado()) {
            console.log("La partida ha terminado");
            return false;
        }

        if (fila < 1 || fila > 3 || columna < 1 || columna > 3) {
            console.log("Casilla no válida");
            return false;
        }

        if (this.tablero[fila - 1][columna - 1] !== "") {
            console.log("Esa casilla ya está ocupada");
            return false;
        }

        this.tablero[fila - 1][columna - 1] = this.turno;
        this.marcas++;

        if (this.hayTresEnLinea(this.turno)) {
            this.ganador = this.turno;
        } else {
            this.turno = (this.turno === "X") ? "O" : "X";
        }

        return true;
    }

    // Comprueba si la ficha indicada tiene tres en línea
    hayTresEnLinea(ficha) {
        const t = this.tablero;

        for (let i = 0; i < 3; i++) {
            if (t[i][0] === ficha && t[i][1] === ficha && t[i][2] === ficha) return true;
            if (t[0][i] === ficha && t[1][i] === ficha && t[2][i] === ficha) return true;
        }

        if (t[0][0] === ficha && t[1][1] === ficha && t[2][2] === ficha) return true;
        if (t[0][2] === ficha && t[1][1] === ficha && t[2][0] === ficha) return true;

        return false;
    }

    // Termina si alguien hace tres en línea o si los dos ya han puesto sus 3 marcas
    estaTerminado() {
        return this.ganador !== null || this.marcas === 6;
    }

    dibujar() {
        let texto = "";

        for (let f = 0; f < 3; f++) {
            for (let c = 0; c < 3; c++) {
                texto += (this.tablero[f][c] === "" ? "_" : this.tablero[f][c]) + " ";
            }
            texto += "\n";
        }

        console.log(texto);
    }
}