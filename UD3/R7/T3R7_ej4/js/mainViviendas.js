import Casa from "./Casa.js"

(function () {
    const casaA = new Casa("Garcia Prieto", 58, 15706);
    const casaB = new Casa("Camino Caneiro", 29, 32004);
    const casaC = new Casa("San Clemente", "s/n", 15705);

    console.log("El código postal de la casaA es: " + casaA.imprimeCodigoPostal() + ".");
    console.log("La calle de la casaC es: " + casaC.imprimeCalle() + ".");

    // Prueba de los métodos set
    casaB.setCalle("Rua Nova");
    casaB.setNumero(30);
    casaB.setCodigoPostal(32005);

    console.log("casaB tras los cambios: " + casaB.imprimeCalle() + ", nº: " + casaB.imprimeNumero() + ", CP: " + casaB.imprimeCodigoPostal() + ".");
})()