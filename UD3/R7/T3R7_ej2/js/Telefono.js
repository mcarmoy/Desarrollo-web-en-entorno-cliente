export default class Telefono {
    constructor(numero) {
        this.numero = numero;
        this.llamadas = 0;
    }

    llamar() {
        this.llamadas++;
    }
}