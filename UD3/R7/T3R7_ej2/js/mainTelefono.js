import Telefono from "./Telefono.js"

(function () {
    const tel1 = new Telefono("600123456");
    const tel2 = new Telefono("611987654");

    console.log("Teléfono " + tel1.numero + " → llamadas: " + tel1.llamadas);

    tel1.llamar();
    tel1.llamar();
    tel1.llamar();
    tel2.llamar();

    console.log("Teléfono " + tel1.numero + " → llamadas: " + tel1.llamadas);
    console.log("Teléfono " + tel2.numero + " → llamadas: " + tel2.llamadas);
})()