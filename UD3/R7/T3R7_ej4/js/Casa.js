export default class Casa {
    constructor(calle, numero, codigoPostal) {
        this.calle = calle;
        this.numero = numero;
        this.codigoPostal = codigoPostal;

        console.log("Nueva casa en calle: " + this.calle + ", nº: " + this.numero + ", CP: " + this.codigoPostal + ".");
    }

    setNumero(numero) {
        this.numero = numero;
    }

    setCalle(calle) {
        this.calle = calle;
    }

    setCodigoPostal(codigo) {
        this.codigoPostal = codigo;
    }

    imprimeCalle() {
        return this.calle;
    }

    imprimeNumero() {
        return this.numero;
    }

    imprimeCodigoPostal() {
        return this.codigoPostal;
    }
}