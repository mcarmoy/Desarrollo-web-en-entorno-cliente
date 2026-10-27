import Colegio from "./Colegio.js"

(function () {
    const colegio1 = new Colegio("CEIP Rosalía", 4, 5);
    const colegio2 = new Colegio("IES Castelao", 10, 3);

    colegio1.mostrarAlumnos();

    colegio1.consultarNotaMedia(2);
    colegio1.modificarNotaMedia(2, 8.5);
    colegio1.consultarNotaMedia(2);

    colegio1.consultarNotaMedia(9);
    colegio1.modificarNotaMedia(1, 12);

    colegio2.consultarNotaMedia(0);
    colegio2.mostrarAlumnos();
})()