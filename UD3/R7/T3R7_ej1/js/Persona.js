export default class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }
}