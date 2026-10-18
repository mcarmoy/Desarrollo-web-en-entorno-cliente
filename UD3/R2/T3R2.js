// Intersección: palabras que están en los dos arrays
function interseccion(a1, a2) {
    const resultado = [];

    for (let i = 0; i < a1.length; i++) {
        if (a2.includes(a1[i])) {
            resultado.push(a1[i]);
        }
    }

    return resultado;
}

// Unión: todas las palabras, sin repetir
function union(a1, a2) {
    const resultado = [];

    for (let i = 0; i < a1.length; i++) {
        if (!resultado.includes(a1[i])) {
            resultado.push(a1[i]);
        }
    }
    for (let i = 0; i < a2.length; i++) {
        if (!resultado.includes(a2[i])) {
            resultado.push(a2[i]);
        }
    }

    return resultado;
}

// Diferencia: palabras de a1 que NO están en a2
function diferencia(a1, a2) {
    const resultado = [];

    for (let i = 0; i < a1.length; i++) {
        if (!a2.includes(a1[i])) {
            resultado.push(a1[i]);
        }
    }

    return resultado;
}

// Rellena un array con enteros aleatorios entre 0 y 100
function generaArray(cantidad) {
    const resultado = [];

    for (let i = 0; i < cantidad; i++) {
        resultado.push(Math.floor(Math.random() * 101));
    }

    return resultado;
}

function minimo(array) {
    let min = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }

    return min;
}

function maximo(array) {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
}

function medio(array) {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }

    return suma / array.length;
}

function buscaPalabra() {
    const palabra = prompt("Escribe una palabra o cadena de texto:");

    if (palabra === null || palabra === "") {
        return;
    }

    const texto = document.getElementById("contenido").innerText.toLowerCase();

    if (texto.includes(palabra.toLowerCase())) {
        alert("La palabra \"" + palabra + "\" SÍ existe en el documento.");
    } else {
        alert("La palabra \"" + palabra + "\" NO existe en el documento.");
    }
}

// Ordenación de la burbuja: devuelve una COPIA ordenada de menor a mayor
function burbuja(array) {
    const copia = array.slice();

    for (let i = 0; i < copia.length - 1; i++) {
        for (let j = 0; j < copia.length - 1 - i; j++) {
            if (copia[j] > copia[j + 1]) {
                const temp = copia[j];
                copia[j] = copia[j + 1];
                copia[j + 1] = temp;
            }
        }
    }

    return copia;
}

// Elimina los duplicados: devuelve un array nuevo sin repetidos
function quitaDuplicados(array) {
    const resultado = [];

    for (let i = 0; i < array.length; i++) {
        if (!resultado.includes(array[i])) {
            resultado.push(array[i]);
        }
    }

    return resultado;
}

// Separa una cadena por comas y quita los espacios sobrantes de cada nombre
function separaNombres(cadena) {
    const partes = cadena.split(",");
    const nombres = [];

    for (let i = 0; i < partes.length; i++) {
        nombres.push(partes[i].trim());
    }

    return nombres;
}

// Separa la cadena en palabras ignorando espacios repetidos
function separaPalabras(cadena) {
    const partes = cadena.split(" ");
    const palabras = [];

    for (let i = 0; i < partes.length; i++) {
        if (partes[i] !== "") {
            palabras.push(partes[i]);
        }
    }

    return palabras;
}

// Devuelve una copia con las palabras en orden inverso
function invierteArray(array) {
    const resultado = [];

    for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i]);
    }

    return resultado;
}