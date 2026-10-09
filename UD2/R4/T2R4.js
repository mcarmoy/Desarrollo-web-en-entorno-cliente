function aleatorioEntre0y1() {
    return Math.random().toFixed(2);
}

function aleatorioEntre(min, max) {
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function seno(grados) {
    return Math.sin(grados * Math.PI / 180).toFixed(3);
}

function coseno(grados) {
    return Math.cos(grados * Math.PI / 180).toFixed(3);
}

function tangente(grados) {
    return Math.tan(grados * Math.PI / 180).toFixed(3);
}

function hipotenusa(cateto1, cateto2) {
    return Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
}

function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

function resuelveEcuacion(a, b, c) {
    if (a === 0) {
        return "No es una ecuación de segundo grado (a no puede ser 0)";
    }

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        return "No tiene soluciones reales";
    } else if (discriminante === 0) {
        const x = -b / (2 * a);
        return "Una solución: x = " + x;
    } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return "Dos soluciones: x1 = " + x1 + " y x2 = " + x2;
    }
}

function seno(grados) {
    return Math.sin(grados * Math.PI / 180).toFixed(3);
}

function imagenAleatoria() {
    const imagenes = ["imagenes/imagen1.png", "imagenes/imagen2.webp", "imagenes/imagen3.png"];
    const posicion = Math.floor(Math.random() * 3);
    return imagenes[posicion];
}