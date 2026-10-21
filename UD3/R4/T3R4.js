// Ej1
function filterNumbersGreaterThan(numbers, filter) {
    const resultado = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < filter) {
            resultado.push(numbers[i]);
        }
    }

    return resultado;
}

// Ej2
function toHackerSpeak(text) {
    let resultado = "";

    for (let i = 0; i < text.length; i++) {
        const letra = text[i].toLowerCase();

        if (letra === "a") {
            resultado += "4";
        } else if (letra === "e") {
            resultado += "3";
        } else if (letra === "i") {
            resultado += "1";
        } else if (letra === "o") {
            resultado += "0";
        } else if (letra === "s") {
            resultado += "5";
        } else {
            resultado += text[i];
        }
    }

    return resultado;
}

//Ej3
function getFileExtension(file) {
    const posicion = file.lastIndexOf(".");

    if (posicion === -1) {
        return "";
    }

    return file.slice(posicion + 1);
}

//Ej4
function flatArray(arr) {
    const resultado = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            resultado.push(arr[i][j]);
        }
    }

    return resultado;
}

//Ej5
function removeDuplicates(arr) {
    const resultado = [];

    for (let i = 0; i < arr.length; i++) {
        if (!resultado.includes(arr[i])) {
            resultado.push(arr[i]);
        }
    }

    return resultado;
}

//Ej6
function countLetter(letter, text) {
    let contador = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === letter.toLowerCase()) {
            contador++;
        }
    }

    return contador;
}

//Ej7
function removeWords(str, words) {
    const palabras = str.split(" ");
    const resultado = [];

    // Pasamos las palabras a quitar a minúsculas
    const palabrasMinusculas = [];
    for (let i = 0; i < words.length; i++) {
        palabrasMinusculas.push(words[i].toLowerCase());
    }

    for (let i = 0; i < palabras.length; i++) {
        if (!palabrasMinusculas.includes(palabras[i].toLowerCase())) {
            resultado.push(palabras[i]);
        }
    }

    return resultado.join(" ");
}