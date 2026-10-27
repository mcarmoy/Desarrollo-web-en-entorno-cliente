import Punto from "./Punto.js"
import Recta from "./Recta.js"

(function () {
    const a = new Punto(1, 2);
    const b = new Punto(4, 6);

    console.log("Punto a: (" + a.x + ", " + a.y + ")");
    console.log("Punto b: (" + b.x + ", " + b.y + ")");

    const r = new Recta(a, b);

    console.log("Recta del punto (" + r.punto1.x + ", " + r.punto1.y + ") al punto (" + r.punto2.x + ", " + r.punto2.y + ")");
    console.log(r);
})()